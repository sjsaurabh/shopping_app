// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, updateTodo } from './ACTION/todoAction';

// export default function Index() {
//   const [additem, setAdditem] = useState('');
//   const [editItemId, setEditItemId] = useState(null); // Track the item being edited

//   const todoSelector = useSelector((store) => store.task.task);
//   console.log(todoSelector);
//   const dispatch = useDispatch();

//   const handleAddOrUpdateTodo = () => {
//     if (editItemId !== null) {
//       // If an item is being edited, update it
//       dispatch(updateTodo(editItemId, additem));
//       setEditItemId(null);
//     } else {
//       // If not, add a new item
//       dispatch(addTodo(additem));
//     }
//     setAdditem(''); // Clear the input field
//   };

//   const handleEditTodo = (id, text) => {
//     setEditItemId(id); // Set the item ID being edited
//     setAdditem(text); // Populate the input field with the item text
//   };

//   return (
//     <View style={styles.container}>
//       <Text>ToDo_List</Text>
//       <TextInput
//         placeholder="enter todo item"
//         placeholderTextColor="red"
//         style={styles.textInput}
//         value={additem}
//         onChangeText={(text) => setAdditem(text)}
//       />
//       {todoSelector.map((item) => (
//         <View key={item.id}>
//           <Text>{item.text}</Text>
//           <Button
//             title="Edit"
//             onPress={() => handleEditTodo(item.id, item.text)}
//           />
//         </View>
//       ))}
//       <Button
//         title={editItemId !== null ? 'Update' : 'AddTodo'}
//         onPress={handleAddOrUpdateTodo}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textInput: {
//     width: '50%',
//     borderColor: 'pink',
//     borderWidth: 1,
//   },
// });

///aap.js
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';

import Index from './src2/Index';
import store from './src2/store';

export default function App() {
  console.log("asdfghjk");
  console.log("asdfghjk");
  return (
   
      <Provider store={store}>
      <Index/>
      </Provider>
        

  )
}

const styles = StyleSheet.create({})



import { Button, StyleSheet, Text, TextInput, View, } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from './ACTION/todoAction';
export default function Index() {
    const[additem,setAdditem]=useState('')
   
    const  todoSelectore=useSelector((store)=>store.task.task)
    console.log(todoSelectore);
    const Dispatch=useDispatch()
   
  return (
    <View style={styles.containr}>
      <Text>Index</Text>
      <TextInput
      placeholder='enter todo item'
      placeholderTextColor="red"
      style={styles.textInput}
      value={additem}
      onChangeText={(text)=>setAdditem(text)}
      />
      {
        todoSelectore.map((item)=>{
            return(
                <View>
                    <Text>{ item.id}</Text>
                    <Text>{item.text}</Text>
                    
                </View>
            )
        })
      }
      <Button title='addTodo' onPress={()=>{Dispatch(addTodo(additem))}}  />
    </View>
  )
}

const styles = StyleSheet.create({
    containr:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        width:"50%",
        borderColor:'pink',
        borderWidth:1
    }
})