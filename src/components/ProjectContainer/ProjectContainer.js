import React from "react";
import { Element } from "react-scroll";
import Project from "../Projects/Project";
import "./ProjectContainer.css"


const ProjectContainer = () => {
  const projects = [
    {
      img: require("../../Assets/logo.png"),
      title: "Arctic Explorer Adventures",
      desc: "Designed a responsive website for an Iceland-based tourism company using React JS",
      link: "https://arcticexploreradventures.netlify.app/",
    },
    {
      img: require("../../Assets/space.png"),
      title: "Spacelakh",
      desc: "The One-Stop Digital Agency For Website Design, Website Development & Digital Marketing In India",
      link: "https://spacelakhfrontend.netlify.app/",
    },
  ];

  return (
    
    <Element className="projectcontainer" id="projects">
      <h1>projects</h1>
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
