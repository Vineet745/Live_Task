import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Register from '../screens/authScreen/register/Register';
import Login from '../screens/authScreen/login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Reset from '../screens/authScreen/fogotPassword/forgotPassword';
import Verification from '../screens/authScreen/verification/Verification';
import OptionScreen from '../screens/authScreen/optionScreen/OptionScreen';
import ResetPassword from '../screens/authScreen/resetPassword/ResetPassword';
import SplashScreen from '../screens/authScreen/splashScreen/SplashScreen';
import Success from '../screens/authScreen/success/Success';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  // Splash Timer

  const [splashTimer, setSplashTimer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashTimer(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (splashTimer) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Option Screen" component={OptionScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgot Password" component={Reset} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};

export default AuthStack;
