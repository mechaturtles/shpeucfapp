import firebase from "firebase";
import { slackURL } from "react-native-dotenv";

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

	const getProfile = () => {
		return data.ref('/users/' + uid).once('value');
	};
	getProfile().then((snapshot) => {
		let user = snapshot.val();
		announcement.authorUID = uid;
		announcement.author = `${user.firstName} ${user.lastName}`;
		const message = {
			method: "POST",
			body: JSON.stringify({ text: `*${announcement.title}*\n by ${announcement.author}\n\n${announcement.message} \n<!channel>` })
		};
		data.ref("/announcements/").push(announcement).then(snapshot => data.ref(`/announcements/${snapshot.key}/id`).set(snapshot.key));
		fetch(slackURL, message);
	}, reason =>{
		console.log(reason);
	}
	);

	console.log(announcement);

	// setTimeout(() => {
	// 	console.log("test author" + announcement.author);
	// });

	return true;
};