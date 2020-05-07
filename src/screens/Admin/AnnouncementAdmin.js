import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Form } from "../../components";
import { announcements } from "../../data/FormData";
import { NavBar } from "../../components/general";
import { postAnnouncement } from "../../ducks";

class AnnouncementAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibility: false
		};
	}
	render() {
		const {
			formContainerStyle,
			textStyle
		} = styles;
		return (
			<SafeAreaView style = { formContainerStyle }>
				<NavBar title = "Announcements" back onBack = { () => Actions.pop() } />
				<View style = {{ flex: 0.5, justifyContent: "center" }}>
					<TouchableOpacity
						onPress = { () => this.setState({ formVisibility: true }) }>
						<Text style = { textStyle }> Register</Text>
					</TouchableOpacity>
				</View>
				<Form
					elements = { announcements }
					title = "Announcements"
					visible = { this.state.formVisibility }
					changeVisibility = { (visible) => this.setState({ formVisibility: visible }) }
					onSubmit = { (announcement) => postAnnouncement(announcement) }
					// onCancel = { () => console.log("Announcement creation cancelled") }
					submitButtonName = "Submit"
				/>
			</SafeAreaView>
		);
	}
}

const styles = {
	formContainerStyle: {
		backgroundColor: "#0c0b0b",
		height: "100%"
	},
	page: {
		flex: 1,
		backgroundColor: "#0c0b0b"
	},
	mainBackground: {
		backgroundColor: "#000"
	},
	subBackground: {
		backgroundColor: "#0c0b0b"
	},
	textStyle: {
		color: "#FFF",
		fontSize: 14
	},
	center: {
		alignItems: "center"
	},
	titleStyle: {
		fontWeight: "bold",
		padding: "4%",
		fontSize: 16
	},
	containerFlex: {
		flex: 1
	},
	contributorStyle: {
		alignSelf: "center",
		fontSize: 18,
		fontWeight: "bold",
		marginTop: "3%"
	},
	footer: {
		flex: 0.95,
		justifyContent: "flex-end"
	}
};

export default AnnouncementAdmin;