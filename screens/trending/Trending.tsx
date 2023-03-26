// Import React
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

// Import Components
import TrendingPost from "../../components/trending-post-card/TrendingPost";

// Import Type
import type { TPost } from "../../components/trending-post-card/TrendingPost";

function Trending(props: NativeStackScreenProps<RootStackParamList, "Trending">) {
	// Props Destruction
	const { navigation } = props;

	// Fake Data
	const posts: TPost[] = [
		{
			id: 1,
			path: "Post",
			image: require("../../assets/virusbanner.jpeg"),
			location: "Europe",
			title: "Coranavirues: Depressive symptopms of gut seen associated with COVID",
			sourceName: "BBC News",
			sourceLogo: require("../../assets/bbclogo.png"),
			time: "14 min ago",
		},
		{
			id: 2,
			path: "Post",
			image: require("../../assets/virusbanner.jpeg"),
			location: "Europe",
			title: "Coranavirues: Depressive symptopms of gut seen associated with COVID",
			sourceName: "BBC News",
			sourceLogo: require("../../assets/bbclogo.png"),
			time: "14 min ago",
		},
		{
			id: 3,
			path: "Post",
			image: require("../../assets/virusbanner.jpeg"),
			location: "Europe",
			title: "Coranavirues: Depressive symptopms of gut seen associated with COVID",
			sourceName: "BBC News",
			sourceLogo: require("../../assets/bbclogo.png"),
			time: "14 min ago",
		},
		{
			id: 4,
			path: "Post",
			image: require("../../assets/virusbanner.jpeg"),
			location: "Europe",
			title: "Coranavirues: Depressive symptopms of gut seen associated with COVID",
			sourceName: "BBC News",
			sourceLogo: require("../../assets/bbclogo.png"),
			time: "14 min ago",
		},
	];

	return (
		<ScrollView style={styles.container}>
			{posts?.map(post => (
				<TrendingPost key={post?.id} navigation={navigation} post={post} />
			))}
		</ScrollView>
	);
}

export default Trending;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
});
