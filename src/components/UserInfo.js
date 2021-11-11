import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar, Title } from "react-native-paper";

export const UserInfo = ({ image, name, style }) => {
  return (
    <View style={[styles.userInfo, style]}>
      <Avatar.Image source={image} style={styles.image} />
      <Title style={styles.name}>{name}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: { flexDirection: "row", alignItems: "center" },
  image: { marginTop: 16 },
  name: { marginLeft: 16 },
});
