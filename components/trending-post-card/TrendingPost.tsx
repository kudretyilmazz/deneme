// Import React
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

// Post Type
export type TPost = {
	id: number;
	path: "Post";
	image: ImageSourcePropType;
	location: string;
	title: string;
	sourceName: string;
	sourceLogo: ImageSourcePropType;
	time: string;
};

interface ITrendingPost {
	navigation: NativeStackScreenProps<RootStackParamList, "Trending">["navigation"];
	post: TPost;
}

function TrendingPost(props: ITrendingPost) {
	// Props Destruction
	const {
		navigation,
		post: { image, location, title, sourceName, sourceLogo, time, path },
	} = props;

	return (
		<TouchableOpacity onPress={() => navigation.navigate(path)} style={styles.container}>
			<Image style={styles.coverImage} source={image} />
			<View>
				<Text style={styles.locationText}>{location}</Text>
				<Text style={styles.heading}>{title}</Text>
			</View>
			<View style={styles.time}>
				<Image style={styles.timeLogo} source={sourceLogo} />
				<Text style={[styles.timeInfos, styles.boldText]}>{sourceName}</Text>
				<Text style={styles.timeInfos}>☉ {" " + time}</Text>
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
