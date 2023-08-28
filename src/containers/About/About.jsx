import React from "react";
import "./about.css";
import { Portrait, Title } from "../../components";

const About = () => {
  return (
    <div className="about_container">
      <Title name={"About"} />
      <div className="about_box">
        <Portrait cl={"about_portrait"}/>
        
      </div>
    </div>
  );
};

export default About;
