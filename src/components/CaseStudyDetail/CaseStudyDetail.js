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
        
        <div className="case-study-content-sections">
          {/* Overview Section - Text Left, Image Right */}
          {caseStudy.overview && (
          <div className="case-study-section-layout overview-section">
            <div className="section-content-left">
              <div className="section-header">
                <span className="section-icon">🎯</span>
                <h2>Company Overview</h2>
              </div>
              <p>{caseStudy.overview}</p>
            </div>
            <div className="section-image-right">
              <img src="/assets/overview.jpg" alt="Overview" className="section-illustration" />
            </div>
          </div>
        )}
          
          {/* Challenge Section - Image Left, Text Right */}
          {caseStudy.problemStatement && (
          <div className="case-study-section-layout challenge-section">
            <div className="section-image-left">
              <img src="/assets/challenge.jpg" alt="Challenge" className="section-illustration" />
            </div>
            <div className="section-content-right">
              <div className="section-header">
                <span className="section-icon">⚡</span>
                <h2>The Challenge</h2>
              </div>
              <div className="problem-highlight">
                <h3>Problem Statement</h3>
                <p>{caseStudy.problemStatement}</p>
              </div>
            </div>
          </div>
        )}
          
          {/* Solution Section - Text Left, Image Right */}
          {caseStudy.solution && (
          <div className="case-study-section-layout solution-section">
            <div className="section-content-left">
              <div className="section-header">
                <span className="section-icon">✨</span>
                <h2>Our Solution</h2>
              </div>
              <p>{caseStudy.solution}</p>
              {caseStudy.technologies && (
                <div className="tech-stack-section">
                  <h4>Technology Stack Used:</h4>
                  <div className="tech-tags">
                    {caseStudy.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="section-image-right">
              <img src="/assets/our-solution-case-studies.jpeg" alt="Solution" className="section-illustration" />
            </div>
          </div>
        )}
          
          {/* Project Details Section */}
          <div className="case-study-section results-section">
            <div className="section-header">
              <div className="section-icon">📈</div>
              <h2>Project Details</h2>
            </div>
            <p>{caseStudy.description}</p>
          </div>
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