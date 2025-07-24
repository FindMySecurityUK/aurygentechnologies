import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './ScheduleMeeting.css';

const ScheduleMeeting = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/meeting-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section className="schedule-meeting-section" ref={ref}>
      <div className="schedule-background" style={backgroundStyle}>
        <div className={`schedule-content ${inView ? 'animate' : ''}`}>
          <div className="schedule-left">
            <h2 className="schedule-title">
              Let's code the future you imagine
            </h2>
          </div>
          <div className="schedule-right">
            <Link to="/contact-us" className="schedule-btn">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;