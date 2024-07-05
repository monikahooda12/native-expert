import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../home/exprrt2';
import Exprrt from '../home/home1';
import Profile from '../home/Profile';
import HomeIcon from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        // <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <HomeIcon name="home" size={30}


                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Exprrt"
                    component={Exprrt}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="view-grid" size={30}


                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={30}


                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        // </NavigationContainer>


    )
}

export default BottomNavigation

// const styles  = StyleSheet.create({
//     container:{
    
//         justifyContent:'space-around',
//         paddingVertical:10,
//         backgroundColor:'#333'
//     }
// })