import firebase from "firebase";
import { slackURL } from "react-native-dotenv";
const admin = require('firebase-admin');

/**
 *
 * @typedef {Object} Announcement:
 *     @property {String}   title   Title of the announcement title
 *     @property {any}      message Announcement message
 */

/**
 *
 * @param {Object} announcement An object containing the package to be sent to Firebase and Slack.
 */
export const postAnnouncement = (announcement) => {
	const uid = firebase.auth().currentUser.uid;
	const data = firebase.database();
	const d = new Date().getDate();
	const m = new Date().getMonth() + 1;
	const y = new Date().getFullYear();

	const getProfile = () => {
		return data.ref("/users/" + uid).once("value");
	};

	getProfile().then((snapshot) => {
		let user = snapshot.val();
		announcement.authorUID = uid;
		announcement.author = `${user.firstName} ${user.lastName}`;
		announcement.date = y + '-' + m + '-' + d;
		alert(announcement.date);
		const message = {
			method: "POST",
			body: JSON.stringify({ text: `*${announcement.title}*\n by ${announcement.author}\n\n${announcement.message} \n<!channel>` })
		};
		data.ref("/announcements/").push(announcement).then(snapshot => data.ref(`/announcements/${snapshot.key}/id`).set(snapshot.key));
		//fetch(slackURL, message);
	}, reason =>{
		console.log(reason);
	}
	);

	console.log(announcement);

	return true;
};

// export const getAnnouncements = (search)