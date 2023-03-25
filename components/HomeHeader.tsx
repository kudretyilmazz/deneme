// Import React
import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

// Import Icons
import { Octicons } from "@expo/vector-icons";

function HomeHeader() {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.avatar} source={require("../assets/avatar.png")} />
			</View>
			<View style={styles.middle}>
				<Text style={styles.helloText}>Hello</Text>
				<Text style={styles.nameText}>Steve Thampson</Text>
			</View>
			<TouchableOpacity style={styles.rightIcon}>
				<Octicons name="bell-fill" size={18} color="black" />
			</TouchableOpacity>
		</View>
	);
}

export default HomeHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 6,
	},
	middle: {
		flex: 1,
		marginLeft: 5,
	},
	helloText: {
		fontSize: 12,
		color: "gray",
	},
	nameText: {
		fontSize: 16,
		fontWeight: "600",
	},
	rightIcon: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 6,
		backgroundColor: "#E5E4E2",
	},
});
