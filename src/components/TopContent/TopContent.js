import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topcontent">
      <div className="topcontent__container">
        <h1>Ahamed Anas Ali A</h1>
        <h2 >
                {" "}
                <TypeAnimation
                  sequence={[
                    "MERN STACK DEVELOPER 😎",
                    1000,
                    "PROBLEM SOLVER 😎",
                    2000,
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1rem", display: "inline-block" }}
                />
              </h2><br></br>
        <a href="Ahamed Anas Ali A.pdf" download="Ahamed Anas Ali A.pdf">
          <button className="topcontent__downloadButton">Resume</button>
        </a>
        <Link to="contacts" smooth={true} duration={500}>
          <button className="topcontent__hireButton">Hire Me</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
