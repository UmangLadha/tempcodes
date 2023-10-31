import React from "react";
import "./nav.css";
import music from './imgs/playlist.jpg'

export const Nav = () => {
  return (
    <div>
      <nav>
        <div className="navDiv">
          <div className="navPhone">
			<div className="line"></div>
			<img src={music} alt="Music Player" />
		  </div>
          <div className="navText">
            <h1>Play millions of songs and podcasts, for free.</h1>
            <a href="https://www.spotify.com/in-en/signup">GET SPOTIFY FREE</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
