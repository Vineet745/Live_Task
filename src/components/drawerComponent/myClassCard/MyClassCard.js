import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Delete from '../../../assets/images/delete_icon.svg';
import Edit from '../../../assets/images/pink_edit.svg';
import {useNavigation} from '@react-navigation/native';
import {myClassCardStyle} from './myClassCardStyle';

const MyClassCard = () => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigate("Single Class")}  style={myClassCardStyle.dashboardTaskMain}>
      <View style={myClassCardStyle.topView}>
        <Text style={myClassCardStyle.demoText}>Student Name 1</Text>
        <View style={myClassCardStyle.middleView}>
          <Text style={myClassCardStyle.subjectText}>
            <Text>Stude 1</Text>
          </Text>
          <Text style={myClassCardStyle.assignMentText}>
            <Text>Assignment - 4</Text>
          </Text>
        </View>
      </View>
      <View style={myClassCardStyle.bottomView}>
        <View style={myClassCardStyle.bottomViewInnerView}></View>
        <View style={myClassCardStyle.buttonContainer}>
          <View style={myClassCardStyle.iconTextContainer}>
            <TouchableOpacity style={myClassCardStyle.buttons}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={myClassCardStyle.iconTextContainer}>
            <TouchableOpacity style={myClassCardStyle.buttons}>
              <Delete />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyClassCard;
