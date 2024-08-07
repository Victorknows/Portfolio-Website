import React from 'react'
import './Hero.css'
import profile from '../../../assets/DSC_0202.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile} alt="" />
        <h1><span> I'm Victor Muhoro, </span>Software Developer based in Nairobi,Kenya.</h1>
        <p>Frontend Developer committed to leveraging technology to make a positive impact. Skilled in building scalable web applications using Python, JavaScript, and various databases. Adept at collaborating with teams to deliver high-quality solutions.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero