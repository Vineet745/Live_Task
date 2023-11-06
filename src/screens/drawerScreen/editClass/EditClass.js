import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {editStudentStyle} from './editStudentStyle';
import EditBlack from '../../../assets/images/edit_black.svg';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {editClassStyle} from './editClassStyle';
import {CustomDropDown} from '../../../utils/CustomDropDown';
import {verticalScale} from '../../../constants/dimension';
import UserLogo from '../../../assets/images/inputUser.svg';

const EditStudent = () => {
  return (
    <View style={editClassStyle.editMain}>
      <View style={editClassStyle.classContainer}>
        <View style={editClassStyle.classTopContainer}>
          <Text style={editClassStyle.classLabelName}>Class Name</Text>
          <TextInput style={editClassStyle.input} value="Class Name" />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>

      <View style={editClassStyle.dropDown}>
        <View style={editClassStyle.dropDownLogo}>
          <UserLogo />
        </View>
        <CustomDropDown width={280} text="Select Class" />
      </View>
      <View style={editClassStyle.customError}>
        <Text style={editClassStyle.customErrorText}>
          ( 30 Student Selected)
        </Text>
      </View>

      <Mainbutton width={280} text="Save" />
    </View>
  );
};

export default EditStudent;
