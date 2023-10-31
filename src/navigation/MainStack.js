import {View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/mainScreen/home/Home';
import Credits from '../screens/mainScreen/credits/Credits';
import Explore from '../screens/mainScreen/explore/Explore';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../screens/mainScreen/profile/Profile';
import Transaction from '../screens/mainScreen/transaction/Transaction';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color, fonts, sizes} from '../constants/theme';
import HomeIcon from '../assets/images/home_icon.svg';
import UserIcon from '../assets/images/user.svg';
import {horizontalScale, verticalScale} from '../constants/dimension';
import {RFValue} from 'react-native-responsive-fontsize';
import CreditHistory from '../screens/mainScreen/creditHistory/CreditHistory';
import DebitHistory from '../screens/mainScreen/debitHistory/DebitHistory';
import SingleAssignment from '../screens/mainScreen/singleAssignment/SingleAssignment';
import {useDrawerStatus} from '@react-navigation/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeUserProfile from './components/HomeUserProfile';

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
        <TopTab.Screen name="Credits" component={CreditStack} />
      </TopTab.Navigator>
    </View>
  );
};

// CreditStack

const CreditStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Credit View"
        component={Credits}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transaction"
        component={TransactionTopStack}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerTitle: 'Transaction History',
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
          headerTitle: 'Assignment Name',
          // headerRight:()=>{
          //   return(
          //     <View style={{backgroundColor:color.darkPink,width:horizontalScale(30)}}>

          //     </View>
          //   )
          // }
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

// Drawer Stack

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerBackground: () => (
          <View style={{backgroundColor: color.darkPink, flex: 1}} />
        ),
        headerTitleStyle: {
          display: 'none',
        },
      }}>
      <Drawer.Screen name="HomeTopStack" component={HomeTopStack} />
    </Drawer.Navigator>
  );
};

// MainStack

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: color.darkPink,
          height: verticalScale(20),
          position: 'absolute',
          bottom: 10,
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={DrawerStack}
        options={{
          tabBarIcon: focused => {
            return (
              <View
                style={{
                  position: 'absolute',
                  top: -30,
                  backgroundColor: 'white',
                  borderRadius: 30,
                  padding: verticalScale(5),
                  elevation: 2,
                  borderWidth: 1,
                  shadowColor: 'grey',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.5,
                }}>
                <HomeIcon width={35} height={35} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: focused => {
            return (
              <View
                style={{
                  position: 'absolute',
                  top: -30,
                  backgroundColor: 'white',
                  borderRadius: 30,
                  padding: verticalScale(5),
                  elevation: 2,
                  borderWidth: 1,
                  shadowColor: 'grey',
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.5,
                }}>
                <UserIcon width={35} height={35} />
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen options={{tabBarItemStyle:{display:'none'}}} name='test' component={()=><Text>Yash</Text>} /> */}
    </Tab.Navigator>
  );
};

export default MainStack;
