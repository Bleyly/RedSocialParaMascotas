import React, { Fragment } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { chats } from "../../../data/chats";

export const Chats = ({ navigation: { navigate } }) => {
	return (
		<ScrollView style={styles.container}>
			<TouchableRipple onPress={() => navigate("chat")}>
				<View style={styles.chat}>
					<Avatar.Image source={chats[0].userImg} />
					<View style={styles.information}>
						<Title>{chats[0].userName}</Title>
						<View style={{ flexDirection: "row" }}>
							<Caption
								ellipsizeMode="tail"
								numberOfLines={1}
								style={{ flexBasis: "60%" }}
							>
								{chats[0].lastMessage}
							</Caption>
							<Caption
								style={{ marginLeft: 4, flexBasis: "40%" }}
							>
								{chats[0].messageTime}
							</Caption>
						</View>
					</View>
				</View>
			</TouchableRipple>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 8,
		backgroundColor: "white",
	},
	chat: {
		margin: 16,
		flexDirection: "row",
		borderBottomWidth: 1.5,
		borderBottomColor: "#e0e0e0",
		paddingBottom: 8,
	},
	information: {
		marginLeft: 8,
	},
});
