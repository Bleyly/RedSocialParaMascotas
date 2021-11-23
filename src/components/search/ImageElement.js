import React from "react";
import { StyleSheet, Image } from "react-native";

export default function ImageElement({ imgsource }) {
	return <Image source={imgsource} style={styles.image}></Image>;
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		width: null,

		alignSelf: "stretch",
	},
});
