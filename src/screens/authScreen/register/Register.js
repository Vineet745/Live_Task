import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import CustomAuthHeader from '../../../components/authComponent/CustomAuthHeader';
import {registerStyle} from './registerStyle';
import {useForm, Controller} from 'react-hook-form';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import AuthButton from '../../../components/authComponent/AuthButton';
import {useNavigation} from '@react-navigation/native';
import SmallRectangle from '../../../assets/images/small_rectangle.svg';
import UserLogo from '../../../assets/images/inputUser.svg';
import UserEmail from '../../../assets/images/inputMail.svg';
import UserLock from '../../../assets/images/inputLock.svg';
import Google from '../../../assets/images/google.svg';
import Fb from '../../../assets/images/fb.svg';
import Apple from '../../../assets/images/apple.svg';
import {RegisterUser} from '../../../service/api/authApi';
import {useDispatch} from 'react-redux';
import {authToken} from '../../../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toast} from '../../../service/ToastMessage';
import UserLang from '../../../assets/images/inputLanguage.svg';
import Loader from '../../../utils/Loader';
import { onGoogleButtonPress } from '../../../service/authLogin';
import { CustomDropDown } from '../../../utils/CustomDropDown';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [loading, setloading] = useState(false);

  // Register User

  const handleRegister = async data => {
    const userData = {
      name: data.name,
      email: data.email,
      language: value,
      password: data.password,
      role: 'TCH',
    };
    try {
      setloading(true);
      const {data} = await RegisterUser({userData});
      await AsyncStorage.setItem('Token', data?.data?.access_token);
      dispatch(authToken(data?.data?.access_token));
      setloading(false);
    } catch (error) {
      toast({type: 'error', text1: error.response.data.message});
      setloading(false);
    }
  };

  // Is Valid Email

  const isEmailValid = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // Is Password Valid

  const isPasswordValid = password => {
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={registerStyle.registerMain}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Loader loading={loading} />
        <View style={registerStyle.registerTopView}>
          <CustomAuthHeader />
          <View style={registerStyle.welcomeMain}>
            <View style={registerStyle.welcomeTextView}>
              <Text style={registerStyle.welcomeText}>Welcome !</Text>
            </View>

            <Text style={registerStyle.welcomePara}>
              Create your Live Task AI account
            </Text>
          </View>
          <View style={registerStyle.detailView}>
            <View style={{marginBottom: verticalScale(10)}}>
              <Controller
                control={control}
                name="name"
                rules={{required: 'Enter your Name'}}
                defaultValue=""
                render={({field}) => (
                  <View style={registerStyle.inputBoxView}>
                    <UserLogo />
                    <TextInput
                      value={field.value}
                      onChangeText={field.onChange}
                      placeholderTextColor={'grey'}
                      style={registerStyle.input}
                      placeholder="Enter your Name"></TextInput>
                  </View>
                )}></Controller>
              {errors.name && (
                <Text style={registerStyle.errorText}>Name is required</Text>
              )}
            </View>

            <View style={{marginBottom: verticalScale(10)}}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Email is Required',
                  validate: value =>
                    isEmailValid(value) || 'Valid Email is Required',
                }}
                render={({field}) => (
                  <View style={registerStyle.inputBoxView}>
                    <UserEmail />
                    <TextInput
                      value={field.value}
                      onChangeText={field.onChange}
                      placeholderTextColor={'grey'}
                      style={registerStyle.input}
                      placeholder="Enter your Email"></TextInput>
                  </View>
                )}></Controller>
              {errors.email && (
                <Text style={registerStyle.errorText}>
                  {errors.email.message}
                </Text>
              )}
            </View>

            <View style={registerStyle.dropDown}>
              <View style={{padding: 3}}>
                <UserLang />
              </View>
              <CustomDropDown value={value} setValue={setValue} width={285} text="Select Language"/>
            </View>

            <View style={{marginBottom: verticalScale(10)}}>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: 'password is Required',
                  validate: value =>
                    isPasswordValid(value) ||
                    'Password must contain special ,Number and alphabetic values',
                }}
                render={({field}) => (
                  <View style={registerStyle.inputBoxView}>
                    <UserLock />
                    <TextInput
                      secureTextEntry
                      value={field.value}
                      onChangeText={field.onChange}
                      placeholderTextColor={'grey'}
                      style={registerStyle.input}
                      placeholder="Enter Your password"></TextInput>
                  </View>
                )}></Controller>
              {errors.password && (
                <Text style={registerStyle.errorText}>
                  {errors.password.message}
                </Text>
              )}
            </View>
            <AuthButton
              text="Create Your Account"
              action={handleSubmit(handleRegister)}
            />
          </View>
        </View>
        <View style={registerStyle.bottomView}>
          <View style={registerStyle.lineBreak}>
            <View style={registerStyle.leftLine}></View>
            <Text style={registerStyle.centerText}>Or Sign up using</Text>
            <View style={registerStyle.rightLine}></View>
          </View>
          <View style={registerStyle.socialAccounts}>
            <TouchableOpacity onPress={()=>onGoogleButtonPress(dispatch)} style={registerStyle.socialAccountItem}>
              <Google width={40} />
            </TouchableOpacity>
            <TouchableOpacity style={registerStyle.socialAccountItem}>
              <Fb />
            </TouchableOpacity>
            <TouchableOpacity style={registerStyle.socialAccountItem}>
              <Apple />
            </TouchableOpacity>
          </View>
          <View style={registerStyle.loginOption}>
            <Text style={registerStyle.loginOptionTextOne}>
              I have an account ?
            </Text>
            <TouchableOpacity onPress={() => navigate('Login')}>
              <Text style={registerStyle.loginLinkText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              minHeight: verticalScale(50),
              justifyContent: 'flex-end',
              overflow: 'hidden',
            }}>
            <SmallRectangle />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
