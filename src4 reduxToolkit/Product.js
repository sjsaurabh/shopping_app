import { StyleSheet, Text, View, Image, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/cartSlice';
import Cart from './Cart';
import { useNavigation } from '@react-navigation/native';


export default function Product() {
  const navigation=useNavigation()
  const addToCart = (product) => {
    console.log("Product====", product)

    dispatch(add(product))
  }
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const [product, getProduct] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProduct(result))
      .catch((err) => console.log(err))
  }, [])

  return (
    <View style={{
      marginTop:25,
    }}>
      
      
    <TouchableOpacity 
       onPress={()=>navigation.navigate('Cart')}
    >

        <Text style={{
         
        }}>
          cart:{cart.length}
        </Text>
          </TouchableOpacity>
     


   

    <View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <Image
                style={styles.tinyLogo}
                source={{ uri: item.image }}
              />
            <Button
                title="Add to Cart"
                onPress={() => addToCart(item)}
              />
          </View>
        )}
      />
    </View>
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  

  },
  productContainer: {

    padding: 20,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'yellow',
    marginHorizontal: 40,
    marginVertical: 10
  },
  tinyLogo: {

    height: 100, width: 100,
    alignSelf: 'center'
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
})