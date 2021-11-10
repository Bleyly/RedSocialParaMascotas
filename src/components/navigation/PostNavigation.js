import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { names, Post } from "../../screens";
import { StandarPost } from "../../screens/StandarPost";
import { VenderPost } from "../../screens/VenderPost";

const Stack = createNativeStackNavigator();

export const PostNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.post}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={names.post} component={Post} />
      <Stack.Screen name={names.standardPost} component={StandarPost} />
      <Stack.Screen name={names.sellPost} component={VenderPost} />
    </Stack.Navigator>
  );
};
