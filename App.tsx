import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Title-Font-Regular': require('./assets/font/Instagram.ttf')
        // Add other font styles if needed.
      });

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Return null while fonts are loading
  }
  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  
});
