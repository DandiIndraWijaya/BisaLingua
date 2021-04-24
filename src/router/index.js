import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/BottomNavigation';
import {View, Text} from 'react-native';
import Paper from '../components/Paper';

const Tab = createBottomTabNavigator();

function Todos() {
  return (
    <Paper>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Todos!</Text>
      </View>
    </Paper>
  );
}

function Schedule() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Schedule!</Text>
    </View>
  );
}

function User() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>User!</Text>
    </View>
  );
}

function About() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>About!</Text>
    </View>
  );
}

const Router = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Todos" component={Todos} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default Router;
