// import React from "react";
// import {Link} from "react-scroll";
// import './Header.css';
// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header__left">
//         <h1>
//           Associate <span>Software</span> Engineer{" "}
//         </h1>
//       </div>
//       <div className="header__right">
//       <Link to="about" smooth={true} duration={500} offset={-80}>
//   <h4>About Me</h4>
// </Link>
// <Link to="skills" smooth={true} duration={500} offset={-80}>
//   <h4>Skills</h4>
// </Link>
// <Link to="projects" smooth={true} duration={500} offset={-80}>
//   <h4>Projects</h4>
// </Link>
// <Link to="contacts" smooth={true} duration={500} offset={-80}>
//   <h4>Contacts</h4>
// </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`header ${isSidebarOpen ? "open" : ""}`}>
      <div className="header__top">
        <h1>
          Associate <span>Software</span> Engineer{" "}
        </h1>
      </div>
      <div className="header__bottom">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <h4>About Me</h4>
          </Link>
          <Link to="skills" smooth={true} duration={500} offset={-80}>
            <h4>Skills</h4>
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            <h4>Projects</h4>
          </Link>
          <Link to="contacts" smooth={true} duration={500} offset={-80}>
            <h4>Contacts</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;