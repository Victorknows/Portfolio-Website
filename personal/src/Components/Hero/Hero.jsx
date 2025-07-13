import React from 'react';
import './Hero.css';
import profile from '../../../assets/DSC_0202.jpg';
import resume from '../../../assets/Victor Muhoro Resume.pdf'; // Adjust the path accordingly

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="Profile" loading="lazy"/>
      <h1><span> I'm Victor Muhoro, </span>Software Developer based in Nairobi, Kenya.</h1>
      <p>Nairobi-based developer making the internet less frustrating, one project at a time..</p>
      <div className="hero-action">
        <a href="https://ke.linkedin.com/in/victor-gathiga-a62aa62b3?original_referer=https%3A%2F%2Fwww.google.com%2F">
          <div className="hero-connect">Connect with me</div>
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer" download="Victor_Muhoro_Resume.pdf">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero;
