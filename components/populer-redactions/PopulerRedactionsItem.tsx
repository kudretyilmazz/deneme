// Import React
import React from "react";
import { View, Image, StyleSheet, ViewStyle, ImageSourcePropType } from "react-native";

interface IPopulerRedactionsItem {
	imagePath: ImageSourcePropType;
	backgroundColor?: ViewStyle["backgroundColor"];
}

function PopulerRedactionsItem(props: IPopulerRedactionsItem) {
	// Props Destruction
	const { imagePath, backgroundColor } = props;

	// Variables
	const customStyle = StyleSheet.create({
		bg: {
			backgroundColor: backgroundColor ?? "#F3F3F3",
		},
	});
	return (
		<View style={[styles.logoWrapper, customStyle.bg]}>
			<Image style={styles.logo} source={imagePath} />
		</View>
	);
}

export default PopulerRedactionsItem;

const styles = StyleSheet.create({
	logoWrapper: {
		width: 60,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 60,
		marginRight: 14,
	},
	logo: {
		width: 40,
		height: 40,
	},
});
