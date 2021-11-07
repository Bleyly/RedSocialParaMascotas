import React from "react";
import { Background } from "../../components/login";
import { Logo } from "../../components";
import { Button, Paragraph, Title } from "react-native-paper";
import { styles } from "./styles";
import { names } from "../names";

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
        onPress={() => navigate(names.login)}
      >
        Iniciar Sesión
      </Button>
      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigate(names.register)}
      >
        Registrarse
      </Button>
    </Background>
  );
};
