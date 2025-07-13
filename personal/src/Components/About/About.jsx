import React from 'react';
import './About.css';
import theme_pattern from '../../../assets/theme_pattern.svg';
import profile_img from '../../../assets/IMG-20240802-WA0010 (1).jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Victor Muhoro" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I build sleek, useful stuff for the web. Fluent in Python, Node.js, and dad jokes.</p>
            <p>Driven by clean code and good coffee. I create user-friendly apps that won’t make people rage quit.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: '70%' }} /></div>
            <div className="about-skill"><p>React</p><hr style={{ width: '60%' }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: '50%' }} /></div>
          </div>
        </div>
      </div>

      <div className="about-achievements" ref={ref}>
        <div className="about-achievement">
          <h1>{inView && <CountUp end={1} duration={2} />}+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{inView && <CountUp end={90} duration={2.5} />}+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{inView && <CountUp end={15} duration={2} />}+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
