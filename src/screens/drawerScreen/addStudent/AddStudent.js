import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {color} from '../../../constants/theme';
import UserEmail from '../../../assets/images/inputMail.svg';
import UserLock from '../../../assets/images/inputLock.svg';
import {verticalScale} from '../../../constants/dimension';
import {Controller, useForm} from 'react-hook-form';
import {addStudentStyle} from './addStudentStyle';
import Mainbutton from '../../../components/mainComponent/Mainbutton';

const AddStudent = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const isEmailValid = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
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
                  placeholder="Create password"></TextInput>
              </View>
            )}></Controller>
          {errors.password && (
            <Text style={addStudentStyle.errorText}>Password is required</Text>
          )}
        </View>

        <View style={{marginBottom: verticalScale(15)}}>
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
        </View>

        <Mainbutton text="Add Student" width={290} />
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
