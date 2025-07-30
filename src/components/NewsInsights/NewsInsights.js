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
      title: "Competition Shows Humans Are Still Better Than AI at Coding",
      summary: "Recent programming competitions reveal that human developers continue to outperform AI systems in complex coding challenges, highlighting the enduring value of human expertise.",
      date: "July 26, 2025",
      link: "https://www.theguardian.com/technology/2025/jul/26/competition-shows-humans-are-still-better-than-ai-at-coding-just"
    },
    {
      type: "News",
      title: "CCTV cameras with AI to tackle fly-tipping",
      summary: "CCTV cameras that use AI technology will be installed in parts of East Yorkshire to tackle fly-tipping following a pilot scheme.",
      date: "July 30, 2025",
      link: "https://www.bbc.com/news/articles/c78z93d9893o"
    },
    {
      type: "News",
      title: "Apple Earnings Under Pressure from Tariffs and Slow AI Rollout",
      summary: "Apple faces financial challenges as trade tariffs and delayed AI feature implementations impact quarterly earnings and market expectations.",
      date: "July 30, 2025",
      link: "https://www.reuters.com/business/apple-earnings-under-pressure-tariffs-slow-ai-roll-out-2025-07-30/"
    },
    {
      type: "News",
      title: "UK Faces Surge in Sophisticated Cyber Attacks",
      summary: "Security experts warn of increasing cyber threats targeting UK infrastructure and businesses, with attackers employing more sophisticated techniques.",
      date: "July 29, 2025",
      link: "https://www.independent.co.uk/tech/security/uk-cyber-attacks-dan-jarvis-b2795118.html"
    },
    {
      type: "News",
      title: "Critical Security Flaw Discovered in Gemini CLI Coding Tool",
      summary: "Researchers identify a serious vulnerability in Google's Gemini CLI tool that could allow attackers to execute malicious commands on developer systems.",
      date: "July 27, 2025",
      link: "https://arstechnica.com/security/2025/07/flaw-in-gemini-cli-coding-tool-allowed-hackers-to-run-nasty-commands-on-user-devices/"
    },
    {
      type: "News",
      title: "Gmail Issues Urgent Security Warning to 2.5 Billion Users",
      summary: "Google warns Gmail users of a surge in sophisticated attacks and urges immediate account security updates to protect against evolving threats.",
      date: "July 30, 2025",
      link: "https://www.forbes.com/sites/daveywinder/2025/07/30/gmail-warns-25-billion-users---update-accounts-now-as-attacks-surge/"
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