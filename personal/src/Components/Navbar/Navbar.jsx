import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light');
  };

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [darkMode]);

  return (
    <div className='navbar'>
      <h2>Victor</h2>

      <div className="nav-right">
        {/* <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div> */}

        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={menuOpen ? 'nav-menu mobile-open' : 'nav-menu'}>
        <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link to="/about">About Me</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link to="/services">Services</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link to="/portfolio">Projects</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
