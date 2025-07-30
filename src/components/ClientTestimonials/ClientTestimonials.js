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
      name: "Arslan Waraich",
      position: "Founder & CEO, FindMySecurity & Aurygen Technologies",
      company: "FindMySecurity",
      testimonial: "FindMySecurity is one of Aurygen Technologies’ flagship achievements, conceived, built, and launched to set a new standard in the UK security industry. Delivering a sophisticated, AI-driven, multi-sided platform with enterprise-grade scalability and a fully integrated admin panel in just 10 weeks is a remarkable feat. This project is a clear reflection of Aurygen’s deep technical expertise, agility, and commitment to innovation. Their ability to transform ambitious concepts into powerful, real-world platforms sets them apart as a true leader in bespoke software development",
      rating: 5
    },
    {
      name: "Oliver Pemberton",
      position: "Managing Director",
      company: "CyberShield Systems",
      testimonial: "The cybersecurity solution they implemented has been nothing short of exceptional. We've experienced zero security breaches since going live, and their ongoing support has been absolutely first-class. Highly recommended.",
      rating: 5
    },
    {
      name: "Charlotte Whitfield",
      position: "Chief Technology Officer",
      company: "MindTech Innovations",
      testimonial: "Their AI integration work has transformed our entire business model. The machine learning algorithms they developed have increased our operational efficiency by 250%. Truly remarkable technical prowess.",
      rating: 5
    },
    {
      name: "James Thornbury",
      position: "Operations Director",
      company: "ConstructFlow Dynamics",
      testimonial: "The bespoke software solution they crafted for us has streamlined our project management processes brilliantly. Their team understood our requirements perfectly and delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Sophie Richardson",
      position: "Head of Digital Innovation",
      company: "CloudSync Enterprises",
      testimonial: "Working with Aurygen Technologies has been an absolute pleasure. Their cloud migration expertise saved us considerable time and resources whilst ensuring seamless business continuity throughout the transition.",
      rating: 5
    },
    {
      name: "Alexander Hartwell",
      position: "Chief Executive Officer",
      company: "DigitalForge Labs",
      testimonial: "The mobile application they developed has exceeded all our expectations. Their agile approach and regular communication kept us informed throughout the entire development process. Superb work all round.",
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