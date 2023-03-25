// Import React
import React, { useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text } from "react-native";

function ScrollButton({
	title,
	index,
	onClick,
	selected,
}: {
	title: string;
	index: number;
	onClick: (e: number) => void;
	selected: number;
}) {
	return (
		<Pressable
			onPress={() => onClick(index)}
			style={[styles.button, { backgroundColor: index === selected ? "#6D43EA" : "#E5E4E2" }]}
		>
			<Text style={[styles.buttonText, { color: index === selected ? "white" : "#C0C0C0" }]}>
				{title}
			</Text>
		</Pressable>
	);
}

function ScrollButtons() {
	const [selected, setSelected] = useState(1);

	const click = (index: number) => setSelected(index);

	return (
		<ScrollView
			style={styles.view}
			horizontal
			bounces={false}
			showsHorizontalScrollIndicator={false}
		>
			<ScrollButton index={1} selected={selected} onClick={click} title="All" />
			<ScrollButton index={2} selected={selected} onClick={click} title="Finance" />
			<ScrollButton index={3} selected={selected} onClick={click} title="Sport" />
			<ScrollButton index={4} selected={selected} onClick={click} title="Economics" />
			<ScrollButton index={5} selected={selected} onClick={click} title="Magazine" />
			<ScrollButton index={6} selected={selected} onClick={click} title="Medical" />
		</ScrollView>
	);
}

export default ScrollButtons;

const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		paddingVertical: 15,
		paddingLeft: 20,
	},
	button: {
		paddingHorizontal: 25,
		paddingVertical: 10,
		borderRadius: 6,
		marginRight: 15,
	},
	buttonText: {
		fontFamily: "Dosis_700Bold",
		fontWeight: "700",
	},
});
