// Import React
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

function LiveNews() {
	return (
		<View style={styles.container}>
			<Text style={styles.liveNewsHeading}>Live News</Text>
			<ScrollView
				style={styles.wrapper}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
			>
				<TouchableOpacity>
					<Image style={styles.bannerImages} source={require("../assets/news-banner.jpeg")} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image style={styles.bannerImages} source={require("../assets/news-banner.jpeg")} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image style={styles.bannerImages} source={require("../assets/news-banner.jpeg")} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image style={styles.bannerImages} source={require("../assets/news-banner.jpeg")} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image style={styles.bannerImages} source={require("../assets/news-banner.jpeg")} />
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

export default LiveNews;

const styles = StyleSheet.create({
	container: {
		marginTop: 14,
	},
	liveNewsHeading: {
		fontSize: 18,
		fontFamily: "Dosis_700Bold",
		paddingLeft: 20,
	},
	wrapper: {
		marginTop: 20,
		flexDirection: "row",
		paddingLeft: 20,
	},
	bannerImages: {
		width: 280,
		height: 160,
		borderRadius: 12,
		marginRight: 20,
	},
	Touchable: {
		backgroundColor: "rgba(0,0,0, 0.60)",
	},
});
