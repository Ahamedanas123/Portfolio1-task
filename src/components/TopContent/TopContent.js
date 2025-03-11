import React from "react";
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
                    "ANDROID NATIVE DEVELOPER 😎",
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
        <a href="AhamedAnasAliA_Resume.pdf" download="AhamedAnasAliA_Resume.pdf">
          <button className="topcontent__downloadButton">Resume</button>
        </a>
        {/* <Link to="contacts" smooth={true} duration={500}>
          <button className="topcontent__hireButton">Hire Me</button>
        </Link> */}
      </div>
    </div>
  );
};

export default TopContent;
