import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import CheckBox from 'react-native-check-box';
import CommonButton from '../component/CommonButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const OnBoarding = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View styles={{ flexDirection: 'row',alignItems: 'center',  paddingHorizontal: 16,}}>

      <TouchableOpacity style={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} color="black"  />
      </TouchableOpacity>

        <Text style={styles.title}>Graphics & Design</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.description}>
          Please Select the Category You want to Explore Further
        </Text>

        <View style={styles.categories}>
          <TouchableOpacity
            style={styles.category}
            onPress={() => handleCategoryPress('Logo Design')}
          >
            <CheckBox
              style={styles.checkbox}
              onClick={() => handleCategoryPress('Logo Design')}
              isChecked={selectedCategory === 'Logo Design'}
              checkBoxColor="#DADADA"
            />
            <Text style={styles.categoryText}>Logo Design</Text>
            <Text style={styles.count}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() => handleCategoryPress('Video Editing')}
          >
            <CheckBox
              style={styles.checkbox}
              onClick={() => handleCategoryPress('Video Editing')}
              isChecked={selectedCategory === 'Video Editing'}
              checkBoxColor="#DADADA"
            />
            <Text style={styles.categoryText}>Video Editing</Text>
            <Text style={styles.count}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() => handleCategoryPress('Template Design')}
          >
            <CheckBox
              style={styles.checkbox}
              onClick={() => handleCategoryPress('Template Design')}
              isChecked={selectedCategory === 'Template Design'}
              checkBoxColor="#DADADA"
            />
            <Text style={styles.categoryText}>Template Design</Text>
            <Text style={styles.count}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() => handleCategoryPress('Mock Design')}
          >
            <CheckBox
              style={styles.checkbox}
              onClick={() => handleCategoryPress('Mock Design')}
              isChecked={selectedCategory === 'Mock Design'}
              checkBoxColor="#DADADA"
            />
            <Text style={styles.categoryText}>Mock Design</Text>
            <Text style={styles.count}>26</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.outerbtn}>
        <View style={styles.btn}>
          <CommonButton
            title={"Save"}
            onPress={() => console.log('Save button pressed')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    marginRight: 12,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
     marginBottom: 10,
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    color: '#8D8D8D',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  categories: {
    marginBottom: 20,
    color: "#8D8D8D"
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
    // borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    color: '#8D8D8D',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    flex: 1,
  },
  count: {
    fontSize: 16,
  },
  outerbtn: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  btn: {
    marginBottom: 10,
  },
});

export default OnBoarding;
