import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {studentCardStyle} from './studentCardStyle';
import Delete from '../../../assets/images/delete_icon.svg';
import Edit from '../../../assets/images/pink_edit.svg';
import {useNavigation} from '@react-navigation/native';
import DataDeleteModal from '../../modals/DataDeleteModal';
import {useDispatch, useSelector} from 'react-redux';
import {deleteStudent} from '../../../service/api/studentApi';

const StudentCard = ({item, handleGetStudent}) => {
  const [open, setOpen] = useState(false);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {isOpen} = useSelector(state => state.modal);

  // handleOpen

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Delete Student

  const handleDelete = async () => {
    try {
      await deleteStudent({id: item.id});
      handleClose();
      await handleGetStudent();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigate('Single Student', {item: item})}
      style={studentCardStyle.dashboardTaskMain}>
      <DataDeleteModal
        open={open}
        closeModal={handleClose}
        handleDelete={handleDelete}
      />
      <View style={studentCardStyle.topView}>
        <Text style={studentCardStyle.demoText}>{item.username}</Text>
        <View style={studentCardStyle.middleView}>
          <Text style={studentCardStyle.subjectText}>
            <Text>Stude 1</Text>
          </Text>
        </View>
      </View>
      <View style={studentCardStyle.bottomView}>
        <View style={studentCardStyle.bottomViewInnerView}></View>
        <View style={studentCardStyle.buttonContainer}>
          <View style={studentCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={() => navigate('Edit Student', {item: item})}
              style={studentCardStyle.buttons}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={studentCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={handleOpen}
              style={studentCardStyle.buttons}>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StudentCard;
