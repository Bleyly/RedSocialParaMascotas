import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, TextInput, Title } from "react-native-paper";
import { names } from "../names";
import { users } from "../../../data/users";
import { PostPhoto, ProgressBar } from "../../components/Post";
import { UserInfo } from "../../components";
import { useFireBaseContext } from "../../config/firebase";
import { photos } from "../../../data/photos";
import { useDataContext } from "../../../data/dataContext";
import { usePicturesContext } from "../../helpers/picturesContext";

export const StandarPost = ({ navigation: { goBack, navigate } }) => {
  const {
    picturesState: [pictures, setPictures],
  } = usePicturesContext();

  const [description, setDescription] = useState("");

  const { user } = useFireBaseContext();
  const { addPost, posts } = useDataContext();

  const handleSave = () => {
    addPost({
      _id: posts.length + 1,
      userId: user.uid,
      description: description.trim(),
      photos: [...pictures],
      tag: "post",
      likes: Number((Math.random() * 10000).toFixed(0)),
      comment: Number((Math.random() * 10000).toFixed(0)),
    });

    setPictures([]);

    navigate(names.home);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => goBack()}>
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
        <Title style={styles.title}>¿Qué vas a publicar?</Title>
      </View>
      <ProgressBar progress={0.5} />

      <View style={styles.container}>
        <UserInfo image={users[0].photo} name={user.displayName} />

        <TextInput
          mode="outlined"
          multiline={true}
          placeholder="¿Qué estás pensando?"
          style={styles.textarea}
          value={description}
          onChangeText={setDescription}
        />

        <PostPhoto navigate={navigate} />
      </View>
      <Button mode="contained" onPress={handleSave} style={styles.end}>
        Finalizar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginBottom: 12,
    marginTop: 12,
  },
  back: { marginTop: 5 },
  title: { fontSize: 24, marginLeft: 24 },
  container: { paddingLeft: 16, paddingRight: 16 },
  textarea: { marginTop: 16, height: 150 },
  end: { position: "absolute", bottom: 32, right: 16 },
});
