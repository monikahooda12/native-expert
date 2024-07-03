import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Color } from '../assets/Colors/Color';

const CommonDropdown = () => {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },

    ];
    const [value, setValue] = useState(null);

    return (
        <View style={{ marginTop: "5%", borderWidth: 1, borderRadius: 10, borderColor: Color.Lightgray }}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
            // renderLeftIcon={() => (
            //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            // )}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 15,
        color: "black"
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        color: "black",

        fontSize: 16,
    },
    selectedTextStyle: {

        color: "black",
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        marginTop: 90,

        height: 40,
        fontSize: 16,
    },
});
export default CommonDropdown