import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, TextInput, Title } from "react-native-paper";
import { names } from "../names";
import { users } from "../../../data/users";
import { ProgressBar } from "../../components/Post/ProgressBar";
import { PostPhoto } from "../../components/Post/PostPhoto";

export const StandarPost = ({ navigation: { goBack, navigate } }) => {
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
        <View style={styles.userInfo}>
          <Avatar.Image source={users[0].photo} style={styles.avatar} />
          <Title style={styles.username}>{users[0].name}</Title>
        </View>

        <TextInput
          mode="outlined"
          multiline={true}
          placeholder="¿Qué estás pensando?"
          style={styles.textarea}
        />

        <PostPhoto />
      </View>
      <Button
        mode="contained"
        onPress={() => navigate(names.home)}
        style={styles.end}
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginBottom: 12,
  },
  back: { marginTop: 5 },
  title: { fontSize: 24, marginLeft: 24 },
  container: { paddingLeft: 16, paddingRight: 16 },
  userInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { marginTop: 16 },
  username: { marginLeft: 16 },
  textarea: { marginTop: 16, height: 150 },
  end: { position: "absolute", bottom: 32, right: 16 },
});
