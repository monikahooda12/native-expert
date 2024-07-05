import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import CommonButton from '../component/CommonButton';

const Services = () => {
  const [location, setLocation] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'Web Developer',
    'Web Designer',
    'Doctor',
    'Interior Architecture & Designer',
    'Graphic Designer',
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for ${CommonTextField.getText(selectedService)} in ${CommonTextField.getText(location)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where to find?</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#ccc" />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
      </View>
      <TouchableOpacity style={styles.locationButton}>
        <Text style={styles.locationButtonText}>Use my current location</Text>
      </TouchableOpacity>

      <Text style={styles.title}>What Services?</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faBriefcase} size={20} color="#ccc" />
        <TextInput
          style={styles.input}
          placeholder="Services"
          value={selectedService}
          onChangeText={handleServiceSelect}
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service}
            style={[styles.serviceButton, selectedService === service && styles.selectedService]}
            onPress={() => handleServiceSelect(service)}
          >
            <Text style={styles.serviceButtonText}>{service}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

       <TouchableOpacity >
        
       
      <CommonButton
            title={"Search"}
            onPress={handleSearch}
            />
            </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    //flex: 1,
    padding: 10,
  },
  locationButton: {
    // backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderBottomWidth: 2, // Width of the bottom border
    borderBottomColor: '#eee', // Color of the bottom border
    paddingBottom: 2, // Space between text and bottom border
    
  },
  locationButtonText: {
    color: '#333',
  },
  servicesContainer: {
    marginBottom: 20,
    
  },
  serviceButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  selectedService: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    height:50
  },
  serviceButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Services;