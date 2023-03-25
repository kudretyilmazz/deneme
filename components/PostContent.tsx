// Import React
import React from "react";
import { Image, Text, ScrollView, StyleSheet } from "react-native";

// Import Components
import PostSource from "./PostSource";

function PostContent() {
	return (
		<ScrollView bounces={false} style={styles.postWrapper}>
			<PostSource />
			<Image style={styles.coverImage} source={require("../assets/virusbanner.jpeg")} />

			<Text style={styles.locationText}>Europe</Text>
			<Text style={styles.heading}>
				Coranavirues: Depressive symptopms of gut seen associated with COVID
			</Text>
			<Text style={styles.contentText}>
				Human gut system is extremely vast and varied. It consists of an 00 million−100 trillion
				microorganisms and their genes regulate the gastrointestinal tract.
			</Text>
			<Text style={styles.contentText}>
				These microorganisms work through complex pathways and ensure good health.
			</Text>

			<Text style={styles.contentText}>
				Interference of any foreign pathogen in this complex system disrupts the normal mode of
				activity of this population. Not just an infection, a random lifestyle can also disturb the
				gut microbiome.
			</Text>
			<Text style={styles.contentText}>
				Interference of any foreign pathogen in this complex system disrupts the normal mode of
				activity of this population. Not just an infection, a random lifestyle can also disturb the
				gut microbiome.
			</Text>
			<Text style={styles.contentText}>
				Interference of any foreign pathogen in this complex system disrupts the normal mode of
				activity of this population. Not just an infection, a random lifestyle can also disturb the
				gut microbiome.
			</Text>
			<Text style={styles.contentText}>
				Interference of any foreign pathogen in this complex system disrupts the normal mode of
				activity of this population. Not just an infection, a random lifestyle can also disturb the
				gut microbiome.
			</Text>
		</ScrollView>
	);
}

export default PostContent;

const styles = StyleSheet.create({
	coverImage: {
		width: "auto",
		height: 200,
		borderRadius: 4,
		marginTop: 10,
	},
	locationText: {
		fontSize: 12,
		color: "gray",
		marginVertical: 5,
	},
	heading: {
		fontSize: 24,
		color: "#36454F",
		fontFamily: "Dosis_600SemiBold",
	},
	postWrapper: {
		paddingHorizontal: 20,
	},
	contentText: {
		marginVertical: 10,
		fontFamily: "Dosis_400Regular",
		fontSize: 16,
		color: "#36454F",
	},
});
