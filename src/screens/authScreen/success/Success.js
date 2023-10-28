import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {successStyle} from './successStyle';
import Bulb from '../../../assets/images/bulb.svg';
import Right from '../../../assets/images/right.svg';
import BigRectangle from '../../../assets/images/big-rectangle.svg';
import {useNavigation} from '@react-navigation/native';

const Success = () => {
  const {navigate} = useNavigation();

  useEffect(() => {
    handleNavigation();
  }, []);

  const handleNavigation = () => {
    const timer = setTimeout(() => {
      navigate('Login');
    }, 3000);
  };
  return (
    <View style={successStyle.successMain}>
      <StatusBar barStyle={'dark-content'} />
      <View style={successStyle.successTopView}>
        <View style={successStyle.successTop}>
          <Bulb />
          <Text style={successStyle.text}>Live Task AI</Text>
        </View>
        <View style={successStyle.messageContainer}>
          <View style={successStyle.thirdImage}></View>
          <View style={successStyle.secondImage}></View>
          <View style={successStyle.firstImage}>
            <View style={successStyle.roundOne}>
              <View style={successStyle.roundTwo}>
                <Right />
              </View>
            </View>
            <View>
              <Text style={successStyle.successText}>
                Password Reset Successfully
              </Text>
            </View>
            <View>
              <Text style={successStyle.successInformation}>
                Your Password has been reset.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <BigRectangle />
      </View>
    </View>
  );
};

export default Success;
