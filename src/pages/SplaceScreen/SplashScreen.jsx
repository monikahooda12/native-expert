// import { View, Text } from 'react-native'
// import React from 'react'

// const SplashScreen = () => {
//   return (
//     <View>
//       <Text>SplashScreen</Text>
//     </View>
//   )
// }

// export default SplashScreen



import { View, Text, StyleSheet, Image } from "react-native"
import navigation from "@react-navigation/stack"

import { useEffect } from "react"
import Signin from "../Login/Signin"

const SplashScreen = ({ navigation }) => {

    console.log(navigation)

    useEffect(() => {
        setTimeout(() => { navigation.navigate('OnboardingScreen') }, 2000)

    }, [])
    return <>
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: "10%", justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Image

                    style={{ width: 209, height: 150 }}

                    source={require('../../assets/Images/logo.png')} />
            </View>
        </View></>
}




export default SplashScreen