import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../utilities/colors";

const NumberGuesssed = ({ children }) => {
	return (
		<View style={styles.numberContainer}>
			<Text style={styles.textContainer}>{children}</Text>
		</View>
	);
};

export default NumberGuesssed;

const styles = StyleSheet.create({
	numberContainer: {
		backgroundColor: "#fff",
		padding: 20,
		borderWidth: 4,
		borderColor: Colors.secondaryColor,
		borderRadius: 100 / 2,
		height: 100,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		color: Colors.secondaryColor,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
});
