import {View, Text, TouchableOpacity,} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {color, fonts, sizes} from '../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';

const AuthButton = ({text, action}) => {
  return (
      <TouchableOpacity
        onPress={action}
        style={{
          width: horizontalScale(275),
          height: verticalScale(40),
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 30,
          justifyContent: 'center',
          backgroundColor: color.lightGreen,
          marginVertical: verticalScale(5),
        }}>
        <Text
          style={{
            color: color.white,
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h5, 667),
            textAlign:"center"
          }}>
          {text}
        </Text>
      </TouchableOpacity>
  );
};

export default AuthButton;
