import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../data/services.json';
import ServicePopup from '../Services/ServicePopup';
import './OurServices.css';
import Carousel3D from '../Carousel3D/Carousel3D';

const OurServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [services, setServices] = useState([]);
  const [categorizedServices, setCategorizedServices] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    try {
      if (servicesData && servicesData.services && Array.isArray(servicesData.services)) {
        // Sort services by priority
        const sortedServices = servicesData.services.sort((a, b) => (a.priority || 999) - (b.priority || 999));
        setServices(sortedServices);
        
        // Group services by category
        const grouped = sortedServices.reduce((acc, service) => {
          const category = service.category || 'Other';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(service);
          return acc;
        }, {});
        setCategorizedServices(grouped);
      } else {
        console.error('Services data is not available or not an array:', servicesData);
        setServices([]);
        setCategorizedServices({});
      }
    } catch (error) {
      console.error('Error loading services data:', error);
      setServices([]);
      setCategorizedServices({});
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
            subtitle="Professional Solutions"
            tagline="Explore our comprehensive range of services designed to transform your business with cutting-edge technology and expert solutions."
            isMobileSwipe={true}
          />
        ) : (
          <div className="no-services">
            <p>No services available at the moment.</p>
          </div>
        )}
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