import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity } from "react-native";

export const BackButton = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.backButton}>
      <AntDesign name="arrowleft" size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 10 + StatusBar.currentHeight,
    left: 10,
  },
});
