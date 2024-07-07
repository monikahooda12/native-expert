import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import Icon from "react-native-vector-icons/AntDesign"
// import CommonDropdown from '../../component/CommonDropdown'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import GeneralInformation from '../pages/content/GernalInformation';
import Professional_Details from '../pages/content/Professional_Details';
import CoverImage from '../pages/content/coverImage';
import Service_Details from '../pages/content/Service_Details';
import Account from '../pages/content/Account';
 //import Icon from 'react-native-vector-icons/MaterialIcons'
//  import Icon from 'react-native-vector-icons/MaterialIcons'
 import Icon from 'react-native-vector-icons/MaterialIcons';


const Profile = ({navigation}) => {
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
      <View style={styles.container}>
        
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Profile</Text>
          <Icon name="notifications" size={24} color="#000" />
        </View>
  
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>


        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                <TouchableOpacity onPress={HandlecameraOpen} >
                    <View style={{ marginTop: "10%", borderWidth: 10, borderColor: "grey", borderRadius: 500 }}>
                        <Image
                            style={{ width: 129, height: 129, borderRadius: 700 }}
                            source={{ uri: selectImage }} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontWeight: "700", fontSize: 22, color: "#000000", marginTop: 10 }}>
                    Name name
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 14, color: "#6A6A6A" }}>
                    Web Developer
                    
                </Text>
            </View>
         
  
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('GeneralInformation')}>
            <Icon name="person" size={24} />
            <Text style={styles.optionText}>General Information</Text>
            <Icon name={GeneralInformation ? 'Navigate Next' : 'expand-more'} size={24} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('Professional_Details')}>
            <Icon name="settings" size={24} />
            <Text style={styles.optionText}>Professional Details</Text>
            <Icon name={Professional_Details ? 'expand-less' : 'expand-more'} size={24} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('coverImage')}>
            <Icon name="share" size={24} />
            <Text style={styles.optionText}>Cover Image</Text>
            <Icon name={CoverImage ? 'expand-less' : 'expand-more'} size={24} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('Service_Details')}>
            <Icon name="work" size={24} />
            <Text style={styles.optionText}>Service Details</Text>
            <Icon name={Service_Details ? 'expand-less' : 'expand-more'} size={24} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.optionRow} onPress={()=>navigation.navigate('Account')}>
            <Icon name="person" size={24} />
            <Text style={styles.optionText}>Account</Text>
            <Icon name={Account ? 'expand-less' : 'expand-more'} size={24} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.logoutButton}>
            <Icon name="logout" size={24} color="#d9534f" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
   </View>
    );
  };
  
                  
            
      


export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileTitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoutText: {
    fontSize: 16,
    color: '#d9534f',
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  footerButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
});



///////////////////////////////////////////////////////////


