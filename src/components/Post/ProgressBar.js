import React from "react";
import { StyleSheet } from "react-native";
import { ProgressBar as PaperProgressBar } from "react-native-paper";

export const ProgressBar = ({ progress }) => {
  return <PaperProgressBar progress={progress} style={styles.progress} />;
};

const styles = StyleSheet.create({
  progress: { backgroundColor: "#e0e0e0" },
});
