// Import React
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

function TrendingPost(props: {
	navigation: NativeStackScreenProps<RootStackParamList, "Trending">["navigation"];
}) {
	const { navigation } = props;
	return (
		<TouchableOpacity onPress={() => navigation.navigate("Post")} style={styles.container}>
			<Image style={styles.coverImage} source={require("../assets/virusbanner.jpeg")} />
			<View>
				<Text style={styles.locationText}>Europe</Text>
				<Text style={styles.heading}>
					Coranavirues: Depressive symptopms of gut seen associated with COVID
				</Text>
			</View>
			<View style={styles.time}>
				<Image style={styles.timeLogo} source={require("../assets/bbclogo.png")} />
				<Text style={[styles.timeInfos, styles.boldText]}>BBC News</Text>
				<Text style={styles.timeInfos}>☉ 14 min ago</Text>
			</View>
		</TouchableOpacity>
	);
}

export default TrendingPost;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	coverImage: {
		width: "auto",
		height: 200,
		borderRadius: 8,
	},
	locationText: {
		fontSize: 12,
		color: "gray",
		marginVertical: 5,
	},
	heading: {
		fontSize: 18,
		fontFamily: "Dosis_600SemiBold",
	},
	time: {
		flexDirection: "row",
		alignItems: "center",
	},
	timeLogo: {
		width: 30,
		height: 30,
	},
	timeInfos: {
		fontSize: 12,
		marginLeft: 5,
		color: "gray",
	},
	boldText: {
		fontFamily: "Dosis_700Bold",
	},
});
