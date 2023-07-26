import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Post from "./Post";
import { POSTS } from "../../../data/PostsData";

const AllPosts = () => {
  return (
    <View>
      <FlatList
        data={POSTS}
        renderItem={(item) => <Post post={item.item} key={item.index} />}
      />
    </View>
  );
};

export default AllPosts;

const styles = StyleSheet.create({});
