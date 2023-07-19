import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { POSTS, postType } from "../../../data/PostsData";
import { Entypo,AntDesign, FontAwesome5,Feather } from '@expo/vector-icons';


const Post = ({ post }: { post: postType }) => {
  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} />
      <PostImage post={post}/>
      <PostFooter post={post}/>
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

const PostImage = ({post}:{post:postType})=>(
    <Image source={{uri:post.imageUrl}} style={styles.postImage}/>
)

const PostFooter = ({post}:{post:postType})=>(
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8,marginRight:15}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <AntDesign name="hearto" size={24} color="white" style={styles.iconStyle}/>
        <FontAwesome5 name="comment" size={24} color="white" style={styles.iconStyle}/>
        <Feather name="send" size={24} color="white" style={[styles.iconStyle,{transform:[{rotate:'10deg'}]}]} />
        </View>

        <Feather name="bookmark" size={24} color="white" />
    </View>
)

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 30,
  },
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    marginBottom:10,
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
  },
  postImage:{
    height:450,
    resizeMode:'cover'
  },
  iconStyle:{
    marginLeft:15,
  }
});
