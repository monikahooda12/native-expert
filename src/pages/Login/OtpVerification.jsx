import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import CommonButton from '../../component/CommonButton';


const OTPVerification = () => {
    const otpInput = useRef(null);

    const handleVerify = () => {
        const otpCode = otpInput.current.getValue(); // Get the OTP value
        console.log('Entered OTP:', otpCode);
        // Add your verification logic here

        Alert.alert("agyghj")
    };

    return (
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '500',
                    color: '#333',
                }}>OTP Verification</Text>
                <View style={{ marginRight: "86%" }}>
                    <Text style={{ backgroundColor: "#6C63FF", height: 7, borderRadius: 10, marginTop: 15 }}></Text>
                </View>
            </View>
            <View style={styles.instructions}>
                <Text style={{
                    fontSize: 18,
                    color: '#666',
                    fontWeight: "300",
                    fontStyle: "Montserrat"
                }} >
                    Please enter the 4-digit code sent to your number<Text style={{ fontWeight: "500", fontStyle: "Montserrat" }}> +91 6395673945
                    </Text> for verification.
                </Text>
            </View>
            <View style={styles.otpInputContainer}>
                <OTPTextView
                    ref={otpInput}
                    containerStyle={styles.otpTextView}
                    handleTextChange={(text) => console.log(text)}
                    textInputStyle={styles.otpInput}
                    inputCount={4}
                    keyboardType="numeric"
                />
            </View>
            <CommonButton
                title={"VERIFY"}
                titleStyle={{ color: "white", fontWeight: "600" }}
                buttonStyle={{ marginTop: "13%", }}

            />
            {/* <View style={styles.button}>
        <Button title="VERIFY" color="#007bff" onPress={handleVerify} />
      </View> */}
            <Text style={styles.link}>
                Didn't receive any code? <Text style={styles.linkText}>Resend Again</Text>
            </Text>
            <Text style={styles.timer}>Request new code in 00:30s</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: "white"
    },
    title: {
        marginBottom: 20,
    },
    instructions: {
        marginBottom: 20,
        textAlign: 'center',

    },
    link: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    linkText: {
        textDecorationLine: 'underline',
    },
    timer: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginTop: -15,
        fontStyle: "Arial",
        fontWeight: "400"
    },

    otpInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    otpTextView: {
        width: '80%', // Adjust width as per your design
        marginRight: 50
    },
    otpInput: {
        width: "26%",
        height: "100%",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default OTPVerification;
