import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React,{useState} from 'react';
import EditBlack from '../../../assets/images/edit_black.svg';
import {editProfileStyle} from './editProfileStyle';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import { horizontalScale } from '../../../constants/dimension';
import { updateUserProfile } from '../../../service/api/userApi';
import { useNavigation } from '@react-navigation/native';

const EditProfile = ({route}) => {
  const {params:{username}} = route;
  const {navigate} = useNavigation()
  const [inputValue, setInputValue] = useState(username)

  const handleInputChange = newValue => {
    setInputValue(newValue);
  };


  // Update Profile

  const handleUpdateProfile = async()=>{
    try {
       await updateUserProfile(inputValue)
        navigate("Profile")
    } catch (error) {
      console.log("error",error)
    }
  }


  return (
    <View style={editProfileStyle.editMain}>
    
      <View style={editProfileStyle.studentContainer}>
        <View style={editProfileStyle.studentTopContainer}>
          <Text style={editProfileStyle.studentLabelName}>User Name</Text>
          <TextInput
          style={editProfileStyle.input}
            value={inputValue}
            onChangeText={handleInputChange}
          />
        
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <Mainbutton width={120} text="Save" action={handleUpdateProfile}/>
    </View>
  );
};

export default EditProfile;
