import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "../utilities/colors";

const PrimaryButton = ({ children, pressHandler }) => {
	return (
		<View style={styles.outerBtnContainer}>
			<Pressable
				onPress={pressHandler}
				android_ripple={{ color: Colors.secondaryColor }}
				style={({ pressed }) =>
					pressed
						? [styles.innerBtnContainer, styles.pressed]
						: styles.innerBtnContainer
				}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	outerBtnContainer: {
		backgroundColor: Colors.primaryColor500,
		width: "100%",
		margin: 4,
		borderRadius: 30,
		overflow: "hidden",
	},
	innerBtnContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 5,
	},

	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.5,
	},
});
