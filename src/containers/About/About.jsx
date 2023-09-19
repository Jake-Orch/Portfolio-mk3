import React from "react";
import "./about.css";
import { Portrait, Info, Title } from "../../components";

const About = () => {
  return (
    <div className="about_container">
      <div>
        
      </div>
      <Title name={"About Me"} />
      <div className="container">
        <div className="about_box">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default About;
