import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';



const Contact = () => {

  return (
    <Element className="contact" id="contacts">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email:<a href="mailto:ahamedanasali0@gmail.com"><span>ahamedanasali0@gmail.com</span></a>
        </p>
        <div className="contact__icons">
          <a href="https://www.linkedin.com/in/ahamed-anas-ali-38883a219/" target="blank">
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://github.com/Ahamedanas123" target="blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
         
          <a href="" target="blank">
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
