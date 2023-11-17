import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
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
import StudentSelectionModal from '../../../components/modals/StudentSelectionModal';
import {isEmailValid} from '../../../utils/HelperFunction';
import {useDispatch, useSelector} from 'react-redux';
import {addClass} from '../../../service/api/classApi';
import {dispatchCommand} from 'react-native-reanimated';
import {toast} from '../../../service/ToastMessage';

const AddClass = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {selectedValue} = useSelector(state => state.checkbox);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  // const open

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Add Class

  const handleAddClass = async data => {
    const query = {
      className: data.className,
      studentIds: selectedValue,
    };

    try {
      await addClass({query});
      navigation.navigate('My Class');
    } catch (error) {
      console.log('error', error);
      toast({type: 'error', text1: error.response.data.message});
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
      <StudentSelectionModal open={isOpen} closeModal={handleClose} />
      <View style={addClassStyle.detailView}>
        <View style={{marginBottom: verticalScale(15)}}>
          <Controller
            control={control}
            name="className"
            rules={{
              required: 'ClassName is Required',
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
        <TouchableOpacity
          onPress={handleOpen}
          style={addClassStyle.assignmentName}>
          <View style={addClassStyle.assignmentLogo}>
            <UserLogo />
          </View>
          <TextInput
            editable={false}
            placeholderTextColor="#878787"
            placeholder="Select Student"
            style={addClassStyle.input}
          />
        </TouchableOpacity>

        <View style={addClassStyle.customError}>
          <Text style={addClassStyle.customErrorText}>
            ( {selectedValue.length >0 ?selectedValue.length:"0"} Student Selected)
          </Text>
        </View>
        <Mainbutton
          text="Create Class"
          width={290}
          action={handleSubmit(handleAddClass)}
        />
      </View>
    </View>
  );
};

export default AddClass;
