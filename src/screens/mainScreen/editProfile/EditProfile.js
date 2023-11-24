import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import EditBlack from '../../../assets/images/edit_black.svg';
import {editProfileStyle} from './editProfileStyle';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {horizontalScale} from '../../../constants/dimension';
import {updateUserProfile} from '../../../service/api/userApi';
import {useNavigation} from '@react-navigation/native';
import { toast } from '../../../service/ToastMessage';
import { handleInputValidation } from '../../../utils/HelperFunction';

const EditProfile = ({route}) => {
  const {
    params: {username},
  } = route;
  const {navigate} = useNavigation();
  const [inputValue, setInputValue] = useState(username);

  

  

  // Update Profile

  const handleUpdateProfile = async () => {
    try {
      await updateUserProfile(inputValue);
      navigate('Profile Stack',{screen:"Profile View"});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={editProfileStyle.editMain}>
      <View style={editProfileStyle.studentContainer}>
        <View style={editProfileStyle.studentTopContainer}>
          <Text style={editProfileStyle.studentLabelName}>User Name</Text>
          <TextInput
          aria-valuemax={25}
            style={editProfileStyle.input}
            value={inputValue}
            onChangeText={(val)=>handleInputValidation({newValue:val
              ,limit:15, error:"User Name",setValue:setInputValue})}
          />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <Mainbutton width={120} text="Save" action={handleUpdateProfile} />
    </View>
  );
};

export default EditProfile;
