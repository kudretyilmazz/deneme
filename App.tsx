// Import React
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

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

// Import Screens
import Home from "./screens/Home/Home";
import Trending from "./screens/trending/Trending";
import Post from "./screens/post/Post";

// Import Headers
import Header from "./components/header/Header";

// Navigator Type
export type RootStackParamList = {
	Home: undefined;
	Trending: undefined;
	Post: undefined;
};

// Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	// Install Fonts
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
			<StatusBar style="dark" />
			<SafeAreaView style={stlyes.appWrapper}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="Home"
						screenOptions={{ header: props => <Header {...props} /> }}
					>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Trending" component={Trending} />
						<Stack.Screen
							name="Post"
							component={Post}
							options={{
								presentation: "containedModal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</>
	);
}

const stlyes = StyleSheet.create({
	appWrapper: {
		backgroundColor: "#fff",
		flex: 1,
	},
});
