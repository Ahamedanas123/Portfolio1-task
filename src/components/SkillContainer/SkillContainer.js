import React from 'react'
import {Element} from "react-scroll"
import skillimg from "../../Assets/skillimg.jpg"
import LinearProgress from "@mui/material/LinearProgress"
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
   
    <Element className='skillcontainer' id="skills">
        {/* <div className='skillcontainer__image'>
            <img src={skillimg} alt=''/>
        </div> */}
        <div className='skillcontainer__text'>
            <h2>SKILLS</h2>
            <div className='skillcontainer__skillset'>
                <h5>HTML</h5>
                <div className='skillcontainer__slider skillcontainer__slider1'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>CSS</h5>
                <div className='skillcontainer__slider skillcontainer__slider2'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>JAVSCRIPT</h5>
                <div className='skillcontainer__slider skillcontainer__slider3'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>REACT JS</h5>
                <div className='skillcontainer__slider skillcontainer__slider4'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
            {/* <div className='skillcontainer__skillset'>
                <h5>NODE JS</h5>
                <div className='skillcontainer__slider skillcontainer__slider5'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>MONGO DB</h5>
                <div className='skillcontainer__slider skillcontainer__slider6'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div> */}
            <div className='skillcontainer__skillset'>
                <h5>MYSQL</h5>
                <div className='skillcontainer__slider skillcontainer__slider7'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>CORE JAVA</h5>
                <div className='skillcontainer__slider skillcontainer__slider7'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>SQLITE</h5>
                <div className='skillcontainer__slider skillcontainer__slider7'>
                    <LinearProgress variant="determinate" value={100} />
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer