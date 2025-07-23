import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../data/services.json';
import ServicePopup from './ServicePopup';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    try {
      if (servicesData && servicesData.services && Array.isArray(servicesData.services)) {
        setServices(servicesData.services);
      } else {
        console.error('Services data is not available or not an array:', servicesData);
        setServices([]);
      }
    } catch (error) {
      console.error('Error loading services data:', error);
      setServices([]);
    }
  }, []);

  const handleServiceClick = (service, event) => {
    // Prevent default behavior and stop propagation
    event.preventDefault();
    event.stopPropagation();
    
    // Store current scroll position immediately
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // Get the clicked card's position
    const rect = event.currentTarget.getBoundingClientRect();
    const cardPosition = {
      top: rect.top + currentScrollY,
      left: rect.left + window.pageXOffset,
      width: rect.width,
      height: rect.height
    };
    
    // Apply scroll prevention immediately
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.cssText = `
      position: fixed !important;
      top: -${currentScrollY}px !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      overflow: hidden !important;
      padding-right: ${scrollbarWidth}px !important;
    `;
    
    setSelectedService({ ...service, cardPosition, scrollPosition: currentScrollY });
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    // Restore scroll position if it was stored
    if (selectedService && selectedService.scrollPosition !== undefined) {
      // Restore body styles
      document.body.style.cssText = '';
      
      // Restore scroll position
      window.scrollTo(0, selectedService.scrollPosition);
    }
    
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="services-page">
      <div className="services-header">
        <div className={`services-header-content ${inView ? 'animate' : ''}`} ref={ref}>
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Cutting-edge solutions for your business needs</p>
        </div>
      </div>
      
      <div className="services-content">
        <div className="services-container">
          <div className="services-grid">
            {services && services.length > 0 ? (
              services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="service-card clickable" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={(e) => handleServiceClick(service, e)}
                >
                  <div className="service-icon">
                    <div className="service-emoji" dangerouslySetInnerHTML={{ __html: service.icon }}></div>
                  </div>
                  <h3 className="service-name">{service.title}</h3>
                  <p className="service-description">{service.shortDescription}</p>
                  <div className="service-features">
                    {service.subcategories && service.subcategories.slice(0, 3).map((subcategory, idx) => (
                      <span key={idx} className="feature-tag">{subcategory.title}</span>
                    ))}
                  </div>
                  <div className="service-link">
                    Explore Services
                    <span className="arrow">→</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-services">
                <p>No services available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <ServicePopup 
        service={selectedService}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default Services;