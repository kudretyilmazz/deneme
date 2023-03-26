// Import React
import React from "react";
import { Image, Text, StyleSheet, ImageSourcePropType } from "react-native";

interface IPostContent {
	image: ImageSourcePropType;
	location: string;
	title: string;
	content: string[];
}

function PostContent(props: IPostContent) {
	// Props Destruction
	const { image, location, title, content } = props;
	return (
		<>
			<Image style={styles.coverImage} source={image} />
			<Text style={styles.locationText}>{location}</Text>
			<Text style={styles.title}>{title}</Text>
			{content?.map((text, index) => (
				<Text key={index} style={styles.contentText}>
					{text}
				</Text>
			))}
		</>
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
	title: {
		fontSize: 24,
		color: "#36454F",
		fontFamily: "Dosis_600SemiBold",
	},
	contentText: {
		marginVertical: 10,
		fontFamily: "Dosis_400Regular",
		fontSize: 16,
		color: "#36454F",
	},
});
