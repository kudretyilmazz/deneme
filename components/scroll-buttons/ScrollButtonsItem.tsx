// Import React
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface IScrollButtonItem {
	title: string;
	index: number;
	onPress: (e: number) => void;
	selected: number;
}

function ScrollButtonItem(props: IScrollButtonItem) {
	// Props Destruction
	const { title, index, onPress, selected } = props;

	// Custom Styles
	const customStyles = StyleSheet.create({
		button: {
			backgroundColor: index === selected ? "#6D43EA" : "#E5E4E2",
		},
		text: {
			color: index === selected ? "white" : "#C0C0C0",
		},
	});

	return (
		<Pressable onPress={() => onPress(index)} style={[styles.button, customStyles.button]}>
			<Text style={[styles.buttonText, customStyles.text]}>{title}</Text>
		</Pressable>
	);
}

export default ScrollButtonItem;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 25,
		borderRadius: 6,
		height: 40,
		marginRight: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontFamily: "Dosis_700Bold",
	},
});
