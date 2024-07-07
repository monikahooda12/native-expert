import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import CommonTextinput from '../../component/CommonTextfield'
import { Color } from '../../assets/Colors/Color'

import CommonDropdown from '../../component/CommonDropdown'
import CommonButton from '../../component/CommonButton'
import Profile from '../../home/Profile'
import Icon  from 'react-native-vector-icons/MaterialIcons'
const Professional_Details = ({navigation}) => {
    return (


        <View style={styles.container}>
        
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(Profile)}>
        <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Professional Details </Text>
          
        </View>

        <ScrollView style={{ backgroundColor: "white", flex: 1 }} >


            <View style={{ marginHorizontal: 20 }} >


                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Job Title
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter Job Title"}
                />


                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Website
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter website"}
                />


                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Availability
                    </Text>
                </View>

                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Bio
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter Bio"}
                    Inputstyle={{ height: 100 }}

                />

                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                        Occupation
                    </Text>
                </View>
                <CommonTextinput
                    placeholder={"Enter Occuption"}
                />

                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "700", fontSize: 18, fontStyle: "Inter" }}>
                        Skills
                    </Text>
                </View>

                <View>
                    <CommonTextinput
                        placeholder={"Enter Skills"}
                    />

                    <CommonDropdown />
                </View>

                <CommonButton

                    title={"Add Skill"}
                    buttonStyle={{ marginTop: 10 }}

                />

                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "700", fontSize: 18, fontStyle: "Inter" }}>
                        Language
                    </Text>
                </View>

                <View>
                    <CommonTextinput
                        placeholder={"Enter language"}
                    />

                    <CommonDropdown />
                </View>

                <CommonButton

                    title={"Add Language"}
                    buttonStyle={{ marginTop: 10 }}

                />

                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "700", fontSize: 18, fontStyle: "Inter" }}>
                        Education
                    </Text>
                </View>

                <View>
                    <CommonTextinput
                        placeholder={"Enter education"}
                    />
                    <CommonTextinput
                        placeholder={"Enter education "}
                    />
                    <CommonTextinput
                        placeholder={"Enter education"}
                    />
                    <CommonTextinput
                        placeholder={"Enter education"}
                    />
                </View>
                <CommonButton

                    title={"Add Education"}
                    buttonStyle={{ marginTop: 10 }}

                />


                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "700", fontSize: 18, fontStyle: "Inter" }}>
                        Portfolio
                    </Text>
                </View>
                <View>
                    <CommonTextinput
                        placeholder={"Enter Portfolio"}
                    />
                    <CommonTextinput
                        placeholder={"Enter here "}
                    />
                    <CommonTextinput
                        placeholder={"Enter here "}
                    />
                    <CommonTextinput
                        placeholder={"Enter here"}
                    />
                </View>
                <CommonButton

                    title={"Add Portfolio"}
                    buttonStyle={{ marginTop: 10 }}

                />
                <View style={{ marginTop: 10, }}>
                    <Text style={{ color: Color.downgran, fontWeight: "700", fontSize: 18, fontStyle: "Inter" }}>
                        Experience
                    </Text>
                </View>

                <View>
                    <CommonTextinput
                        placeholder={"Job Title"}
                    />
                    <CommonTextinput
                        placeholder={"Company name here"}
                    />
                     <CommonTextinput
                        placeholder={"Location"}
                    />


                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <CommonTextinput
                                placeholder={"Start Date"}
                            />
                        </View>

                        <View>
                            <CommonTextinput
                                placeholder={"last Date"}
                            />
                        </View>
                    </View>
                    <CommonTextinput
                        placeholder={"Description"}
                    />
                    
                </View>
                <CommonButton

                    title={"Add Experience"}
                    buttonStyle={{ marginTop: 10 }}

                />
                <View style={{ marginTop: 30 }} >
                    <Text style={{ fontWeight: "500", fontSize: 16, fontStyle: "Montserrat", lineHeight: 26, color: "#8F8F8F", }}>

                        Save all the details just by clicking on save button giving below
                    </Text>
                </View>

                <CommonButton
                    buttonStyle={{ marginTop: 15 }}


                    title={"Save"} />





            </View>




        </ScrollView>
        </View>
    )
}

export default Professional_Details

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
         },
        })