import React from "react";
import Me from "../../assets/me.png";
import Links from "../Links/Links";
import "./portrait.css";

const Portrait = ({ cl }) => {
  return (
    <div className={cl}>
      <div className="home_portrait_container">
      <img className="home_portrait_image" src={Me} alt="portrait"></img>
      </div>
        <Links cl="home_links"/>
    </div>
  );
};

export default Portrait;
