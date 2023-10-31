import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import TeacherDashboardTask from '../../../components/mainComponent/teacherDashboardTask.js/TeacherDashboardTask';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import SearchIcon from '../../../assets/images/search_icon.svg';
import Filter from '../../../assets/images/filter_icon.svg';
import {fonts} from '../../../constants/theme';
import {exploreStyle} from './exploreStyle';


const Explore = () => {
  return (
    <View style={exploreStyle.exploreMain}>
      <View style={exploreStyle.inputView}>
        <View style={exploreStyle.searchTask}>
          <SearchIcon />
          <TextInput
            style={{width: '84%', fontFamily: fonts.semiBold}}
            placeholder="Search Task"
          />
        </View>
        <View style={exploreStyle.sortView}>
          <Filter />
          <Text style={{fontFamily: fonts.semiBold}}>Sort</Text>
        </View>
      </View>
      <View style={{marginVertical: verticalScale(10)}}>
        <TeacherDashboardTask />
        <TeacherDashboardTask />
        <TeacherDashboardTask />
      </View>
    </View>
  );
};

export default Explore;
