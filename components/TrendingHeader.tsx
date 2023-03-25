// Import React
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

// Import Icons
import { AntDesign, Entypo } from "@expo/vector-icons";

function TrendingHeader(props: {
	navigation: NativeStackScreenProps<RootStackParamList, "Trending">["navigation"];
}) {
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<AntDesign name="arrowleft" size={24} color="gray" />
			</TouchableOpacity>
			<View style={styles.middle}>
				<Text style={styles.nameText}>Trending</Text>
			</View>
			<TouchableOpacity style={styles.rightIcon}>
				<Entypo name="dots-three-vertical" size={18} color="gray" />
			</TouchableOpacity>
		</View>
	);
}

export default TrendingHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		height: 60,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 6,
	},
	middle: {
		flex: 1,
		marginLeft: 5,
		textAlign: "center",
	},
	helloText: {
		fontSize: 12,
		color: "gray",
	},
	nameText: {
		fontSize: 16,
		fontWeight: "600",
		textAlign: "center",
	},
	rightIcon: {},
});
