import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Header = ({navigation}:{navigation:NavigationProp<ReactNavigation.RootParamList>}) => {
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
        <TouchableOpacity onPress={()=>navigation.navigate('Chat' as never)}>
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
    backgroundColor:'black',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 6,
    paddingRight:20,
    paddingBottom:8,
    paddingTop:23,
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
