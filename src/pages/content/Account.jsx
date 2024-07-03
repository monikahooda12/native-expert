import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color } from '../../assets/Colors/Color'

const Account = () => {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>


            <View style={{ marginHorizontal: 20 }}>


                <TouchableOpacity>
                    <View style={{ marginTop: "30%", marginLeft: "8%" }}>
                        <Text style={{ color: "#868686", fontWeight: "400", fontSize: 18, fontStyle: "Poppins" }}>
                            Change Password
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: "#E7E7E7", borderBottomWidth: 2, marginTop: "8%" }}>

                </View>
                <TouchableOpacity>
                    <View style={{ marginTop: "5%", marginLeft: "8%" }}>
                        <Text style={{ color: "#868686", fontWeight: "400", fontSize: 18, fontStyle: "Poppins" }}>
                            Privacy & Policy
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: "#E7E7E7", borderBottomWidth: 2, marginTop: "8%" }}>

                </View>

                <TouchableOpacity>
                    <View style={{ marginTop: "5%", marginLeft: "8%" }}>
                        <Text style={{ color: "#868686", fontWeight: "400", fontSize: 18, fontStyle: "Poppins" }}>
                            Term & Conditions
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: "#E7E7E7", borderBottomWidth: 2, marginTop: "8%" }}>

                </View>

                <TouchableOpacity>
                    <View style={{ marginTop: "5%", marginLeft: "8%" }}>
                        <Text style={{ color: "#868686", fontWeight: "400", fontSize: 18, fontStyle: "Poppins" }}>
                            Delete Account
                        </Text>
                    </View>
                </TouchableOpacity>




            </View>

        </View>
    )
}

export default Account