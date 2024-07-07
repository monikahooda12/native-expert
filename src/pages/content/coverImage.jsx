// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Image,
// // } from 'react-native';
// // import { Icon } from 'react-native-vector-icons/FontAwesome';

// // const CoverImages = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   const handleImagePress = (image) => {
// //     setSelectedImage(image);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity style={styles.backButton} onPress={() => {}}>
// //         <Icon name="chevron-left" size={24} color="black" />
// //       </TouchableOpacity>
// //       <Text style={styles.title}>Cover Images</Text>

// //       <View style={styles.uploadContainer}>
// //         <View style={styles.uploadButton}>
// //           <Icon name="upload" size={24} color="#805ad5" />
// //           <Text style={styles.uploadText}>
// //             Browse Files to upload
// //           </Text>
// //         </View>
// //       </View>

// //       <View style={styles.imageContainer}>
// //         <TouchableOpacity
// //           style={styles.image}
// //           onPress={() => handleImagePress('image1')}
// //         >
// //           <Image
// //             source={require('../../assets/Images/welcome2.png')}
// //             style={styles.imageContent}
// //           />
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={styles.image}
// //           onPress={() => handleImagePress('image2')}
// //         >
// //           <Image
// //             source={require('../../assets/Images/welcome3.png')}
// //             style={styles.imageContent}
// //           />
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={styles.image}
// //           onPress={() => handleImagePress('image3')}
// //         >
// //           <Image
// //             source={require('../../assets/Images/welcome3.png')}
// //             style={styles.imageContent}
// //           />
// //         </TouchableOpacity>
// //       </View>

// //       {selectedImage && (
// //         <View style={styles.selectedImageContainer}>
// //           <Text style={styles.selectedImageText}>
// //             Selected Image: {selectedImage}
// //           </Text>
// //         </View>
// //       )}

// //       <View style={styles.navigation}>
// //         <TouchableOpacity style={styles.navButton}>
// //           <Icon name="home" size={24} color="#805ad5" />
// //           <Text style={styles.navButtonText}>Home</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.navButton}>
// //           <Icon name="th" size={24} color="#805ad5" />
// //           <Text style={styles.navButtonText}>Experts</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.navButton}>
// //           <Icon name="user" size={24} color="#805ad5" />
// //           <Text style={styles.navButtonText}>Profile</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   //... same styles as before
// // });

// // export default CoverImages;



import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Profile from '../../home/Profile';

const CoverImage = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);


  // const handleImagePress=(image)=>{
  //   setSelectedImage(image);

  // };

  return (
  

      
<View style={styles.container}>
        
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(Profile)}>
        <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
          
          <Text style={styles.headerTitle}>CoverImage </Text>
          
      </View>

      <View style={styles.uploadContainer}>
        <View style={styles.uploadButton}>
          <Icon name='upload' size={24} color='#805ad5' />
          <Text style={styles.uploadText}>
            Brower files to upload
          </Text>


          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.image}
              onPress={() => handleImagePress('image1')}
            >
              <Image
                source={require('../../assets/Images/logo.png')}
                style={styles.imageContent} />
            </TouchableOpacity>


            <TouchableOpacity style={styles.image}
              onPress={() => handleImagePress('image2')}
            >
              <Image
                source={require('../../assets/Images/welcome2.png')}
                style={styles.imageContent} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.image}
              onPress={() => handleImagePress('image3')}
            >
              <Image
                source={require('../../assets/Images/welcome3.png')}
                style={styles.imageContent} />
            </TouchableOpacity>
          </View>

          {selectedImage && (
            <View style={styles.selectedImageContainer}>
              <Text style={styles.selectedImageContainer}>
                selected Image: {selectedImage}

              </Text>
            </View>
          )}

        </View>
      </View>
    </View>
    
  )
}

export default CoverImage

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 16,
  // },
  // line: {
  //   flexDirection: 'row',
  // },
  backButton: {
    marginBottom: 16,
  },
  title: {

    fontSize: 24,
    fontWeight: 'bold',

  },
  uploadContainer: {
    marginBottom: 16,
    width: '100%',
    height: '40%',
  },
  uploadButton: {
    // flexDirection: 'row',
    alignItems: 'center',
  },
  uploadText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#805ad5',
  },
  imageContainer: {
    marginTop:50,
    justifyContent:'center',
    flexDirection: 'row',
    marginLeft:30,
    
    
    
    
  },
  image: {
    flex: 1,
    // marginHorizontal: 4,
  },
  imageContent: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  selectedImageContainer: {
    marginBottom: 16,
  },
  selectedImageText: {
    fontSize: 16,
    color: '#333',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    marginTop: 4,
    fontSize: 12,
    color: '#805ad5',
  },
  

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
});



//========================================
// import { View, Text } from 'react-native'
// import React from 'react'

// const coverImage = () => {
//   return (
//    <View>
//  <View style={{ justifyContent: "center", flexDirection: "row" }}>

//       <View style={{ marginRight: 30 }}>
//         <Text>
//           Image
//         </Text>
//       </View>

//       <View>
//         <Text>
//           dsfsf
//         </Text>
//         <Text>
//           dsfsf
//         </Text>
//       </View>


//     </View>


//    </View>
//   )
// }

// export default coverImage