import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming you're using Material Icons

const ProfileScreen = () => {
  const [isGeneralInfoExpanded, setIsGeneralInfoExpanded] = useState(false);
  const [isProfessionalDetailsExpanded, setIsProfessionalDetailsExpanded] = useState(false);
  const [isCoverImageExpanded, setIsCoverImageExpanded] = useState(false);
  const [isServiceDetailsExpanded, setIsServiceDetailsExpanded] = useState(false);
  const [isAccountExpanded, setIsAccountExpanded] = useState(false);

  const toggleGeneralInfo = () => {
    setIsGeneralInfoExpanded(!isGeneralInfoExpanded);
  };

  const toggleProfessionalDetails = () => {
    setIsProfessionalDetailsExpanded(!isProfessionalDetailsExpanded);
  };

  const toggleCoverImage = () => {
    setIsCoverImageExpanded(!isCoverImageExpanded);
  };

  const toggleServiceDetails = () => {
    setIsServiceDetailsExpanded(!isServiceDetailsExpanded);
  };

  const toggleAccount = () => {
    setIsAccountExpanded(!isAccountExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#000" />
        <Text style={styles.headerTitle}>Profile</Text>
        <Icon name="notifications" size={24} color="#000" />
      </View>

      <View style={styles.profileInfo}>
        <Image source={require('./your_profile_image.jpg')} style={styles.profileImage} />
        <Text style={styles.profileName}>Soanli Saluja</Text>
        <Text style={styles.profileTitle}>Web Developer</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionRow} onPress={toggleGeneralInfo}>
          <Icon name="person" size={24} />
          <Text style={styles.optionText}>General Information</Text>
          <Icon name={isGeneralInfoExpanded ? 'expand-less' : 'expand-more'} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={toggleProfessionalDetails}>
          <Icon name="settings" size={24} />
          <Text style={styles.optionText}>Professional Details</Text>
          <Icon name={isProfessionalDetailsExpanded ? 'expand-less' : 'expand-more'} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={toggleCoverImage}>
          <Icon name="share" size={24} />
          <Text style={styles.optionText}>Cover Image</Text>
          <Icon name={isCoverImageExpanded ? 'expand-less' : 'expand-more'} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={toggleServiceDetails}>
          <Icon name="work" size={24} />
          <Text style={styles.optionText}>Service Details</Text>
          <Icon name={isServiceDetailsExpanded ? 'expand-less' : 'expand-more'} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={toggleAccount}>
          <Icon name="person" size={24} />
          <Text style={styles.optionText}>Account</Text>
          <Icon name={isAccountExpanded ? 'expand-less' : 'expand-more'} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="logout" size={24} color="#d9534f" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={24} />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="grid-on" size={24} />
          <Text style={styles.footerButtonText}>Experts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} activeOpacity={0.8}>
          <Icon name="person" size={24} />
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    justifyContent: 'space-between',
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

export default ProfileScreen;