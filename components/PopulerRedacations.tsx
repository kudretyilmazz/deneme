// Import React
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

function PopulerRedacations() {
	return (
		<View style={styles.container}>
			<Text style={styles.liveNewsHeading}>Popular Redactions</Text>
			<ScrollView
				style={styles.viewWrapper}
				horizontal
				showsHorizontalScrollIndicator={false}
				bounces={false}
			>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>

				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
				<View style={styles.logoWrapper}>
					<Image style={styles.logo} source={require("../assets/bbclogo.png")} />
				</View>
			</ScrollView>
		</View>
	);
}

export default PopulerRedacations;

const styles = StyleSheet.create({
	container: {
		marginTop: 14,
	},
	liveNewsHeading: {
		fontSize: 18,
		fontFamily: "Dosis_700Bold",
		paddingLeft: 20,
	},
	logoWrapper: {
		width: 60,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F3F3F3",
		borderRadius: 60,
		marginRight: 14,
	},
	logo: {
		width: 40,
		height: 40,
	},
	viewWrapper: {
		marginVertical: 5,
		paddingLeft: 20,
	},
});
