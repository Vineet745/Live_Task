import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {editStudentStyle} from './editStudentStyle';
import EditBlack from '../../../assets/images/edit_black.svg';
import Mainbutton from '../../../components/mainComponent/Mainbutton';
import {editStudent} from '../../../service/api/studentApi';
import Loader from '../../../utils/Loader';
import {toast} from '../../../service/ToastMessage';

const EditStudent = ({route, navigation}) => {
  const {
    params: {item},
  } = route;
  const [email, setEmail] = useState(item.email);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // handleEdit

  const handleEditStudent = async () => {
    let data = {
      email: email,
      password: newPassword,
      confirmPassword: confirmPassword,
    };
    try {
      setLoading(true);
      const resData = await editStudent({data});
      navigation.navigate('My Student');
      setLoading(false);
    } catch (error) {
      console.log('error', error.response.data.message);
      setLoading(false);
      toast({type: 'error', text1: error.response.data.message});
    }
  };

  return (
    <View style={editStudentStyle.editMain}>
      <Loader loading={loading} />
      <View style={editStudentStyle.studentContainer}>
        <View style={editStudentStyle.studentTopContainer}>
          <Text style={editStudentStyle.studentLabelName}>Email</Text>
          <TextInput
            style={editStudentStyle.input}
            placeholder="Student@gmail.com"
            value={email}
            onChangeText={val => setEmail(val)}
          />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <View style={editStudentStyle.studentContainer}>
        <View style={editStudentStyle.studentTopContainer}>
          <Text style={editStudentStyle.studentLabelName}>
            Create New Password
          </Text>
          <TextInput
            style={editStudentStyle.input}
            secureTextEntry
            placeholder="Enter New Password"
            placeholderTextColor="black"
            value={newPassword}
            onChangeText={val => setNewPassword(val)}
          />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <View style={editStudentStyle.studentContainer}>
        <View style={editStudentStyle.studentTopContainer}>
          <Text style={editStudentStyle.studentLabelName}>
            Confirm Password
          </Text>
          <TextInput
            style={editStudentStyle.input}
            secureTextEntry
            placeholder="Enter Confirm Password"
            placeholderTextColor="black"
            value={confirmPassword}
            onChangeText={val => setConfirmPassword(val)}
          />
        </View>
        <TouchableOpacity>
          <EditBlack />
        </TouchableOpacity>
      </View>
      <Mainbutton width={120} text="Save" action={handleEditStudent} />
    </View>
  );
};

export default EditStudent;
