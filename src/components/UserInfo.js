import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar, Title, TouchableRipple } from "react-native-paper";

export const UserInfo = ({ image, name, style, onPress = () => {} }) => {
  return (
    <TouchableRipple
      onPress={onPress}
      style={{ paddingTop: 8, paddingBottom: 8 }}
    >
      <View style={[styles.userInfo, style]}>
        <Avatar.Image source={image} style={styles.image} />
        <Title style={styles.name}>{name}</Title>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  userInfo: { flexDirection: "row", alignItems: "center" },
  name: { marginLeft: 16 },
});
