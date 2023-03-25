// Import React
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

// Import Components
import HomeHeader from "../../components/HomeHeader";
import ScrollButtons from "../../components/ScrollButtons";
import ScrollTabs from "../../components/ScrollTabs";
import LiveNews from "../../components/LiveNews";
import PopulerRedacations from "../../components/PopulerRedacations";
import Trendings from "../../components/Trendings";

function Home(props: NativeStackScreenProps<RootStackParamList, "Home">) {
	// Props Destruction
	const { navigation } = props;

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<HomeHeader />
				<View>
					<ScrollTabs />
					<ScrollButtons />
					<LiveNews />
					<PopulerRedacations />
					<Trendings navigation={navigation} />
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Home;

const styles = StyleSheet.create({
	safeArea: { backgroundColor: "#fff", flex: 1 },
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: "#fff",
	},
});
