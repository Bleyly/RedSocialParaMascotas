import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import { usePicturesContext } from "../helpers/picturesContext";

export const usePicker = () => {
  const {
    picturesState: [, savePicture],
  } = usePicturesContext();

  const pickPicture = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status === "granted") {
        const { uri } = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (uri) {
          savePicture([{ uri }]);
        }
      } else {
        alert("Lo sentimos, necesitamos permiso a la galleria!");
      }
    }
  };

  return pickPicture;
};
