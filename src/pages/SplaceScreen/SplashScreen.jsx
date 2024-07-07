
import { View, Text, Image } from "react-native"


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