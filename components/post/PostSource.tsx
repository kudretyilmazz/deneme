// Import React
import React from "react";
import { View, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";

interface IPostSource {
	name: string;
	logo: ImageSourcePropType;
	time: string;
}

function PostSource(props: IPostSource) {
	// Props Destruction
	const { name, logo, time } = props;

	return (
		<View style={styles.time}>
			<View style={styles.logoWrapper}>
				<Image style={styles.timeLogo} source={logo} />
			</View>
			<View>
				<Text style={[styles.locationTitle, styles.boldText]}>{name}</Text>
				<Text style={styles.timeInfos}>{time}</Text>
			</View>
		</View>
	);
}

export default PostSource;

const styles = StyleSheet.create({
	logoWrapper: {
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: "#f2f2f2",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	heading: {
		fontSize: 18,
		fontFamily: "Dosis_600SemiBold",
	},
	time: {
		alignItems: "center",
		flexDirection: "row",
	},
	timeLogo: {
		width: 30,
		height: 30,
	},
	timeInfos: {
		fontSize: 12,
		color: "gray",
	},
	boldText: {
		fontFamily: "Dosis_700Bold",
	},
	locationTitle: {
		fontSize: 14,
	},
});
