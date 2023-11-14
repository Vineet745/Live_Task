import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomAuthHeader from '../../../components/authComponent/CustomAuthHeader';
import {verticalScale} from '../../../constants/dimension';
import {useForm, Controller} from 'react-hook-form';
import UserLock from '../../../assets/images/inputLock.svg';
import BigRectangle from '../../../assets/images/big-rectangle.svg';
import {changePassword} from '../../../service/api/authApi';
import {useNavigation} from '@react-navigation/native';
import {toast} from '../../../service/ToastMessage';
import Loader from '../../../utils/Loader';
import {updatePasswordStyle} from './updatePasswordStyle';
import Button from '../../../components/mainComponent/Mainbutton';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import { isPasswordValid } from '../../../utils/HelperFunction';

const UpdatePassword = ({route}) => {
  const {
    params: {show},
  } = route;

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {navigate} = useNavigation();
  // handleNew Password

  // Password

  

  return (
    <View style={updatePasswordStyle.resetPasswordMain}>
      <Loader loading={loading} />
      <View style={updatePasswordStyle.resetPasswordTopView}>
        <View style={updatePasswordStyle.welcomeMain}>
          <Text style={updatePasswordStyle.welcomePara}>
            Your New password must be different from your Previous password
          </Text>
        </View>
        <View style={updatePasswordStyle.detailView}>
          <View style={{marginBottom: verticalScale(15)}}>
            <Controller
              control={control}
              name="currentPassword"
              rules={{
                required: 'Enter Current Password',
                validate: value =>
                  isPasswordValid(value) ||
                  'Must contain special Number and alphabetic Values',
              }}
              render={({field}) => (
                <View style={updatePasswordStyle.inputBoxView}>
                  <UserLock />
                  <TextInput
                    secureTextEntry
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholderTextColor={'grey'}
                    style={updatePasswordStyle.input}
                    placeholder="Enter current password"></TextInput>
                </View>
              )}></Controller>
            {errors.newPassword && (
              <Text style={updatePasswordStyle.errorText}>
                {errors.newPassword.message}
              </Text>
            )}
          </View>

          <View style={{marginBottom: verticalScale(15)}}>
            <Controller
              control={control}
              name="newPassword"
              rules={{required: 'New Password is Required'}}
              render={({field}) => (
                <View style={updatePasswordStyle.inputBoxView}>
                  <UserLock />
                  <TextInput
                    secureTextEntry
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholderTextColor={'grey'}
                    style={updatePasswordStyle.input}
                    placeholder="Enter new password"></TextInput>
                </View>
              )}></Controller>
            {errors.confirmPassword && (
              <Text style={updatePasswordStyle.errorText}>
                Confirm Password is required
              </Text>
            )}
          </View>

          <View style={{marginBottom: verticalScale(15)}}>
            <Controller
              control={control}
              name="confirmPassword"
              rules={{required: 'Confirm Password is Required'}}
              render={({field}) => (
                <View style={updatePasswordStyle.inputBoxView}>
                  <UserLock />
                  <TextInput
                    secureTextEntry
                    value={field.value}
                    onChangeText={field.onChange}
                    placeholderTextColor={'grey'}
                    style={updatePasswordStyle.input}
                    placeholder="Confirm password"></TextInput>
                </View>
              )}></Controller>
            {errors.confirmPassword && (
              <Text style={updatePasswordStyle.errorText}>
                Confirm Password is required
              </Text>
            )}
          </View>
          {show === true ? null : (
            <View style={updatePasswordStyle.forgotView}>
              <Text style={updatePasswordStyle.forgotText}>
                Forgot Current Password ?
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigate('Profile Stack', {screen: 'Reset Password'})
                }
                style={updatePasswordStyle.resetButton}>
                <Text style={updatePasswordStyle.resetButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={{marginVertical: verticalScale(10)}}>
            <Mainbutton width={300} text="Update Password" />
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default UpdatePassword;
