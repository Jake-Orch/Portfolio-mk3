import React from "react";
import "./projects.css";
import { Project } from "../../components";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="projects_container">
      {/* <h1>Portfolio</h1> */}
      {/* <div className="projects_featured">
        <h1>Click here to see what I am currently working on!</h1>
      </div> */}
      <div>
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            tools={project.tools}
            img={project.img}
            alt={project.alt}
            deployed={project.deployed}
            git={project.git}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
