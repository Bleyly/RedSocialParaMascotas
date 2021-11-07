import React, { useEffect, useState } from "react";
import { LogBox, StatusBar, StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Routes } from "./src/components/navigation";
import { FireBaseProvider } from "./src/config/firebase";

// Supresss known issue of firebase
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);

const App = () => {
  return (
    <PaperProvider>
      <FireBaseProvider>
        <View style={styles.container}>
          <Routes />
        </View>
      </FireBaseProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default App;
