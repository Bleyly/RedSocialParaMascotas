import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, Avatar } from "react-native-paper";

export const Edit_Profile = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar.Image
          source={require("../../../assets/avatar.png")}
          size={150}
        />
      </View>
      <Button onPress={() => console.log("Pressed")}>
        Cambiar foto del perfil
      </Button>
      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="Nombre"
          onSubmitEditing={() => ageRef.current.focus()}
          returnKeyType="next"

          // value={name}
          // onChangeText={setName}
        />
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="Nombre de Usuario"
          onSubmitEditing={() => ageRef.current.focus()}
          returnKeyType="next"

          // value={name}
          // onChangeText={setName}
        />
        <TextInput
          style={[styles.formInput, { height: 90 }]}
          multiline
          mode="outlined"
          label="Presentación"
          onSubmitEditing={() => ageRef.current.focus()}
          returnKeyType="next"

          // value={name}
          // onChangeText={setName}
        />
        <View style={styles.buttonContainer}>
          <Button mode="contained" style={styles.button}>
            Guardar
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Edit_Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    flexGrow: 1,
  },
  avatar: { alignItems: "center" },
  form: {
    marginTop: 8,
    flexGrow: 1,
  },
  formInput: {
    marginBottom: 12,
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
  },
  button: { width: "50%" },
});
