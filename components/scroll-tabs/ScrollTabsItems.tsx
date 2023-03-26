// Import React
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface IScrollTabsItems {
	title: string;
	index: number;
	onPress: (e: number) => void;
	selected: number;
}

function ScrollTabsItems(props: IScrollTabsItems) {
	// Props Destruction
	const { title, index, onPress, selected } = props;

	// Custom Styles
	const customStyles = StyleSheet.create({
		button: { borderColor: "#6D43EA", borderBottomWidth: index === selected ? 3 : 0 },
		text: {
			color: index === selected ? "black" : "#C0C0C0",
		},
	});

	return (
		<Pressable onPress={() => onPress(index)} style={[styles.button, customStyles.button]}>
			<Text style={[styles.buttonText, customStyles.text]}>{title}</Text>
		</Pressable>
	);
}

export default ScrollTabsItems;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 5,
		marginRight: 30,

		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 16,
		fontFamily: "Dosis_600SemiBold",
		fontWeight: "600",
	},
});
