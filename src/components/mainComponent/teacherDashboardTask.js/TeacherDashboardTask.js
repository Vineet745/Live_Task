import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {teacherDashboardTaskStyle} from './teacherDashboardTaskStyle';
import Like from '../../../assets/images/like_btn.svg';
import Seen from '../../../assets/images/seen_btn.svg';
import Share from '../../../assets/images/share_btn.svg';
const TeacherDashboardTask = () => {
  return (
    <TouchableOpacity style={teacherDashboardTaskStyle.dashboardTaskMain}>
      <View style={teacherDashboardTaskStyle.topView}>
        <Text style={teacherDashboardTaskStyle.demoText}>
          Task Name Demo - 1
        </Text>
        <View style={teacherDashboardTaskStyle.middleView}>
          <Text style={teacherDashboardTaskStyle.subjectText}>Mathematics</Text>
          <Text style={teacherDashboardTaskStyle.yearsText}>
            15 yrs to 20 yrs
          </Text>
        </View>
      </View>
      <View style={teacherDashboardTaskStyle.bottomView}>
        <View style={teacherDashboardTaskStyle.bottomViewInnerView}></View>
        <View style={teacherDashboardTaskStyle.buttonContainer}>
          <View
            style={teacherDashboardTaskStyle.iconTextContainer}>
            <TouchableOpacity style={teacherDashboardTaskStyle.buttons}>
              <Like />
            </TouchableOpacity>
            <Text style={teacherDashboardTaskStyle.countText}>1233</Text>
          </View>
          <View
            style={teacherDashboardTaskStyle.iconTextContainer}>
            <TouchableOpacity style={teacherDashboardTaskStyle.buttons}>
              <Share />
            </TouchableOpacity>
            <Text style={teacherDashboardTaskStyle.countText}>1233</Text>
          </View>
          <View
            style={teacherDashboardTaskStyle.iconTextContainer}>
            <TouchableOpacity style={teacherDashboardTaskStyle.buttons}>
              <Seen />
            </TouchableOpacity>
            <Text style={teacherDashboardTaskStyle.countText}>1233</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TeacherDashboardTask;
