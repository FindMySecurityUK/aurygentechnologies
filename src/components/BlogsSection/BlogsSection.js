import React from 'react';
import { useInView } from 'react-intersection-observer';
import './BlogsSection.css';

const BlogsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const blogs = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and deploy software solutions.",
      date: "March 15, 2024",
      image: "/assets/blog1.jpg",
      link: "#blog1"
    },
    {
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Essential security measures every business should implement to protect against modern cyber threats.",
      date: "March 10, 2024",
      image: "/assets/blog2.jpg",
      link: "#blog2"
    },
    {
      title: "Cloud Migration Strategies",
      excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime.",
      date: "March 5, 2024",
      image: "/assets/blog3.jpg",
      link: "#blog3"
    },
    {
      title: "Building Scalable Database Architecture",
      excerpt: "Design patterns and best practices for creating databases that grow with your business needs.",
      date: "February 28, 2024",
      image: "/assets/blog4.jpg",
      link: "#blog4"
    },
    {
      title: "Startup Tech Stack Selection Guide",
      excerpt: "How to choose the right technologies for your startup to ensure rapid development and scalability.",
      date: "February 20, 2024",
      image: "/assets/blog5.jpg",
      link: "#blog5"
    },
    {
      title: "DevOps Automation Trends",
      excerpt: "Latest trends in DevOps automation that are transforming software development workflows.",
      date: "February 15, 2024",
      image: "/assets/blog6.jpg",
      link: "#blog6"
    }
  ];

  return (
    <section className="blogs-section" ref={ref}>
      <div className={`blogs-container ${inView ? 'animate' : ''}`}>
        <h2 className="blogs-title">Latest Blogs</h2>
        <div className="blogs-carousel-container">
          <div className="blogs-carousel-track">
            {[...blogs, ...blogs].map((blog, index) => (
              <div 
                key={index} 
                className="blog-card"
                onClick={() => window.open(blog.link, '_blank')}
              >
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-date">{blog.date}</div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-read-more">
                    <span>Read More</span>
                    <div className="blog-arrow">→</div>
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

export default BlogsSection;