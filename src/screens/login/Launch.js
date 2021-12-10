import React from "react";
import { Background } from "../../components/login";
import { Logo } from "../../components";
import { Button, Paragraph, Title } from "react-native-paper";
import { styles } from "./styles";
import { names } from "../names";

export const Launch = ({ navigation: { navigate } }) => {
	return (
		<Background>
			<Logo />

			<Paragraph style={styles.paragraph}>
				"Hasta el más pequeño de los animales es una obra maestra"
			</Paragraph>

			<Button
				mode="contained"
				style={styles.button}
				onPress={() => navigate(names.login)}
			>
				Iniciar Sesión
			</Button>
			<Button
				mode="outlined"
				style={styles.button}
				onPress={() => navigate(names.register)}
			>
				Registrarse
			</Button>
		</Background>
	);
};
