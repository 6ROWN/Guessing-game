import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import NumberGuesssed from "../components/NumberGuesssed";

const generateRandonNumber = (min, max, exclude) => {
	const randomNumber = Math.floor(Math.random() * (max - min)) + 1;
	if (randomNumber === exclude) {
		return generateRandonNumber(min, max, exclude);
	} else {
		return randomNumber;
	}
};

const GameScreen = ({ randomNumber }) => {
	const initialGuess = generateRandonNumber(1, 99, randomNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	return (
		<View style={styles.container}>
			<Title>Opponent's Guess</Title>
			<NumberGuesssed>{currentGuess}</NumberGuesssed>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		alignItems: "center",
	},
});
