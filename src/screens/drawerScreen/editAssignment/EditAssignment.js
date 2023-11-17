import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {studentAssignmentDetailStyle} from './studentAssignmentDetailStyle';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import StudentSelectionModal from '../../../components/modals/StudentSelectionModal';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {editAssignmentStyle} from './editAssignmentStyle';
import EditBlack from '../../../assets/images/edit_black.svg';
import Coin from '../../../assets/images/coin.svg';
import Calendar from '../../../assets/images/calendar_icon.svg';
import Dropdown from '../../../assets/images/dropdown.svg';
import SimpleCalendarModal from '../../../components/modals/SimpleCalendarModal';
import EndCalendarModal from '../../../components/modals/EndCalendarModal';
import {useSelector} from 'react-redux';
import TaskSelectedModal from '../../../components/modals/TaskSelectedModal';
import TaskModal from '../../../components/modals/TaskModal';
import {editAssignment} from '../../../service/api/assignmentApi';
import Loader from '../../../utils/Loader';

const EditAssignment = ({route, navigation}) => {
  const {
    params: {item},
  } = route;
  const [open, setOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [assignment, setAssignment] = useState(item?.show_name);
  const [amount, setAmount] = useState(
    item.credits_for_all_students
      ? item?.credits_for_all_students.toString()
      : null,
  );

  const {startDate, endDate} = useSelector(state => state.calendar);
  const {radioSelected} = useSelector(state => state.checkbox);
  const {radioSelectedTask} = useSelector(state => state.checkbox);
  const properStartDate = item.start_date ? item.start_date.split('T') : null;
  const properDueDate = item.due_date_time
    ? item?.due_date_time?.split('T')
    : null;

  console.log('rjeruioeur', radioSelectedTask);

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

  // Handle Task Popup
  const handleTaskOpen = () => {
    console.log('khul gya');
    setTaskOpen(true);
  };

  const handleTaskClose = () => {
    setTaskOpen(false);
  };

  // handleEdit

  const handleEditAssignment = async () => {
    const query = {
      assignment_name: assignment,
      assignment_id: item.id,
      task_id: radioSelectedTask.id,
      start_date: startDate,
      due_date_time: endDate,
      credit_limit: amount,
      is_assigned: true,
    };
    try {
      setLoading(true);
      const data = await editAssignment({query});
      navigation.navigate('All Assignment',{screen:"My Assignments"});
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  return (
    <View style={editAssignmentStyle.editAssignmentMain}>
      <Loader loading={loading} />
      <SimpleCalendarModal open={open} closeModal={handleClose} />
      <EndCalendarModal open={endOpen} closeModal={handleEndClose} />
      <TaskModal item={item} open={taskOpen} closeModal={handleTaskClose} />
      <View style={editAssignmentStyle.editAssignmentView}>
        <View style={editAssignmentStyle.editAssignmentBox}>
          <Text style={editAssignmentStyle.editAssignmentLabel}>
            Assignment Name
          </Text>
          <View style={editAssignmentStyle.editBottomView}>
            <TextInput
              value={assignment}
              onChangeText={val => setAssignment(val)}
              style={editAssignmentStyle.editAssignmentInput}
            />
            <EditBlack />
          </View>
        </View>
        <View style={editAssignmentStyle.editAssignmentBox}>
          <Text style={editAssignmentStyle.editAssignmentLabel}>
            Total Credit Assigned
          </Text>
          <View style={editAssignmentStyle.editBottomView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Coin />
              <TextInput
                value={amount}
                onChangeText={val => setAmount(val)}
                style={editAssignmentStyle.editAssignmentInput}
              />
            </View>
            <EditBlack />
          </View>
        </View>
        <View style={editAssignmentStyle.editAssignmentBox}>
          <Text style={editAssignmentStyle.editAssignmentLabel}>
            Start Date
          </Text>
          <TouchableOpacity
            onPress={handleOpen}
            style={editAssignmentStyle.editBottomView}>
            <Text style={editAssignmentStyle.editAssignmentInput}>
              {startDate ? startDate : properStartDate[0]}
            </Text>
            <Calendar />
          </TouchableOpacity>
        </View>
        <View style={editAssignmentStyle.editAssignmentBox}>
          <Text style={editAssignmentStyle.editAssignmentLabel}>Due Date</Text>
          <TouchableOpacity
            onPress={handleEndOpen}
            style={editAssignmentStyle.editBottomView}>
            <Text style={editAssignmentStyle.editAssignmentInput}>
              {endDate ? endDate : properDueDate[0]}
            </Text>
            <Calendar />
          </TouchableOpacity>
        </View>
        <View style={editAssignmentStyle.editAssignmentBox}>
          <Text style={editAssignmentStyle.editAssignmentLabel}>
            Assigned Task
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={handleTaskOpen}
            style={editAssignmentStyle.editBottomView}>
            <Text style={editAssignmentStyle.editAssignmentInput}>
              {radioSelectedTask
                ? radioSelectedTask.showName
                : item?.task?.show_name}
            </Text>
            <Dropdown />
          </TouchableOpacity>
        </View>

        <Mainbutton width={240} text="Save" action={handleEditAssignment} />
      </View>
    </View>
  );
};

export default EditAssignment;
