import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color } from '../../assets/Colors/Color'
import CommonTextinput from '../../component/CommonTextfield'
import CommonDropdown from '../../component/CommonDropdown'
import CommonButton from '../../component/CommonButton'
import Profile from '../../home/Profile'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Service_Details = ({navigation}) => {
  return (

    
    <View style={styles.container}>
        
    <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack(Profile)}>
    <Icon name="arrow-back" size={30} color="#000" />
    </TouchableOpacity>
      
      <Text style={styles.headerTitle}>Service Details </Text>
      
    </View>
    <ScrollView>

      <View style={{ backgroundColor: "white", flex: 1 }} >

        <View style={{ backgroundColor: "#F0F0F0", marginHorizontal: 10 }}>

          <View style={{ marginHorizontal: 20, marginTop: 40, borderRadius: 10 }}>

            <View style={{ marginTop: 10, }}>
              <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                Title Name
              </Text>
            </View>
            <View>
              <CommonTextinput
                placeholder={"name "}
              />
            </View>




            <View style={{ marginTop: 10, }}>
              <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                Project Type
              </Text>
            </View>
            <View>
              <CommonDropdown />
            </View>



            <View style={{ marginTop: 10, }}>
              <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                Select a  Category
              </Text>
            </View>
            <View>
              <CommonTextinput
                placeholder={"======"}
              />
            </View>



            <View style={{ marginTop: 10, }}>
              <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                Price
              </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <CommonTextinput
                  placeholder={"min price"}
                />
              </View>

              <View>
                <CommonTextinput
                  placeholder={"max price"}
                />
              </View>
            </View>

            <View style={{ marginTop: 10, }}>
              <Text style={{ color: Color.downgran, fontWeight: "400", fontSize: 18, fontStyle: "Inter" }}>
                Description
              </Text>
            </View>

            <CommonTextinput
              placeholder={"here...."}
              Inputstyle={{ height: 100 }}

            />

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


            <CommonButton
              buttonStyle={{ marginTop: 20 }}

              title={"Add Experience"} />

            <View style={{ marginTop: 30 }} >
              <Text style={{ fontWeight: "500", fontSize: 16, fontStyle: "Montserrat", lineHeight: 26, color: "#8F8F8F", }}>

                Save all the details just by clicking on save button giving below
              </Text>
            </View>

            <CommonButton
              buttonStyle={{ marginTop: 20 }}

              title={"Save "} />



          </View>







        </View>



      </View>



    </ScrollView>
    </View>
  )
}

export default Service_Details



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