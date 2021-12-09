import React, { useState } from "react";
import { Button, TextInput, Title } from "react-native-paper";
import { names } from "../names";
import { Logo } from "../../components";
import { BackButton } from "../../components/buttons";
import { Background } from "../../components/login";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/users/userActions";
import { Alert } from "react-native";

export const ForgotPassword = ({ navigation: { goBack, navigate } }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState({ value: "", error: false });

  const handleReset = () => {
    setLoading(true);
    const emailError = validateEmail(email.value);

    setEmail({ ...email, error: emailError });

    if (!emailError) {
      dispatch(
        resetPassword(email.value, () => {
          setLoading(false);
          Alert.alert(
            "Revise su correo",
            "Se le ha enviado un correo con los pasos a seguir.",
            [{ text: "OK", onPress: () => navigate(names.login) }]
          );
        })
      ).catch((error) => {
        setLoading(false);
        console.log(error);
      });
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

      <Button
        mode="contained"
        onPress={handleReset}
        style={styles.button}
        loading={loading}
      >
        Enviar instrucciones
      </Button>
    </Background>
  );
};

const validateEmail = (email) => {
  const regularExpresion = /\S+@\S+\.\S+/;

  return !email || email.length <= 0 || !regularExpresion.test(email);
};
