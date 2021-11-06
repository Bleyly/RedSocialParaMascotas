import React from "react";
import { Background } from "../../components/login";
import { Logo } from "../../components";
import { Button, Paragraph, Title } from "react-native-paper";
import { styles } from "./styles";

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
