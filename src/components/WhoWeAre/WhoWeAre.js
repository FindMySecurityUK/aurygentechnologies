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
          We craft agile, affordable, and AI-ready software for startups and SMEs, designed to launch fast, scale boldly, and evolve with you. Every build is engineered with intention to transform ambition into architecture, seamless, scalable, and ready to lead.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;