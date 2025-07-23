import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../data/services.json';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id: serviceId, subcategoryId } = useParams();
  const [service, setService] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    try {
      if (servicesData && servicesData.services && Array.isArray(servicesData.services)) {
        const foundService = servicesData.services.find(s => s.id === serviceId);
        if (foundService && subcategoryId) {
          const foundSubcategory = foundService.subcategories?.find(sub => sub.id === subcategoryId);
          setService(foundService);
          setSubcategory(foundSubcategory || null);
        } else {
          setService(foundService || null);
          setSubcategory(null);
        }
      } else {
        console.error('Services data is not available or not an array:', servicesData);
        setService(null);
        setSubcategory(null);
      }
    } catch (error) {
      console.error('Error finding service:', error);
      setService(null);
      setSubcategory(null);
    }
    setLoading(false);
  }, [serviceId, subcategoryId]);

  if (loading) {
    return (
      <div className="service-detail-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!service || (subcategoryId && !subcategory)) {
    return (
      <div className="service-not-found">
        <h1>{subcategoryId ? 'Subcategory Not Found' : 'Service Not Found'}</h1>
        <p>The {subcategoryId ? 'subcategory' : 'service'} you're looking for doesn't exist.</p>
        <Link to="/services" className="back-link">← Back to Services</Link>
      </div>
    );
  }

  // Use subcategory data if available, otherwise use service data
  const displayData = subcategory || service;
  const isSubcategory = !!subcategory;

  return (
    <div className="service-detail-page">
      <div className="service-detail-header">
        <div className={`service-detail-header-content ${inView ? 'animate' : ''}`} ref={ref}>
          <div className="breadcrumb">
            <Link to="/services">Services</Link>
            <span>/</span>
            <Link to={`/services`}>{service.title}</Link>
            {isSubcategory && (
              <>
                <span>/</span>
                <span>{subcategory.title}</span>
              </>
            )}
          </div>
          <div className="service-hero">
            <div className="service-icon-large">
              <div className="service-emoji-large" dangerouslySetInnerHTML={{ __html: service.icon }}></div>
            </div>
            <h1 className="service-detail-title">{displayData.title}</h1>
            <p className="service-detail-subtitle">{isSubcategory ? displayData.description : displayData.shortDescription}</p>
          </div>
        </div>
      </div>
      
      <div className="service-detail-content">
        <div className="service-detail-container">
          <section className="service-overview">
            <h2>Overview</h2>
            <p>{isSubcategory ? displayData.description : (service.detailedDescription || displayData.shortDescription)}</p>
          </section>

          <section className="service-features-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              {displayData.features && displayData.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {!isSubcategory && service.technologies && (
            <section className="service-technologies">
              <h2>Technologies We Use</h2>
              <div className="technologies-grid">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="service-benefits">
            <h2>Benefits</h2>
            <div className="benefits-grid">
              {displayData.benefits && displayData.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <span className="benefit-icon">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {!isSubcategory && service.useCases && (
            <section className="service-use-cases">
              <h2>Use Cases</h2>
              <div className="use-cases-grid">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="use-case-card">
                    <span className="use-case-icon">💡</span>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="service-cta">
            <div className="cta-card">
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how {displayData.title} can transform your business.</p>
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