import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { UserInfo } from "../UserInfo";
import { CardButtons } from "./CardButtons";
import { useNavigation } from "@react-navigation/native";
import { names } from "../../screens/names";
import { profileTabs } from "../../helpers/profileTabs";

export const Card = ({
  post: {
    uid,
    user: { name, photo: avatar },
    description,
    pictures,
    likes,
    comments,
    userId,
  },
}) => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate(names.profile, {
      tab: profileTabs.publishedPosts,
      userId: userId,
    });
  };

  return (
    <View style={styles.container}>
      <UserInfo
        style={styles.userInfo}
        image={avatar ? { uri: avatar } : require("../../../assets/avatar.png")}
        name={name}
        onPress={handlePress}
      />

      <Text style={styles.description}>{description}</Text>

      <Image style={styles.image} source={{ uri: pictures[0] }} />

      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text>{likes}</Text>
          <Text style={styles.bold}> Me gusta</Text>
        </View>
        <View style={styles.row}>
          <Text>{comments.length}</Text>
          <Text style={styles.bold}> Comentarios</Text>
        </View>
      </View>

      <Divider />

      <CardButtons postId={uid} navigate={navigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 8,
  },
  userInfo: { marginLeft: 16 },
  description: {
    marginTop: 8,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
  image: {
    width: "100%",
    height: 360,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  },
  row: { flexDirection: "row" },
  bold: { fontWeight: "bold" },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
});
