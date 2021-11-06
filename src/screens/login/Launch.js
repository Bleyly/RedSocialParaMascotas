import React from "react";
import { Background } from "../../components/login";
import { Logo } from "../../components";
import { Button, DefaultTheme, Paragraph, Title } from "react-native-paper";
import { StyleSheet } from "react-native";

export const Launch = ({ navigation: { navigate } }) => {
  return (
    <Background>
      <Logo />

      <Title style={styles.title}>Nombre de la App</Title>

      <Paragraph style={styles.paragraph}>
        Inserta frase motivacional aqui
      </Paragraph>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigate("Login")}
      >
        Iniciar Sesión
      </Button>
      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigate("Register")}
      >
        Registrarse
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: DefaultTheme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 14,
  },
  paragraph: {
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 16,
  },
});
