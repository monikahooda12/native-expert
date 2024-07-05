import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/AntDesign"
// import CommonDropdown from '../../component/CommonDropdown'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft ,faUser,setting} from '@fortawesome/free-solid-svg-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Profile = () => {
    const [selectImage, setselectImage] = useState("")
    const HandlecameraOpen = () => {
        let options = {
            storageOptions: {
                path: "Image"
            }
        }
        launchImageLibrary(options, rasponce => {
            setselectImage(rasponce.assets[0].uri)
            console.log(rasponce.assets[0].uri)
        })
    }
    return (
        <ScrollView style={{ marginHorizontal: 10 }}>
          <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 1 }}>
                <TouchableOpacity onPress={HandlecameraOpen} >
                    <View style={{ marginTop: "10%", borderWidth: 10, borderColor: "#DBD9F7", borderRadius: 500 }}>
                        <Image
                            style={{ width: 129, height: 129, borderRadius: 700 }}
                            source={{ uri: selectImage }} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontWeight: "700", fontSize: 22, color: "#000000", marginTop: 10 }}>
                    Logitech
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 14, color: "#6A6A6A" }}>
                    Web Developer
                    <Icon name="forward" size={20} />
                </Text>
            </View>
            <View style={{ justifyContent: "space-around", flexDirection: "row", marginTop: 30 }}>
                <TouchableOpacity>
                    <View>
                    <Text style={{color:'black'}}>
                    <FontAwesomeIcon icon={faUser} size={24} color="#000" />
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#000000", lineHeight: 21 }}>
                            General Information
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text style={{color:'black'}}>
                        <Icon name="right" size={20}  />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "space-around", flexDirection: "row", marginTop: 30, backgroundColor: "#6C63FF", padding: 20, borderRadius: 10 }}>
                <TouchableOpacity>
                    <View>
                    <Ionicons name="settings-sharp" size={24} color="#000" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#000000", lineHeight: 21 }}>
                            Professional Details
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text color='black'>
                        <Icon name="right" size={20}  />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "space-around", flexDirection: "row", marginTop: 30 }}>
                <TouchableOpacity>
                    <View style={{ color: "black", lineHeight: 24 }}>
                    <EntypoIcon name="forward" size={20} /> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View >
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#000000", lineHeight: 21 }}>
                            Cover Image
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text styles={{color:'black'}}>
                        <Icon name="right" size={20}  />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: "#CECECE", marginTop: 20 }}>
                <Text>
                </Text>
            </View>
            <View style={{ justifyContent: "space-around", flexDirection: "row", marginTop: 30 }}>
                <TouchableOpacity>
                    <View>
                        <Text>
                            Icons
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View >
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#000000", lineHeight: 21 }}>
                            Service Details
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                    <Text styles={{color:'black'}}>
                        <Icon name="right" size={20}  />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: "#CECECE", marginTop: 20 }}>
                <Text>
                </Text>
            </View>
            <View style={{ justifyContent: "space-around", flexDirection: "row", marginTop: 30 }}>
                <TouchableOpacity>
                    <View>
                        <Text>
                            Icons
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View >
                        <Text style={{ fontWeight: "400", fontSize: 18, color: "#000000", lineHeight: 21 }}>
                            Account
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                    <Text styles={{color:'black'}}>
                        <Icon name="right" size={20}  />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: "#CECECE", marginTop: 20 }}>
                <Text>
                </Text>
            </View>
            <View style={{ justifyContent: "flex-start", flexDirection: "row", marginTop: 20, marginHorizontal: 20 }}>
                <TouchableOpacity>
                    <Text style={{ marginRight: 20, color: "red" }}>
                        Icon
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: "red" }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Profile


const styles= StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    padding: 20,
    //  backgroundColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
})