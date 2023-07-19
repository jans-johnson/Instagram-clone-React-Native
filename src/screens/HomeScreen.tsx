import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})