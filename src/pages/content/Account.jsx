import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../../assets/Colors/Color'
import Profile from '../../home/Profile'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Account = ({navigation}) => {
    return (
        
        <View style={styles.container}>
        
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(Profile)}>
        <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Account </Text>
          
        </View>
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
        </View>
        
    )
}

export default Account

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        //   justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#f8f8f8',
         },
         headerTitle:{
            fontSize:20,
            fontWeight:'bold',
            justifyContent:'center'
         }
        })