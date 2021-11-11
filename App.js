import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { DrawerNavigation } from "./src/components/navigation";
import { names } from "./src/screens";
import { ForgotPassword, Launch, Login, Register } from "./src/screens/login";
import Constants from "expo-constants";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="DrawerNavigation"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
            />
            <Stack.Screen name={names.launch} component={Launch} />
            <Stack.Screen name={names.login} component={Login} />
            <Stack.Screen name={names.register} component={Register} />
            <Stack.Screen
              name={names.forgotPassword}
              component={ForgotPassword}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});

const theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "#c6c6c6",
    notification: PaperDefaultTheme.colors.notification,
    primary: PaperDefaultTheme.colors.primary,
    text: PaperDefaultTheme.colors.text,
  },
};

export default App;
