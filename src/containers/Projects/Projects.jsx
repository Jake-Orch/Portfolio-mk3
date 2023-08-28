import React from "react";
import "./projects.css";
import { Project, Title } from "../../components";
import { projects } from "../../data";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="projects_container">
      <Title name={"Portfolio"} />
      <div className="projects_featured">
        <p>Newest project</p>
        <AiFillGithub />
      </div>
      <div>
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
