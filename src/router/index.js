import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todos from '../pages/Todos';
import Schedule from '../pages/Schedule';
import User from '../pages/User';
import About from '../pages/About';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faCalendar,
  faUser,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffff',
        labelStyle: {
          padding: 5,
          bottom: 10,
          fontSize: 18,
          fontFamily: 'Montserrat-Regular',
          backgroundColor: '#4c4c4c',
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
        name="Todos"
        component={Todos}
        options={{
          tabBarLabel: 'Todos',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color="#4c4c4c" icon={faClock} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color="#4c4c4c" icon={faCalendar} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color="#4c4c4c" icon={faUser} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: () => (
            <FontAwesomeIcon size={32} color="#4c4c4c" icon={faBook} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;
