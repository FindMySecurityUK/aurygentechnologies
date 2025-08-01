import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { submitContactForm, validateFormData } from '../../services/firebaseService';
import { APP_CONSTANTS } from '../../constants/config';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    services: '',
    budget: '',
    projectDetails: '',
    name: '',
    email: '',
    companyName: '',
    website: '',
    hearAbout: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate form data
      const validation = validateFormData(formData);
      if (!validation.isValid) {
        alert('Please fill in all required fields correctly.');
        setIsSubmitting(false);
        return;
      }

      // Submit to Firebase
      await submitContactForm(formData);
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        services: '',
        budget: '',
        projectDetails: '',
        name: '',
        email: '',
        companyName: '',
        website: '',
        hearAbout: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-page">
      <section className="contact-us-section" ref={ref}>
        {/* Header Section - 100vh */}
        <div className={`contact-header ${inView ? 'animate' : ''}`}>
          <div className="contact-header-content">
            <h2 className="contact-title">
              Let's Create Products With Purpose
            </h2>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={`contact-form-section ${inView ? 'animate' : ''}`}>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Section 1: Project Details */}
              <div className="form-section">
                <h3 className="section-title">Project Information</h3>
                <div className="form-group">
                  <label htmlFor="services">What services are you looking for?</label>
                  <select 
                    id="services" 
                    name="services" 
                    value={formData.services}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="ai-automation">AI and Smart Automation</option>
                    <option value="software-development">Software Development</option>
                    <option value="cybersecurity">CyberSecurity Solutions</option>
                    <option value="cloud-infrastructure">Cloud and IT Infrastructure</option>
                    <option value="database-services">Database Services</option>
                    <option value="tech-partner">Startup Tech Partner and Tech Support</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <input 
                    type="text" 
                    id="budget" 
                    name="budget" 
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g., $10,000 - $25,000 or $50,000+"
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectDetails">Project Details</label>
                  <textarea 
                    id="projectDetails" 
                    name="projectDetails" 
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Section 2: Contact Information */}
              <div className="form-section">
                <h3 className="section-title">Contact Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName" 
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input 
                      type="url" 
                      id="website" 
                      name="website" 
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Additional Information */}
              <div className="form-section">
                <h3 className="section-title">How did you hear about us?</h3>
                <div className="form-group">
                  <label htmlFor="hearAbout">Source</label>
                  <select 
                    id="hearAbout" 
                    name="hearAbout" 
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="google-search">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="conference">Conference/Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  {APP_CONSTANTS.SUCCESS_MESSAGE}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  {APP_CONSTANTS.ERROR_MESSAGE}
                </div>
              )}
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? APP_CONSTANTS.LOADING_MESSAGE : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;