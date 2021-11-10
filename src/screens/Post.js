import React from "react";
import { View, StyleSheet } from "react-native";
import { List, Title, TouchableRipple } from "react-native-paper";
import { Icon } from "../components/Icon";
import { ProgressBar } from "../components/Post/ProgressBar";
import { names } from "./names";

export const Post = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>¿Qué vas a publicar?</Title>
      <ProgressBar />

      <View style={styles.options}>
        <List.Section>
          <TouchableRipple onPress={() => navigate(names.standardPost)}>
            <List.Item
              title="Publicación Estándar"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../assets/icons/icon_standar.png")}
                />
              )}
            />
          </TouchableRipple>
          <TouchableRipple onPress={() => navigate(names.sellPost)}>
            <List.Item
              title="Vender Mascota"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../assets/icons/icon_vender.png")}
                />
              )}
            />
          </TouchableRipple>
          <TouchableRipple onPress={() => navigate(names.givePost)}>
            <List.Item
              title="Regalar Mascota"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../assets/icons/icon_regalar.png")}
                />
              )}
            />
          </TouchableRipple>
          <TouchableRipple onPress={() => navigate(names.articlePost)}>
            <List.Item
              title="Vender Artículo"
              left={() => (
                <Icon
                  size={32}
                  source={require("../../assets/icons/icon_articulos.png")}
                />
              )}
            />
          </TouchableRipple>
        </List.Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    marginLeft: 16,
    marginBottom: 12,
  },
  options: {
    flex: 1,
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
