import React from "react";
import { List, TouchableRipple } from "react-native-paper";
import { names } from "../../screens";
import { Icon } from "../Icon";

export const PostPhoto = ({ navigate }) => {
  return (
    <List.Section>
      <TouchableRipple onPress={() => console.log("pressed")}>
        <List.Item
          title="Foto/video"
          left={() => (
            <Icon
              size={32}
              source={require("../../../assets/icons/foto.png")}
            />
          )}
        />
      </TouchableRipple>
      <TouchableRipple onPress={() => navigate(names.camera)}>
        <List.Item
          title="Cámara"
          left={() => (
            <Icon
              size={32}
              source={require("../../../assets/icons/camara.png")}
            />
          )}
        />
      </TouchableRipple>
    </List.Section>
  );
};
