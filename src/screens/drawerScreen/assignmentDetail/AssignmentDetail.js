import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {singleStudentStyle} from './singleStudentStyle';
import StudentClassCard from '../../../components/drawerComponent/studentClassCard/StudentClassCard';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import DeleteWhite from '../../../assets/images/white_delete.svg';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
import ImageEdit from '../../../assets/images/image_edit.svg';
import {assingmentDetailStyle} from './assignmentDetailStyle';
import {assignClassStyle} from '../assignClasses/assignClassStyle';
import ClassModal from '../../../components/modals/ClassModal';
import {singleAssignmentDetail, viewReport} from '../../../service/api/assignmentApi';
import {color, fonts} from '../../../constants/theme';
import Coin from '../../../assets/images/coin.svg';
import CreditModal from '../../../components/modals/CreditModal';
import {useSelector} from 'react-redux';
import {toast} from '../../../service/ToastMessage';
import Loader from '../../../utils/Loader';
import TaskModal from '../../../components/modals/TaskModal';

const AssignmentDetail = ({route}) => {
  const {
    params: {item},
  } = route;

  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [singleAssignment, setSingleAssignment] = useState('');
  const [creditOpen, setCreditOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState([])
  const {radioSelected} = useSelector(state => state.checkbox);

const isFocused = useIsFocused()

  // modify Number

  const newCreatedDate = singleAssignment?.created_at
    ? singleAssignment.created_at.split('T')
    : null;
  const newDueDate = singleAssignment?.due_date_time
    ? singleAssignment.due_date_time.split('T')
    : null;

  // useEffect

  useEffect(() => {
    handleSingleAssignmentDetail();
  }, [isFocused]);
  
  
  // navigation

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // handleCreditBoxopen

  const handleCreditOpen = () => {
    if (radioSelected !== null) {
      handleClose();
      setCreditOpen(true);
    } else {
      handleClose();
      toast({type: 'error', text1: 'Please Select the Class'});
    }
  };

  const handleCreditClose = () => {
    setCreditOpen(false);
  };

  // taskModal
  const handleTaskOpen = () => {
    setTaskOpen(true);
  };

  const handleTaskClose = () => {
    setTaskOpen(false);
  };

  // AssignmentDetail

  const handleSingleAssignmentDetail = async () => {
    try {
      setLoading(true);
      const {data} = await singleAssignmentDetail({id: item.id});
      setSingleAssignment(data.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  // View Report





  return (
    <View style={assingmentDetailStyle.singleStudentMain}>
      <Loader loading={loading} />
      <ClassModal
        open={isOpen}
        closeModal={handleClose}
        handleCreditOpen={handleCreditOpen}
        handleCreditClose={handleCreditClose}
        item={item}
        
      />
      <CreditModal
        open={creditOpen}
        closeModal={handleCreditClose}
        item={item}
        handleSingleAssignmentDetail={handleSingleAssignmentDetail}
      />
      <TaskModal open={taskOpen} closeModal={handleTaskClose} item={item} handleSingleAssignmentDetail={handleSingleAssignmentDetail} />
      <View style={assingmentDetailStyle.singleStudentInner}>
        <View style={assingmentDetailStyle.singleStudentHeader}>
          <View style={assingmentDetailStyle.singleStudentLeftView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: '#f7f7f7',
                elevation: 1,
              }}>
              <BackButton width={32} height={32} />
            </TouchableOpacity>
            <Text style={assingmentDetailStyle.detailText}>Details</Text>
          </View>
          <View style={assingmentDetailStyle.singleStudentRightView}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Edit Assignment', {item: item})
              }
              style={assingmentDetailStyle.profileEditButton}>
              <Text style={assingmentDetailStyle.profileEditText}>Edit</Text>
              <ImageEdit />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'black', borderRadius: 50, padding: 3}}>
              <DeleteWhite />
            </TouchableOpacity>
          </View>
        </View>
        <View style={assingmentDetailStyle.singleStudentDetails}>
          <View style={assingmentDetailStyle.studentDetailView}>
            <Text style={assingmentDetailStyle.studentName}>
              {singleAssignment.show_name}
            </Text>
          </View>

          <View style={assingmentDetailStyle.studentDetailView}>
            <Text style={assingmentDetailStyle.studentName}>
              Total Credit Limit
            </Text>

            <View style={assingmentDetailStyle.assignedStatus}>
              {singleAssignment?.credits_for_all_students ? (
                <View style={{flexDirection: 'row'}}>
                  <Coin />
                  <Text
                    style={[
                      assingmentDetailStyle.studentName,
                      {marginLeft: horizontalScale(10)},
                    ]}>
                    {singleAssignment?.credits_for_all_students}
                  </Text>
                </View>
              ) : (
                <Text style={[assingmentDetailStyle.studentName]}>
                  Not Assigned
                </Text>
              )}
            </View>
          </View>
          <View style={assingmentDetailStyle.studentDetailView}>
            <Text style={assingmentDetailStyle.studentName}>Created On</Text>
            <Text style={assingmentDetailStyle.assignedStatus}>
              {newCreatedDate ? newCreatedDate[0] : 'dd / mm / yyyy'}
            </Text>
          </View>

          <View style={assingmentDetailStyle.studentDetailView}>
            <Text style={assingmentDetailStyle.studentName}>Due Date On</Text>
            <Text style={assingmentDetailStyle.assignedStatus}>
              {newDueDate ? newDueDate[0] : 'dd / mm / yyyy'}
            </Text>
          </View>

          {singleAssignment.is_assigned !== null ? (
            <View style={assingmentDetailStyle.studentDetailView}>
              <Text style={assingmentDetailStyle.studentName}>Assigned To</Text>
              <Text style={assingmentDetailStyle.assignedStatus}>
                {singleAssignment?.class_assignment?.class?.show_name}
              </Text>
            </View>
          ) : null}

          {singleAssignment.task_id !== null ? (
            <View style={assingmentDetailStyle.studentDetailView}>
              <Text style={assingmentDetailStyle.studentName}>Task Name</Text>
              <Text style={assingmentDetailStyle.assignedStatus}>
                {singleAssignment?.task?.show_name}
              </Text>
            </View>
          ) : null}

          {singleAssignment.is_assigned !== true ? (
            <View style={{marginVertical: verticalScale(10)}}>
              <Mainbutton
                width={270}
                text="Assign to Class"
                action={handleOpen}
              />
            </View>
          ) : (
            <TouchableOpacity
                 onPress={()=>navigation.navigate("Report",{item:item})}

              style={{
                marginVertical: verticalScale(10),
                borderWidth: 1,
                borderColor: '#04c38c',
                width: horizontalScale(270),
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: verticalScale(40),
                borderRadius: 30,
              }}>
              <Text style={{color: '#04c38c', fontFamily: fonts.semiBold}}>
                View Report
              </Text>
            </TouchableOpacity>
          )}

          {!singleAssignment?.task?.show_name ? (
            <View style={{marginVertical: verticalScale(10)}}>
              <Mainbutton
                width={270}
                text="Assign to Task"
                action={handleTaskOpen}
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default AssignmentDetail;
