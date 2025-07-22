import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../data/services.json';
import ServicePopup from '../Services/ServicePopup';
import './OurServices.css';

const OurServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="our-services-section" ref={ref}>
      <div className={`services-container ${inView ? 'animate' : ''}`}>
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card clickable"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleServiceClick(service)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.shortDescription}</p>
                <div className="service-arrow">→</div>
              </div>
            ))
          ) : (
            <div className="no-services">
              <p>No services available at the moment.</p>
            </div>
          )}
        </div>
      </div>
      
      <ServicePopup 
        service={selectedService}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </section>
  );
};

export default OurServices;