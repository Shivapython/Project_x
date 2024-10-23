import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="SpamBang Logo" className="logo-image" />
      </div>
      <div className="nav-links">
        <a href="#home" className="nav-item">HOME</a>
        <a href="#about" className="nav-item">ABOUT US</a>
        <a href="#contact" className="nav-item">CONTACT US</a>
        <a href="#info" className="nav-item">INFO</a>
        <a href="#login" className="nav-item">LOGIN</a>
      </div>
    </nav>
  );
};

export default Navbar;
