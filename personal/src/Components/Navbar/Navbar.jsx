import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <h2>Victor</h2>

      {/* Hamburger icon */}
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation menu */}
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
