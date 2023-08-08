import { AppRegistry, StyleSheet, Text, Image, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "./src/screens/SearchScreen";
import ReelsScreen from "./src/screens/ReelsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ChatScreen from "./src/screens/ChatScreen";
import CameraScreen from "./src/screens/CameraScreen";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const Tab = createBottomTabNavigator();
  const topTab = createMaterialTopTabNavigator()
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Title-Font-Regular": require("./assets/font/Instagram.ttf"),
        // Add other font styles if needed.
      });

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  const TabNavigator=()=>(
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{backgroundColor:'black'}}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({focused})=>{
        if(focused)
          return <Ionicons name="home-sharp" color={'white'} size={21}/>
        return <Ionicons name="home-outline" color={'white'} size={20}/>
      }}}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon:({focused})=>{
        if(focused)
          return <Ionicons name="search" color={'white'} size={21}/>
        return <Ionicons name="search-outline" color={'white'} size={20}/>
      }}}/>
      <Tab.Screen name="Add Post" component={HomeScreen} options={{tabBarIcon:()=><Ionicons name="add-circle-outline" color={'white'} size={23}/>}}/>
      <Tab.Screen name="Reels" component={ReelsScreen} options={{tabBarIcon:({focused})=>{
        return focused?<Image
        source={{
          uri: "https://img.icons8.com/external-regular-kawalan-studio/96/FFFFFF/external-instagram-reel-social-media-regular-kawalan-studio.png",
        }}
        style={styles.icon}
      />:<Image
      source={{
        uri: "https://img.icons8.com/external-thin-kawalan-studio/96/FFFFFF/external-instagram-reel-social-media-thin-kawalan-studio.png",
      }}
      style={styles.icon}
    />

      }}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )

  if (!fontsLoaded) {
    return null; // Return null while fonts are loading
  }
  return (
    <NavigationContainer>
      <topTab.Navigator tabBar={(props)=>{return <View></View>}} initialRouteName="Main">
      <topTab.Screen name="Camera" component={CameraScreen} />
      <topTab.Screen name="Main" component={TabNavigator} />
      <topTab.Screen name="Chat" component={ChatScreen} />
    </topTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    marginLeft: 10,
    resizeMode: "contain",
  },
});
