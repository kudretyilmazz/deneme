// Import React
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function PostSource() {
	return (
		<View style={styles.time}>
			<View style={styles.logoWrapper}>
				<Image style={styles.timeLogo} source={require("../assets/bbclogo.png")} />
			</View>
			<View>
				<Text style={[styles.locationTitle, styles.boldText]}>BBC News</Text>
				<Text style={styles.timeInfos}>14 min ago</Text>
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
		paddingHorizontal: 20,
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
