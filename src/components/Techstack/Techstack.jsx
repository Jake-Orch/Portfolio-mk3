import React from "react";
import { icons } from "../../data";
import "./techstack.css";

const Techstack = () => {
  return (
    <div className="info_stack">
      <h3>Tech Stack</h3>
      <div className="info_icons">
        {icons.map((icon, index) => (
          <img
            id={"info_" + icon.cl}
            key={index}
            src={icon.logo}
            title={icon.title}
            alt={icon.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Techstack;
