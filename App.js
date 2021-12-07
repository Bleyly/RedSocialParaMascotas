import React, { useEffect, useState, useCallback } from "react";
import { LogBox, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import { Routes } from "./src/components/navigation";
import { FireBaseProvider } from "./src/config/firebase";
import Constants from "expo-constants";
import { DataProvider } from "./data/dataContext";
import { Splash } from "./src/screens/Splash";
import AppLoading from "expo-app-loading";

// Supresss known issue of firebase
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	if (isLoading) {
		return <Splash />;
	}

	return (
		<PaperProvider>
			<FireBaseProvider>
				<DataProvider>
					<View style={styles.container}>
						<Routes />
					</View>
				</DataProvider>
			</FireBaseProvider>
		</PaperProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		flex: 1,
	},
});

export default App;
