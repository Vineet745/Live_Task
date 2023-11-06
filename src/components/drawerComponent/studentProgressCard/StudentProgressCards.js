import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MinusDeleteIcon from '../../../assets/images/minus_delete_icon.svg';
import {studentProgressCardStyle} from './studentProgressCardStyle';
import * as Progress from 'react-native-progress';

const StudentProgressCard = () => {
  return (
    <View style={studentProgressCardStyle.progressCardMain}>
      <View style={studentProgressCardStyle.progressCardTop}>
        <Text style={studentProgressCardStyle.progressCardStudentName}>
          Student Name
        </Text>
        <TouchableOpacity style={studentProgressCardStyle.studentDeleteView}>
          <MinusDeleteIcon />
        </TouchableOpacity>
      </View>
      <View style={studentProgressCardStyle.progressCardMiddle}>
        <Text style={studentProgressCardStyle.progressText}>Progress</Text>
        <View style={studentProgressCardStyle.progressView}>
          <Progress.Bar
            progress={0.65}
            width={280}
            color="#04c38c"
            height={12}
            unfilledColor="#d9d9d9"
            borderColor="transparent"
            borderRadius={10}
          />
          <Text style={studentProgressCardStyle.progressCount}>65%</Text>
        </View>
      </View>
      <View style={studentProgressCardStyle.studentClassCardBottom}>
        <Text style={studentProgressCardStyle.studentClassCardAssignmentName}>
          Assignment Completed
        </Text>
        <Text style={studentProgressCardStyle.studentClassCardNumber}>
          3 / 5
        </Text>
      </View>
    </View>
  );
};

export default StudentProgressCard;
