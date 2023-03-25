// Import React
import React from "react";
import { SafeAreaView } from "react-native";

// Import Router
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

// Import Components
import PostHeader from "../../components/PostHeader";
import PostContent from "../../components/PostContent";

function Post(props: NativeStackScreenProps<RootStackParamList, "Post">) {
	// Props Destruction
	const { navigation } = props;

	return (
		<SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
			<PostHeader navigation={navigation} />
			<PostContent />
		</SafeAreaView>
	);
}

export default Post;
