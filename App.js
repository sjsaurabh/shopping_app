import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from './src4 reduxToolkit/Index'
import { Provider } from 'react-redux'
import store from './src4 reduxToolkit/store/store'

export default function App() {
  return <Provider store={store}>

    <Index/>
  </Provider>
  
}

const styles = StyleSheet.create({})