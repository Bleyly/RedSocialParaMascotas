import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chats } from "../../screens/chat/Chats";
import { Chat } from "../../screens/chat/Chat";

const Stack = createNativeStackNavigator();

export function ChatNavigation() {
	return (
		<Stack.Navigator
			initialRouteName="chats"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="chats" component={Chats} />
			<Stack.Screen name="chat" component={Chat} />
		</Stack.Navigator>
	);
}
