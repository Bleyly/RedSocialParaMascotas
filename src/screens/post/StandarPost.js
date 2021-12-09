import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, TextInput, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { names } from "../names";
import { PostPhoto, ProgressBar } from "../../components/Post";
import { UserInfo } from "../../components";
import { usePicturesContext } from "../../helpers/picturesContext";
import { tags } from "../../helpers/tags";
import { createPost } from "../../redux/posts/postActions";

export const StandarPost = ({ navigation: { goBack, navigate } }) => {
  const {
    picturesState: [pictures, setPictures],
  } = usePicturesContext();

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { name, photo } = useSelector((state) => state.userState);

  const handleSave = () => {
    setLoading(true);
    dispatch(
      createPost(
        {
          description: description.trim(),
          tag: tags.post,
          likes: 0,
          comments: [],
        },
        pictures
      )
    ).then(() => {
      setPictures([]);
      setLoading(false);

      navigate(names.home);
    });
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
        <UserInfo
          image={photo ? { uri: photo } : require("../../../assets/avatar.png")}
          name={name}
        />

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
      <Button
        mode="contained"
        onPress={handleSave}
        style={styles.end}
        loading={loading}
      >
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
