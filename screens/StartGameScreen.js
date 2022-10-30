import { StyleSheet, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utilities/colors";
import Title from "../components/Title";

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const handleChangeText = (value) => {
		setEnteredNumber(value);
	};

	const resetHandler = () => {
		setEnteredNumber("");
	};

	const confirmHandler = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid Number",
				"Number has to be in the range of 0 - 100",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetHandler,
					},
				]
			);
		} else {
			console.log("faca");
			onPickNumber(chosenNumber);
		}
	};

	return (
		<View style={styles.inputContainer}>
			<View>
				<Title>Guess a number</Title>
			</View>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				value={enteredNumber}
				onChangeText={handleChangeText}
			/>
			<PrimaryButton pressHandler={resetHandler}>Reset</PrimaryButton>
			<PrimaryButton pressHandler={confirmHandler}>Confirm</PrimaryButton>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 100,
		backgroundColor: Colors.primaryColor,
		marginHorizontal: 24,
		borderRadius: 8,
		elevation: 5,
		shadowColor: "black",
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 20,
		shadowOpacity: 0.25,
		justifyContent: "center",
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		fontSize: 32,
		borderBottomColor: Colors.secondaryColor,
		borderBottomWidth: 2,
		color: Colors.secondaryColor,
		marginVertical: 8,
		fontWeight: "bold",
		width: 50,
		textAlign: "center",
	},
});
