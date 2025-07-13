import React from 'react';
import './Hero.css';
import profile from '../../../assets/DSC_0202.jpg';
import resume from '../../../assets/victor resume (2).pdf';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="Profile" loading="lazy" />
      <h1>
        <span>
          <Typewriter
            words={["I'm Victor Muhoro, Software Developer based in Nairobi, Kenya."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p>Nairobi-based developer making the internet less frustrating, one project at a time..</p>
      <div className="hero-action">
        <a href="https://ke.linkedin.com/in/victor-gathiga-a62aa62b3">
          <div className="hero-connect">Connect with me</div>
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero;
