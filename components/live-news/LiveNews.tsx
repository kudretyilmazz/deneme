// Import React
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

// Import Components
import LiveNewsItem from "./LiveNewsItem";

function LiveNews() {
	return (
		<View>
			<Text style={styles.liveNewsHeading}>Live News</Text>
			<ScrollView
				style={styles.wrapper}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
			>
				<LiveNewsItem imagePath={require("../../assets/news-banner.jpeg")} />
				<LiveNewsItem imagePath={require("../../assets/news-banner.jpeg")} />
				<LiveNewsItem imagePath={require("../../assets/news-banner.jpeg")} />
				<LiveNewsItem imagePath={require("../../assets/news-banner.jpeg")} />
			</ScrollView>
		</View>
	);
}

export default LiveNews;

const styles = StyleSheet.create({
	liveNewsHeading: {
		fontSize: 18,
		fontFamily: "Dosis_700Bold",
		paddingLeft: 20,
	},
	wrapper: {
		marginTop: 20,
		flexDirection: "row",
		paddingLeft: 20,
	},
});
