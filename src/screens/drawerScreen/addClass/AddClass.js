import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {color} from '../../../constants/theme';
import UserEmail from '../../../assets/images/inputMail.svg';
import UserLock from '../../../assets/images/inputLock.svg';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {Controller, useForm} from 'react-hook-form';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {addClassStyle} from './addClassStyle';
import ClassBook from '../../../assets/images/class_book.svg';
import UserLogo from '../../../assets/images/inputUser.svg';
import CustomDropdown, {CustomDropDown} from '../../../utils/CustomDropDown';

const AddClass = () => {
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
      <View style={addClassStyle.detailView}>
        <View style={{marginBottom: verticalScale(15)}}>
          <Controller
            control={control}
            name="className"
            rules={{
              required: 'ClassName is Required',
              validate: value =>
                isEmailValid(value) || 'Please Enter Valid Class',
            }}
            render={({field}) => (
              <View style={addClassStyle.inputBoxView}>
                <ClassBook />
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  placeholderTextColor={'grey'}
                  style={addClassStyle.input}
                  placeholder="Enter Class Name"></TextInput>
              </View>
            )}></Controller>
          {errors.email && (
            <Text style={addClassStyle.errorText}>{errors.email.message}</Text>
          )}
        </View>
        <View
          style={addClassStyle.dropDown}>
          <View style={addClassStyle.dropDownLogo}>
            <UserLogo />
          </View>
          <CustomDropDown width={300} text="Select Class" />
        </View>

        <View style={addClassStyle.customError}>
          <Text style={addClassStyle.customErrorText}>
            ( 0 Student Selected)
          </Text>
        </View>
        <Mainbutton text="Create Class" width={290} />
      </View>
    </View>
  );
};

export default AddClass;
