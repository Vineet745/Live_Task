import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomAuthHeader from '../../../components/authComponent/CustomAuthHeader';
import {useForm, Controller} from 'react-hook-form';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import AuthButton from '../../../components/authComponent/AuthButton';
import {useNavigation} from '@react-navigation/native';
import {forgotPasswordStyle} from './forgotPasswordStyle';
import UserEmail from '../../../assets/images/inputMail.svg';
// import BigRectangle from '../../../assets/images/big-rectangle.svg';
import {forgotPassword} from '../../../service/api/authApi';
import Loader from '../../../utils/Loader';
import {toast} from '../../../service/ToastMessage';
import {resetPasswordStyle} from './resetPasswordStyle';
import MainButton from '../../../components/mainComponent/Mainbutton';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import { isEmailValid } from '../../../utils/HelperFunction';

const Reset = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // handle-Forgot-Password

  const handleForgotPassword = async data => {
    const userData = {
      email: data.email,
    };

    try {
      setLoading(true);
      const data = await forgotPassword({userData});
      navigation.navigate('Profile Stack', { screen: 'Verification', params: { email: userData.email }
      });
      setLoading(false);
    } catch (error) {
      console.log('error', error.response);
      setLoading(false);
      toast({type: 'error', text1: error.response.data.message});
    }
  };

  

  return (
    <View style={resetPasswordStyle.forgotPasswordMain}>
      <Loader loading={loading} />
      <View style={resetPasswordStyle.forgotPasswordTopView}>
        <View style={resetPasswordStyle.welcomeMain}>
          <Text style={resetPasswordStyle.welcomePara}>
            Don't worry, reset your password
          </Text>
        </View>
        <View style={resetPasswordStyle.detailView}>
          <View style={{marginBottom: verticalScale(15)}}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is Required',
                validate: value => isEmailValid(value) || 'Email is not valid',
              }}
              render={({field}) => (
                <View style={resetPasswordStyle.inputBoxView}>
                  <UserEmail />
                  <TextInput
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholderTextColor={'grey'}
                    style={resetPasswordStyle.input}
                    placeholder="Enter your Email"></TextInput>
                </View>
              )}></Controller>
            {errors.email && (
              <Text style={resetPasswordStyle.errorText}>
                {errors.email.message}
              </Text>
            )}
          </View>

          <Mainbutton
            text="Get Verification Code"
            width={270}
            action={handleSubmit(handleForgotPassword)}
          />
        </View>
      </View>
      <View style={{minHeight: 50, justifyContent: 'flex-end'}}>
        {/* <BigRectangle /> */}
      </View>
    </View>
  );
};

export default Reset;
