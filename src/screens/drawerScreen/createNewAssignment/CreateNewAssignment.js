import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {color, fonts} from '../../../constants/theme';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import AssingmentFile from '../../../assets/images/assignment_file.svg';
import {createNewAssignmentStyle} from './createNewAssignmentStyle';
import ClassBook from '../../../assets/images/class_book.svg';
import TaskIcon from '../../../assets/images/task_icon.svg';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import CalendarIcon from '../../../assets/images/calendar_icon.svg';
import SimpleCalendarModal from '../../../components/modals/SimpleCalendarModal';
import {useDispatch, useSelector} from 'react-redux';
import EndCalendarModal from '../../../components/modals/EndCalendarModal';
import StudentSelectionModal from '../../../components/modals/StudentSelectionModal';
import {addAssignment} from '../../../service/api/assignmentApi';
import ClassModal from '../../../components/modals/ClassModal';
import CreditModal from '../../../components/modals/CreditModal';
import TaskModal from '../../../components/modals/TaskModal';
import Loader from '../../../utils/Loader';
import {
  selectedRadioButton,
  selectedRadioTask,
} from '../../../redux/slice/checkBoxSlice';
import {
  selectedEndDate,
  selectedStartDate,
} from '../../../redux/slice/calendarSlice';
import {toast} from '../../../service/ToastMessage';
import {handleInputValidation} from '../../../utils/HelperFunction';

const CreateNewAssignment = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);
  const [creditOpen, setCreditOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {startDate, endDate} = useSelector(state => state.calendar);
  const {radioSelected} = useSelector(state => state.checkbox);
  const {radioSelectedTask} = useSelector(state => state.checkbox);
  const {creditAmount} = useSelector(state => state.checkbox);
  const [assignment, setAssignment] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedRadioButton(null));
    dispatch(selectedRadioTask(null));
    dispatch(selectedStartDate(null));
    dispatch(selectedEndDate(null));
  }, []);

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

  const handleTaskOpen = () => {
    setTaskOpen(true);
  };

  const handleTaskClose = () => {
    setTaskOpen(false);
  };

  // credit Open

  const isCreditOpen = () => {
    setCreditOpen(true);
  };

  const isCreditClose = () => {
    setCreditOpen(false);
  };

  // Add Assignment

  const handleAddAssignment = async () => {
    const query = {
      assignment_name: assignment,
      start_date: startDate,
      due_date_time: endDate,
    };
    if (radioSelected?.id) {
      (query.class_id = radioSelected?.id),
        (query.is_assigned = true),
        (query.credit_limit = creditAmount);
    }
    if (radioSelectedTask?.id) {
      query.task_id = radioSelectedTask?.id;
    }
    if (!query.assignment_name || !query.start_date || !query.due_date_time) {
      toast({
        type: 'error',
        text1: 'Please Select All the mandatory Field One',
      });
    } else {
      try {
        setLoading(true);
        const data = await addAssignment({query});
        navigation.navigate('My Assignments');
        setLoading(false);
      } catch (error) {
        console.log('error', error.response);
        setLoading(false);
        toast({type: 'error', text1: 'Please Select All the mandatory Field'});
      }
    }
  };

  const handleCreditOpen = () => {
    if (radioSelected !== null) {
      handleClassClose();
      setCreditOpen(true);
    } else {
      handleClassClose();
      toast({type: 'error', text1: 'Please Select the Class'});
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.white,
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(15),
      }}>
      <Loader loading={loading} />
      <SimpleCalendarModal open={open} closeModal={handleClose} />
      <EndCalendarModal open={endOpen} closeModal={handleEndClose} />
      <TaskModal open={taskOpen} closeModal={handleTaskClose} />
      <ClassModal
        open={classOpen}
        closeModal={handleClassClose}
        handleCreditOpen={handleCreditOpen}
      />
      <CreditModal open={creditOpen} closeModal={isCreditClose} />
      <View style={createNewAssignmentStyle.assignmentName}>
        <View style={createNewAssignmentStyle.assignmentLogo}>
          <AssingmentFile />
        </View>
        <TextInput
          value={assignment}
          onChangeText={val =>
            handleInputValidation({
              newValue: val,
              limit: 35,
              error: 'Assignment Name',
              setValue: setAssignment,
            })
          }
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
        <TouchableOpacity
          onPress={handleClassOpen}
          style={createNewAssignmentStyle.assignmentName}>
          <View style={createNewAssignmentStyle.assignmentLogo}>
            <ClassBook />
          </View>
          <TextInput
            // value={radioSelected?radioSelected.showName:"Assign To Class"}
            // value={}
            editable={false}
            placeholderTextColor="#878787"
            placeholder={
              radioSelected ? radioSelected.showName : 'Assign To Class'
            }
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
        <TouchableOpacity
          onPress={handleTaskOpen}
          style={createNewAssignmentStyle.assignmentName}>
          <View style={createNewAssignmentStyle.assignmentLogo}>
            <TaskIcon />
          </View>
          <TextInput
            editable={false}
            placeholderTextColor="#878787"
            placeholder={
              radioSelectedTask ? radioSelectedTask.showName : 'Assign Task'
            }
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
        <Mainbutton
          text="Create Assignment"
          width={280}
          action={handleAddAssignment}
        />
      </View>
    </View>
  );
};

export default CreateNewAssignment;
