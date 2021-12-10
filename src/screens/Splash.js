import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import Lottie from "lottie-react-native";

export const Splash = () => {
	const lottieRef = useRef(null);

	useEffect(() => {
		if (lottieRef.current) {
			lottieRef.current.play();
		}
	}, []);

	return (
		<Lottie
			ref={lottieRef}
			source={require("../../assets/fileJSON/46864-lovely-cats.json")}
		/>
	);
};
