import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import "./project.css";

const Project = ({ name, description, tools, img, alt, deployed, git }) => {
  // handleGit forwards the viewer to my the GitHub repository of the given project being displayed
  const handleGit = () => {
    window.open(git);
  };

  // handleDeployed forwards the viewer to my the deployed page of the given project being displayed

  const handleDeployed = () => {
    window.open(deployed);
  };
  return (
    <div className="project_container">
      <div className="project_image">
        <img src={img} alt={alt} onClick={handleDeployed}></img>
      </div>
      <div className="project_info">
        <div className="project_name">
          <h2>{name}</h2>
        </div>
        <div className="project_description">
          <p>{description}</p>
        </div>
        <div className="project_tools">
          {tools.map((tool) => (
            <p>{tool}</p>
          ))}
        </div>
        <div className="project_links">
          <div className="project_link" onClick={handleGit}>
            <span>Code</span>
            <AiFillGithub />
          </div>
          <div className="project_link project_arrow" onClick={handleDeployed}>
            <span>Live Demo</span>
            <BsBoxArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
