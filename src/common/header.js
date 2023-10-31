import React from "react";
import "./header.css";
import logo from "./imgs/Spotify_Logo.png";

export const Header = () => {
  return (
	<header>
       <div className="container">
        <a href="/" className="brand">
          <img src={logo} alt="Spotify logo" />
        </a>
        <div className="list">
          <ul>
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <hr />
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        </div>
      </div> 
    </header>
  );
};
