import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from './store/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  removeCart=(id)=>{
    dispatch(remove(id))
  }
  return (
    <View>
      <Text>Cart Items:</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => {
          return (
            <ScrollView
              key={item.id}
              style={styles.productContainer}
            >
              <View style={styles.container} >
               
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
              <Image
                style={styles.tinyLogo}
                source={{ uri: item.image }}
              />
              <Text style={{ alignSelf: 'center' }}>{item.price}</Text>
              <View style={{
                paddingTop: 10,
              }} >

                <Button title='remove'style = {{color:'red'}} onPress={()=>removeCart(item.id)}  />
               
              </View>

            </ScrollView>
          )
        }
        }
        keyExtractor={(item) => item.id}

      />
    </View>
  );
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
  }
})