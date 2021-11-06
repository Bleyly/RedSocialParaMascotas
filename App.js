import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./src/components/navigation/TabNavigation";
import { DrawerNavigation } from "./src/components/navigation/DrawerNavigation";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator
            initialRouteName="TabNavigation"
            screenOptions={{ headerShown: false }}
            drawerContent={DrawerNavigation}
          >
            <Drawer.Screen name="TabNavigation" component={TabNavigation} />
          </Drawer.Navigator>
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
