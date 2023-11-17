import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Delete from '../../../assets/images/delete_icon.svg';
import Edit from '../../../assets/images/pink_edit.svg';
import {useNavigation} from '@react-navigation/native';
import {myClassCardStyle} from './myClassCardStyle';
import DataDeleteModal from '../../modals/DataDeleteModal';
import { deleteClass } from '../../../service/api/classApi';

const MyClassCard = ({item,handleGetClasses,navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  // handleOpen

  const handleOpen = () => {
    setIsOpen(true);
  };

  // handleClose

  const handleClose = () => {
    setIsOpen(false);
  };


  const handleDelete = async () => {
    const id = item.id;
    try {
      await deleteClass(id);
      await handleGetClasses();
      handleClose();
      navigation.navigate('My Class');
    } catch (error) {
      console.log('error', error);
    }
  };



  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate('Single Class',{ id: item.id, item:item })}
      style={myClassCardStyle.dashboardTaskMain}>
      <DataDeleteModal open={isOpen} closeModal={handleClose} handleDelete={handleDelete} />
      <View style={myClassCardStyle.topView}>
        <Text style={myClassCardStyle.demoText}>{item.show_name.slice(0,25)}...</Text>
        <View style={myClassCardStyle.middleView}>
          <Text style={myClassCardStyle.subjectText}>
            <Text>Student {item.class_students.length}</Text>
          </Text>
         
        </View>
      </View>
      <View style={myClassCardStyle.bottomView}>
        <View style={myClassCardStyle.bottomViewInnerView}></View>
        <View style={myClassCardStyle.buttonContainer}>
          <View style={myClassCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={() => navigate('Edit Class',{ item: item })}
              style={myClassCardStyle.buttons}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={myClassCardStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={handleOpen}
              style={myClassCardStyle.buttons}>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyClassCard;
