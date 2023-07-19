import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../../../assets/logo-instagram.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    
  },
});
