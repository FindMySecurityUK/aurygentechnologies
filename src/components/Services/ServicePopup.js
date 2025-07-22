import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServicePopup.css';

const ServicePopup = ({ service, isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const scrollPosition = useRef(0);

  // Handle popup state transitions
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      
      // Store current scroll position
      scrollPosition.current = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      // Apply styles to prevent scrolling
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.cssText = `
        position: fixed !important;
        top: -${scrollPosition.current}px !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        overflow: hidden !important;
        padding-right: ${scrollbarWidth}px !important;
      `;
      
      // Prevent keyboard scrolling
      const preventKeyboardScroll = (e) => {
        const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (scrollKeys.includes(e.keyCode)) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('keydown', preventKeyboardScroll);
      
      // Trigger entrance animation after DOM update
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', preventKeyboardScroll);
      };
    } else if (shouldRender) {
      // Start exit animation
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
        
        // Restore body styles
        document.body.style.cssText = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollPosition.current);
        scrollPosition.current = 0;
      }, 600); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.cssText = '';
      if (scrollPosition.current > 0) {
        window.scrollTo(0, scrollPosition.current);
      }
    };
  }, []);

  if (!shouldRender || !service) return null;

  const handleClose = () => {
    if (isAnimating) {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    handleClose();
  };

  // Prevent wheel scrolling on overlay but allow on popup content
  const handleWheelOnOverlay = (e) => {
    e.preventDefault();
  };

  const handleWheelOnPopup = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`service-popup-overlay ${isAnimating ? 'active' : ''}`} 
      onClick={handleOverlayClick}
      onWheel={handleWheelOnOverlay}
    >
      <div 
        className={`service-popup ${isAnimating ? 'active' : ''}`}
        onWheel={handleWheelOnPopup}
      >
        <div className="service-popup-header">
          <div className="service-popup-title-section">
            <div className="service-popup-icon">
              <span className="service-popup-emoji">{service.icon}</span>
            </div>
            <div className="service-popup-title-content">
              <h2 className="service-popup-title">{service.title}</h2>
              <p className="service-popup-description">{service.shortDescription}</p>
            </div>
          </div>
          <button className="service-popup-close" onClick={handleClose}>
            <span>×</span>
          </button>
        </div>
        
        <div className="service-popup-content">
          <h3 className="subcategories-title">Choose a Service</h3>
          <div className="subcategories-grid">
            {service.subcategories && service.subcategories.map((subcategory, index) => (
              <Link
                key={subcategory.id}
                to={`/services/${service.id}/${subcategory.id}`}
                className="subcategory-card"
                onClick={() => handleSubcategoryClick(subcategory)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="subcategory-content">
                  <h4 className="subcategory-title">{subcategory.title}</h4>
                  <p className="subcategory-description">{subcategory.description}</p>
                  <div className="subcategory-features">
                    {subcategory.features && subcategory.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="subcategory-feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="subcategory-arrow">
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;