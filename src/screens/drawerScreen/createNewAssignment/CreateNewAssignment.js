import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {color, fonts} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import AssingmentFile from '../../../assets/images/assignment_file.svg';
import {createNewAssignmentStyle} from './createNewAssignmentStyle';
import ClassBook from '../../../assets/images/class_book.svg';
import TaskIcon from '../../../assets/images/task_icon.svg';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import CalendarIcon from '../../../assets/images/calendar_icon.svg';
import SimpleCalendarModal from '../../../components/modals/SimpleCalendarModal';
import {useSelector} from 'react-redux';
import EndCalendarModal from '../../../components/modals/EndCalendarModal';
import StudentSelectionModal from '../../../components/modals/StudentSelectionModal';
import { addAssignment } from '../../../service/api/assignmentApi';

const CreateNewAssignment = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false)
  const {startDate, endDate} = useSelector(state => state.calendar);
  const{selectedValue} = useSelector(state=>state.checkbox)
  const [assignment,setAssignment] = useState("")
  // Funciton for Start Date Modal



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // End Date
  const handleEndOpen = () => {
    setEndOpen(true);
  };

  const handleEndClose = () => {
    setEndOpen(false);
  };

  // Handle Class Popup
  const handleClassOpen = () => {
    setClassOpen(true);
  };

  const handleClassClose = () => {
    setClassOpen(false);
  };

// Add Assignment

const handleAddAssignment = async()=>{
  const query = {
    assignment_name:assignment,
    start_date:startDate,
    due_date_time:endDate,
  }
  try {
  await addAssignment({query})
  navigation.navigate("My Assignments")
  } catch (error) {
    console.log("error",error)
  }
}



  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.white,
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(15),
      }}>
      <SimpleCalendarModal open={open} closeModal={handleClose} />
      <EndCalendarModal open={endOpen} closeModal={handleEndClose} />
      <StudentSelectionModal open={classOpen} closeModal={handleClassClose}/>
      <View style={createNewAssignmentStyle.assignmentName}>
        <View style={createNewAssignmentStyle.assignmentLogo}>
          <AssingmentFile />
        </View>
        <TextInput
          value={assignment}
          onChangeText={(val)=>setAssignment(val)}
          placeholderTextColor="#878787"
          placeholder="Enter Assignment Name"
          style={createNewAssignmentStyle.input}
        />
      </View>
      <View style={createNewAssignmentStyle.dateView}>
        <Text style={createNewAssignmentStyle.dateheading}>Start Date</Text>
        <TouchableOpacity
          onPress={handleOpen}
          style={createNewAssignmentStyle.calendarView}>
          <CalendarIcon />
          <Text style={createNewAssignmentStyle.date}>
            {startDate ? startDate : 'DD / MM / YYYY'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={createNewAssignmentStyle.dateView}>
        <Text style={createNewAssignmentStyle.dateheading}>Due Date</Text>
        <TouchableOpacity
          onPress={handleEndOpen}
          style={createNewAssignmentStyle.calendarView}>
          <CalendarIcon />
          <Text style={createNewAssignmentStyle.date}>
            {endDate ? endDate : 'DD / MM / YYYY'}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={handleClassOpen} style={createNewAssignmentStyle.assignmentName}>
          <View style={createNewAssignmentStyle.assignmentLogo}>
            <ClassBook />
          </View>
          <TextInput
            editable={false}
            placeholderTextColor="#878787"
            placeholder="Assign To Class"
            style={createNewAssignmentStyle.input}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{color: color.darkPink, fontFamily: fonts.regular}}>
            (Optional)
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={createNewAssignmentStyle.assignmentName}>
          <View style={createNewAssignmentStyle.assignmentLogo}>
            <TaskIcon />
          </View>
          <TextInput
            editable={false}
            placeholderTextColor="#878787"
            placeholder="Assign Task"
            style={createNewAssignmentStyle.input}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{color: color.darkPink, fontFamily: fonts.regular}}>
            (Optional)
          </Text>
        </View>
      </View>
      <View style={{marginTop: verticalScale(5)}}>
        <Mainbutton text="Create Assignment" width={280} action={handleAddAssignment} />
      </View>
    </View>
  );
};

export default CreateNewAssignment;
