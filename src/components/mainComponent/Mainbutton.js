import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, fonts, sizes} from '../../constants/theme';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';

const Mainbutton = ({text, width, action}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        backgroundColor: color.lightGreen,
        width: horizontalScale(width),
        minHeight: verticalScale(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        alignSelf: 'center',
        marginVertical: verticalScale(10),
      }}>
      <Text
        style={{
          fontFamily: fonts.segoeUI,
          color: color.white,
          fontSize: RFValue(sizes.h5, 667),
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Mainbutton;
