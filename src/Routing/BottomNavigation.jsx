import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/home1';
import Exprrt from '../home/exprrt2';
import Profile from '../home/Profile';
import HomeIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <HomeIcon name="home" size={30} />,
        }}
      />
      <Tab.Screen
        name="Exprrt"
        component={Exprrt}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="view-grid" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <Ionicons name="person" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
