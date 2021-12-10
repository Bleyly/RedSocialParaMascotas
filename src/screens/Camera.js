import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Camera as ExpoCamera } from "expo-camera";
import { Button, FAB, Text } from "react-native-paper";
import { usePicturesContext } from "../helpers/picturesContext";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

let deviceWidth = Dimensions.get("window").width;

export const Camera = ({ navigation: { goBack } }) => {
  const {
    picturesState: [, savePicture],
  } = usePicturesContext();

  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);

  const [picture, setPicture] = useState(null);

  const handleFlip = () => {
    setType((prevType) =>
      prevType === ExpoCamera.Constants.Type.back
        ? ExpoCamera.Constants.Type.front
        : ExpoCamera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setPicture(uri);
    }
  };

  const handleSave = () => {
    savePicture([{ uri: picture }]);
    goBack();
  };

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (!hasPermission) {
    return <Text>Sin acceso a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      {!picture ? (
        <Fragment>
          <ExpoCamera
            ref={cameraRef}
            type={type}
            ratio={"1:1"}
            style={styles.camera}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => goBack()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFlip}>
              <Ionicons name="camera-reverse-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <FAB onPress={takePicture} />
          </View>
        </Fragment>
      ) : (
        <Fragment>
          <Image source={{ uri: picture }} style={{ flex: 1 }} />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => setPicture(null)}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave}>
              <Ionicons name="save" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonsContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    top: 0,
    padding: 16,
  },
  button: {
    position: "absolute",
    left: (deviceWidth - 56) / 2,
    paddingBottom: 16,
  },
});
