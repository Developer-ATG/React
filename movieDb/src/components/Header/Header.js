import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/Sample_User_Icon.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
		<div className="logo" alt="Movie App"></div>
      </Link>
      <div className="user-img">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
