import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {color, fonts, sizes} from '../../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

const SingleTask = ({route}) => {
    const {params:{singleData}} = route;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(10),
      }}>
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
