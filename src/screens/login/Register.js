import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import { names } from "../names";
import { Logo } from "../../components";
import { BackButton } from "../../components/buttons";
import { Background } from "../../components/login";
import { styles } from "./styles";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../helpers/utils";

export const Register = ({ navigation: { navigate } }) => {
  const [name, setName] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleRegister = () => {
    const nameError = validateName(name.value);
    const emailError = validateEmail(email.value);
    const passwordError = validatePassword(password.value);

    setName({ ...name, error: nameError });
    setEmail({ ...email, error: emailError });
    setPassword({ ...password, error: passwordError });

    if (!nameError && !emailError && !passwordError) {
      navigate(names.home);
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigate(names.launch)} />

      <Logo />

      <Title style={styles.title}>Crear una Cuenta</Title>

      <TextInput
        label="Nombre"
        mode="outlined"
        returnKeyType="next"
        value={name.value}
        onChangeText={(value) => setName({ value, error: false })}
        error={name.error}
        style={styles.input}
        onSubmitEditing={() => emailRef.current.focus()}
      />

      <TextInput
        ref={emailRef}
        label="Correo"
        mode="outlined"
        returnKeyType="next"
        value={email.value}
        onChangeText={(value) => setEmail({ value, error: false })}
        error={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        onSubmitEditing={() => passwordRef.current.focus()}
        style={styles.input}
      />

      <TextInput
        ref={passwordRef}
        label="Contraseña"
        mode="outlined"
        returnKeyType="done"
        value={password.value}
        error={password.error}
        onChangeText={(value) => setPassword({ value, error: false })}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Registrarse
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigate(names.login)}>
          <Text style={styles.link}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
