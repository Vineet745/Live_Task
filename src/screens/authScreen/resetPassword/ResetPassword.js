import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {resetPasswordStyle} from './resetPasswordStyle';
import CustomAuthHeader from '../../../components/authComponent/CustomAuthHeader';
import {verticalScale} from '../../../constants/dimension';
import {useForm, Controller} from 'react-hook-form';
import UserLock from '../../../assets/images/inputLock.svg';
import BigRectangle from '../../../assets/images/big-rectangle.svg';
import {changePassword} from '../../../service/api/authApi';
import {useNavigation} from '@react-navigation/native';
import {toast} from '../../../service/ToastMessage';
import Loader from '../../../utils/Loader';

const ResetPassword = ({route}) => {
  const [loading, setLoading] = useState(false);

  const {
    params: {email},
  } = route;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {navigate} = useNavigation();
  // handleNew Password

  const handleChangePassword = async data => {
    const userData = {
      email: email,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
      role: 'TCH',
    };
    try {
      setLoading(true);
      await changePassword({userData});
      navigate('Success');
      setLoading(false);
    } catch (error) {
      console.log('error', error.response.data.message);
      setLoading(false);
      toast({type: 'error', text1: error.response.data.message});
    }
  };

  return (
    <View style={resetPasswordStyle.resetPasswordMain}>
      <Loader loading={loading} />
      <View style={resetPasswordStyle.resetPasswordTopView}>
        <CustomAuthHeader />
        <View style={resetPasswordStyle.welcomeMain}>
          <View style={resetPasswordStyle.welcomeTextView}>
            <Text style={resetPasswordStyle.welcomeText}>Reset Password</Text>
          </View>

          <Text style={resetPasswordStyle.welcomePara}>
            Your New password must be different from your Previous password
          </Text>
        </View>
        <View style={resetPasswordStyle.detailView}>
          <View style={{marginBottom: verticalScale(15)}}>
            <Controller
              control={control}
              name="newPassword"
              rules={{required: 'Enter new Password'}}
              render={({field}) => (
                <View style={resetPasswordStyle.inputBoxView}>
                  <UserLock />
                  <TextInput
                    secureTextEntry
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholderTextColor={'grey'}
                    style={resetPasswordStyle.input}
                    placeholder="Enter new password"></TextInput>
                </View>
              )}></Controller>
            {errors.newPassword && (
              <Text style={resetPasswordStyle.errorText}>
                New Password is required
              </Text>
            )}
          </View>

          <View style={{marginBottom: verticalScale(15)}}>
            <Controller
              control={control}
              name="confirmPassword"
              rules={{required: 'Confirm Password is Required'}}
              render={({field}) => (
                <View style={resetPasswordStyle.inputBoxView}>
                  <UserLock />
                  <TextInput
                    secureTextEntry
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholderTextColor={'grey'}
                    style={resetPasswordStyle.input}
                    placeholder="Confirm password"></TextInput>
                </View>
              )}></Controller>
            {errors.confirmPassword && (
              <Text style={resetPasswordStyle.errorText}>
                Confirm Password is required
              </Text>
            )}
          </View>
          <TouchableOpacity
            onPress={handleSubmit(handleChangePassword)}
            style={resetPasswordStyle.resetButton}>
            <Text style={resetPasswordStyle.resetButtonText}>
              Reset My password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <BigRectangle />
      </View>
    </View>
  );
};

export default ResetPassword;
