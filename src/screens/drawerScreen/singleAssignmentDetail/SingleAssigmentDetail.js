import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../../../constants/theme';
import {singleAssigmentStyle} from './singleeAssignmentStyle';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import Coin from '../../../assets/images/coin.svg';
import MinusDeleteIcon from '../../../assets/images/minus_delete_icon.svg';

const SingleAssigmentDetail = ({route}) => {
  const {params:{item}} = route;
  console.log("rieuorieuoir",item)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(15),
      }}>
      <View style={singleAssigmentStyle.totalDetail}>
        <Text style={singleAssigmentStyle.creditTask}>Total Credit</Text>
        <View style={singleAssigmentStyle.coinView}>
          <Coin />
          <Text style={singleAssigmentStyle.coinCount}>500</Text>
        </View>
      </View>
      <View style={singleAssigmentStyle.totalDetail}>
        <Text style={singleAssigmentStyle.creditTask}>Credit Per Students</Text>
        <View style={singleAssigmentStyle.coinView}>
          <Coin />
          <Text style={singleAssigmentStyle.coinCount}>50</Text>
        </View>
      </View>
      <View style={singleAssigmentStyle.totalDetail}>
        <Text style={singleAssigmentStyle.creditTask}>Due Date</Text>
        <Text style={singleAssigmentStyle.dateText}>dd / mm / yyyy</Text>
      </View>
      <TouchableOpacity style={singleAssigmentStyle.assignmentCardMain}>
        <View style={singleAssigmentStyle.assignmentCardChild}>
          <View style={singleAssigmentStyle.assignmentTopView}>
            <Text style={singleAssigmentStyle.assignmentText}>
              Assignment 1
            </Text>
            <TouchableOpacity style={singleAssigmentStyle.classDeleteView}>
              <MinusDeleteIcon />
            </TouchableOpacity>
          </View>
          <View style={singleAssigmentStyle.classAssignmentDate}>
            <Text style={singleAssigmentStyle.subjectText}>Subject Name</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SingleAssigmentDetail;
