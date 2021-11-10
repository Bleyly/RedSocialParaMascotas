import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import * as Paper from "react-native-paper";
import { StandarPost } from "./StandarPost";
import { VenderPost } from "./VenderPost";
import { RegalarPost } from "./RegalarPost";
import { ArticuloPost } from "./ArticuloPost";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  menuPublicar: {
    padding: 10,
  },
  itemPublicar: {
    width: 40,
    height: 40,
  },
});
const lv_userName = "Bleyly Mendez";
const icon_p_estandar = () => (
  <Image
    style={styles.itemPublicar}
    source={require("../../assets/icons/icon_standar.png")}
  />
);
const icon_v_mascota = () => (
  <Image
    style={styles.itemPublicar}
    source={require("../../assets/icons/icon_vender.png")}
  />
);
const icon_r_mascota = () => (
  <Image
    style={styles.itemPublicar}
    source={require("../../assets/icons/icon_regalar.png")}
  />
);
const icon_v_artuculo = () => (
  <Image
    style={styles.itemPublicar}
    source={require("../../assets/icons/icon_articulos.png")}
  />
);

export const Post = () => {
  const [Publicacion, setPublicacion] = useState(1);

  switch (Publicacion) {
    case 1:
      return (
        <View style={{ flex: 1 }}>
          <Paper.Drawer.Item
            style={{ backgroundColor: "white" }}
            label={<Paper.Title>¿Qué vas a publicar?</Paper.Title>}
          />

          <Paper.List.Item
            left={(props) => (
              <Paper.List.Icon {...props} icon={icon_p_estandar} />
            )}
            onPress={() => {
              setPublicacion(2);
            }}
            title="Publicación Estándar"
          />
          <Paper.List.Item
            left={(props) => (
              <Paper.List.Icon {...props} icon={icon_v_mascota} />
            )}
            onPress={() => {
              setPublicacion(3);
            }}
            title="Vender Mascota"
          />
          <Paper.List.Item
            left={(props) => (
              <Paper.List.Icon {...props} icon={icon_r_mascota} />
            )}
            onPress={() => {
              setPublicacion(4);
            }}
            title="Regalar Mascota"
          />
          <Paper.List.Item
            left={(props) => (
              <Paper.List.Icon {...props} icon={icon_v_artuculo} />
            )}
            onPress={() => {
              setPublicacion(5);
            }}
            title="Vender Artículo"
          />
        </View>
      );
    case 2:
      return (
        <StandarPost
          setPublicacion={setPublicacion}
          userName={lv_userName}
        ></StandarPost>
      );
    case 3:
      return (
        <VenderPost
          setPublicacion={setPublicacion}
          userName={lv_userName}
        ></VenderPost>
      );
    case 4:
      return (
        <RegalarPost
          setPublicacion={setPublicacion}
          userName={lv_userName}
        ></RegalarPost>
      );
    case 5:
      return (
        <ArticuloPost
          setPublicacion={setPublicacion}
          userName={lv_userName}
        ></ArticuloPost>
      );
    default:
      return <div>Lalalala</div>;
  }
};
