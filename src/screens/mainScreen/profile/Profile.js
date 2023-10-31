import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React,{useState} from 'react';
import {horizontalScale, verticalScale} from '../../../constants/dimension';
import {profileStyle} from './profileStyle';
import ImageEdit from '../../../assets/images/image_edit.svg';
import Coin from '../../../assets/images/coin.svg';
import RightArrow from '../../../assets/images/update_password_arrow.svg';
import LogOutModal from '../../../components/modals/LogOutModal';

const Profile = ({navigation}) => {
  const [open, setOpen] = useState(false)


const openModal = ()=>{
  setOpen(true)
}

const closeModal = ()=>{
  setOpen(false)
}



  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <LogOutModal open={open} closeModal={closeModal} navigation={navigation}/>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{height: verticalScale(60), borderWidth: 1}}></View>
      <View
        style={{
          backgroundColor: 'lightGreen',
          padding: horizontalScale(15),
        }}>
        <View style={profileStyle.profileImageContainer}>
          <View style={profileStyle.imageRectangle}>
            <View style={profileStyle.imageCircle}></View>
            <TouchableOpacity style={profileStyle.imageEdit}>
              <ImageEdit />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={profileStyle.profileEditButton}>
            <Text style={profileStyle.profileEditText}>Edit</Text>
            <ImageEdit />
          </TouchableOpacity>
        </View>
        <View style={profileStyle.profileDetail}>
          <View style={profileStyle.singleDetailContainer}>
            <Text style={profileStyle.singleDetailContainerLable}>Name</Text>
            <Text style={profileStyle.singleDetailContainerText}>
              Maria Nolan
            </Text>
          </View>
          <View style={profileStyle.singleDetailContainer}>
            <Text style={profileStyle.singleDetailContainerLable}>E mail</Text>
            <Text style={profileStyle.singleDetailContainerText}>
              mariyanolan001@gmail.com
            </Text>
          </View>
          <View style={profileStyle.singleDetailContainer}>
            <Text style={profileStyle.singleDetailContainerLable}>
              User Name
            </Text>
            <Text style={profileStyle.singleDetailContainerText}>
              Maria Nolan
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
            <TouchableOpacity style={profileStyle.updatePasswordInnerContainer}>
              <Text style={profileStyle.updatePasswordText}>
                Update Password
              </Text>
              <RightArrow width={30} height={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={openModal} style={profileStyle.logOutContainer}>
            <Text style={profileStyle.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
