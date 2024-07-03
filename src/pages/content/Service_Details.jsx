import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Color } from '../../assets/Colors/Color'
import CommonTextinput from '../../component/CommonTextfield'
import CommonDropdown from '../../component/CommonDropdown'
import CommonButton from '../../component/CommonButton'

const Service_Details = () => {
  return (
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
  )
}

export default Service_Details