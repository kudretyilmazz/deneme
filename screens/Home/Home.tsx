// Import React
import React from "react";
import { View, StyleSheet } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

// Import Components
import ScrollButtons from "../../components/scroll-buttons/ScrollButtons";
import ScrollTabs from "../../components/scroll-tabs/ScrollTabs";
import LiveNews from "../../components/live-news/LiveNews";
import PopulerRedacations from "../../components/populer-redactions/PopulerRedacations";
import Trendings from "../../components/home-trendings/Trendings";

function Home(props: NativeStackScreenProps<RootStackParamList, "Home">) {
	// Props Destruction
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<ScrollTabs />
			<ScrollButtons />
			<LiveNews />
			<PopulerRedacations />
			<Trendings navigation={navigation} />
		</View>
	);
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
