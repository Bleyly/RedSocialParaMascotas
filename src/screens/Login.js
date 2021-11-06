import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { names } from ".";

export const Login = ({ navigation: { navigate } }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
      <Button onPress={() => navigate(names.home)}>Iniciar Sesión</Button>
    </View>
  );
};
