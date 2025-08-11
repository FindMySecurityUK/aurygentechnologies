import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import servicesData from '../../data/services.json';
import './OurServices.css';
import Carousel3D from '../Carousel3D/Carousel3D';

const OurServices = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [services, setServices] = useState([]);

  useEffect(() => {
    try {
      if (servicesData && servicesData.services && Array.isArray(servicesData.services)) {
        // Sort services by priority
        const sortedServices = servicesData.services.sort((a, b) => (a.priority || 999) - (b.priority || 999));
        setServices(sortedServices);
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
    navigate(`/services/${service.id}`);
  };

  return (
    <section id="services" className="our-services-section" ref={ref}>
      <div className={`services-container ${inView ? 'animate' : ''}`}>
        {/* <div className="services-header">
          <h2 className="services-title">Our Comprehensive Services</h2>
          <p className="services-subtitle">
            Delivering end-to-end technology solutions tailored to your business needs
          </p>
        </div> */}
        
        {services.length > 0 ? (
          <Carousel3D
            items={services.map((service, index) => ({
              id: service.id || index,
              title: service.title,
              brand: service.category || 'Professional Service',
              description: service.shortDescription,
              tags: service.subcategories?.slice(0, 3).map(sub => sub.title) || [],
              imageUrl: service.image || 'https://via.placeholder.com/400x300/1a1a1a/00d4ff?text=Service',
              icon: service.icon,
              subcategories: service.subcategories,
              onClick: () => handleServiceClick(service)
            }))}
            autoRotate={true}
            rotateInterval={5000}
            cardHeight={500}
            title="Our Services"
            subtitle="Tailored Digital Solutions for Startups & Growing Businesses"
            tagline="Explore our end-to-end technology services, spanning software development, AI, cybersecurity, and cloud infrastructure, engineered to accelerate innovation, automate operations, and scale businesses globally."
            isMobileSwipe={true}
          />
        ) : (
          <div className="no-services">
            <p>No services available at the moment.</p>
          </div>
        )}
      </div>
      

    </section>
  );
};

export default OurServices;