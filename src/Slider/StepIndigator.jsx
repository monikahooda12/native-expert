import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import LinearGradient from "react-native-linear-gradient";

const StepIndicator = ({ total, count }) => {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const stepComponents = [];
        for (let i = 0; i < total; i++) {
            stepComponents.push(
                i==count?(<LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width:22,height:7, borderRadius: 16 }} colors={[appColors.primaryColor.primary1, appColors.primaryColor.primary2]}></LinearGradient>):

                <View
                    key={i}
                    style={[
                        styles.step,
                       styles.inactiveStep
                    ]}
                />
            );
        }
        setSteps(stepComponents);
    }, [total, count]);

    return <View style={styles.container}>{steps}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    step: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeStep: {
        backgroundColor:'red',
    },
    inactiveStep: {
        backgroundColor: 'gray',
    },
});

export default StepIndicator;
