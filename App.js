import React, { useEffect, useState, useCallback } from "react";
import { LogBox, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { Routes } from "./src/components/navigation";
import Constants from "expo-constants";
import { Splash } from "./src/screens/Splash";
import AppLoading from "expo-app-loading";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/redux/store";

// Supresss known issue of firebase
LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core",
  "Setting a timer",
]);

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <Routes />
        </View>
      </PaperProvider>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default App;
