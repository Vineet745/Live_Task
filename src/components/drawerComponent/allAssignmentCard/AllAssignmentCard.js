import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Delete from '../../../assets/images/delete_icon.svg';
import Edit from '../../../assets/images/pink_edit.svg';
import {useNavigation} from '@react-navigation/native';
import DataDeleteModal from '../../modals/DataDeleteModal';
import {allAssignmentCardStyle} from './allAssignmentCardStyle';
import Coin from '../../../assets/images/coin.svg';
import AssignmentDetail from '../../../screens/drawerScreen/assignmentDetail/AssignmentDetail';
import {deleteAssignment} from '../../../service/api/assignmentApi';

const AllAssignmentCard = ({item, handleAssignments}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {navigate} = useNavigation();

  // handleOpen

  const handleOpen = () => {
    setIsOpen(true);
  };

  // handleClose

  const handleClose = () => {
    setIsOpen(false);
  };

  // Delete Assignment

  const handelDeleteAssignment = async () => {
    const id = item.id;
    try {
      const data = await deleteAssignment(id);
      handleAssignments();
      handleClose();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigate('Assignment Details', {item: item})}
      style={allAssignmentCardStyle.dashboardTaskMain}>
      <DataDeleteModal
        open={isOpen}
        closeModal={handleClose}
        handleDelete={handelDeleteAssignment}
      />
      <View style={allAssignmentCardStyle.topView}>
        <Text style={allAssignmentCardStyle.demoText}>{item.show_name.slice(0,25)}...</Text>
        <View style={allAssignmentCardStyle.middleView}>
          <View style={allAssignmentCardStyle.middleViewFirstView}>
            <Text style={allAssignmentCardStyle.creditText}>
              Credit Limit -{' '}
            </Text>
            <View style={allAssignmentCardStyle.coinView}>
              <Coin width={15} height={15} />
              <Text style={allAssignmentCardStyle.coinText}>
                {' '}
                {item.credits_for_all_students}
              </Text>
            </View>
          </View>
          <Text style={allAssignmentCardStyle.classText}>
            <Text>Class - {item?.class_assignment?.class?.show_name}</Text>
          </Text>
        </View>
      </View>
      <View style={allAssignmentCardStyle.bottomView}>
        <View style={allAssignmentCardStyle.bottomViewInnerView}></View>
        <View style={allAssignmentCardStyle.buttonContainer}>
          <View style={allAssignmentCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={() => navigate('Edit Assignment', {item: item})}
              style={allAssignmentCardStyle.buttons}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={allAssignmentCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={handleOpen}
              style={allAssignmentCardStyle.buttons}>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AllAssignmentCard;
