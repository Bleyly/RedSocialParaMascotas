import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import { names } from "../names";
import { ErrorMessage, Logo } from "../../components";
import { BackButton } from "../../components/buttons";
import { Background } from "../../components/login";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { register } from "../../redux/users/userActions";

export const Register = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState({ value: "", error: null });
  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });

  const handleRegister = () => {
    setLoading(true);
    if (name.value.length === 0) {
      setName({ ...name, error: "El nombre es requerido" });
    }

    if (email.value.length === 0) {
      setEmail({ ...email, error: "El correo es requerido" });
    }

    if (password.value.length === 0) {
      setPassword({ ...password, error: "La contraseña es requerido" });
    }

    if (!name.error && !email.error && !password.error) {
      dispatch(register(name.value, email.value, password.value)).catch(
        (error) => {
          if (error.code === "auth/email-already-in-use") {
            setEmail({ ...email, error: "El correo es ya esta en uso" });
          } else if (error.code === "auth/invalid-email") {
            setEmail({ ...email, error: "El correo es inválido" });
          } else if (error.code === "auth/weak-password") {
            setPassword({
              ...password,
              error: "La contraseña debe tener al menos 6 caracteres",
            });
          } else {
            console.log(error);
          }
        }
      );
    }
  };

  return (
    <Background>
      <BackButton goBack={() => navigate(names.launch)} />

      <Logo />

      <Title style={styles.title}>Crear una Cuenta</Title>

      <ErrorMessage error={name.error ?? email.error ?? password.error} />

      <TextInput
        label="Nombre"
        mode="outlined"
        returnKeyType="next"
        value={name.value}
        onChangeText={(value) => setName({ value, error: null })}
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
        onChangeText={(value) => setEmail({ value, error: null })}
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
        onChangeText={(value) => setPassword({ value, error: null })}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleRegister}
        style={styles.button}
        loading={loading}
      >
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
