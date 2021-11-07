import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

export const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../../assets/login/background_dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
