import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomAuthHeader from '../../../components/authComponent/CustomAuthHeader';
import {useForm, Controller} from 'react-hook-form';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import AuthButton from '../../../components/authComponent/AuthButton';
import {loginStyle} from './loginStyle';
import {useNavigation} from '@react-navigation/native';
import SmallRectangle from '../../../assets/images/small_rectangle.svg';
import UserEmail from '../../../assets/images/inputMail.svg';
import UserLock from '../../../assets/images/inputLock.svg';
import Google from '../../../assets/images/google.svg';
import Fb from '../../../assets/images/fb.svg';
import Apple from '../../../assets/images/apple.svg';
import {loginUser} from '../../../service/api/authApi';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authToken} from '../../../redux/slice/authSlice';
import Loader from '../../../utils/Loader';
import {toast} from '../../../service/ToastMessage';
import {onGoogleButtonPress, signOutGoogle} from '../../../service/authLogin';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Google SignIn

  // const onGoogleButtonPress = async () => {
  //   try {
  //     GoogleSignin.configure({
  //       webClientId:
  //         '35178936416-js1adf66idue7qa3as8151ihh40nmkbs.apps.googleusercontent.com',
  //       offlineAccess: false,
  //     });
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log(userInfo, 'userInfo thejb j j');
  //     const {idToken, access_token} = userInfo;
  //     const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
  //     console.log(googleCredentials, 'googleCredentials <<');
  //     const userCredential = await auth().signInWithCredential(
  //       googleCredentials,
  //     );
  //     console.log(userCredential, 'userCredential  ??????');
  //     console.log('Successfully signed in with Google:', userCredential.user);
  //   } catch (error) {}
  // };

  // Login By the Email AND Id

  const handleLogin = async data => {
    const userData = {
      email: data.email,
      password: data.password,
      role: 'TCH',
    };
    try {
      setLoading(true);
      const {data} = await loginUser({userData});
      await AsyncStorage.setItem('Token', data?.data?.access_token);
      dispatch(authToken(data?.data?.access_token));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: 'Credential Error'});
    }
  };

  // Email Validation

  const isEmailValid = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={loginStyle.loginMain}>
        <StatusBar barStyle="dark-content" />
        <Loader loading={loading} />
        <View style={loginStyle.loginTopView}>
          <CustomAuthHeader />
          <View style={loginStyle.welcomeMain}>
            <View style={loginStyle.welcomeTextView}>
              <Text style={loginStyle.welcomeText}>Welcome Back !</Text>
            </View>

            <Text style={loginStyle.welcomePara}>
              Login your Live Task AI account
            </Text>
          </View>
          <View style={loginStyle.detailView}>
            <View style={{marginBottom: verticalScale(15)}}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Email is Required',
                  validate: value =>
                    isEmailValid(value) || 'Please Enter Valid Email',
                }}
                render={({field}) => (
                  <View style={loginStyle.inputBoxView}>
                    <UserEmail />
                    <TextInput
                      value={field.value}
                      onChangeText={field.onChange}
                      placeholderTextColor={'grey'}
                      style={loginStyle.input}
                      placeholder="Enter your Email"></TextInput>
                  </View>
                )}></Controller>
              {errors.email && (
                <Text style={loginStyle.errorText}>{errors.email.message}</Text>
              )}
            </View>

            <View style={{marginBottom: verticalScale(15)}}>
              <Controller
                control={control}
                name="password"
                rules={{required: true}}
                render={({field}) => (
                  <View style={loginStyle.inputBoxView}>
                    <UserLock />
                    <TextInput
                      secureTextEntry
                      value={field.value}
                      onChangeText={field.onChange}
                      placeholderTextColor={'grey'}
                      style={loginStyle.input}
                      placeholder="Enter Your password"></TextInput>
                  </View>
                )}></Controller>
              {errors.password && (
                <Text style={loginStyle.errorText}>Password is required</Text>
              )}
            </View>
            <View style={loginStyle.forgotPassword}>
              <Text style={loginStyle.forgotPasswordTextOne}>
                Forgot Password ?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Forgot Password')}>
                <Text style={loginStyle.forgotPasswordTextTwo}>Reset</Text>
              </TouchableOpacity>
            </View>
            <AuthButton text="Login" action={handleSubmit(handleLogin)} />
          </View>
        </View>

        <View style={loginStyle.bottomView}>
          <View style={loginStyle.lineBreak}>
            <View style={loginStyle.leftLine}></View>
            <Text style={loginStyle.centerText}>Or Log in using</Text>
            <View style={loginStyle.rightLine}></View>
          </View>
          <View style={loginStyle.socialAccounts}>
            <TouchableOpacity
              onPress={() => onGoogleButtonPress(dispatch)}
              style={loginStyle.socialAccountItem}>
              <Google width={40} />
            </TouchableOpacity>
            <TouchableOpacity style={loginStyle.socialAccountItem}>
              <Fb />
            </TouchableOpacity>
            <TouchableOpacity style={loginStyle.socialAccountItem}>
              <Apple />
            </TouchableOpacity>
          </View>
          <View style={loginStyle.registerOption}>
            <Text style={loginStyle.registerOptionTextOne}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={loginStyle.registerLinkText}>Register</Text>
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

export default Login;
