import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {editStudentStyle} from './editStudentStyle';
import EditBlack from '../../../assets/images/edit_black.svg';
import Mainbutton from '../../../components/mainComponent/Mainbutton';

const EditStudent = () => {
  return (
    <View style={editStudentStyle.editMain}>
      <View style={editStudentStyle.studentContainer}>
        <View style={editStudentStyle.studentTopContainer}>
          <Text style={editStudentStyle.studentLabelName}>Email</Text>
          <TextInput style={editStudentStyle.input} value="Student@gmail.com" />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <View style={editStudentStyle.studentContainer}>
        <View style={editStudentStyle.studentTopContainer}>
          <Text style={editStudentStyle.studentLabelName}>
            Create New Password
          </Text>
          <TextInput
            style={editStudentStyle.input}
            placeholder="Enter New Password"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <View style={editStudentStyle.studentContainer}>
        <View style={editStudentStyle.studentTopContainer}>
          <Text style={editStudentStyle.studentLabelName}>
            Confirm Password
          </Text>
          <TextInput
            style={editStudentStyle.input}
            placeholder="Re-enter New Password"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <Mainbutton width={120} text="Save" />
    </View>
  );
};

export default EditStudent;
