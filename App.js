import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
export default function App() {
	const [userNumber, setUserNumber] = useState();

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
	};

	return (
		<LinearGradient
			colors={["red", "yellow", "green"]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require("./assets/Images/game.jpg")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>
					{userNumber ? (
						<GameScreen userNumber={userNumber} />
					) : (
						<StartGameScreen onPickNumber={pickedNumberHandler} />
					)}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.75,
	},
});
