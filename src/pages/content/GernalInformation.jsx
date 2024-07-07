import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import CommonButton from '../../component/CommonButton'
import CommonTextinput from '../../component/CommonTextfield'
import CommonDropdown from '../../component/CommonDropdown'
// import CalendarPicker from "react-native-calendar-picker";
import { Color } from '../../assets/Colors/Color'
import Profile from '../../home/Profile'
import Icon from 'react-native-vector-icons/MaterialIcons'

const GeneralInformation = ({navigation}) => {

    // const [selectedStartDate, setSelectedStartDate] = useState(null);
    // const onDateChange = (date) => {
    //     setSelectedStartDate(date);
    // };


    // const startDate = selectedStartDate ? selectedStartDate.toString() : "";

    return (
        <View style={styles.container}>
        
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(Profile)}>
        <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
          
          <Text style={styles.headerTitle}>GeneralInformation </Text>
          
        </View>
  
        <ScrollView style={{ backgroundColor: "white" }} >
            <View style={{
                flex: 1,
                marginHorizontal: 20

            }}>
                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Email
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter Email"}
                />
                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Gender
                    </Text>
                </View>
                <CommonDropdown />

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        DOB
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter Email"}
                />

                {/* <CalendarPicker onDateChange={onDateChange} />

                <Text>SELECTED DATE: {startDate}</Text> */}


                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Language
                    </Text>
                </View>
                <CommonDropdown />
                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Address
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter Address"}
                />
                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        City
                    </Text>
                </View>
                <CommonDropdown />

                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        State
                    </Text>
                </View>
                <CommonDropdown />
                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Country
                    </Text>
                </View>
                <CommonDropdown />

                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 18, fontStyle: "Inter", }}>
                        Pincode
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter Pincode"}
                />
                <CommonButton
                    buttonStyle={{ marginTop: 15 }}


                    title={"Save"} />


                    
                {/* <CommonButton
                    title={"Save"}
                    titleStyle={{ color: "white", fontWeight: "600" }}
                    buttonStyle={{
                        marginTop: "6%",
                    }}
                /> */}
                {/* <TouchableOpacity>

                    <View style={{
                        backgroundColor: Color.ButtonColor,
                        padding: 10,
                        borderRadius: 10,
                        width: '40%',
                        height: "5%",
                        alignItems: 'center',
                        marginBottom: "5%",
                        marginTop: "5%"

                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "700"
                        }}>
                            Save
                        </Text>
                    </View>

                </TouchableOpacity> */}

            </View>
        </ScrollView>
        </View>
    )
}

export default GeneralInformation 
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