import React from "react";
import { info } from "../../data";
import Stockdesk from "../../assets/stockdesk.png";
import "./info.css";

const Info = () => {
  return (
    <div className="info_container">
      <div className="info_img_container">
        <img className="info_img" src={Stockdesk} alt="stock desk"></img>
      </div>
      <div className="info_desc">
        <h2>I'm Jake Orchard, <br></br> Front & Back End Web Developer</h2>
        <p>{info.desc}</p>
      </div>
    </div>
  );
};

export default Info;
