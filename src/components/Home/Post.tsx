import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { POSTS, postType } from "../../../data/PostsData";
import { Entypo, AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";

const Likes = ({ likes }: { likes: number }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ user, caption }: { user: string; caption: string }) => (
  <Text style={{ color: "white", marginTop: 5 }}>
    <Text style={{ fontWeight: "600" }}>{user}</Text> {caption}{" "}
  </Text>
);

const CommentsSection = ({
  comments,
}: {
  comments: {
    user: string;
    comment: string;
  }[];
}) => (
  <View style={{ marginTop: 5 }}>
    {comments.length > 0 && (
      <Text style={{ color: "grey" }}>
        View{comments.length > 1 ? " all" : ""} {comments.length}
        {comments.length > 1 ? " comments" : " comment"}
      </Text>
    )}
    {comments.map((comment, index) => {
      if(index<=1)
      return (
        <View style={{marginTop:5}} key={index}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
            {comment.comment}
          </Text>
        </View>
      );
    })}
  </View>
);

const Post = ({ post }: { post: postType }) => {
  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes likes={post.likes} />
        <Caption user={post.user} caption={post.caption} />
        <CommentsSection comments={post.comments} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }: { post: postType }) => (
  <View style={styles.postHeaderContainer}>
    <View style={styles.postHeadSubContainer}>
      <Image
        source={{ uri: post.profile_picture }}
        style={styles.headerImage}
      />
      <Text style={styles.headerUsername}>{post.user}</Text>
    </View>

    <Entypo
      name="dots-three-vertical"
      size={17}
      color="white"
      style={{ marginRight: 5 }}
    />
  </View>
);

const PostImage = ({ post }: { post: postType }) => (
  <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
);

const PostFooter = ({ post }: { post: postType }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <AntDesign name="hearto" size={24} color="white" />
      <FontAwesome5
        name="comment"
        size={24}
        color="white"
        style={{
          marginLeft: 15,
        }}
      />
      <Feather
        name="send"
        size={24}
        color="white"
        style={[{ marginLeft: 15, transform: [{ rotate: "10deg" }] }]}
      />
    </View>

    <Feather name="bookmark" size={24} color="white" />
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
    marginBottom: 10,
    alignItems: "center",
  },
  postHeadSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 1.2,
    borderColor: "#ff8501",
  },
  headerUsername: {
    color: "white",
    marginLeft: 10,
    fontWeight: "700",
  },
  postImage: {
    height: 450,
    resizeMode: "cover",
  },
});
