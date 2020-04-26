import firebase from "firebase";

/**
 *
 * @typedef {Object} Announcement:
 *     @property {String}   title   Title of the announcement title
 *     @property {any}      message Announcement message
 */

/**
 *
 * @param {Object} announcement An
 */
export const postAnnouncement = (announcement) => {
	firebase.database().ref("/announcements/").push(announcement)
		.then(snapshot => firebase.database().ref(`/announcements/${snapshot.key}/id`).set(snapshot.key));
};