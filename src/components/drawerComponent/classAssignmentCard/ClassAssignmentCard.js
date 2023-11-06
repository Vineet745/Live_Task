import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ClassAssignmentCardStyle} from './classAssignmentCardStyle';
import MinusDeleteIcon from '../../../assets/images/minus_delete_icon.svg';
import {classAssignmentStyle} from '../../../screens/drawerScreen/classAssignment/classAssignmentStyle';
import { useNavigation } from '@react-navigation/native';

const ClassAssignmentCard = () => {

  const {navigate} = useNavigation()


  return (
    <TouchableOpacity onPress={()=>navigate("Single Assignment")} style={ClassAssignmentCardStyle.classAssignmentCardMain}>
      <View style={ClassAssignmentCardStyle.classAssignmentCardChild}>
        <View style={ClassAssignmentCardStyle.classAssignmentTopView}>
          <Text style={ClassAssignmentCardStyle.assignmentText}>
            Assignment 1
          </Text>
          <TouchableOpacity style={ClassAssignmentCardStyle.classDeleteView}>
            <MinusDeleteIcon />
          </TouchableOpacity>
        </View>
        <View style={ClassAssignmentCardStyle.classAssignmentDate}>
          <Text style={ClassAssignmentCardStyle.classDateText}>
            Due Date - dd / mm / yyyy
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ClassAssignmentCard;
