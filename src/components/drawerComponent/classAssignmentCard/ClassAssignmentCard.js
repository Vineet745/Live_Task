import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ClassAssignmentCardStyle} from './classAssignmentCardStyle';
import MinusDeleteIcon from '../../../assets/images/minus_delete_icon.svg';
import {classAssignmentStyle} from '../../../screens/drawerScreen/classAssignment/classAssignmentStyle';
import { useNavigation } from '@react-navigation/native';
import { conversationStyle } from '../../../screens/drawerScreen/conversation/conversationStyle';

const ClassAssignmentCard = ({item}) => {
  const time = item.due_date_time.split("T")

  const {navigate} = useNavigation()


  return (
    <TouchableOpacity onPress={()=>navigate("Single Assignment",{item:item})} style={ClassAssignmentCardStyle.classAssignmentCardMain}>
      <View style={ClassAssignmentCardStyle.classAssignmentCardChild}>
        <View style={ClassAssignmentCardStyle.classAssignmentTopView}>
          <Text style={ClassAssignmentCardStyle.assignmentText}>
            {item?.task?.show_name}
          </Text>
          <TouchableOpacity style={ClassAssignmentCardStyle.classDeleteView}>
            <MinusDeleteIcon />
          </TouchableOpacity>
        </View>
        <View style={ClassAssignmentCardStyle.classAssignmentDate}>
          <Text style={ClassAssignmentCardStyle.classDateText}>
            Due Date - {time?time[0]:"dd / mm / yyyy"} 
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ClassAssignmentCard;
