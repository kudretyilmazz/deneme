// Import React
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// Import Components
import PopulerRedactionsItem from "./PopulerRedactionsItem";

function PopulerRedacations() {
	return (
		<View style={styles.container}>
			<Text style={styles.liveNewsHeading}>Popular Redactions</Text>
			<ScrollView
				style={styles.viewWrapper}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
			>
				<PopulerRedactionsItem imagePath={require("../../assets/bbclogo.png")} />
				<PopulerRedactionsItem imagePath={require("../../assets/bbclogo.png")} />
				<PopulerRedactionsItem imagePath={require("../../assets/bbclogo.png")} />
				<PopulerRedactionsItem imagePath={require("../../assets/bbclogo.png")} />
				<PopulerRedactionsItem imagePath={require("../../assets/bbclogo.png")} />
				<PopulerRedactionsItem imagePath={require("../../assets/bbclogo.png")} />
			</ScrollView>
		</View>
	);
}

export default PopulerRedacations;

const styles = StyleSheet.create({
	container: {
		marginTop: 14,
	},
	liveNewsHeading: {
		fontSize: 18,
		fontFamily: "Dosis_700Bold",
		paddingLeft: 20,
	},
	viewWrapper: {
		marginVertical: 5,
		paddingLeft: 20,
	},
});
