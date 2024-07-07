import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Notification from '../assets/Notification/Notification';

const services = [
  {
    id: 1,
    icon: require('../assets/Images/homecart1.png'),
    title: 'Web Design',
    categories: 12,
  },
  {
    id: 2,
    icon: require('../assets/Images/homecart2.png'),
    title: 'App Dev',
    categories: 9,
  },
  {
    id: 3,
    icon: require('../assets/Images/welcome3.png'),
    title: 'Web Design',
    categories: 8,
  },
  {
    id: 4,
    icon: require('../assets/Images/Welcome.png'),
    title: 'Graphic Design',
    categories: 16,
  },
  {
    id: 5,
    icon: require('../assets/Images/Welcome.png'),
    title: 'Hacker',
    categories: 22,
  },
  {
    id: 6,
    icon: require('../assets/Images/Welcome.png'),
    title: 'Data Analyst',
    categories: 12,
  },
];

const CartItem = ({ service, onRemove }) => {
  const handleRemove = () => {
    onRemove(service);
  };

  return (
    <View style={styles.cartItem}>
      <Image source={service.icon} style={styles.cartIcon} />
      <View>
        <Text style={styles.cartTitle}>{service.title}</Text>
        <Text style={styles.cartCategories}>{service.categories} Categories</Text>
      </View>
      <TouchableOpacity onPress={handleRemove}>
        <FontAwesomeIcon icon={faTrash} size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const Cart = ({ cart, onRemove }) => {
  const [hasItems, setHasItems] = useState(cart.length > 0);

  useEffect(() => {
    setHasItems(cart.length > 0);
  }, [cart]);

  return (
    <View style={[styles.cartContainer, { borderTopWidth: hasItems ? StyleSheet.hairlineWidth : 0 }]}>
      {hasItems ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartItem
              key={item.id}
              service={item}
              onRemove={() => onRemove(item)}
            />
          )}
        />
      ) : null}
    </View>
  );
};

const Home = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (service) => {
    setCart(cart.filter((item) => item.id !== service.id));
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = services.filter((service) =>
      service.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredServices(filtered);
  };

   return (
     <View style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity style={styles.backButton}>
           <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
         </TouchableOpacity>

         <Text style={styles.headerText}>Home</Text>
         <TouchableOpacity onPress={()=>navigation.navigate(Notification)}>
         <Icon name="notifications" size={24} color="#000" />

         </TouchableOpacity>
       </View>

{/*   
  // <View style={styles.container}>
        
  // <View style={styles.header}>
  // <Icon name="arrow-back" size={30} color="#000" />
  
    
  //   <Text style={styles.headerTitle}>Home</Text>
  //   <Icon name="notifications" size={24} color="#000" />
  // </View> */}
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>
      
      <ScrollView>
        <View>
          <Image source={require('../assets/Images/home.png')} style={styles.rectangleImage}/>
        </View>

        <View>
          <Text style={styles.Title}>Hello</Text>
          <Text style={styles.Categories}>Categories</Text>
        </View>
        
        <View style={styles.servicesContainer}>
          {filteredServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => addToCart(service)}
            >
              <Image source={service.icon} style={styles.serviceIcon} width='100%' height='100%'/>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceCategories}>{service.categories} Categories</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Cart cart={cart} onRemove={removeFromCart} />
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     paddingHorizontal: 20, // consistent horizontal margin
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    padding: 20,
    // backgroundColor: '#f0f0f0',
    justifyContent:'space-between'
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 50,
    backgroundColor: '#fff',
    height:'8%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  rectangleImage: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    marginVertical: 7, // consistent vertical margin
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '46%',
    height: 200, // Adjust the height to fit your design
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden', // Ensure content doesn't overflow the card
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceIcon: {
    width: '100%',
    height: '100%',
    objectFit:'cover'
  },
  serviceTitle: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1,
  },
  serviceCategories: {
    position: 'absolute',
    bottom: 5,
    left: 10,
    fontSize: 14,
    color: '#fff',
    zIndex: 1,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  Categories: {
    fontSize: 14,
    color: '#888',
  },
  cartContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cartIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartCategories: {
    fontSize: 14,
    color: '#888',
  },
  cartHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
