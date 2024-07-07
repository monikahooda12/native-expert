import { SafeAreaView, Image, Dimensions, View, Text } from "react-native"

// import { appFonts } from "../../Aseets/Fonts"

const { width, height } = Dimensions.get("window")
const Notification = () => {
    return <>

        <SafeAreaView style={{ flex: 1, backgroundColor: 'red'}}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image resizeMethod="resize" resizeMode="contain" style={{ width: width * 0.70, height: height / 2 }} />
                <Text style={{ fontFamily: appFonts.SemiBold, color: appColors.textColor.text1, fontSize: 20 }}>You Have No Notification Yet!</Text>
                <Text style={{ marginTop:12,fontSize: 14, color: appColors.textColor.text2, opacity: 0.70, fontFamily: appFonts.Regular }}>You have no notification right now.</Text>
            </View>
        </SafeAreaView>
    </>
}
export default Notification