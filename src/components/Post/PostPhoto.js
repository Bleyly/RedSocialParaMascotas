import React from "react";
import { View, Image, StyleSheet } from "react-native";
import * as Paper from "react-native-paper";

const styles = StyleSheet.create({
  itemPublicar: {
    width: 40,
    height: 40,
  },
  menuPublicar: {
    padding: 10,
  },
});

const camara = () => (
  <Image
    style={styles.itemPublicar}
    source={require("../../../assets/icons/camara.png")}
  />
);
const foto = () => (
  <Image
    style={styles.itemPublicar}
    source={require("../../../assets/icons/foto.png")}
  />
);

export const PostPhoto = () => {
  return (
    <View style={{ flex: 0 }}>
      <Paper.Menu.Item
        icon={foto}
        onPress={() => {
          console.log("Subir Foto o Video");
        }}
        title="Foto / Video"
      />
      <Paper.Menu.Item
        icon={camara}
        onPress={() => {
          console.log("Abrir Camara Para Tirar Foto");
        }}
        title="Camara"
      />
    </View>
  );
};
