import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LikeButton from '../components/general/LikeButton'

const SearchScreen = () => {
  return (
    <View style={{flex:1}}>
      <LikeButton color='white' onPress={()=>console.log('pressed')} size={45} onPressColor='red'/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})