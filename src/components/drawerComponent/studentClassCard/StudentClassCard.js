import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {studentClassCardStyle} from './studentClassCardStyle';
import MinusIcon from '../../../assets/images/minus_icon.svg';
const StudentClassCard = ({item}) => {
  return (
    <View style={studentClassCardStyle.studentClassCardMain}>
      <View style={studentClassCardStyle.studentClassCardTop}>
        <Text style={studentClassCardStyle.studentClassCardClassName}>
          {item.class.show_name.slice(0,25)}
        </Text>
        <TouchableOpacity>
          <MinusIcon />
        </TouchableOpacity>
      </View>
      <View style={studentClassCardStyle.studentClassCardBottom}>
        <Text style={studentClassCardStyle.studentClassCardAssignmentName}>
          Assignment Completed
        </Text>
        <Text style={studentClassCardStyle.studentClassCardNumber}>3/5</Text>
      </View>
    </View>
  );
};

export default StudentClassCard;
