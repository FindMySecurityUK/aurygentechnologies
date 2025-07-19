import React from 'react';
import { useInView } from 'react-intersection-observer';
import './NewsInsights.css';

const NewsInsights = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const newsItems = [
    {
      type: "News",
      title: "AO Technologies Expands Global Operations",
      summary: "We're excited to announce our expansion into new markets, bringing cutting-edge technology solutions to businesses worldwide.",
      date: "March 20, 2024",
      link: "#news1"
    },
    {
      type: "Insight",
      title: "The Rise of Edge Computing in 2024",
      summary: "Analyzing the growing importance of edge computing and its impact on modern business infrastructure.",
      date: "March 18, 2024",
      link: "#insight1"
    },
    {
      type: "News",
      title: "Partnership with Leading Tech Giants",
      summary: "Strategic partnerships formed to deliver enhanced AI and cloud solutions to our enterprise clients.",
      date: "March 15, 2024",
      link: "#news2"
    },
    {
      type: "Insight",
      title: "Quantum Computing: The Next Frontier",
      summary: "Exploring the potential of quantum computing and its implications for future software development.",
      date: "March 12, 2024",
      link: "#insight2"
    },
    {
      type: "News",
      title: "Award Recognition for Innovation",
      summary: "AO Technologies receives industry recognition for breakthrough innovations in AI-driven automation.",
      date: "March 8, 2024",
      link: "#news3"
    },
    {
      type: "Insight",
      title: "Sustainable Tech: Green Computing Trends",
      summary: "How sustainable technology practices are reshaping the future of software development and infrastructure.",
      date: "March 5, 2024",
      link: "#insight3"
    }
  ];

  return (
    <section className="news-insights-section" ref={ref}>
      <div className={`news-insights-container ${inView ? 'animate' : ''}`}>
        <h2 className="news-insights-title">News & Insights</h2>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className={`news-card ${item.type.toLowerCase()}`}
              onClick={() => window.open(item.link, '_blank')}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="news-type">{item.type}</div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-summary">{item.summary}</p>
              <div className="news-footer">
                <span className="news-date">{item.date}</span>
                <div className="news-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;