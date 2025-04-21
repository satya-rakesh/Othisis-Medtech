/** @format */
import "./header.css";
import { Bell, UserCircle, ChevronDown } from "lucide-react";

const Header = () => {
	return (
		<header className="header-container">
			<div className="header-logo">
				<div className="logo-icon">⚫</div>
				<span className="logo-text">Othisis Medtech</span>
			</div>
			<ul className="header-items">
				<li>
					<Bell size={20} />
				</li>
				<li className="profile-dropdown">
					<UserCircle size={24} />
					<ChevronDown size={20} />
				</li>
			</ul>
		</header>
	);
};

export default Header;
	