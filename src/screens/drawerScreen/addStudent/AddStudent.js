import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../../constants/theme';
import UserEmail from '../../../assets/images/inputMail.svg';
import UserLock from '../../../assets/images/inputLock.svg';
import {verticalScale} from '../../../constants/dimension';
import {Controller, useForm} from 'react-hook-form';
import {addStudentStyle} from './addStudentStyle';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {isEmailValid, isPasswordValid} from '../../../utils/HelperFunction';
import {addStudent} from '../../../service/api/studentApi';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../../utils/Loader';
import { toast } from '../../../service/ToastMessage';

const AddStudent = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation();

  // handle Add Student

  const handleAddStudent = async data => {
    const query = {
      email: data.email,
      password: data.password,
      is_fake: false,
    };
    try {
      setLoading(true);
      await addStudent({query});
      navigation.navigate('My Student');
      setLoading(false);
    } catch (error) {
      console.log('error', error.response.data.message);
      setLoading(false);
      toast({type: 'error', text1: error.response.data.message});
      
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
      <Loader loading={loading} />
      <View style={addStudentStyle.detailView}>
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
              <View style={addStudentStyle.inputBoxView}>
                <UserEmail />
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addStudentStyle.input}
                  placeholder="Enter student Email"></TextInput>
              </View>
            )}></Controller>
          {errors.email && (
            <Text style={addStudentStyle.errorText}>
              {errors.email.message}
            </Text>
          )}
        </View>

        <View style={{marginBottom: verticalScale(15)}}>
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
              <View style={addStudentStyle.inputBoxView}>
                <UserLock />
                <TextInput
                  secureTextEntry
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addStudentStyle.input}
                  placeholder="Create password"></TextInput>
              </View>
            )}></Controller>
          {errors.password && (
            <Text style={addStudentStyle.errorText}>
              {errors.password.message}
            </Text>
          )}
        </View>

        {/* <View style={{marginBottom: verticalScale(15)}}>
          <Controller
            control={control}
            name="confirmpassword"
            rules={{required: true}}
            render={({field}) => (
              <View style={addStudentStyle.inputBoxView}>
                <UserLock />
                <TextInput
                  secureTextEntry
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addStudentStyle.input}
                  placeholder="Confirm password"></TextInput>
              </View>
            )}></Controller>
          {errors.password && (
            <Text style={addStudentStyle.errorText}>Password is required</Text>
          )}
        </View> */}

        <Mainbutton
          text="Add Student"
          width={290}
          action={handleSubmit(handleAddStudent)}
        />
      </View>
      <View style={addStudentStyle.bottomView}>
        <View style={addStudentStyle.lineBreak}>
          <View style={addStudentStyle.leftLine}></View>
          <Text style={addStudentStyle.centerText}>Or</Text>
          <View style={addStudentStyle.rightLine}></View>
        </View>
        <View style={addStudentStyle.csvButtonView}>
          <Text style={addStudentStyle.csvButtonText}>Upload CSV File</Text>
          <Mainbutton text="Add CSV File" width={290} />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default AddStudent;
