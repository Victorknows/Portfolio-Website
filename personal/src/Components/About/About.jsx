import React from 'react'
import './About.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import profile_img from '../../../assets/IMG-20240802-WA0010 (1).jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a dedicated software developer with expertise in multiple programming languages, including Python and Node.js, I specialize in crafting innovative, user-centric applications that emphasize both functionality and aesthetic design</p>
                    <p>My passion for improving user experience drives me to create efficient, scalable solutions that meet the highest standards of quality and performance, ensuring a seamless and engaging user interaction.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>Pyton</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>1</h1>
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        </div>
        
    </div>
  )
}

export default About