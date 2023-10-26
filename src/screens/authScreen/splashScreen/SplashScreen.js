import {View, Text, ImageBackground, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {splashScreenStyle} from './splashScreenStyle';
import SplashBulb from '../../../assets/images/splash_Bulb.svg';
import {useDispatch} from 'react-redux';
import {authToken} from '../../../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const dispatch = useDispatch();

  // checkToken

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      dispatch(authToken(token));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={splashScreenStyle.backgroundImage}>
        <View style={splashScreenStyle.content}>
          <SplashBulb />
          <Text style={splashScreenStyle.splashText}>Live Task AI</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
