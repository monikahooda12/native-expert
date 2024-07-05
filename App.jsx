import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

// import StackNavigation from './src/Routing/StackRoute';
// import CoverImage from './src/pages/content/coverImage';


import DrawerNavigation from './src/Routing/DrawerNavigation'
import SplashScreen from './src/pages/SplaceScreen/SplashScreen';
import StackNavigation from './src/Routing/StackRoute';
import CoverImage from './src/pages/content/coverImage';
import HomeScreen from './src/Slider/HomeScreen';
import { StackActions } from '@react-navigation/native';


import Exprrt2 from './src/home/exprrt2';

import Exprrtmain from './src/home/exprrt';
import Home from './src/home/home1';
import OnBoarding from './src/home/onboarding';
import Services from './src/home/frame1';
import Profile from './src/home/Profile';

// import OnboardingScreens from './src/Slider/OnBoarding';

const App = () => {
  return (
      <StackNavigation/>
// <Profile/>
    //<Exprrt/> 
//<OnBoarding/>
//<Services/>
   //  <HomeScreen/>
   // <Exprrt2/>
  //  <OnboardingScreens/>
    // <CoverImage />
   //  <HomeScreen/>
    // <View style={{ flex: 1 }}>
    //   {/* <CoverImage/> */}
    //   {/* <StackNavigation/> */}
   // <OnBoarding/>
   //<OnBoarding/>
     //  <DrawerNavigation/>
    //   <SplashScreen/>
    // </View>
  )
}

export default App