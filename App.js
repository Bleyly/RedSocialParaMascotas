import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </PaperProvider>
  );
}
