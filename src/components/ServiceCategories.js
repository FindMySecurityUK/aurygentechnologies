import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import servicesData from '../data/services.json';
import './ServiceCategories.css';

const ServiceCategories = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundService = servicesData.services.find(s => s.id === serviceId);
    if (foundService) {
      setService(foundService);
    } else {
      navigate('/404');
    }
    setLoading(false);
  }, [serviceId, navigate]);

  // Scroll to top when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (loading) {
    return (
      <div className="service-categories-loading">
        <div className="loading-spinner"></div>
        <p>Loading service categories...</p>
      </div>
    );
  }

  if (!service) {
    return null;
  }

  return (
    <div className="service-categories">
      {/* Header Section */}
      <div className="service-categories-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/#services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="service-categories-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="hero-text">
              <div className="category-badge">{service.category}</div>
              <h1 className="hero-title">{service.title}</h1>
              <p className="hero-description">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="subcategories-section">
        <div className="container">
          <div className="section-header">
            <h2>Our {service.title} Services</h2>
            <p>Choose from our comprehensive range of specialized services</p>
          </div>
          
          <div className="subcategories-grid">
            {service.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                to={`/services/${serviceId}/${subcategory.id}`}
                className="subcategory-card"
              >
                <div className="card-content">
                  <h3 className="card-title">{subcategory.title}</h3>
                  <p className="card-description">{subcategory.description}</p>
                  <div className="card-features">
                    {subcategory.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">{feature.title}</span>
                    ))}
                    {subcategory.features.length > 3 && (
                      <span className="feature-tag more">+{subcategory.features.length - 3} more</span>
                    )}
                  </div>
                  <div className="card-arrow">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and find the perfect solution for your needs.</p>
            <Link to="/#contact" className="cta-button">
              Contact Us Today
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;