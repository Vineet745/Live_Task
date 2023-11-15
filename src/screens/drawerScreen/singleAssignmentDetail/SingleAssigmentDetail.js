import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, fonts} from '../../../constants/theme';
import {singleAssigmentStyle} from './singleeAssignmentStyle';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import Coin from '../../../assets/images/coin.svg';
import MinusDeleteIcon from '../../../assets/images/minus_delete_icon.svg';

const SingleAssigmentDetail = ({route}) => {
  const {params:{item}} = route;
  const time = item.due_date_time.split("T")

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
          <Text style={singleAssigmentStyle.coinCount}>{item?.credits_for_all_students}</Text>
        </View>
      </View>
      <View style={singleAssigmentStyle.totalDetail}>
        <Text style={singleAssigmentStyle.creditTask}>Credit Per Students</Text>
        {item?.credits_per_student ?<View style={singleAssigmentStyle.coinView}>
          <Coin />
          <Text style={singleAssigmentStyle.coinCount}>{item?.credits_per_student}</Text>
        </View>:<Text style={{fontFamily:fonts.medium,color:color.black}}>Not Assigned</Text>}
        
      </View>
      <View style={singleAssigmentStyle.totalDetail}>
        <Text style={singleAssigmentStyle.creditTask}>Due Date</Text>
        <Text style={singleAssigmentStyle.dateText}>{time? time[0]:"dd / mm / yyyy"}</Text>
      </View>
      <TouchableOpacity style={singleAssigmentStyle.assignmentCardMain}>
        <View style={singleAssigmentStyle.assignmentCardChild}>
          <View style={singleAssigmentStyle.assignmentTopView}>
            <Text style={singleAssigmentStyle.assignmentText}>
              {item?.task?.show_name}
            </Text>
            <TouchableOpacity style={singleAssigmentStyle.classDeleteView}>
              <MinusDeleteIcon />
            </TouchableOpacity>
          </View>
          <View style={singleAssigmentStyle.classAssignmentDate}>
            <Text style={singleAssigmentStyle.subjectText}>{item?.task?.subject?.subject_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SingleAssigmentDetail;
