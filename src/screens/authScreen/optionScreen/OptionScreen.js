import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {optionScreenStyle} from './optionScreenStyle';
import AuthButton from '../../../components/authComponent/AuthButton';
import {useNavigation} from '@react-navigation/native';
import Bulb from '../../../assets/images/bulb.svg';
import {verticalScale} from '../../../constants/dimension';
import BigRectangle from '../../../assets/images/big-rectangle.svg';
const OptionScreen = () => {
  // navigate to Register Screen
  const {navigate} = useNavigation();

  return (
    <View style={optionScreenStyle.opitonScreenMain}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={optionScreenStyle.optionTopView}>
        <View style={optionScreenStyle.optionImage}>
          <View style={optionScreenStyle.imageContainer}>
            <Bulb />
            <View style={{marginTop: verticalScale(5)}}>
              <Text style={optionScreenStyle.logoText}>Live Task AI</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={optionScreenStyle.registerView}>
            <Text style={optionScreenStyle.registerViewText}>
              Create your first Live Task AI account
            </Text>
            <TouchableOpacity
              onPress={() => navigate('Register')}
              style={optionScreenStyle.registerButton}>
              <Text style={optionScreenStyle.registerButtonText}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={optionScreenStyle.loginView}>
            <Text style={optionScreenStyle.registerViewText}>
              Have an account ? Login to your account
            </Text>
            <TouchableOpacity
              onPress={() => navigate('Login')}
              style={optionScreenStyle.button}>
              <Text style={optionScreenStyle.buttonText}>
                Already have an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <BigRectangle />
      </View>
    </View>
  );
};

export default OptionScreen;
