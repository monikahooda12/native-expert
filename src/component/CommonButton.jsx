import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Color } from '../assets/Colors/Color';


const CommonButton = ({ buttonStyle, title, imageName, onPress, titleStyle, tintColor, imageStyle, showIcon }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.container, buttonStyle]} onPress={onPress}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.ButtonColor,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,

    },
    title: {
        fontSize: 20,
        color:'white',
    },

});

export default CommonButton;