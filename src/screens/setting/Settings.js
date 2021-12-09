import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { List, Title, TouchableRipple } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../components/Icon";
import { ProgressBar } from "../../components/Post";
import { resetPassword } from "../../redux/users/userActions";
import { names } from "../names";

export const Settings = ({ navigation: { navigate } }) => {
  const {
    currentUser: { email },
  } = useSelector((state) => state.userState);

  const dispatch = useDispatch();
  const handlePasswordReset = () => {
    dispatch(
      resetPassword(email, () => {
        Alert.alert(
          "Revise su correo",
          "Se le ha enviado un correo con los pasos a seguir.",
          [{ text: "OK", onPress: () => navigate(names.home) }]
        );
      })
    );
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Configuración</Title>
      <ProgressBar />

      <View style={styles.options}>
        <List.Section>
          <TouchableRipple onPress={() => navigate(names.edit_profile)}>
            <List.Item
              title="Editar Perfil"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../../assets/iconsSetting/icons_EditarPerfil.png")}
                />
              )}
            />
          </TouchableRipple>
          {/* <TouchableRipple onPress={() => navigate(names.personal_information)}>
            <List.Item
              title="Información Personal"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../../assets/iconsSetting/icon_InformacionPersonal.png")}
                />
              )}
            />
          </TouchableRipple> */}
          <TouchableRipple onPress={() => navigate(names.post_liked)}>
            <List.Item
              title="Publicación que te gustó"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../../assets/iconsSetting/icon_meGusta.png")}
                />
              )}
            />
          </TouchableRipple>
          <TouchableRipple onPress={handlePasswordReset}>
            <List.Item
              title="Cambiar Contraseña"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../../assets/iconsSetting/icon._estadoDeCuenta.png")}
                />
              )}
            />
          </TouchableRipple>
        </List.Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginLeft: 16,
    marginBottom: 12,
    marginTop: 12,
  },
  options: {
    flex: 1,
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
