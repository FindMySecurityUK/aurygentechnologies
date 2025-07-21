import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../data/services.json';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id: serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    try {
      if (servicesData && servicesData.services && Array.isArray(servicesData.services)) {
        const foundService = servicesData.services.find(s => s.id === serviceId);
        setService(foundService || null);
      } else {
        console.error('Services data is not available or not an array:', servicesData);
        setService(null);
      }
    } catch (error) {
      console.error('Error finding service:', error);
      setService(null);
    }
    setLoading(false);
  }, [serviceId]);

  if (loading) {
    return (
      <div className="service-detail-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/services" className="back-link">← Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className={`service-detail-header-content ${inView ? 'animate' : ''}`} ref={ref}>
          <div className="breadcrumb">
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>
          <div className="service-hero">
            <div className="service-icon-large">
              <span className="service-emoji-large">{service.icon}</span>
            </div>
            <h1 className="service-detail-title">{service.title}</h1>
            <p className="service-detail-subtitle">{service.shortDescription}</p>
          </div>
        </div>
      </div>
      
      <div className="service-detail-content">
        <div className="service-detail-container">
          <section className="service-overview">
            <h2>Overview</h2>
            <p>{service.detailedDescription}</p>
          </section>

          <section className="service-features-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              {service.features && service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="service-technologies">
            <h2>Technologies We Use</h2>
            <div className="technologies-grid">
              {service.technologies && service.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          <section className="service-benefits">
            <h2>Benefits</h2>
            <div className="benefits-grid">
              {service.benefits && service.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <span className="benefit-icon">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="service-use-cases">
            <h2>Use Cases</h2>
            <div className="use-cases-grid">
              {service.useCases && service.useCases.map((useCase, index) => (
                <div key={index} className="use-case-card">
                  <span className="use-case-icon">💡</span>
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="service-cta">
            <div className="cta-card">
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how {service.title} can transform your business.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-primary">Get a Quote</Link>
                <Link to="/schedule-meeting" className="cta-secondary">Schedule Consultation</Link>
              </div>
            </div>
          </section>

          <div className="service-navigation">
            <Link to="/services" className="back-to-services">
              ← Back to All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;