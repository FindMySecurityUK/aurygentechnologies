import React from 'react';
import { useInView } from 'react-intersection-observer';
import './TermsConditions.css';

const TermsConditions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="terms-page">
      <div className="terms-header">
        <div className={`terms-header-content ${inView ? 'animate' : ''}`} ref={ref}>
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-subtitle">Please read these terms carefully</p>
        </div>
      </div>
      
      <div className="terms-content">
        <div className="terms-container">
          <section className="terms-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using AO Technologies' services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section className="terms-section">
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on AO Technologies' 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Service Terms</h2>
            <p>
              Our services are provided "as is" and we make no warranties, expressed or implied, 
              and hereby disclaim and negate all other warranties including without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="terms-section">
            <h2>Payment Terms</h2>
            <ul>
              <li>All payments are due within 30 days of invoice date</li>
              <li>Late payments may incur additional fees</li>
              <li>Refunds are subject to our refund policy</li>
              <li>Prices are subject to change with 30 days notice</li>
              <li>All fees are non-refundable unless otherwise stated</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to 
              text, graphics, logos, icons, images, audio clips, video clips, data compilations, 
              and software are the exclusive property of AO Technologies and are protected by 
              copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="terms-section">
            <h2>User Responsibilities</h2>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any prohibited activities</li>
              <li>Respect the rights of other users</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall AO Technologies or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on our website, even if we have been notified orally or in writing of the 
              possibility of such damage.
            </p>
          </section>

          <section className="terms-section">
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the service immediately, 
              without prior notice or liability, under our sole discretion, for any reason 
              whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws 
              of the jurisdiction in which AO Technologies operates, and you irrevocably submit 
              to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section className="terms-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms 
              at any time. If a revision is material, we will provide at least 30 days notice 
              prior to any new terms taking effect.
            </p>
          </section>

          <section className="terms-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: legal@aotechnologies.com</p>
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

export default TermsConditions;