import React from "react";
import Me from "../../assets/me.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./portrait.css";

const Portrait = ({ cl }) => {

  const handleMyGit = () => {
    window.open("https://github.com/Jake-Orch")
  }

  const handleMyLinkedin = () => {
    window.open("https://www.linkedin.com/in/jake-orchard-dev")
  }
  return (
    <div className={cl}>
      <img className="home_portrait_image" src={Me} alt="portrait"></img>
      <div className="home_links">
        <AiFillGithub title="GitHub" onClick={handleMyGit}/>
        <AiFillLinkedin title="Linkedin" onClick={handleMyLinkedin}/>
      </div>
    </div>
  );
};

export default Portrait;
