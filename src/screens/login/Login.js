import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import { ErrorMessage, Logo } from "../../components";
import { BackButton } from "../../components/buttons";
import { Background } from "../../components/login";
import { useFireBaseContext } from "../../config/firebase";
import { names } from "../names";
import { styles } from "./styles";

export const Login = ({ navigation: { navigate } }) => {
  const { login } = useFireBaseContext();

  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado");
      } else {
        setError("Correo o contraseña no válidos");
      }
      console.log(error);
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigate(names.launch)} />

      <Logo />

      <Title style={styles.title}>Bienvenido de nuevo</Title>

      <ErrorMessage error={error} />

      <TextInput
        label="Correo"
        mode="outlined"
        returnKeyType="next"
        value={email}
        onChangeText={(value) => setEmail(value)}
        error={error}
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
        value={password}
        error={error}
        onChangeText={(value) => setPassword(value)}
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
