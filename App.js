import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from "./src/components/navigation/drawer/DrawerNavigation";

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <NavigationContainer theme={theme}>
          <DrawerNavigation />
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});

const theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: PaperDefaultTheme.colors.background,
    notification: PaperDefaultTheme.colors.notification,
    primary: PaperDefaultTheme.colors.primary,
    text: PaperDefaultTheme.colors.text,
  },
};

export default App;
