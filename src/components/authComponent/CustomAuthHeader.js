import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bulb from '../../assets/images/bulb.svg';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import {color, fonts, sizes} from '../../constants/theme';
import {useNavigation} from "@react-navigation/native"

const CustomAuthHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={{paddingVertical: verticalScale(10)}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: horizontalScale(50),
            width: horizontalScale(180),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Bulb />
          <Image style={{position:"absolute",right:-3,width:30,height:30}} source={require("../../assets/images/bi_chat-fill.png")}/>


          <Text
            style={{
              fontFamily: fonts.medium,
              fontSize: RFValue(sizes.h4, 667),
              color: color.black,
            }}>
            Live Task <Text style={{color:"white",zIndex:500}}> AI</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomAuthHeader;
