import {View, Text} from 'react-native';
import React from 'react';
import Coin from '../../../assets/images/coin.svg';
import {verticalScale} from '../../../constants/dimension';
import {studentAssignmentStyle} from './studentAssignmentStyle';
const StudentAssignment = () => {
  return (
    <View style={{marginTop: verticalScale(15)}}>
      <View style={studentAssignmentStyle.studentMain}>
        <View style={studentAssignmentStyle.studentMainTop}>
          <Text style={studentAssignmentStyle.studentMainTopText}>
            Student Name
          </Text> 
          <View style={studentAssignmentStyle.purchaseDetail}>
            <Text style={studentAssignmentStyle.purchaseText}>-10</Text>
            <Coin />
          </View>
        </View>
        <Text style={studentAssignmentStyle.timeDetail}>6 hour ago</Text>
      </View>
    </View>
  );
};

export default StudentAssignment;
