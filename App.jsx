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
import Home from './src/home/Home';
import Exprrt from './src/home/exprrt';

// import OnboardingScreens from './src/Slider/OnBoarding';

const App = () => {
  return (
<Exprrt/>
    // <HomeScreen/>
  //  <OnboardingScreens/>
      //  <StackNavigation/>
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