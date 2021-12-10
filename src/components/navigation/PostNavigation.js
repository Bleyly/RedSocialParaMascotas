import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { names } from "../../screens";
import {
  ArticuloPost,
  Post,
  RegalarPost,
  StandarPost,
  VenderPost,
} from "../../screens/post";

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
      <Stack.Screen name={names.givePost} component={RegalarPost} />
      {/* <Stack.Screen name={names.articlePost} component={ArticuloPost} /> */}
    </Stack.Navigator>
  );
};
