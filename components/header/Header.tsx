// Import React
import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Share } from "react-native";

// Import Router
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

// Import Icons
import { Octicons } from "@expo/vector-icons";
import { AntDesign, Entypo } from "@expo/vector-icons";

function Header(props: NativeStackHeaderProps) {
	// Props Destruction
	const { navigation, route } = props;

	// Variables
	const isHome = route?.name === "Home";
	const isTrending = route?.name === "Trending";
	const isPost = route?.name === "Post";
	const pageHead = isHome ? "Steve Thampson" : isTrending ? "Trending" : null;

	// Actions
	const share = async () => {
		try {
			await Share.share({ title: "Kudret Yılmaz", url: "https://github.com/kudretylmzzz" });
		} catch (error) {
			console.log("share err: ", error);
		}
	};

	return (
		<View style={styles.container}>
			{isHome ? (
				<View>
					<Image style={styles.avatar} source={require("../../assets/avatar.png")} />
				</View>
			) : (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={24} color="gray" />
				</TouchableOpacity>
			)}
			<View style={styles.middle}>
				{isHome && <Text style={styles.helloText}>Hello</Text>}
				{pageHead && (
					<Text style={[styles.nameText, isTrending && styles.trendingTitle]}>{pageHead}</Text>
				)}
			</View>
			{isHome && (
				<TouchableOpacity style={styles.rightIcon}>
					<Octicons name="bell-fill" size={18} color="black" />
				</TouchableOpacity>
			)}
			{isPost && (
				<TouchableOpacity onPress={share} style={styles.shareIcon}>
					<AntDesign name="sharealt" size={18} color="gray" />
				</TouchableOpacity>
			)}
			{!isHome && (
				<TouchableOpacity>
					<Entypo name="dots-three-vertical" size={18} color="gray" />
				</TouchableOpacity>
			)}
		</View>
	);
}

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		height: 50,
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
	trendingTitle: {
		textAlign: "center",
	},
	shareIcon: {
		marginRight: 5,
	},
});
