import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

function Trendings(props: {
	navigation: NativeStackScreenProps<RootStackParamList, "Home">["navigation"];
}) {
	// Props Destruction
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<View style={styles.headerWrapper}>
				<Text style={styles.heading}>Trendings</Text>

				<TouchableOpacity onPress={() => navigation.navigate("Trending")}>
					<Text style={styles.viewAll}>View All</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.post} onPress={() => navigation.navigate("Post")}>
					<View style={styles.postDesc}>
						<Text style={styles.postHeading}>
							Coranavirues: Depressive symptopms of gut seen associated with COVID
						</Text>
						<View style={styles.postTime}>
							<Text style={styles.postTimeSource}>Nature Channel</Text>
							<Text style={styles.postTimeEmoji}>☉</Text>
							<Text style={styles.postTimeOther}>4 min ago</Text>
						</View>
					</View>
					<Image style={styles.postImage} source={require("../assets/virusbanner.jpeg")} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.post} onPress={() => navigation.navigate("Post")}>
					<View style={styles.postDesc}>
						<Text style={styles.postHeading}>
							Coranavirues: Depressive symptopms of gut seen associated with COVID
						</Text>
						<View style={styles.postTime}>
							<Text style={styles.postTimeSource}>Nature Channel</Text>
							<Text style={styles.postTimeEmoji}>☉</Text>
							<Text style={styles.postTimeOther}>4 min ago</Text>
						</View>
					</View>
					<Image style={styles.postImage} source={require("../assets/virusbanner.jpeg")} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Trendings;

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingHorizontal: 20,
	},
	headerWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	heading: {
		fontSize: 18,
		fontFamily: "Dosis_700Bold",
	},
	viewAll: {
		fontSize: 16,
		fontFamily: "Dosis_600SemiBold",
		color: "#6D43EA",
	},
	post: {
		flexDirection: "row",
		marginVertical: 10,
	},
	postImage: {
		width: "30%",
		height: "auto",
		marginLeft: "auto",
		borderRadius: 8,
	},
	postDesc: {
		width: "65%",
		paddingVertical: 10,
	},
	postHeading: {
		fontFamily: "Dosis_700Bold",
	},
	postTime: {
		flexDirection: "row",
		marginTop: 16,
		alignItems: "center",
	},
	postTimeSource: {
		fontSize: 14,
		color: "#6D43EA",
		fontFamily: "Dosis_400Regular",
	},
	postTimeOther: {
		fontSize: 14,
		fontFamily: "Dosis_400Regular",
	},
	postTimeEmoji: {
		fontSize: 14,
		fontFamily: "Dosis_400Regular",
		marginHorizontal: 5,
	},
});
