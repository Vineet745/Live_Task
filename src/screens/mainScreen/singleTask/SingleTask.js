import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import BackButton from '../../../assets/images/back_arrow_button.svg';
import UserRemix from '../../../assets/images/user_remix_white.svg';
import {useNavigation} from '@react-navigation/native';
import {singleTaskStyle} from './singleTaskStyle';

const SingleTask = ({route}) => {
  const {
    params: {singleData},
  } = route;
  const navigation = useNavigation();
  return (
    <View style={singleTaskStyle.singleMain}>
      <View style={singleTaskStyle.customHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton width={32} height={32} />
        </TouchableOpacity>
        <TouchableOpacity style={singleTaskStyle.remixButton}>
          <Text style={{color: color.white, fontFamily: fonts.semiBold}}>
            Remix
          </Text>
          <UserRemix />
        </TouchableOpacity>
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
          {singleData.show_name}
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
          {singleData.minimum_age} yrs to {singleData.maximum_age} yrs
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
          {singleData.language}
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
          {singleData.description}
        </Text>
      </View>
    </View>
  );
};

export default SingleTask;
