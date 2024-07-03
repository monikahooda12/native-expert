// import { View, Text, TextInput, StyleSheet } from 'react-native'
// import { Color } from '../assets/Colors/Color'



// const CommonTextinput = ({ placeholder }) => {

//     return (
//         <View style={{ marginTop: 10 }}>
//             <View style={{ borderWidth: 1, borderRadius: 10, borderColor: Color.Lightgray }}>
//                 <TextInput style={{ fontWeight: "400", marginLeft: "3%", fontSize: 16 }} placeholder={placeholder} />
//             </View>
//         </View>
//     )
// }



// export default CommonTextinput


import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Color } from '../assets/Colors/Color';

const CommonTextinput = ({ placeholder, Inputstyle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, Inputstyle]} 
                    placeholder={placeholder}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Color.Lightgray,
    },
    input: {
        fontWeight: '400',
        marginLeft: '3%',
        fontSize: 16,
    },
});

export default CommonTextinput;
