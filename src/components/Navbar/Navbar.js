import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/assets/logo.png" alt="AO Technologies" className="logo-img" />
        </div>

        {/* Left Navigation */}
        <div className="navbar-left">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
        </div>

        {/* Center Company Name */}
        <div className="navbar-center">
          <span className="company-name">AO Technologies</span>
        </div>

        {/* Right Navigation */}
        <div className="navbar-right">
          <a href="#case-studies" className="nav-link">Case Studies</a>
          <a href="#resources" className="nav-link">Resources</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;