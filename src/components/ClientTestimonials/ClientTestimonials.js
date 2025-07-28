import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ClientTestimonials.css';

const ClientTestimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      testimonial: "Aurygen Technologies transformed our startup vision into reality. Their AI-driven solutions helped us scale from 10 to 10,000 users in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CTO, FinanceFlow",
      company: "FinanceFlow",
      testimonial: "The cybersecurity implementation was flawless. We've had zero security incidents since partnering with Aurygen Technologies. Truly exceptional service.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, HealthTech Solutions",
      company: "HealthTech Solutions",
      testimonial: "Their database optimization reduced our query times by 80%. The team's expertise in healthcare data management is unmatched.",
      rating: 5
    },
    {
      name: "David Thompson",
      position: "VP Engineering, CloudCorp",
      company: "CloudCorp",
      testimonial: "Aurygen Technologies delivered our cloud migration ahead of schedule and under budget. Their technical expertise is world-class.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      position: "Product Manager, EduPlatform",
      company: "EduPlatform",
      testimonial: "The AI-powered learning platform they built for us has revolutionized online education. Student engagement increased by 300%.",
      rating: 5
    },
    {
      name: "James Miller",
      position: "COO, LogisticsPro",
      company: "LogisticsPro",
      testimonial: "Their supply chain optimization solution saved us $2M annually. Aurygen Technologies doesn't just deliver code, they deliver results.",
      rating: 5
    }
  ];

  return (
    <section className="client-testimonials-section" ref={ref}>
      {/* First 100vh - Header Section */}
      <div className={`testimonials-header ${inView ? 'animate' : ''}`}>
        <div className="header-content">
          <h2 className="testimonials-title">Clients Say About</h2>
          <div className="company-logo-large">
            <img src="/assets/logo.png" alt="Aurygen Technologies" className="logo-large" />
          </div>
        </div>
      </div>

      {/* Second 100vh - Testimonials Cards */}
      <div className={`testimonials-cards-section ${inView ? 'animate' : ''}`}>
        <div className="testimonials-container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.testimonial}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;