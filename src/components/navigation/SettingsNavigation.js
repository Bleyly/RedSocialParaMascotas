import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { names } from "../../screens";
import {
	Account_Status,
	Edit_Profile,
	Personal_Information,
	Post_Liked,
	Settings,
} from "../../screens/setting";

const Stack = createNativeStackNavigator();

export const SettingsNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName={names.settings}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name={names.settings} component={Settings} />
			<Stack.Screen name={names.edit_profile} component={Edit_Profile} />
			<Stack.Screen
				name={names.account_status}
				component={Account_Status}
			/>

			<Stack.Screen
				name={names.personal_information}
				component={Personal_Information}
			/>
			<Stack.Screen name={names.post_liked} component={Post_Liked} />
		</Stack.Navigator>
	);
};
