import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ShowImage from "./search/ShowImage";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export const ImagesGrid = ({ images }) => {
  const [modal, setModal] = useState({
    visible: false,
    image: null,
  });

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => setModal({ visible: true, image: images[index] })}
        >
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableWithoutFeedback>
      ))}
      <ShowImage modal={modal} setModal={setModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    height: deviceHeight / 3,
    width: deviceWidth / 3,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  },
});
