import React from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, Text } from "react-native-paper";

export const ErrorMessage = ({ error }) => {
  return error ? <Text style={styles.error}>{error}</Text> : null;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    color: DefaultTheme.colors.error,
    fontWeight: "bold",
  },
});
