import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy-page">
      <div className="privacy-header">
        <div className={`privacy-header-content ${inView ? 'animate' : ''}`} ref={ref}>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">Your privacy is our priority</p>
        </div>
      </div>
      
      <div className="privacy-content">
        <div className="privacy-container">
          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include your name, email address, phone number, 
              and any other information you choose to provide.
            </p>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>To send technical notices and support messages</li>
              <li>To communicate with you about products, services, and events</li>
              <li>To monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: privacy@aotechnologies.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
            </div>
          </section>

          <div className="last-updated">
            <p>Last Updated: January 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;