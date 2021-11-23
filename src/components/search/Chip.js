import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Chip } from "react-native-paper";

const Chips = () => (
	<ScrollView
		style={styles.container}
		contentContainerStyle={{ alignItems: "center" }}
	>
		<View style={styles.row}>
			<Chip onPress={() => console.log("Aceptar")} style={styles.chip}>
				<Text style={styles.chipText}>Todo</Text>
			</Chip>

			<Chip style={styles.chip}>
				<Text style={styles.chipText}>Publicación</Text>
			</Chip>

			<Chip style={styles.chip}>
				<Text style={styles.chipText}>Adopción</Text>
			</Chip>
			<Chip style={styles.chip}>
				<Text style={styles.chipText}>Articulo</Text>
			</Chip>
			<Chip style={styles.chip}>
				<Text style={styles.chipText}>Venta</Text>
			</Chip>
			<Chip style={styles.chip}>
				<Text style={styles.chipText}>Cachorros</Text>
			</Chip>
			<Chip style={styles.chip}>
				<Text style={styles.chipText}>Aves</Text>
			</Chip>
		</View>
	</ScrollView>
);

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 8,
		backgroundColor: "#F9F9F9",
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
		paddingHorizontal: 12,
	},
	chip: {
		backgroundColor: "#FFFFFF",
		borderColor: "#B2B2B2",
		margin: 4,
	},
	chipText: {
		color: "#000000",
	},
});

export default Chips;
