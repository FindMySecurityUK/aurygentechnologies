import React from 'react';
import './LaunchingSoon.css';

const LaunchingSoon = () => {
  return (
    <div className="launching-page">
      <div className="gradient-overlay" />
      <div className="launching-content">
        <img src="/assets/logo.png" alt="Aurygen Technologies" className="launching-logo" />
        <h1 className="launching-title">Launching Soon</h1>
        <p className="launching-subtitle">We’re crafting something exceptional for you.</p>
        <div className="launching-divider">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <p className="launching-note">Stay tuned, the new experience will be live shortly.</p>
      </div>
      <div className="bg-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
      </div>
    </div>
  );
};

export default LaunchingSoon;