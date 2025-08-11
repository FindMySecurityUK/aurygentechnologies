import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WhoWeAre.css';

const WhoWeAre = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="who-we-are-section" ref={ref}>
      <div className={`who-we-are-container ${inView ? 'animate' : ''}`}>
        <h2 className="section-title">Who We Are</h2>
        <p className="who-we-are-text">
          At Aurygen Technologies, we design and deliver secure, scalable, and AI-powered digital solutions for startups, SMEs, and global businesses. Headquartered in the UK and trusted worldwide, we specialise in rapid product development from MVPs to enterprise-grade platforms, combining agile execution with deep technical expertise across software, AI, cloud, and cybersecurity. Every solution we build is crafted to evolve with your growth, engineered to transform bold ideas into resilient, intelligent systems ready for global scale.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;