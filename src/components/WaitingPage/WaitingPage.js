import React from 'react';
import './WaitingPage.css';

const WaitingPage = () => {
  return (
    <div className="waiting-page">
      <div className="waiting-content">
        <div className="waiting-text">
          <h1 className="waiting-title">Something Great is Coming</h1>
          <h2 className="waiting-company">Aurygen Technologies</h2>
          <div className="waiting-loader">
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingPage;