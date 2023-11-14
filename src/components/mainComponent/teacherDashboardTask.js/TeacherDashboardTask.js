import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {teacherDashboardTaskStyle} from './teacherDashboardTaskStyle';
import LikePlane from '../../../assets/images/like_btn.svg';
import LikePink from '../../../assets/images/like_pink.svg';
import Seen from '../../../assets/images/seen_btn.svg';
import Share from '../../../assets/images/share_btn.svg';
import {
  getHomeTask,
  getSingleTask,
  getTaskReaction,
} from '../../../service/api/homeApi';
import {useNavigation} from '@react-navigation/native';
import SingleTask from '../../../screens/mainScreen/singleTask/SingleTask';

const TeacherDashboardTask = ({item, handleGetTask}) => {
  const navigation = useNavigation();
  const [singleData, setSingleData] = useState('');
  const [isLike, setIsLike] = useState(false);

  // Single Task
  useEffect(() => {
    handleSingleTask();
  }, []);

  const handleSingleTask = async () => {
    const query = {
      id: item.id,
      flag: 'explore',
    };
    try {
      const {data} = await getSingleTask({query});
      setSingleData(data?.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const likePost = async () => {
    const userData = {
      upvote: true,
      flag: 'upvote',
      remix: false,
      task_id: item.id,
    };
    try {
      setIsLike(true);
      await getTaskReaction(userData);
      await handleGetTask();
    } catch (error) {
      setIsLike(false);
      console.log('error', error);
    }
  };

  const unlikePost = async ({upvote}) => {
    const userData = {
      upvote: false,
      flag: 'upvote',
      remix: false,
      task_id: item.id,
    };
    try {
      setIsLike(false);
      await getTaskReaction(userData);
      await handleGetTask();
    } catch (error) {
      setIsLike(true);
      console.log('error', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SingleTask', {singleData: singleData})
      }
      style={teacherDashboardTaskStyle.dashboardTaskMain}>
      <View style={teacherDashboardTaskStyle.topView}>
        <Text style={teacherDashboardTaskStyle.demoText}>{item.show_name}</Text>
        <View style={teacherDashboardTaskStyle.middleView}>
          <Text style={teacherDashboardTaskStyle.subjectText}>
            {item.subject?.subject_name}
          </Text>
          <Text style={teacherDashboardTaskStyle.yearsText}>
            {item.minimum_age} yrs to {item.maximum_age} yrs
          </Text>
        </View>
      </View>
      <View style={teacherDashboardTaskStyle.bottomView}>
        <View style={teacherDashboardTaskStyle.bottomViewInnerView}></View>
        <View style={teacherDashboardTaskStyle.buttonContainer}>
          <View style={teacherDashboardTaskStyle.iconTextContainer}>
            <TouchableOpacity
              onPress={() => {
                if (isLike === true || item.task_reaction !== null) {
                  unlikePost({item});
                } else {
                  likePost({item});
                }
              }}
              style={teacherDashboardTaskStyle.buttons}>
              {item.task_reaction !== null || isLike === true ? (
                <LikePink />
              ) : (
                <LikePlane />
              )}
            </TouchableOpacity>
            <Text style={teacherDashboardTaskStyle.countText}>
              {item.upvote_count}
            </Text>
          </View>
          <View style={teacherDashboardTaskStyle.iconTextContainer}>
            <TouchableOpacity style={teacherDashboardTaskStyle.buttons}>
              <Share />
            </TouchableOpacity>
            <Text style={teacherDashboardTaskStyle.countText}>1233</Text>
          </View>
          <View style={teacherDashboardTaskStyle.iconTextContainer}>
            <TouchableOpacity style={teacherDashboardTaskStyle.buttons}>
              <Seen />
            </TouchableOpacity>
            <Text style={teacherDashboardTaskStyle.countText}>
              {item.views_count}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TeacherDashboardTask;
