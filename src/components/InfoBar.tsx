import React from "react";

import "../styles/InfoBar.css";
import onlineIcon from "../assets/onlineIcon.png";
import closeIcon from "../assets/closeIcon.png";

const InfoBar = ({ room }: { room: string }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="Online"></img>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="Closed"></img>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
