// Import React
import React from "react";
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface ILiveNewsItem {
	imagePath: ImageSourcePropType;
}

function LiveNewsItem(props: ILiveNewsItem) {
	// Props Destruction
	const { imagePath } = props;

	return (
		<TouchableOpacity>
			<Image style={styles.bannerImages} source={imagePath} />
		</TouchableOpacity>
	);
}

export default LiveNewsItem;

const styles = StyleSheet.create({
	bannerImages: {
		width: 280,
		height: 160,
		borderRadius: 12,
		marginRight: 20,
	},
});
