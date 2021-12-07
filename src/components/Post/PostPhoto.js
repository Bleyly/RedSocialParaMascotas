import React from "react";
import { List, TouchableRipple } from "react-native-paper";
import { usePicker } from "../../hooks/usePicker";
import { names } from "../../screens";
import { Icon } from "../Icon";

export const PostPhoto = ({ navigate }) => {
  const pickPicture = usePicker();
  return (
    <List.Section>
      <TouchableRipple onPress={() => pickPicture()}>
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
