import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";

class Announcements extends Component {
	render() {
		const { formContainerStyle } = styles;
		return (
			<SafeAreaView style = { formContainerStyle }>
				<Text>Bow wow</Text>
			</SafeAreaView>
		);
	}
}

const styles = {
	formContainerStyle: {
		backgroundColor: "#0c0b0b",
		height: "100%"
	}
};

export default Announcements;