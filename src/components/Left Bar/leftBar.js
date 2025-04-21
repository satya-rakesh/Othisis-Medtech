/** @format */
import {
	ClipboardList,
	ChevronRight,
	Calendar,
	Folder,
	User,
	Settings,
} from "lucide-react";
import "../Left Bar/leftBar.css";

const LeftBar = () => {
	return (
		<div className="left-bar">
			<ChevronRight />
			<ClipboardList />
			<Calendar />
			<Folder />
			<User />
			<Settings />
		</div>
	);
};

export default LeftBar;
