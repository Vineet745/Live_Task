import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {color, fonts, sizes} from '../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {getUserProfile} from '../../service/api/userApi';
import { useFocusEffect } from '@react-navigation/native';

const HomeUserProfile = () => {
  const [userData, setUserData] = useState('');

  const originalPath = 'https://livetask-ai.hackerkernel.co/'.concat(
    userData.image_path,
  );

  useFocusEffect(
    React.useCallback(() => {
      handleGetUserData()
    }, []),
  );


  const handleGetUserData = async () => {
    try {
      const {data} = await getUserProfile();
      setUserData(data.data);
    } catch (error) {}
  };

  return (
    <View style={styles.homeUserMain}>
      <View style={styles.homeUserInnerMainView}>
        <View style={styles.imageContainer}>
          <Image style={{height: '100%'}} source={{uri: originalPath}} />
        </View>
        <Text style={styles.userNameText}>
          Welcome back , {userData.username}
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  homeUserMain: {
    paddingHorizontal: horizontalScale(10),
    paddingBottom: verticalScale(10),
    backgroundColor: color.white,
  },
  homeUserInnerMainView: {
    borderBottomWidth: 1,
    paddingHorizontal: horizontalScale(5),
    borderColor: '#646464',
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  userNameText: {
    marginLeft: horizontalScale(10),
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.h6, 667),
    color: color.black,
  },
});

export default HomeUserProfile;
