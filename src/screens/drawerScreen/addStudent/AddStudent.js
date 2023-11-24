import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../../constants/theme';
import UserEmail from '../../../assets/images/inputMail.svg';
import UserLock from '../../../assets/images/inputLock.svg';
import {verticalScale} from '../../../constants/dimension';
import {Controller, useForm} from 'react-hook-form';
import {addStudentStyle} from './addStudentStyle';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {
  handleOpen,
  isEmailValid,
  isPasswordValid,
} from '../../../utils/HelperFunction';
import {
  addStudent,
  addStudentViaCsvFile,
} from '../../../service/api/studentApi';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../../utils/Loader';
import {toast} from '../../../service/ToastMessage';
import DocumentPicker from 'react-native-document-picker';

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
      multiple: false,
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

  // Open Picker

  const openFilePicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.csv],
      });
      const query = {
        studentfile:res[0].name,
        multiple: true,
        is_fake: false,
        studenturi:res[0].uri
      };
      setLoading(true)
      const data= await addStudentViaCsvFile(query);
      console.log("data",data.data)
      setLoading(false)
      navigation.navigate('My Student');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('File picking cancelled');
      } else {
        console.log('Error:', err.response);
        setLoading(false)
      }
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
          <TouchableOpacity
            onPress={openFilePicker}
            style={addStudentStyle.csvButton}>
            <TextInput
              editable={false}
              style={addStudentStyle.csvInput}
              placeholder="Add CSV File"
              placeholderTextColor="white"
            />
          </TouchableOpacity>
        </View>
        {/* <View></View> */}
      </View>
    </View>
  );
};

export default AddStudent;
