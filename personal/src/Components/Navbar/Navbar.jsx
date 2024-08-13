import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Victor</h2>
        <ul className='nav-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;
