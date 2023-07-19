import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.logoText}> Instagram</Text>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        {/* <TouchableOpacity>
            <Image source={{
                uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
            }}
            style={styles.icon}
            />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 6,
    marginRight:20,
    marginBottom:10,
    marginTop:13,
  },
  logoText: {
    paddingLeft:5,
    color:'white',
    fontFamily:'Title-Font-Regular',
    fontSize:32,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 24,
    height: 19,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
