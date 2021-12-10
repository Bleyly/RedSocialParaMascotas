import React, { useEffect, useState } from "react";
import { Image, Keyboard, StyleSheet, View } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import { names } from "../names";
import { useDispatch, useSelector } from "react-redux";
import { usePicturesContext } from "../../helpers/picturesContext";
import { usePicker } from "../../hooks/usePicker";
import { updateProfile } from "../../redux/users/userActions";
import { profileTabs } from "../../helpers/profileTabs";

export const Edit_Profile = ({ navigation: { navigate } }) => {
  const {
    picturesState: [pictures, setPictures],
  } = usePicturesContext();

  const dispatch = useDispatch();
  const pickPicture = usePicker();

  const {
    photo,
    name,
    description,
    currentUser: { uid },
  } = useSelector((state) => state.userState);

  const [loading, setLoading] = useState(false);
  const [newName, setName] = useState(name);
  const [newDescription, setDescription] = useState(description);

  const handleSave = () => {
    setLoading(true);
    if (newName && newDescription) {
      dispatch(
        updateProfile(
          newName,
          newDescription,
          pictures.length ? pictures[0].uri : photo,
          () => {
            setLoading(false);
            navigate(names.profile, {
              tab: profileTabs.publishedPosts,
              userId: uid,
            });
          }
        )
      ).catch(() => setLoading(false));
    }
  };

  useEffect(() => {
    const keyboardEvent = Keyboard.addListener("keyboardDidHide", () =>
      Keyboard.dismiss()
    );
    return () => {
      setPictures([]);
      keyboardEvent.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar.Image
          source={
            pictures.length
              ? { uri: pictures[0].uri }
              : photo
              ? { uri: photo }
              : require("../../../assets/avatar.png")
          }
          size={150}
        />
      </View>
      <Button onPress={() => pickPicture()}>Cambiar foto del perfil</Button>
      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          mode="outlined"
          label="Nombre"
          value={newName}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.formInput, { height: 90 }]}
          multiline
          mode="outlined"
          label="Presentación"
          value={newDescription}
          onChangeText={setDescription}
        />
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleSave}
            loading={loading}
          >
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
