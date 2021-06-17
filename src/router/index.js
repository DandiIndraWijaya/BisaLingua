import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../pages/Home';
import Notifikasi from '../pages/Notifikasi';
import User from '../pages/User';
import About from '../pages/About';
import ListTeachers from '../pages/Teacher/ListTeachers';
import ChooseCourse from '../pages/Teacher/ListTeachers/ChooseCourse';
import PaidCourse from '../pages/Teacher/ListTeachers/PaidCourse';
import ListSubjects from '../pages/Teacher/Room/ListSubjects';
import PilihBahasa from '../pages/Games/PilihBahasa';
import SpeechRecognation from '../pages/Games/SpeechRecognation';
import SpeechRecognationJerman from '../pages/Games/Jerman';
import Class from '../pages/Teacher/Room/Class';
import Chat from '../pages/Teacher/Room/Chat';
import ClassPaidCourse from '../pages/Teacher/Room/ClassPaidCourse';
import Submission from '../pages/Teacher/Room/Submission';
import ListPaidCourse from '../pages/Teacher/Room/ListPaidCourse';
import SplashScreen from '../pages/SplashScreen';
import Login from '../pages/Login';
import Register from '../pages/Register';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faBook,
  faHome,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import color from '../style/color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApps = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffff',
        inactiveTintColor: color.primary,
        activeBackgroundColor: color.primary,
        labelStyle: {
          padding: 5,
          bottom: 10,
          fontSize: 18,
          fontFamily: 'Montserrat-Regular',
          borderRadius: 10,
        },
        iconStyle: {
          margin: 30,
        },
        style: {
          height: 42,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color={color.secondary} icon={faHome} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifikasi}
        options={{
          tabBarLabel: 'Notifikasi',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color={color.secondary} icon={faBell} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={User}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color={color.secondary} icon={faUser} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'Tentang',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color={color.secondary} icon={faBook} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainApps}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ChooseCourse"
        component={ChooseCourse}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="PaidCourse"
        component={PaidCourse}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ListTeachers"
        component={ListTeachers}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ListSubjects"
        component={ListSubjects}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Class"
        component={Class}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ListPaidCourse"
        component={ListPaidCourse}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="ClassPaidCourse"
        component={ClassPaidCourse}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Submission"
        component={Submission}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="PilihBahasa"
        component={PilihBahasa}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="SpeechRecognation"
        component={SpeechRecognation}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="SpeechRecognationJerman"
        component={SpeechRecognationJerman}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
