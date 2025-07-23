import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServicePopup.css';

const ServicePopup = ({ service, isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const scrollPosition = useRef(0);
  const [initialPosition, setInitialPosition] = useState(null);

  // Handle popup state transitions
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      
      // Store scroll position from service object
      scrollPosition.current = service?.scrollPosition || 0;
      
      // Set initial position based on card position
      if (service && service.cardPosition) {
        const cardPos = service.cardPosition;
        setInitialPosition({
          top: cardPos.top - scrollPosition.current,
          left: cardPos.left,
          width: cardPos.width,
          height: cardPos.height
        });
      }
      
      // Prevent scrolling gently
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.dataset.scrollY = scrollPosition.current.toString();
      
      // Prevent scroll events only on body, not within modal content
       const preventBodyScroll = (e) => {
         if (!e.target.closest('.service-popup-content')) {
           e.preventDefault();
         }
       };
       
       const preventKeyboardScroll = (e) => {
         const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
         if (scrollKeys.includes(e.keyCode) && !e.target.closest('.service-popup-content')) {
           e.preventDefault();
         }
       };
       
       document.addEventListener('wheel', preventBodyScroll, { passive: false });
       document.addEventListener('touchmove', preventBodyScroll, { passive: false });
       document.addEventListener('keydown', preventKeyboardScroll, { passive: false });
      
      // Trigger entrance animation after DOM update
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 50);
      
      // Clear initial position after animation completes
      const clearTimer = setTimeout(() => {
        setInitialPosition(null);
      }, 650); // After animation duration
      
      return () => {
        clearTimeout(timer);
        clearTimeout(clearTimer);
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        delete document.body.dataset.scrollY;
        document.removeEventListener('wheel', preventBodyScroll);
          document.removeEventListener('touchmove', preventBodyScroll);
          document.removeEventListener('keydown', preventKeyboardScroll);
      };
    } else if (shouldRender) {
      // Start exit animation
      setIsAnimating(false);
      setInitialPosition(null);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 600); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender, service]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup is now handled by Services.js
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
        // Only prevent scroll if not scrolling within popup content
        if (!e.target.closest('.service-popup-content')) {
          e.preventDefault();
        }
      };
      
      const handleWheelOnPopup = (e) => {
        // Allow scrolling within popup content
        e.stopPropagation();
      };

  return (
    <div 
      className={`service-popup-overlay ${isAnimating ? 'active' : ''} ${initialPosition ? 'positioning' : ''}`} 
      onClick={handleOverlayClick}
      onTouchStart={handleOverlayTouch}
    >
      <div 
        className={`service-popup ${isAnimating ? 'active' : ''}`}
        onTouchStart={handleTouchStart}
        style={initialPosition ? {
          position: 'absolute',
          top: `${initialPosition.top}px`,
          left: `${initialPosition.left}px`,
          width: `${initialPosition.width}px`,
          height: `${initialPosition.height}px`,
          maxWidth: 'none',
          maxHeight: 'none',
          transform: 'scale(1)',
          opacity: 0
        } : {}}
      >
        <div className="service-popup-header">
          <div className="service-popup-hero-image" style={{
            backgroundImage: `url(${service.image || 'https://via.placeholder.com/400x300/1a1a1a/00d4ff?text=Service'})`
          }}>
            <div className="service-popup-hero-overlay">
              <div className="service-popup-title-section">
                <div className="service-popup-category-badge">
                  {service.category || 'Professional Service'}
                </div>
                <h2 className="service-popup-title">{service.title}</h2>
                <p className="service-popup-description">{service.shortDescription}</p>
                <div className="service-popup-stats">
                  <div className="service-popup-stat">
                    <span className="stat-number">{service.subcategories?.length || 0}</span>
                    <span className="stat-label">Services</span>
                  </div>
                  <div className="service-popup-stat">
                    <span className="stat-number">{service.technologies?.length || 0}</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
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