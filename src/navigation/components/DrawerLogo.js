import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import LiveTaskLogo from '../../assets/images/Live Task AI (1).svg';
import Bulb from '../../assets/images/bulb.svg';
import Cross from '../../assets/images/cross.svg';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {color, fonts, sizes} from '../../constants/theme';
import {RFValue} from 'react-native-responsive-fontsize';
import LogOutModal from '../../components/modals/LogOutModal';
import {useState} from 'react';

const DrawerLogo = props => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const handleCloseDrawer = () => {
    props.navigation.closeDrawer();
  };

  const openModal = () => {
    handleCloseDrawer()
    setOpen(true);
  };

  // Close Modal

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <DrawerContentScrollView {...props}>
      <LogOutModal
        open={open}
        closeModal={closeModal}
        navigation={navigation}
      />
      <View
        style={{
          width: '92%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: verticalScale(10),
          marginLeft: horizontalScale(10),
          borderBottomWidth:1,
          height:verticalScale(60),
          borderColor:"#b1b1b1"
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: horizontalScale(160),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Bulb width={40} height={40} />
          <Image
            style={{position: 'absolute', right: -5, width: 30, height: 30}}
            source={require('../../assets/images/bi_chat-fill.png')}
          />

          <Text
            style={{
              fontFamily: fonts.medium,
              fontSize: RFValue(sizes.h5, 667),
              color: color.black,
            }}>
            Live Task <Text style={{color: 'white', zIndex: 500}}> AI</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={handleCloseDrawer}>
          <Cross width={25} height={25} />
        </TouchableOpacity>
      </View>
      <DrawerItem
        style={{
          borderBottomWidth: 1.5,
          borderColor:"#b1b1b1"
        }}
        labelStyle={{
          fontFamily: fonts.medium,
          fontSize: RFValue(sizes.h6, 667),
          color: color.black,
        }}
        label="Home"
        onPress={() => navigation.navigate('HomeStack')}
      /> 
      <DrawerItem
        style={{
          borderBottomWidth: 1.5,
          borderColor:"#b1b1b1"
        }}
        labelStyle={{
          fontFamily: fonts.medium,
          fontSize: RFValue(sizes.h6, 667),
          color: color.black,
        }}
        label="My Students"
        onPress={() => navigation.navigate('My Students')}
      />
      <DrawerItem
        style={{
          borderBottomWidth: 1.5,
          borderColor:"#b1b1b1"
        }}
        labelStyle={{
          fontFamily: fonts.medium,
          fontSize: RFValue(sizes.h6, 667),
          color: color.black,
        }}
        label="My Classes"
        onPress={() => navigation.navigate('My Classes')}
      />
      <DrawerItem
        style={{
          borderBottomWidth: 1.5,
          borderColor:"#b1b1b1"
        }}
        labelStyle={{
          fontFamily: fonts.medium,
          fontSize: RFValue(sizes.h6, 667),
          color: color.black,
        }}
        label="All Assignment"
        onPress={() => navigation.navigate('All Assignment')}
      />
      <DrawerItem
        style={{
          borderBottomWidth: 1.5,
          borderColor:"#b1b1b1"
        }}
        labelStyle={{
          fontFamily: fonts.medium,
          fontSize: RFValue(sizes.h6, 667),
          color: color.black,
        }}
        label="All Tasks"
        onPress={() => navigation.navigate('All Tasks')}
      />
      <DrawerItem
        style={{
          borderBottomWidth: 1.5,
          borderColor:"#b1b1b1"
        }}
        labelStyle={{
          fontFamily: fonts.medium,
          fontSize: RFValue(sizes.h6, 667),
          color: color.black,
        }}
        label="Logout"
        onPress={openModal}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerLogo;
