import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/#home">
            <img src="/assets/logo.png" alt="AO Technologies" className="logo-img" />
          </a>
        </div>

        {/* Left Navigation */}
        <div className="navbar-left">
          <a href="/#home" className="nav-link">Home</a>
          <a href="/#services" className="nav-link">Services</a>
        </div>

        {/* Right Navigation */}
        <div className="navbar-right">
          <a href="/#case-studies" className="nav-link">Case Studies</a>
          <a href="#contact-us" className="nav-link">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu">
          <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
          <a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</a>
          <a href="#case-studies" className="mobile-nav-link" onClick={closeMobileMenu}>Case Studies</a>
          <a href="#contact-us" className="mobile-nav-link" onClick={closeMobileMenu}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;