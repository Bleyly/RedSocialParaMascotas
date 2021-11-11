import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { names } from "../../screens";
import { ForgotPassword, Launch, Login, Register } from "../../screens/login";

const Stack = createNativeStackNavigator();

export const LoginNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.launch}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={names.launch} component={Launch} />
      <Stack.Screen name={names.login} component={Login} />
      <Stack.Screen name={names.register} component={Register} />
      <Stack.Screen name={names.forgotPassword} component={ForgotPassword} />
    </Stack.Navigator>
  );
};
