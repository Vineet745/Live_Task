import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Credits from '../screens/mainScreen/credits/Credits';
import Explore from '../screens/mainScreen/explore/Explore';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../screens/mainScreen/profile/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color, fonts, sizes} from '../constants/theme';
import {horizontalScale, verticalScale} from '../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import CreditHistory from '../screens/mainScreen/creditHistory/CreditHistory';
import DebitHistory from '../screens/mainScreen/debitHistory/DebitHistory';
import SingleAssignment from '../screens/mainScreen/singleAssignment/SingleAssignment';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeUserProfile from './components/HomeUserProfile';
import HomeIcon from '../assets/images/home_icon.svg';
import WhiteHome from "../assets/images/white_home.svg"
import UserIcon from '../assets/images/user.svg';
import GreenUser from "../assets/images/green_user.svg"
import StackCustomHeader from './components/StackCustomHeader';
import EditProfile from '../screens/mainScreen/editProfile/EditProfile';
import UpdatePassword from '../screens/mainScreen/updatePassword/UpdatePassword';
import ResetPassword from '../screens/mainScreen/resetPassword/ResetPassword';
import Verification from '../screens/mainScreen/verification/Verification';
import CustomDropdown from '../utils/CustomDropDown';
import LanguageDropdown from './components/LanguageDropdown';
import SingleTask from '../screens/mainScreen/singleTask/SingleTask';
import Balance from '../screens/mainScreen/balanceScreen/Balance';

// Navigator Imports

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// HomeTopStack

const HomeTopStack = () => {
  return (
    <View style={{flex: 1}}>
      <HomeUserProfile />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: fonts.semiBold,
            fontSize: RFValue(sizes.h7, 667),
          },
          tabBarStyle: {
            elevation: 0,
          },
        }}>
        <TopTab.Screen name="Explore" component={Explore} />
        <TopTab.Screen name="Credits" component={Credits} />
      </TopTab.Navigator>
    </View>
  );
};

// Profile Stack

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Edit"
        component={EditProfile}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Edit Information !" />;
          },
        }}
      />

      <Stack.Screen
        name="Update Password"
        component={UpdatePassword}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Update Password !" />;
          },
        }}
      />

      <Stack.Screen
        name="Reset Password"
        component={ResetPassword}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Reset Password !" />;
          },
        }}
      />

      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Verification !" />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

// CreditStack

const CreditStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transaction"
        component={TransactionTopStack}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerTitle: () => {
            return <StackCustomHeader text="Transaction History" />;
          },
        }}
      />
      <Stack.Screen
        name="Assignment"
        component={SingleAssignment}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Assignment Name" />;
          },
        }}
      />
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerBackVisible: false,
          
        }}
      />
    </Stack.Navigator>
  );
};



// Transaction Top Stack

const TransactionTopStack = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fonts.segoeUI,
          fontSize: RFValue(sizes.h6, 667),
          fontWeight: '600',
          color: color.black,
        },
        tabBarStyle: {
          elevation: 0,
        },
      }}>
      <TopTab.Screen name="Credit" component={CreditHistory} />
      <TopTab.Screen name="Debit" component={DebitHistory} />
    </TopTab.Navigator>
  );
};

// Bottom Stack

const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: color.darkPink,
          height: verticalScale(20),
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
  name="Home"
  component={HomeTopStack}
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      <View
        style={{
          position: 'absolute',
          top: -32,
          backgroundColor: focused ? "#04c38c" : "white",
          borderRadius: 30,
          padding: verticalScale(5),
          elevation: 2,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          width:50,
          height:50,
          alignItems:"center",
          justifyContent:"center",
          elevation:5
        }}
      >
        {focused ? <WhiteHome width={35} height={35} /> : <HomeIcon width={35} height={35} />}
      </View>
    ),
  }}
/>

      <Tab.Screen
        name="Profile Stack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                position: 'absolute',
                top: -32,
                backgroundColor: focused ? "#04c38c" : "white",
                borderRadius: 30,
                padding: verticalScale(5),
                elevation: 2,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                width:50,
                height:50,
                alignItems:"center",
                justifyContent:"center",
                elevation:5
              }}
            >
              {focused ? <GreenUser width={35} height={35} /> : <UserIcon width={45} height={45} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        options={{tabBarItemStyle: {display: 'none'}}}
        name="CreditStack"
        component={CreditStack}
      />
      <Tab.Screen
        options={{tabBarItemStyle: {display: 'none'}}}
        name="SingleTask"
        component={SingleTask}
      />
    </Tab.Navigator>
  );
};

// MainStack Drawer Stack

const MainStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerBackground: () => (
          <View style={{backgroundColor: color.darkPink, flex: 1}} />
        ),
        headerStyle:{
          height:verticalScale(55),
        },

        headerTitleStyle: {
          display: 'none',
        },
        headerRight: () => {
          return (
            <LanguageDropdown/>
            // <View
            //   style={{
            //     width: horizontalScale(110),
            //     marginRight: horizontalScale(20),
            //     borderRadius: 5,
            //     height: verticalScale(30),
            //     backgroundColor: 'white',
            //   }}></View>
          );
        },
        
      }}>
      <Drawer.Screen name="HomeStack" component={BottomStack} />
    </Drawer.Navigator>
  );
};

export default MainStack;
