import React from "react";
import "./projects.css";
import { Project, Title } from "../../components";
import { projects } from "../../data";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="projects_header">
        <Title name={"Projects"} />
      </div>
      <div className="container projects_project_container">
        {projects.map((project, index) => (
          <Project
            key={index}
            num={index}
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
