import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import servicesData from '../../data/services.json';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
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
                <div key={service.id} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="service-icon">
                    <span className="service-emoji">{service.icon}</span>
                  </div>
                  <h3 className="service-name">{service.title}</h3>
                  <p className="service-description">{service.shortDescription}</p>
                  <div className="service-features">
                    {service.features && service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <Link to={`/services/${service.id}`} className="service-link">
                    Learn More
                    <span className="arrow">→</span>
                  </Link>
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
    </div>
  );
};

export default Services;