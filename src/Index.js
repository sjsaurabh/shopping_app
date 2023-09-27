import { Button, FlatList, StyleSheet, Text, Image, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from './action/todoActions';
import { deleteAll, removeTodo } from './action/todoActions'

export default function Index() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todo1.todo2);
  const dispatch = useDispatch();
  console.log(todos);
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };
  const handleUpdateTodo = (item) => {
    const updatedTodo = {
      ...item,
      newTodo,
    };
    updateTodo(updatedTodo);
    // Navigate back to the previous screen
  };
  return (
    <View style={styles.mainContainer}>
      <Text>To_Do_List</Text>
      <View style={{ flexDirection: 'row', }}>

        <TextInput
          style={{
            borderWidth: 1,
            width: '35%'
          }}
          placeholder="Add a new todo"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <Button title="Add" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 8 }}>
            <Text>{item.id}</Text>
            <Text>{item.text}</Text>
            <Text style={{ paddingHorizontal: 10 }} >{item.name}</Text>
            <TouchableOpacity
              onPress={handleUpdateTodo}
            >

              <Image
                style={styles.editLogo}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjexoBQF5v5ayn1tt5MP0iPagTNVxmw4xDVdNPEpErB2db6T6JfPVep8u0twN1lwqk7Q&usqp=CAU',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => dispatch(removeTodo(item.id))}
            >

              <Image
                style={styles.editLogo}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => dispatch(deleteAll())}
      >
        <Text style={styles.DeleteBtn}>Delete All</Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    //  flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  DeleteBtn: {
    backgroundColor: 'red',
    paddingHorizontal: 12,
    paddingVertical: 5,
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  editLogo: {
    height: 20, width: 20,
    // paddingHorizontal:10,
    marginHorizontal: 6
  }
})


//////////////////////////////
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Index from './src/Index'
// import {Provider} from 'react-redux'
// import store from './src/store'

// export default function App() {
//   return (
//     <Provider store={store}>

//       <Index/>
//     </Provider>
//   )
// }

// const styles = StyleSheet.create({})