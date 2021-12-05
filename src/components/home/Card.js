import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { UserInfo } from "../UserInfo";
import { CardButtons } from "./CardButtons";

export const Card = ({
  post: {
    user: { name, photo: avatar },
    description,
    photos,
    likes,
    comment,
  },
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      <UserInfo style={styles.userInfo} image={avatar} name={name} />

      <Text style={styles.description}>{description}</Text>

      <Image style={styles.image} source={photos[0]} />

      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text>{liked ? likes + 1 : likes}</Text>
          <Text style={styles.bold}> Me gusta</Text>
        </View>
        <View style={styles.row}>
          <Text>{comment}</Text>
          <Text style={styles.bold}> Comentarios</Text>
        </View>
      </View>

      <Divider />

      <CardButtons
        liked={liked}
        setLiked={setLiked}
        saved={saved}
        setSaved={setSaved}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 8,
  },
  userInfo: { marginLeft: 16 },
  description: { margin: 16 },
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
