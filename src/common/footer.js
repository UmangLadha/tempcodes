import React from "react";
import logo from "./imgs/Spotify_Logo.png";
import { linksArr1, linksArr2, linksArr3 } from "../components/spotify";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="linkList">
          <img src={logo} alt="Spotify Logo" />
          <div className="itemsList">
            {linksArr1.map((link) => (
              <div className="Items">
                <p>{link.title}</p>
                <a href={link.textLink}>{link.text}</a>
              </div>
            ))}
          </div>
          <div className="itemsList">
            {linksArr2.map((link) => (
              <div className="Items">
                <p>{link.title}</p>
                <a href={link.textLink}>{link.text}</a>
              </div>
            ))}
          </div>
          <div className="itemsList">
            {linksArr3.map((link) => (
              <div className="Items">
                <p>{link.title}</p>
                <a href={link.textLink}>{link.text}</a>
              </div>
            ))}
          </div>
          <div className="socilaMedia">
            <div className="icon">
              <BsInstagram />
            </div>
            <div className="icon">
              <BsTwitter />
            </div>
            <div className="icon">
              <FaFacebookF/>
            </div>
          </div>
        </div>

		<div className="usefullLinks">
			<div className="btmLinks">
				<a href="http://" target="_blank" rel="noopener noreferrer">Legal</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">Privacy Center</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">Cookies</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">About Ads</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">Accessibility</a>
			</div>
			<div className="credit">
				<small><FaEarthAmericas/>    India (English)</small>
				<small>© 2023 Spotify AB</small>
			</div>
		</div>
      </div>
    </footer>
  );
};
