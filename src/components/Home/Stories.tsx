import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { USERS } from "../../../data/Users";

const Stories = () => {
  return (
    <View style={styles.storyContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          return (
            <View style={styles.storySingleContainer} key={index}>
              <Image
                source={{
                  uri: story.image,
                }}
                style={styles.storyImage}
              />
              <Text style={styles.storyText}>{
              story.user.length>11 ? story.user.slice(0,10).toLowerCase()+'...'
                : story.user.toLowerCase()}</Text>
            </View>
          );
        })}
      </ScrollView>
      <Text>Stories</Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyContainer: {
    marginBottom: 13,
  },
  storySingleContainer: {
    alignItems: "center",
    marginLeft: 6,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  storyText: {
    color: "white",
  },
});
