import {View, Text} from 'react-native';
import React from 'react';
import {SingleAssignmentStyle} from './singleAssignmentStyle';
import Coin from '../../../assets/images/coin.svg';
import StudentAssignment from '../../../components/mainComponent/studentAssignment/StudentAssignment';
import { horizontalScale } from '../../../constants/dimension';
const SingleAssignment = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={SingleAssignmentStyle.topView}>
        <View style={SingleAssignmentStyle.accountView}>
          <View style={SingleAssignmentStyle.accountHeading}>
            <Text style={SingleAssignmentStyle.accountHeadingText}>
              Total Assigned Credit
            </Text>
            <View style={SingleAssignmentStyle.amountContainer}>
              <Coin />
              <Text style={SingleAssignmentStyle.amountText}>600</Text>
            </View>
          </View>
          <View style={SingleAssignmentStyle.accountHeading}>
            <Text style={SingleAssignmentStyle.accountHeadingText}>
              Remaining
            </Text>
            <View style={SingleAssignmentStyle.amountContainer}>
              <Coin />
              <Text style={SingleAssignmentStyle.amountText}>300</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={SingleAssignmentStyle.studentSpendView}>
        <Text style={SingleAssignmentStyle.studentSpendText}>Students Spends</Text>
      </View>
      <StudentAssignment/>
      <StudentAssignment/>
    </View>
  );
};

export default SingleAssignment;
