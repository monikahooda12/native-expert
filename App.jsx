import React from 'react';
import 'react-native-gesture-handler';
import StackNavigation from './src/Routing/StackRoute';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import OnBoarding from './src/home/onboarding';
import OnboardingScreen from './src/Slider/OnboardingScreen';


const App = () => {
  return (
     <NavigationContainer>
    
       <StackNavigation />
     </NavigationContainer>
  );
};

export default App;
