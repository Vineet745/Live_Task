import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {horizontalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import {color, fonts, sizes} from '../../constants/theme';
import BackButton from '../../assets/images/back_arrow_button.svg';

const StackCustomHeader = ({text}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          backgroundColor: '#f7f7f7',
          elevation: 1,
        }}>
        <BackButton width={32} height={32} />
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: horizontalScale(25),
          fontFamily: fonts.segoeUI,
          fontSize: RFValue(sizes.h4, 667),
          color: color.black,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default StackCustomHeader;
