import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import servicesData from '../data/services.json';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId, subcategoryId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundService = servicesData.services.find(s => s.id === serviceId);
    if (foundService) {
      const foundSubcategory = foundService.subcategories.find(sub => sub.id === subcategoryId);
      if (foundSubcategory) {
        setService(foundService);
        setSubcategory(foundSubcategory);
      } else {
        navigate('/404');
      }
    } else {
      navigate('/404');
    }
    setLoading(false);
  }, [serviceId, subcategoryId, navigate]);

  // Scroll to top when component mounts or route parameters change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId, subcategoryId]);

  if (loading) {
    return (
      <div className="service-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading service details...</p>
      </div>
    );
  }

  if (!service || !subcategory) {
    return null;
  }

  return (
    <div className="service-detail">
      {/* Header Section */}
      <div className="service-detail-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/#services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to={`/services/${serviceId}`} className="breadcrumb-link">{service.title}</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{subcategory.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="service-detail-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="service-badge">{service.title}</div>
              <h1 className="hero-title">{subcategory.title}</h1>
              <p className="hero-description">{subcategory.description}</p>
              <Link to="/#contact" className="contact-button">
                Contact Us
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="hero-image">
              <img src={service.image} alt={subcategory.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Subcategory Details Section */}
      <div className="subcategory-details-section">
        <div className="container">
          <div className="section-header">
            <h2>Service Overview</h2>
            <p>Comprehensive details about our {subcategory.title.toLowerCase()} services</p>
          </div>
          
          <div className="details-content">
            <div className="details-main">
              <div className="description-card">
                <h3>What We Offer</h3>
                <p>{subcategory.detailedDescription}</p>
              </div>
            </div>
            
            <div className="details-sidebar">
              <div className="quick-info-card">
                <h3>Quick Info</h3>
                <div className="info-item">
                  <span className="info-label">Service Category:</span>
                  <span className="info-value">{service.category}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Service Type:</span>
                  <span className="info-value">{subcategory.title}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Features:</span>
                  <span className="info-value">{subcategory.features.length} key features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section - Full Width */}
      <div className="features-section-fullwidth">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Comprehensive features that make our {subcategory.title.toLowerCase()} services stand out</p>
          </div>
          <div className="features-grid-fullwidth">
            {subcategory.features.map((feature, index) => (
              <div key={index} className="feature-item-fullwidth">
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Software Solutions Section - Full Width with Image */}
      {subcategory.customSoftwareSolutions && (
        <div className="custom-solutions-section-fullwidth">
          <div className="container">
            <div className="solutions-content">
              <div className="solutions-image">
                <img src="/assets/business_ao_tech.jpg" alt="Custom Software Solutions" />
              </div>
              <div className="solutions-text">
                <h2>{subcategory.customSoftwareSolutions.title}</h2>
                <div className="solutions-grid-fullwidth">
                  {subcategory.customSoftwareSolutions.solutions.map((solution, index) => (
                    <div key={index} className="solution-item-fullwidth">
                      <div className="solution-icon">
                        {solution.type === 'Startups' && '💡'}
                        {solution.type === 'SMEs' && '🏢'}
                        {solution.type === 'Enterprises' && '🏛️'}
                      </div>
                      <div className="solution-content">
                        <h4 className="solution-title">{solution.type}</h4>
                        <p className="solution-description">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Development Process Section */}
      <div className="development-process-section">
        <div className="container">
          <div className="section-header">
            <h2>{servicesData.developmentProcess.title}</h2>
            <p>{servicesData.developmentProcess.description}</p>
          </div>
          
          <div className="roadmap-container">
            <div className="roadmap-timeline">
              {servicesData.developmentProcess.steps.map((step, index) => (
                <div key={step.id} className="roadmap-step">
                  <div className="step-connector">
                    <div className="step-number">{index + 1}</div>
                    {index < servicesData.developmentProcess.steps.length - 1 && (
                      <div className="connector-line"></div>
                    )}
                  </div>
                  <div className="step-card">
                    <div className="step-icon">{step.icon}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section - Full Width */}
      {subcategory.keyBenefits && (
        <div className="key-benefits-section-fullwidth">
          <div className="container">
            <div className="section-header">
              <h2>{subcategory.keyBenefits.title}</h2>
              <p>Discover the key advantages of choosing our {subcategory.title.toLowerCase()} services</p>
            </div>
            <div className="benefits-grid-fullwidth">
              {subcategory.keyBenefits.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item-fullwidth">
                  <div className="benefit-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how our {subcategory.title.toLowerCase()} services can help transform your business.</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="cta-button primary">
                Get Started Today
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to={`/services/${serviceId}`} className="cta-button secondary">
                View All {service.title} Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;