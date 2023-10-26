import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import MainStack from './MainStack';

const AppStack = () => {
  const {token} = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {token ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppStack;
