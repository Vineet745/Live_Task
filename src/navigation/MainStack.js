import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  BackHandler,
  Keyboard,
  KeyboardEvent,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
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
import WhiteHome from '../assets/images/white_home.svg';
import UserIcon from '../assets/images/user.svg';
import GreenUser from '../assets/images/green_user.svg';
import StackCustomHeader from './components/StackCustomHeader';
import EditProfile from '../screens/mainScreen/editProfile/EditProfile';
import UpdatePassword from '../screens/mainScreen/updatePassword/UpdatePassword';
import ResetPassword from '../screens/mainScreen/resetPassword/ResetPassword';
import Verification from '../screens/mainScreen/verification/Verification';
import LanguageDropdown from './components/LanguageDropdown';
import SingleTask from '../screens/mainScreen/singleTask/SingleTask';
import Balance from '../screens/mainScreen/balanceScreen/Balance';
import MyStudents from '../screens/drawerScreen/myStudents/MyStudents';
import MyClasses from '../screens/drawerScreen/myClasses/MyClasses';
import AllAssignments from '../screens/drawerScreen/allAssignments/AllAssignments';
import AllTasks from '../screens/drawerScreen/allTasks/AllTasks';
import AddStudent from '../screens/drawerScreen/addStudent/AddStudent';
import SingleStudent from '../screens/drawerScreen/singleStudent/SingleStudent';
import EditStudent from '../screens/drawerScreen/editStudent/EditStudent';
import AddClass from '../screens/drawerScreen/addClass/AddClass';
import SingleClass from '../screens/drawerScreen/singleClass/SingleClass';
import ClassAssignment from '../screens/drawerScreen/classAssignment/ClassAssignment';
import ClassStudent from '../screens/drawerScreen/classStudents/ClassStudent';
import SingleAssigmentDetail from '../screens/drawerScreen/singleAssignmentDetail/SingleAssigmentDetail';
import EditClass from '../screens/drawerScreen/editClass/EditClass';
import Bulb from '../assets/images/bulb.svg';
import AssignClass from '../screens/drawerScreen/assignClasses/AssignClass';
import SelectAssignment from '../screens/drawerScreen/selectAssignment/SelectAssignment';
import {CustomDropDown} from '../utils/CustomDropDown';
import AssignmentDetail from '../screens/drawerScreen/assignmentDetail/AssignmentDetail';
import Report from '../screens/drawerScreen/report/Report';
import StudentAssignment from '../components/mainComponent/studentAssignment/StudentAssignment';
import StudentAssignmentDetail from '../screens/drawerScreen/studentAssignmentDetail/StudentAssignmentDetail';
import CreateNewAssignment from '../screens/drawerScreen/createNewAssignment/CreateNewAssignment';
import EditAssignment from '../screens/drawerScreen/editAssignment/EditAssignment';
import SingleAllTask from '../screens/drawerScreen/singleAllTask/SingleAllTask';
import Conversation from '../screens/drawerScreen/conversation/Conversation';
import AddTask from '../screens/drawerScreen/addTask/AddTask';
import {useNavigation} from '@react-navigation/native';
import DrawerLogo from './components/DrawerLogo';
import Entypo from 'react-native-vector-icons/Entypo';
import EditTask from '../screens/drawerScreen/editTask/EditTask';
// Navigator Imports

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// HomeTopStack

const HomeTopStack = () => {
  return (
    <View style={{flex: 1,backgroundColor:"white"}}>
      <HomeUserProfile />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: fonts.semiBold,
            fontSize: RFValue(sizes.h8, 667),
          },

          tabBarStyle: {
            elevation: 0,
            backgroundColor: 'white',
            marginLeft: 15,
          },

          tabBarIndicatorStyle: {
            height: verticalScale(40),
            backgroundColor: '#04c38c',
            borderRadius: 40,
          },
          tabBarItemStyle: {
            borderColor: '#04c38c',
            borderWidth: 2,
            borderRadius: 30,
            width: horizontalScale(170),
          },
          tabBarGap: 3,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarPressColor: '#ffffff',
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
    <Stack.Navigator>
      <Stack.Screen
        name="Profile View"
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
          headerShadowVisible: false,
          headerBackVisible: false,
          autoHideHomeIndicator: false,
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
          headerShadowVisible: false,
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
          headerShadowVisible: false,
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
          headerShadowVisible: false,
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
          headerShadowVisible: false,
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
      {/* <Stack.Screen
        name="Balance"
        component={Balance}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerBackVisible: false,
          headerShown:false
          
        }}
      /> */}
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

// My Student

const StudentStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="My Student"
        component={MyStudents}
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
        name="Add Student"
        component={AddStudent}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Add New Student" />;
          },
        }}
      />

      <Stack.Screen
        name="Single Student"
        component={SingleStudent}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },

          headerBackVisible: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Edit Student"
        component={EditStudent}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Edit Student Information" />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

// My Student Classes

const ClassStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="My Class"
        component={MyClasses}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Class"
        component={AddClass}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Create New Class" />;
          },
        }}
      />

      <Stack.Screen
        name="Edit Class"
        component={EditClass}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Edit New Class" />;
          },
        }}
      />

      <Stack.Screen
        name="Single Class"
        component={SingleClass}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },

          headerBackVisible: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Class Assignment"
        component={ClassAssignment}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Class Assignments " />;
          },
        }}
      />

      <Stack.Screen
        name="Select Assignment"
        component={SelectAssignment}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Single Assignment"
        component={SingleAssigmentDetail}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Assignment Name" />;
          },
        }}
      />

      <Stack.Screen
        name="Class Student"
        component={ClassStudent}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },

          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Class Students " />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

const AssignmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="My Assignments"
        component={AllAssignments}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Create New Assignment"
        component={CreateNewAssignment}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Create New Assignment" />;
          },
        }}
      />
      <Stack.Screen
        name="Assignment Details"
        component={AssignmentDetail}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Edit Assignment"
        component={EditAssignment}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Edit Assignment" />;
          },
        }}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Report" />;
          },
        }}
      />
      <Stack.Screen
        name="Student Assignment Detail"
        component={StudentAssignmentDetail}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Student Name" />;
          },
        }}
      />
      <Stack.Screen
        name="Conversation"
        component={Conversation}
        options={({route}) => ({
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            const studentName =
              route?.params?.item?.students[0].username || 'Default Name';
            return <StackCustomHeader text={studentName} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

// Task

const TaskStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="My Tasks"
        component={AllTasks}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Single Task"
        component={SingleAllTask}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="add Task"
        component={AddTask}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Create New Task" />;
          },
        }}
      />
      <Stack.Screen
        name="Edit Task"
        component={EditTask}
        options={{
          headerTitleStyle: {
            fontFamily: fonts.segoeUI,
            fontSize: RFValue(sizes.h4, 667),
            color: color.black,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: () => {
            return <StackCustomHeader text="Edit Task" />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

// Drawer Navigator

const DrawerStack = ({route}) => {
  const navigation = useNavigation();
  const initialRouteName = route.name === 'Home' ? 'HomeStack' : 'MyProfile';

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerLogo {...props} />}
      initialRouteName={initialRouteName}
      screenOptions={{
        drawerIcon: ({}) => {
          return <Entypo name="menu" size={20} color="white" />;
        },


        
        headerBackground: () => (
          <View style={{backgroundColor: color.darkPink, flex: 1}} />
        ),
        headerStyle: {    
          height: verticalScale(55),
        },
        drawerActiveBackgroundColor: 'white',
        drawerItemStyle: {borderBottomWidth: 1},
        headerTitleStyle: {
          display: 'none',
        },
        headerRight: () => {
          const [value, setValue] = useState(false)
          return (
            <LanguageDropdown
              width={130}
              text="English"
              marginRight={15}
              backgroundColor="white"
              value={value}
              setValue={setValue}
            />
          );
        },

        drawerLabelStyle: {
          fontFamily: fonts.medium,
          color: color.black,
        },
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeTopStack}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
      {/* <Drawer.Screen
        name="MyProfile"
        component={ProfileStack}
        
      /> */}
      <Drawer.Screen name="My Students" component={StudentStack} />
      <Drawer.Screen name="My Classes" component={ClassStack} />
      <Drawer.Screen name="All Assignment" component={AssignmentStack} />
      <Drawer.Screen name="All Tasks" component={TaskStack} />
    </Drawer.Navigator>
  );
};

// MainStack Drawer Stack

const MainStack = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: color.darkPink,
            height: verticalScale(20),
            elevation: 0,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={DrawerStack}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  position: 'absolute',
                  top: -30,
                  backgroundColor: focused ? '#04c38c' : 'white',
                  borderRadius: 30,
                  padding: verticalScale(5),
                  elevation: 2,
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.5,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 5,
                }}>
                {focused ? (
                  <WhiteHome width={35} height={35} />
                ) : (
                  <HomeIcon width={35} height={35} />
                )}
              </View>
            ),
          }}
        />

        <Tab.Screen
        
          name="Profile Stack"
          component={ProfileStack}
          options={({route})=>({
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={{
                  position: 'absolute',
                  top: -30,
                  backgroundColor: focused ? '#04c38c' : 'white',
                  borderRadius: 30,
                  padding: verticalScale(5),
                  elevation: 2,
                  shadowOffset: {width: 0, height: 4},
                  shadowOpacity: 0.5,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 5,
                }}>
                {focused ? (
                  <GreenUser width={35} height={35} />
                ) : (
                  <UserIcon width={45} height={45} />
                )}
              </View>
            ),
            
          })
          }
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
        <Tab.Screen
          options={{tabBarItemStyle: {display: 'none'}}}
          name="Balance"
          component={Balance}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default MainStack;
