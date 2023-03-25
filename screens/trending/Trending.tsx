// Import React
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

// Import Components
import TrendingHeader from "../../components/TrendingHeader";
import TrendingPost from "../../components/TrendingPost";

function Trending(props: NativeStackScreenProps<RootStackParamList, "Trending">) {
	// Props Destruction
	const { navigation } = props;

	return (
		<SafeAreaView>
			<TrendingHeader navigation={navigation} />
			<ScrollView>
				<TrendingPost navigation={navigation} />
				<TrendingPost navigation={navigation} />
				<TrendingPost navigation={navigation} />
				<TrendingPost navigation={navigation} />
				<TrendingPost navigation={navigation} />
				<TrendingPost navigation={navigation} />
				<TrendingPost navigation={navigation} />
			</ScrollView>
		</SafeAreaView>
	);
}

export default Trending;
