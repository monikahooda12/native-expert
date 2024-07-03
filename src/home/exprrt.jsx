import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: require('../assets/Images/Welcome.png'),
    title: 'Web Design',
    categories: 12,
  },
  {
    icon: require('../assets/Images/welcome2.png'),
    title: 'App Dev',
    categories: 9,
  },
  {
    icon: require('../assets/Images/welcome3.png'),
    title: 'Web Design',
    categories: 8,
  },
  {
    icon: require('../assets/Images/Welcome.png'),
    title: 'Graphic Design',
    categories: 16,
  },
  {
    icon: require('../assets/Images/Welcome.png'),
    title: 'Hacker',
    categories: 22,
  },
  {
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
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <CartItem
              key={item.title}
              service={item}
              onRemove={() => onRemove(item)}
            />
          )}
        />
      ) : null}
    </View>
  );
};

const Exprrt = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (service) => {
    setCart(cart.filter((item) => item.title !== service.title));
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
      </View>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>
      
      <View style={{height:250, backgroundColor:"grey" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Image source={require('../assets/Images/Welcome.png')} style={{width:"80%",height:150}}/>
      </View>

      <View>
      <Text style={styles.Title}>helohjhjhjhjhj</Text>
      <Text style={styles.Categories}> Categories</Text>
      </View>
      
      <View style={styles.servicesContainer}>
        {filteredServices.map((service) => (
          <TouchableOpacity
            key={service.title}
            style={styles.serviceCard}
            onPress={() => addToCart(service)}
          >
            <Image source={service.icon} style={styles.serviceIcon} />
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceCategories}>{service.categories} Categories</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Cart cart={cart} onRemove={removeFromCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    alignItems:'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    margin: 20,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  rectangleImage: {
    
    padding:"120",
    width: '80%',
    height: 180,
    
    
    marginLeft:50

    
  },
  servicesContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    height:"60%",
    width: '46%',
    // padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
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
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  serviceCategories: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
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
  emptyCart: {
    textAlign: 'center',
    color: '#888',
  },
});

export default Exprrt;
