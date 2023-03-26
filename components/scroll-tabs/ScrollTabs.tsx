// Import React
import React, { useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text } from "react-native";

// Import Components
import ScrollTabsItems from "./ScrollTabsItems";

function ScrollTabs() {
	const [selected, setSelected] = useState(1);

	const press = (index: number) => setSelected(index);

	return (
		<ScrollView
			style={styles.view}
			horizontal
			bounces={false}
			showsHorizontalScrollIndicator={false}
		>
			<ScrollTabsItems index={1} selected={selected} onPress={press} title="News" />
			<ScrollTabsItems index={2} selected={selected} onPress={press} title="Events" />
			<ScrollTabsItems index={3} selected={selected} onPress={press} title="Weather" />
			<ScrollTabsItems index={4} selected={selected} onPress={press} title="Discovery" />
			<ScrollTabsItems index={5} selected={selected} onPress={press} title="Middle East" />
			<ScrollTabsItems index={6} selected={selected} onPress={press} title="Wars" />
		</ScrollView>
	);
}

export default ScrollTabs;

const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		paddingLeft: 20,
	},
	button: {
		marginRight: 30,
	},
	buttonText: {
		fontSize: 16,
		fontFamily: "Dosis_600SemiBold",
		fontWeight: "600",
	},
});
