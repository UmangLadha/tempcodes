import React from "react";
import "./spotifyPros.css";
import { dataArr } from "./spotify";

export const SpotifyPros = () => {
  return (
    <div className="prosContainer">
      <h1>Why Spotify?</h1>
      <section>
        <div className="proList">
          {dataArr.map((cardData) => (
            <div className="proCard">
              <img src={cardData.img} alt="" />
              <div className="cardText">
                <h3>{cardData.heading}</h3>
                <p>{cardData.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
