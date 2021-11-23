import React, { useState } from "react";
import { View, Dimensions, Modal, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ImageElement from "./ImageElement";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const ShowImage = ({ modal, setModal }) => {
	// cerrar modal
	const handleClose = () => {
		setModal((prevState) => ({
			...prevState,
			visible: false,
		}));
	};

	return (
		<Modal
			style={styles.modal}
			animationType={"fade"}
			visible={modal.visible}
		>
			<View style={styles.modal}>
				<Text style={styles.text} onPress={handleClose}>
					Close
				</Text>
				<ImageElement imgsource={modal.image} />
			</View>
		</Modal>
	);
};

export default ShowImage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: "#eee",
	},
	modal: { flex: 1, padding: 40, backgroundColor: "rgba(0,0,0,0.9)" },
	text: { color: "#fff" },
});
