import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const Singlecart = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  useEffect(() => {
    fetchGalleryPhotos();
  }, []);

  const fetchGalleryPhotos = async () => {
    try {
      const response = await fetch('https://your-api-url.com/gallery-photos');
      const data = await response.json();
      setGalleryPhotos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const locationImageUri = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.763636879883!2d77.05356553774597!3d28.447764719059373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4279a737027%3A0x4340a11278a82472!2sGurgaon%2C%20Haryana!5e0!3m2!1sen!2sin';

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#f2f2f2', padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/woman-973635_960_720.jpg'
              }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sonali Saluja</Text>
              <Text style={{ fontSize: 16 }}>Web Developer</Text>
            </View>
          </View>
          <TouchableOpacity style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, color: '#007bff' }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>About</Text>
        <Text style={{ fontSize: 16 }}>
          The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars...
        </Text>
      </View>
      <View style={{ backgroundColor: '#fff', padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Skills</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={{ fontSize: 16, padding: 5, marginRight: 5, marginBottom: 5, backgroundColor: '#f2f2f2', borderRadius: 5 }}>Mock Design</Text>
          <Text style={{ fontSize: 16, padding: 5, marginRight: 5, marginBottom: 5, backgroundColor: '#f2f2f2', borderRadius: 5 }}>Video Editing</Text>
          <Text style={{ fontSize: 16, padding: 5, marginRight: 5, marginBottom: 5, backgroundColor: '#f2f2f2', borderRadius: 5 }}>Vector Maker</Text>
          <Text style={{ fontSize: 16, padding: 5, marginRight: 5, marginBottom: 5, backgroundColor: '#f2f2f2', borderRadius: 5 }}>Create Animations</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Gallery</Text>
        <FlatList
          data={galleryPhotos}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.photoUrl }}
              style={{ width: 100, height: 100, marginRight: 5, marginBottom: 5 }}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      <View style={{ backgroundColor: '#f2f2f2', padding: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Location</Text>
        <Image
          source={{ uri: locationImageUri }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
    </ScrollView>
  );
};

export default Singlecart;
