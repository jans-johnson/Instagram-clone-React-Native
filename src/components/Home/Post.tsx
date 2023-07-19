import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { POSTS, postType } from "../../../data/PostsData";
import { Entypo } from '@expo/vector-icons';


const Post = ({ post }: { post: postType }) => {
  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }: { post: postType }) => (
  <View style={styles.postHeaderContainer}>
    <View style={styles.postHeadSubContainer}>
      <Image source={{ uri: post.profile_picture }} style={styles.headerImage} />
    <Text style={styles.headerUsername}>{post.user}</Text>
    </View>

    <Entypo name="dots-three-vertical" size={17} color="white" style={{marginRight:5}}/>
  </View>
);

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 30,
  },
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  postHeadSubContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  headerImage: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 1.2,
    borderColor: "#ff8501",
  },
  headerUsername:{
    color:'white',
    marginLeft:10,
    fontWeight:'700'
  }
});
