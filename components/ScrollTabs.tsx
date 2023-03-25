// Import React
import React, { useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text } from "react-native";

function ScrollTab({
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
			style={[
				styles.button,
				index === selected ? { borderColor: "#6D43EA", borderBottomWidth: 3 } : {},
			]}
		>
			<Text style={[styles.buttonText, { color: index === selected ? "black" : "#C0C0C0" }]}>
				{title}
			</Text>
		</Pressable>
	);
}

function ScrollTabs() {
	const [selected, setSelected] = useState(1);

	const click = (index: number) => setSelected(index);

	return (
		<ScrollView
			style={styles.view}
			horizontal
			bounces={false}
			showsHorizontalScrollIndicator={false}
		>
			<ScrollTab index={1} selected={selected} onClick={click} title="News" />
			<ScrollTab index={2} selected={selected} onClick={click} title="Events" />
			<ScrollTab index={3} selected={selected} onClick={click} title="Weather" />
			<ScrollTab index={4} selected={selected} onClick={click} title="Discovery" />
			<ScrollTab index={5} selected={selected} onClick={click} title="Middle East" />
			<ScrollTab index={6} selected={selected} onClick={click} title="Wars" />
		</ScrollView>
	);
}

export default ScrollTabs;

const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		paddingVertical: 15,
		paddingLeft: 20,
	},
	button: {
		paddingHorizontal: 5,
		paddingVertical: 10,
		marginRight: 30,
	},
	buttonText: {
		fontSize: 16,
		fontFamily: "Dosis_600SemiBold",
		fontWeight: "600",
	},
});
