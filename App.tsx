// Import React
import React from "react";

// Import Font
import {
	useFonts,
	Dosis_400Regular,
	Dosis_600SemiBold,
	Dosis_700Bold,
} from "@expo-google-fonts/dosis";

// Import Expo
import { StatusBar } from "expo-status-bar";

// Import React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Pages
import Home from "./screens/Home/Home";
import Trending from "./screens/trending/Trending";
import Post from "./screens/post/Post";

// Navigator Type
export type RootStackParamList = {
	Home: undefined;
	Trending: undefined;
	Post: undefined;
};

// Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	let [fontsLoaded] = useFonts({
		Dosis_400Regular,
		Dosis_700Bold,
		Dosis_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<>
			<StatusBar style="dark" backgroundColor="#fff" />
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
					<Stack.Screen name="Trending" component={Trending} options={{ headerShown: false }} />
					<Stack.Screen
						name="Post"
						component={Post}
						options={{ headerShown: false, presentation: "fullScreenModal" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
