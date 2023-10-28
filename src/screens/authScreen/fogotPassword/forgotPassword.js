import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomAuthHeader from '../../../components/authComponent/CustomAuthHeader';
import {useForm, Controller} from 'react-hook-form';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import AuthButton from '../../../components/authComponent/AuthButton';
import {useNavigation} from '@react-navigation/native';
import {forgotPasswordStyle} from './forgotPasswordStyle';
import UserEmail from '../../../assets/images/inputMail.svg';
import BigRectangle from '../../../assets/images/big-rectangle.svg';
import {forgotPassword} from '../../../service/api/authApi';
import Loader from '../../../utils/Loader';
import {toast} from '../../../service/ToastMessage';

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
      role: 'TCH',
    };

    try {
      setLoading(true);
      const data = await forgotPassword({userData});
      navigation.navigate('Verification', {email: userData.email});
      setLoading(false);
    } catch (error) {
      console.log('error', error.response);
      setLoading(false);
      toast({type: 'error', text1: error.response.data.message});
    }
  };

  const isEmailValid = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <View style={forgotPasswordStyle.forgotPasswordMain}>
      <Loader loading={loading} />
      <View style={forgotPasswordStyle.forgotPasswordTopView}>
        <CustomAuthHeader />
        <View style={forgotPasswordStyle.welcomeMain}>
          <View style={forgotPasswordStyle.welcomeTextView}>
            <Text style={forgotPasswordStyle.welcomeText}>
              Forgot Password !
            </Text>
          </View>

          <Text style={forgotPasswordStyle.welcomePara}>
            No worries , we'll send you reset instructions.
          </Text>
        </View>
        <View style={forgotPasswordStyle.detailView}>
          <View style={{marginBottom: verticalScale(15)}}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is Required',
                validate: value => isEmailValid(value) || 'Email is not valid',
              }}
              render={({field}) => (
                <View style={forgotPasswordStyle.inputBoxView}>
                  <UserEmail />
                  <TextInput
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholderTextColor={'grey'}
                    style={forgotPasswordStyle.input}
                    placeholder="Enter your Email"></TextInput>
                </View>
              )}></Controller>
            {errors.email && (
              <Text style={forgotPasswordStyle.errorText}>
                {errors.email.message}
              </Text>
            )}
          </View>

          <AuthButton
            text="Get Verification Code"
            action={handleSubmit(handleForgotPassword)}
          />
        </View>
      </View>
      <View style={{minHeight: 50, justifyContent: 'flex-end'}}>
        <BigRectangle />
      </View>
    </View>
  );
};

export default Reset;
