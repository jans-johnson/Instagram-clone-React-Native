import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Animated,
  View,
} from "react-native";
import React, { useRef } from "react";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";
import { POSTS, postType } from "../../data/PostsData";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -75],
  });
  const fadeHeader = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [1, 0],
  });
  
  return (
    <View style={{ flex: 1}}>
      <StatusBar
        backgroundColor="black"
        barStyle='light-content'
      />
      
      <View style={styles.container}>
        <Animated.View
          style={{
            position: "absolute",
            width: "100%",
            elevation: 10,
            zIndex: 100,
            transform: [{ translateY: translateY }],
            opacity:fadeHeader
          }}
        >
          <Header navigation={useNavigation()} />
        </Animated.View>
        <ScrollView
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y/2);
          }}
          style={{
            paddingTop: 75,
          }}
        >
          <Stories />
          {POSTS.map((item,index)=>{
            return <Post post={item} key={index} />
          })}
          <View style={{height:65}}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
