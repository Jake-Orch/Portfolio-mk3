import React from "react";
import { info, icons } from "../../data";
import "./info.css";

const Info = () => {
  return (
    <div className="info_container">
      <div className="info_desc">
        <h2>{info.tagline}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="info_stack">
        <h3>Tech Stack</h3>
        <div className="info_icons">
          {icons.map((icon) => (
            <img
              id={"info_" + icon.cl}
              src={icon.logo}
              title={icon.title}
              alt={icon.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
