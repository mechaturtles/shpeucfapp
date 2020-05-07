/*

All Screen Exports here grouped by folder

*/

/** Export Admin **/
import AdminHub from "./Admin/AdminHub";
import AnnouncementAdmin from "./Admin/AnnouncementAdmin";
import CommitteesAdmin from "./Admin/CommitteesAdmin";
import ElectionAdmin from "./Admin/ElectionAdmin";
import MemberAdmin from "./Admin/MemberAdmin";
export {
	AdminHub,
	AnnouncementAdmin,
	CommitteesAdmin,
	ElectionAdmin,
	MemberAdmin
};

/** Export Committees **/
import CommitteePage from "./Committees/CommitteePage";
import Committees from "./Committees/Committees";
export {
	CommitteePage,
	Committees
};

/** Export Election **/
import ElectionApplication from "./Election/ElectionApplication";
import ElectionBallot from "./Election/ElectionBallot";
import ElectionCandidates from "./Election/ElectionCandidates";
import ElectionPositions from "./Election/ElectionPositions";
export {
	ElectionApplication,
	ElectionBallot,
	ElectionCandidates,
	ElectionPositions
};

/** Export Events **/
import Events from "./Events/Events";
import EventDetails from "./Events/EventDetails";
export {
	Events,
	EventDetails
};

/** Export General **/
import Announcements from "./General/Announcements";
import Dashboard from "./General/Dashboard";
import Leaderboard from "./General/Leaderboard";
import More from "./General/More";
export * from "./General/About";
export {
	Announcements,
	Dashboard,
	Leaderboard,
	More
};

/** Export User **/
import Login from "./User/Login";
import OtherProfile from "./User/OtherProfile";
import PointsBreakDown from "./User/PointsBreakDown";
import Profile from "./User/Profile";
import ResetPassword from "./User/ResetPassword";
export {
	Login,
	OtherProfile,
	PointsBreakDown,
	Profile,
	ResetPassword
};