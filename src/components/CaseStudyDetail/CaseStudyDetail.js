import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import caseStudiesData from '../../data/caseStudies.json';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = caseStudiesData.caseStudies.find(study => study.id === id);
  
  if (!caseStudy) {
    return (
      <div className="case-study-detail-container">
        <div className="case-study-not-found">
          <h2>Case Study Not Found</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  
  const renderImage = () => {
    if (caseStudy.image.startsWith('/assets/') || caseStudy.image.startsWith('http')) {
      return <img src={caseStudy.image} alt={caseStudy.title} className="case-study-detail-image" />;
    } else {
      return (
        <div 
          className="case-study-detail-svg"
          dangerouslySetInnerHTML={{ __html: caseStudy.image }}
        />
      );
    }
  };
  
  return (
    <div className="case-study-detail-container">
      <div className="case-study-detail-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>
      </div>
      
      <div className="case-study-detail-content">
        <div className="case-study-detail-hero">
          <div className="case-study-detail-image-container">
            {renderImage()}
          </div>
          
          <div className="case-study-detail-info">
            <h1 className="case-study-detail-title">{caseStudy.title}</h1>
            
            <div className="case-study-detail-meta">
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{caseStudy.category}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Client:</span>
                <span className="meta-value">{caseStudy.client}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{caseStudy.duration}</span>
              </div>
            </div>
            
            <div className="case-study-technologies">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {caseStudy.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="case-study-detail-description">
          <h2>Project Overview</h2>
          <p>{caseStudy.description}</p>
        </div>
        
        <div className="case-study-detail-link">
          <button 
            onClick={() => navigate('/#case-studies')}
            className="external-link-button"
          >
            ← Back to Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;