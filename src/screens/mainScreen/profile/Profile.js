import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {profileStyle} from './profileStyle';
import ImageEdit from '../../../assets/images/image_edit.svg';
import Coin from '../../../assets/images/coin.svg';
import RightArrow from '../../../assets/images/update_password_arrow.svg';
import LogOutModal from '../../../components/modals/LogOutModal';
import {getUserProfile, updateUserImage} from '../../../service/api/userApi';
import {useFocusEffect} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Loader from '../../../utils/Loader';
import CameraModal from '../../../components/modals/CameraModal';

const Profile = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState('');
  const [uri, setUri] = useState('');
  const [loading, setLoading] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);

  const originalPath = 'https://livetask-ai.hackerkernel.co/'.concat(
    userData.image_path,
  );
  // Check Variable
  const show = false;

  useFocusEffect(
    useCallback(() => {
      handleUserProfile();
    }, []),
  );

  // Open Modal
  const openModal = () => {
    setOpen(true);
  };

  // Close Modal

  const closeModal = () => {
    setOpen(false);
  };

  const openCamera = () => {
    setCameraOpen(true);
  };

  const closeCamera = () => {
    setCameraOpen(false);
  };

  // Get User Detail

  const handleUserProfile = async () => {
    setLoading(true);
    try {
      const {data} = await getUserProfile();
      setUserData(data?.data);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  // Crop Picker open Gallery

  const handleOpenGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: true,
        cropperToolbarTitle: 'Crop Image',
        aspectRatio: [4, 4],
        quality: 1,
      });
      setUri(image.path);
      handleUserImage(userData, image);
      if (!image.cancelled) {
      } else {
        console.log('Image picker canceled');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        mediaType: 'photo',
        cropping: true,
        cropperToolbarTitle: 'Crop Image',
        aspectRatio: [4, 4],
        quality: 1,
      });
      setUri(image.path);
      handleUserImage(userData, image);
      if (!image.cancelled) {
      } else {
        console.log('Image picker canceled');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Update User Profile
  const handleUserImage = async (userData, image) => {
    const updatedUserData = {
      profile_image: image,
      username: userData.username,
    };
    console.log("userData",updatedUserData)

    try {
      await updateUserImage(updatedUserData);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Loader loading={loading} />
      <LogOutModal
        open={open}
        closeModal={closeModal}
        navigation={navigation}
      />
      <CameraModal
        open={cameraOpen}
        closeModal={closeCamera}
        openGallery={handleOpenGallery}
        openCamera={handleOpenCamera}
      />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: 'lightGreen',
          padding: horizontalScale(15),
        }}>
        <View style={profileStyle.profileImageContainer}>
          <View style={profileStyle.imageRectangle}>
            <View style={profileStyle.imageCircle}>
              <Image
                style={{height: '100%'}}
                source={{uri: uri ? uri : originalPath}}></Image>
            </View>
            <TouchableOpacity
              onPress={openCamera}
              style={profileStyle.imageEdit}>
              <ImageEdit />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Profile Stack', {screen:"Edit",
                params: {username: userData.username},
              })
              
            }
            style={profileStyle.profileEditButton}>
            <Text style={profileStyle.profileEditText}>Edit</Text>
            <ImageEdit />
          </TouchableOpacity>
        </View>
        <View style={profileStyle.profileDetail}>
          {/* <View style={profileStyle.singleDetailContainer}>
            <Text style={profileStyle.singleDetailContainerLable}>Name</Text>
            <Text style={profileStyle.singleDetailContainerText}>
              Maria Nolan
            </Text>
          </View> */}
          <View style={profileStyle.singleDetailContainer}>
            <Text style={profileStyle.singleDetailContainerLable}>E mail</Text>
            <Text style={profileStyle.singleDetailContainerText}>
              {userData.email}
            </Text>
          </View>
          <View style={profileStyle.singleDetailContainer}>
            <Text style={profileStyle.singleDetailContainerLable}>
              User Name
            </Text>
            <Text style={profileStyle.singleDetailContainerText}>
              {userData.username}
            </Text>
          </View>
          <View style={profileStyle.singleDetailContainer}>
            <Text style={profileStyle.singleDetailContainerLable}>
              Available Credits
            </Text>
            <View style={profileStyle.creditContainer}>
              <View style={profileStyle.creditLeftContainer}>
                <Coin />
                <Text style={profileStyle.creditText}>1000</Text>
              </View>
              <TouchableOpacity style={profileStyle.buyButton}>
                <Text style={profileStyle.buyText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={profileStyle.updatePassword}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Update Password', {
                  params: {show: show},
                })
              }
              style={profileStyle.updatePasswordInnerContainer}>
              <Text style={profileStyle.updatePasswordText}>
                Update Password
              </Text>
              <RightArrow width={30} height={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={openModal}
            style={profileStyle.logOutContainer}>
            <Text style={profileStyle.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
