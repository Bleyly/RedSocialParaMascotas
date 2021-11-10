import React from "react";
import { View, Image, StyleSheet } from "react-native";
import * as Paper from "react-native-paper";

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const avatar = () => (
  <Paper.Avatar.Image
    size={50}
    source={require("../../../assets/icons/avatar.png")}
  />
);

export const PostHeader = (props) => {
  return (
    <View style={{ flex: 0 }}>
      <Paper.Drawer.Item
        style={{ backgroundColor: "white" }}
        icon="arrow-left"
        label={<Paper.Title>{props.title}</Paper.Title>}
        onPress={() => props.setPublicacion(1)}
      />
      <Paper.ProgressBar progress={0.5} color={Paper.Colors.blue800} />

      <Paper.Drawer.Item
        style={{ backgroundColor: "white" }}
        icon={avatar}
        label={
          <Paper.Text style={styles.titleText}>{props.userName}</Paper.Text>
        }
      />
    </View>
  );
};
