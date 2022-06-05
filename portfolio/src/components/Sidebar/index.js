import "./index.scss";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import SiteLogo from "../../assets/images/logo-s.png";
import SiteLogoSub from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
	return (
		<div className="nav-bar">
			<Link className="logo" to="/">
				<img src={SiteLogo} alt="Logo" />
				<img className="sub-logo" src={SiteLogoSub} alt="Logo Sub" />
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					className="about-link"
					to="/about"
				>
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					className="contact-link"
					to="/contact"
				>
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a
						href="https://www.linkedin.com/login"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/login"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
