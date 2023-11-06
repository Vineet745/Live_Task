import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {studentCardStyle} from './studentCardStyle';
import Delete from '../../../assets/images/delete_icon.svg';
import Edit from '../../../assets/images/pink_edit.svg';
import { useNavigation } from '@react-navigation/native';


const StudentCard = () => {

  const {navigate} = useNavigation()

  return (
    <TouchableOpacity
        onPress={() =>
          navigate('Single Student')
        }
      style={studentCardStyle.dashboardTaskMain}>
      <View style={studentCardStyle.topView}>
        <Text style={studentCardStyle.demoText}>Student Name 1</Text>
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
            <TouchableOpacity style={studentCardStyle.buttons}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={studentCardStyle.iconTextContainer}>
            <TouchableOpacity style={studentCardStyle.buttons}>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StudentCard;
