import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";

const Title = ({ children }) => {
	return (
		<View>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
};

export default Title;

const styles = StyleSheet.create({
	title: {
		color: "#E38B29",
		fontWeight: "bold",
		fontSize: 30,
		textAlign: "center",
		padding: 20,
	},
});
