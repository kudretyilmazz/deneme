// Import React
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

// Import Components
import PostSource from "../../components/post/PostSource";
import PostContent from "../../components/post/PostContent";

function Post(props: NativeStackScreenProps<RootStackParamList, "Post">) {
	// Props Destruction
	const { navigation } = props;

	// Fake Data
	const source = {
		name: "BBC News",
		logo: require("../../assets/bbclogo.png"),
		time: "14 min ago",
	};

	const post = {
		image: require("../../assets/virusbanner.jpeg"),
		title: "Coranavirues: Depressive symptopms of gut seen associated with COVID",
		location: "Europe",
		content: [
			"Human gut system is extremely vast and varied. It consists of an 00 million−100 trillionmicroorganisms and their genes regulate the gastrointestinal tract.",
			"These microorganisms work through complex pathways and ensure good health.",
			"Interference of any foreign pathogen in this complex system disrupts the normal mode ofactivity of this population. Not just an infection, a random lifestyle can also disturb thegut microbiome.",
			"Interference of any foreign pathogen in this complex system disrupts the normal mode ofactivity of this population. Not just an infection, a random lifestyle can also disturb thegut microbiome.",
			"Interference of any foreign pathogen in this complex system disrupts the normal mode ofactivity of this population. Not just an infection, a random lifestyle can also disturb thegut microbiome.",
			"Interference of any foreign pathogen in this complex system disrupts the normal mode ofactivity of this population. Not just an infection, a random lifestyle can also disturb thegut microbiome.",
		],
	};

	return (
		<View style={styles.view}>
			<ScrollView bounces={false} style={styles.postWrapper}>
				<PostSource {...source} />
				<PostContent {...post} />
			</ScrollView>
		</View>
	);
}

export default Post;

const styles = StyleSheet.create({
	view: { backgroundColor: "#fff", flex: 1 },
	postWrapper: {
		paddingHorizontal: 20,
		flex: 1,
	},
});
