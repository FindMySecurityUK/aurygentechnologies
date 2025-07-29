import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import caseStudiesData from '../../data/caseStudies.json';
import './CaseStudies.css';

const CaseStudies = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const navigate = useNavigate();

  const caseStudies = caseStudiesData.caseStudies;

  const handleCaseStudyClick = (studyId) => {
    navigate(`/case-study/${studyId}`);
  };

  return (
    <section id="case-studies" className="case-studies-section" ref={ref}>
      <div className={`case-studies-container ${inView ? 'animate' : ''}`}>
        <h2 className="case-studies-title">Our Case Studies</h2>
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className="case-study-card"
              onClick={() => handleCaseStudyClick(study.id)}
            >
              <div className="case-study-image">
                {study.image.startsWith('/assets/') || study.image.startsWith('http') ? (
                  <img src={study.image} alt={study.title} />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: study.image }} />
                )}
              </div>
              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>
                <div className="case-study-meta">
                  <span className="case-study-category">{study.category}</span>
                  {/* <span className="case-study-duration">{study.duration}</span> */}
                </div>
                <div className="case-study-technologies">
                  {study.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="case-study-read-more">
                  <span>View Case Study</span>
                  <span className="case-study-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;