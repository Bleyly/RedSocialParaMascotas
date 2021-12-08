import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Edit_Profile = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<ScrollView
				style={styles.container}
				contentContainerStyle={{
					justifyContent: "center",
					alignItems: "center",
				}}
				showsVerticalScrollIndicator={false}
			>
				<Image
					style={styles.userImg}
					source={require("../../../assets/avatar.png")}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Edit_Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
	},
	userImg: {
		height: 150,
		width: 150,
		borderRadius: 75,
	},
});
