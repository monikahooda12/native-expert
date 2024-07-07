import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OTPVerification from '../pages/Login/OtpVerification';
import HomeScreen from '../Slider/HomeScreen';
import OnboardingScreen from '../Slider/OnboardingScreen';
import SplashScreen from '../pages/SplaceScreen/SplashScreen';
import Signin from '../pages/Login/Signin';
import GeneralInformation from '../pages/content/GernalInformation';
import Profile from '../home/Profile';
import BottomNavigation from './BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Account from '../pages/content/Account';
import CoverImage from '../pages/content/coverImage';
import Professional_Details from '../pages/content/Professional_Details';
import Service_Details from '../pages/content/Service_Details';
import Notification from '../assets/Notification/Notification';

const StackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    

    <Stack.Navigator initialRouteName="BottomNavigation">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerification}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
        />
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{headerShown: false}}
        />

<Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
        />

<Stack.Screen
        name="coverImage"
        component={CoverImage}
        options={{headerShown: false}}
        />

<Stack.Screen
        name="GeneralInformation"
        component={GeneralInformation}
        options={{headerShown: false}}
        />

<Stack.Screen
        name="Professional_Details"
        component={Professional_Details}
        options={{headerShown: false}}
        />

<Stack.Screen
        name="Service_Details"
        component={Service_Details}
        options={{headerShown: false}}
        />
      
    </Stack.Navigator>
      
  );
};

export default StackNavigation;
