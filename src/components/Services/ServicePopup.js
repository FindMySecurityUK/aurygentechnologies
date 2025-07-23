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
      
      // Prevent keyboard scrolling only
      const preventKeyboardScroll = (e) => {
        const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (scrollKeys.includes(e.keyCode)) {
          e.preventDefault();
        }
      };
      
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

  // Handle touch events for mobile scrolling
  const handleTouchStart = (e) => {
    // Allow touch events to propagate for scrolling
    e.stopPropagation();
  };

  const handleOverlayTouch = (e) => {
    // Prevent touch events on overlay from closing modal accidentally
    if (e.target === e.currentTarget) {
      e.preventDefault();
    }
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