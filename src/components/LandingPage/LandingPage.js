import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="landing-page">
      <div className={`landing-content ${isVisible ? 'fade-in' : ''}`}>
        <video 
          className="landing-video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="video-overlay">
          <div className="landing-text">
            <h1 className="hero-title">Welcome to the Future</h1>
            <p className="hero-subtitle">Where Innovation Meets Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;