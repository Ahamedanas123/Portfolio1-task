import React from "react";
import { Element } from "react-scroll";
import Project from "../Projects/Project";
import "./ProjectContainer.css"


const ProjectContainer = () => {
  const projects = [
    {
      img: "https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg",
      title: "Youtube Clone",
      desc: "create youtube clone using HTML CSS JAVASCRIPT",
      link: "https://fastidious-eclair-db6d6d.netlify.app/",
    },
  ];

  return (
    
    <Element className="projectcontainer" id="projects">
      <h1>projects</h1>
      <p>Here is my only projects</p>
      <div className="projectcontainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
         
          );
        })}
        </div>
     
    </Element>
  );
};

export default ProjectContainer;
