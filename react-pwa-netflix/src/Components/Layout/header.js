import React from "react";
import NetflixLogo from "../Icons/NetflixLogo";
import Nav from "./nav";
import { Link } from "@reach/router";
import NetflixLogo_Image from "../../Images/netflix-logo-png-2616.png";

const Header = () => {
	return (
		<header className="header">
			<div id="logo" className="logo">
				<Link to="/">
					<NetflixLogo />
				</Link>
			</div>
			<Nav />
			<div className="user-profile">
				<div className="user">
					<div className="name">Parija Malgaonkar</div>
					<div className="image">
						<img src={NetflixLogo_Image} alt="netflix" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
