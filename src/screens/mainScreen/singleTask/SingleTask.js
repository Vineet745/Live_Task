import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import UserRemix from '../../../assets/images/user_remix_white.svg';
import {useNavigation} from '@react-navigation/native';
import {singleTaskStyle} from './singleTaskStyle';
import {getSingleTask, getTaskReaction} from '../../../service/api/homeApi';
import Loader from '../../../utils/Loader';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {getUserProfile} from '../../../service/api/userApi';

const SingleTask = ({route}) => {
  const {
    params: {item},
  } = route;
  const navigation = useNavigation();
  const [singleData, setSingleData] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState('');

  // console.log("jdfhieurioepr",item?.task_reaction?.task_id)

  // Single Task
  useEffect(() => {
    handleSingleTask();
  }, [item]);

  useEffect(() => {
    handleUserProfile();
  }, []);

  const handleSingleTask = async () => {
    const query = {
      id: item?.id,
    };
    try {
      setLoading(true);
      const {data} = await getSingleTask({query});
      setSingleData(data?.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  //  Remix

  const handleRemix = async () => {
    const userData = {
      upvote: false,
      flag: 'remix',
      remix: true,
      task_id: item.id,
    };
    try {
      await getTaskReaction(userData);
      await handleSingleTask();
    } catch (error) {
      setIsLike(false);
      console.log('error', error);
    }
  };

  // Get Current User Data

  const handleUserProfile = async () => {
    try {
      const {data} = await getUserProfile();
      setUserData(data?.data);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  return (
    <View style={singleTaskStyle.singleMain}>
      <Loader loading={loading} />
      <View style={singleTaskStyle.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton width={32} height={32} />
        </TouchableOpacity>
        {singleData?.creator_id === singleData?.task_reaction?.reactor_id ||
        userData?.id === singleData?.task_reaction?.reactor_id ? null : (
          <TouchableOpacity
            onPress={handleRemix}
            style={singleTaskStyle.remixButton}>
            <Text style={{color: color.white, fontFamily: fonts.semiBold}}>
              Remix
            </Text>
            <UserRemix />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          height: verticalScale(70),
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          paddingHorizontal: horizontalScale(5),
          marginVertical: verticalScale(5),
        }}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          Task Name
        </Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData?.show_name}
        </Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          height: verticalScale(70),
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          paddingHorizontal: horizontalScale(5),
          marginVertical: verticalScale(5),
        }}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          Subject
        </Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData?.subject?.subject_name}
        </Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          height: verticalScale(70),
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          paddingHorizontal: horizontalScale(5),
          marginVertical: verticalScale(5),
        }}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>Age</Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData?.minimum_age} yrs to {singleData?.maximum_age} yrs
        </Text>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          height: verticalScale(70),
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
          paddingHorizontal: horizontalScale(5),
          marginVertical: verticalScale(5),
        }}>
        <Text style={{fontFamily: fonts.medium, color: color.black}}>
          Language
        </Text>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h5, 667),
          }}>
          {singleData?.language}
        </Text>
      </View>

      <View style={{marginVertical: verticalScale(10)}}>
        <Text
          style={{
            fontFamily: fonts.semiBold,
            color: color.black,
            fontSize: RFValue(sizes.h6, 667),
          }}>
          Description
        </Text>
        <Text
          style={{
            marginVertical: verticalScale(10),
            fontFamily: fonts.regular,
            color: color.black,
          }}>
          {singleData?.description}
        </Text>
      </View>
    </View>
  );
};

export default SingleTask;
