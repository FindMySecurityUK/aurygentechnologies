import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './TaglineSection.css';

const TaglineSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="tagline-section" ref={ref}>
      <div className={`tagline-container ${inView ? 'animate' : ''}`}>
        <h1 className="tagline-main">
          <span className="tagline-line1">Code Your Vision.</span>
          <span className="tagline-line2">Scale Your Future</span>
        </h1>
        <h2 className="tagline-sub">
          We Build What You Imagine
        </h2>
      </div>
    </section>
  );
};

export default TaglineSection;