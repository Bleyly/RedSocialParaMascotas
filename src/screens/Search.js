import React, { useState } from "react";
import {
	TouchableWithoutFeedback,
	View,
	Image,
	Dimensions,
	ScrollView,
	StyleSheet,
} from "react-native";
import { photos as dataphotos } from "../../data/photos";
import Chips from "../components/search/Chip";
import Searchbar from "../components/search/Searchbar";
import ShowImage from "../components/search/ShowImage";

const photos = [...dataphotos, ...dataphotos, ...dataphotos, ...dataphotos];

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export const Search = (props) => {
	const [modal, setModal] = useState({
		visible: false,
		image: photos[0],
	});

	return (
		<ScrollView>
			<Searchbar />
			<Chips />
			<ShowImage modal={modal} setModal={setModal} />
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					backgroundColor: "#FFFFFF",
				}}
			>
				{photos.map((image, index) => (
					<TouchableWithoutFeedback
						key={index}
						onPress={() =>
							setModal({ visible: true, image: photos[index] })
						}
					>
						<Image source={image} style={styles.imagewrap} />
					</TouchableWithoutFeedback>
				))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: "#eee",
	},
	imagewrap: {
		margin: 2,
		padding: 2,
		height: deviceHeight / 3,
		width: deviceWidth / 3 - 6,
		borderRadius: 10,
		backgroundColor: "#fff",
	},
	modal: { flex: 1, padding: 40, backgroundColor: "rgba(0,0,0,0.9)" },
	text: { color: "#fff" },
});
