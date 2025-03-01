import React from "react";
import {Link} from "react-scroll";
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          MERN <span>stack</span> and <span>Android</span> DEVELOPER{" "}
        </h1>
      </div>
      <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About Me</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="contacts" smooth={true} duration={500}>
          <h4>Contacts</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
