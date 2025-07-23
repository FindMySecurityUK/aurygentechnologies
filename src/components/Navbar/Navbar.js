import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Function to handle navigation with scroll behavior
  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

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
          <Link to="/">
            <img src="/assets/logo.png" alt="AO Technologies" className="logo-img" />
          </Link>
        </div>

        {/* Left Navigation */}
        <div className="navbar-left">
          <button 
            onClick={() => handleNavigation('home')} 
            className="nav-link nav-button"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('services')} 
            className="nav-link nav-button"
          >
            Services
          </button>
        </div>

        {/* Right Navigation */}
        <div className="navbar-right">
          <button 
            onClick={() => handleNavigation('case-studies')} 
            className="nav-link nav-button"
          >
            Case Studies
          </button>
          <button 
            onClick={() => handleNavigation('contact-us')} 
            className="nav-link nav-button"
          >
            Contact Us
          </button>
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
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
          <button 
            onClick={() => handleNavigation('services')} 
            className="mobile-nav-link nav-button"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavigation('case-studies')} 
            className="mobile-nav-link nav-button"
          >
            Case Studies
          </button>
          <button 
            onClick={() => handleNavigation('contact-us')} 
            className="mobile-nav-link nav-button"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;