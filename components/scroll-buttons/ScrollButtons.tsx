// Import React
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

// Import Components
import ScrollButtonItem from "./ScrollButtonsItem";

function ScrollButtons() {
	// useStates
	const [selected, setSelected] = useState(1);

	// Actions
	const press = (index: number) => setSelected(index);

	return (
		<ScrollView
			style={styles.view}
			horizontal
			bounces={false}
			showsHorizontalScrollIndicator={false}
		>
			<ScrollButtonItem index={1} selected={selected} onPress={press} title="All" />
			<ScrollButtonItem index={2} selected={selected} onPress={press} title="Finance" />
			<ScrollButtonItem index={3} selected={selected} onPress={press} title="Sport" />
			<ScrollButtonItem index={4} selected={selected} onPress={press} title="Economics" />
			<ScrollButtonItem index={5} selected={selected} onPress={press} title="Magazine" />
			<ScrollButtonItem index={6} selected={selected} onPress={press} title="Medical" />
		</ScrollView>
	);
}

export default ScrollButtons;

const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		marginTop: 15,
		paddingLeft: 20,
	},
});
