import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {BsStackOverflow} from "react-icons/bs"
import "./links.css";

const Links = ({ cl }) => {
  const handleMyGit = () => {
    window.open("https://github.com/Jake-Orch");
  };

  const handleMyLinkedin = () => {
    window.open("https://www.linkedin.com/in/jake-orchard-dev");
  };

  const handleMyStack = () => {
    window.open("https://stackoverflow.com/users/21576331/jake-orchard");
  };
  return (
    <div className={cl}>
      <AiFillGithub title="GitHub" onClick={handleMyGit} />
      <BsStackOverflow title="Stack Overflow" onClick={handleMyStack}/>
      <AiFillLinkedin title="LinkedIn" onClick={handleMyLinkedin} />
    </div>
  );
};

export default Links;
