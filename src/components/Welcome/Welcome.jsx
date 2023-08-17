import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="home_welcome">
      <div className="home_welcome_main">
        <h2>
          Hi, <br></br> I'm <a className="home_welcome_name">Jake</a> <br></br>
          Web Developer
        </h2>
        <p>
          I'm a Web Developer based in Staffordshire, England{" "}
          <a
            href="https://www.google.com/maps/place/Rugeley/@52.7571918,-1.9573772,14z/data=!3m1!4b1!4m6!3m5!1s0x487a08c6bec715b3:0xefe01f0e5acfb0da!8m2!3d52.761515!4d-1.935967!16zL20vMDIyX3B5?entry=ttu"
            target="_blank"
          >
            <HiOutlineLocationMarker />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
