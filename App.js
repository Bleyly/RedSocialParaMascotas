import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  Appbar,
} from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./src/components/navigation/TabNavigation";
import { DrawerNavigation } from "./src/components/navigation/DrawerNavigation";
import { getHeaderTitle } from "./src/helpers/getHeaderTitle";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator
            initialRouteName="TabNavigation"
            drawerContent={DrawerNavigation}
            screenOptions={{
              header: ({ options: { title }, navigation: { openDrawer } }) => {
                return (
                  <Appbar>
                    <Appbar.Action icon="menu" onPress={openDrawer} />
                    <Appbar.Content title={title} />
                    <Appbar.Action icon="chat" />
                  </Appbar>
                );
              },
            }}
          >
            <Drawer.Screen
              name="TabNavigation"
              component={TabNavigation}
              options={({ route }) => ({ title: getHeaderTitle(route) })}
            />
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
