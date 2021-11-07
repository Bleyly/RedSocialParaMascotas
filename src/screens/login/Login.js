import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import { Logo } from "../../components";
import { BackButton } from "../../components/buttons";
import { Background } from "../../components/login";
import { validateEmail, validatePassword } from "../../helpers/utils";
import { names } from "../names";
import { styles } from "./styles";

export const Login = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });

  const passwordRef = useRef();

  const handleLogin = () => {
    const emailError = validateEmail(email.value);
    const passwordError = validatePassword(password.value);

    setEmail({ ...email, error: emailError });
    setPassword({ ...password, error: passwordError });

    if (!emailError && !passwordError) {
      navigate(names.home);
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigate(names.launch)} />

      <Logo />

      <Title style={styles.title}>Bienvenido de nuevo</Title>

      <TextInput
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

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigate(names.forgotPassword)}>
          <Text style={styles.label}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Iniciar Sesión
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigate(names.register)}>
          <Text style={styles.link}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
