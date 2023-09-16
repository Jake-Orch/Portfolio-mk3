import React from "react";
import "./about.css";
import { Portrait, Info, Title } from "../../components";

const About = () => {
  return (
    <div className="about_container">
      <Title name={"About Me"} />
      <div className="about_box">
        <Portrait cl={"about_portrait"}/>
        <Info />
      </div>
    </div>
  );
};

export default About;
