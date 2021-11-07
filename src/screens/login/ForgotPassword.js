import React, { useState } from "react";
import { Button, TextInput, Title } from "react-native-paper";
import { names } from "../names";
import { Logo } from "../../components";
import { BackButton } from "../../components/buttons";
import { Background } from "../../components/login";
import { validateEmail } from "../../helpers/utils";
import { styles } from "./styles";

export const ForgotPassword = ({ navigation: { goBack, navigate } }) => {
  const [email, setEmail] = useState({ value: "", error: false });

  const handleReset = () => {
    const emailError = validateEmail(email.value);

    setEmail({ ...email, error: emailError });

    if (!emailError) {
      navigate(names.login);
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigate(names.login)} />

      <Logo />

      <Title style={styles.title}>Restaurar contraseña</Title>

      <TextInput
        label="Correo"
        mode="outlined"
        returnKeyType="done"
        value={email.value}
        onChangeText={(value) => setEmail({ value, error: false })}
        error={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.input}
      />

      <Button mode="contained" onPress={handleReset} style={styles.button}>
        Enviar instrucciones
      </Button>
    </Background>
  );
};
