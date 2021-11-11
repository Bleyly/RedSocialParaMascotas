import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { UserInfo } from "../UserInfo";
import { CardButtons } from "./CardButtons";

export const Card = ({
  style,
  avatar,
  name,
  description,
  photos,
  likes,
  comments,
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <UserInfo style={styles.userInfo} image={avatar} name={name} />

      <Text style={styles.description}>{description}</Text>

      <Image style={styles.image} source={photos[0]} />

      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text>{liked ? likes + 1 : likes}</Text>
          <Text style={styles.bold}> Me gusta</Text>
        </View>
        <View style={styles.row}>
          <Text>{comments}</Text>
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
  },
  userInfo: { marginLeft: 16 },
  description: { margin: 16 },
  image: { width: "100%", height: 360 },
  row: { flexDirection: "row" },
  bold: { fontWeight: "bold" },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
});
