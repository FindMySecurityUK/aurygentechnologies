import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import servicesData from '../../data/services.json';
import './OurServices.css';

const OurServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [services, setServices] = useState([]);

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

  return (
    <section id="services" className="our-services-section" ref={ref}>
      <div className={`services-container ${inView ? 'animate' : ''}`}>
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.shortDescription}</p>
                <div className="service-arrow">→</div>
              </Link>
            ))
          ) : (
            <div className="no-services">
              <p>No services available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurServices;