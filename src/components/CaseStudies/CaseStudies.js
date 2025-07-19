import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './CaseStudies.css';

const CaseStudies = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const caseStudies = [
    {
      title: "E-Commerce Platform Revolution",
      description: "Transformed a traditional retail business into a digital powerhouse with AI-driven recommendations.",
      image: "/assets/case1.jpg",
      link: "#case1"
    },
    {
      title: "FinTech Security Enhancement",
      description: "Implemented advanced cybersecurity measures for a leading financial technology company.",
      image: "/assets/case2.jpg",
      link: "#case2"
    },
    {
      title: "Healthcare Data Management",
      description: "Developed a comprehensive patient data management system with real-time analytics.",
      image: "/assets/case3.jpg",
      link: "#case3"
    },
    {
      title: "Smart City Infrastructure",
      description: "Built IoT-enabled infrastructure management system for urban development projects.",
      image: "/assets/case4.jpg",
      link: "#case4"
    },
    {
      title: "EdTech Learning Platform",
      description: "Created an interactive learning platform with AI-powered personalized education paths.",
      image: "/assets/case5.jpg",
      link: "#case5"
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimized global supply chain operations using machine learning and predictive analytics.",
      image: "/assets/case6.jpg",
      link: "#case6"
    }
  ];

  return (
    <section id="case-studies" className="case-studies-section" ref={ref}>
      <div className={`case-studies-container ${inView ? 'animate' : ''}`}>
        <h2 className="case-studies-title">Our Case Studies</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {[...caseStudies, ...caseStudies].map((study, index) => (
              <div 
                key={index} 
                className="case-study-card"
                onClick={() => window.open(study.link, '_blank')}
              >
                <div className="card-image">
                  <img src={study.image} alt={study.title} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{study.title}</h3>
                  <p className="card-description">{study.description}</p>
                  <div className="card-arrow">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;