import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Appdevlopment= () => {
  const [selected, setSelected] = useState(null);
  
  const [foodData,setFoodData] = useState([
    {
      id: 1,
      title: 'Herbal Pancake',
      description: 'Warung Herbal',
      image:  require('../../assets/Imagess/logo.png'), // Replace with your actual image===============================
    },
    {
      id: 2,
      title: 'Fruit Salad',
      description: 'Wijie Resto',
      image:  require('../../assets/Imagess/logo.png'), // Replace with your actual image=====================================
    },
    {
      id: 3,
      title: 'Green Noddle',
      description: 'Noodle Home',
      image: require('../../assets/Imagess/logo.png'), // Replace with your actual image============================
    },
    {
      id: 4,
      title: 'Fruit Salad',
      description: 'Wijie Resto',
      image:  require('../../assets/Imagess/logo.png'), // Replace with your actual image=================================
    },
  ]);

  const handleSelect = (itemId) => {
    setSelected(itemId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>App Development</Text>
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {foodData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.itemContainer,
              selected === item.id && styles.selectedItem,
            ]}
            onPress={() => handleSelect(item.id)}
          >
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Appdevlopment;
