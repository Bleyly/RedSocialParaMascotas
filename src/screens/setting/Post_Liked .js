import * as React from "react";
import { View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";

export const Post_Liked = () => (
	<TouchableRipple
		onPress={() => console.log("Pressed")}
		rippleColor="rgba(0, 0, 0, .32)"
	>
		<Text>Press anywhere</Text>
	</TouchableRipple>
);
