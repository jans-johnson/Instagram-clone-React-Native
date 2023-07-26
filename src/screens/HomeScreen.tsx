import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Animated,
  FlatList,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";
import { POSTS, postType } from "../../data/PostsData";

const HomeScreen = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -65],
  });
  return (
    <View style={{ flex: 1 ,paddingTop:10}}>
      <View
        style={{
          height: StatusBar.currentHeight,
          width: "100%",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          zIndex: 1000,
        }}
      />
      <View style={styles.container}>
        <Animated.View
          style={{
            paddingTop: 15,
            position: "absolute",
            width: "100%",
            elevation: 10,
            zIndex: 100,
            transform: [{ translateY: translateY }],
          }}
        >
          <Header />
        </Animated.View>
        <ScrollView
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y/2);
          }}
          style={{
            paddingTop: 82,
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
