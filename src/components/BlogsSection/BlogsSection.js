import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './BlogsSection.css';

const BlogsSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const blogs = [
    {
      title: "Understanding Legislative Networks: Building a Knowledge Graph of UK Legislation",
      excerpt: "Exploring how AI-powered network analysis tools are revolutionising the way we understand and navigate complex legislative relationships in the UK.",
      date: "16th March 2024",
      image: "/assets/ai-legislation-blog.svg",
      link: "ai-legislative-networks",
      readTime: "8 min read"
    },
    {
      title: "Why Generative AI Coding Tools Don't Always Deliver: A Technical Perspective",
      excerpt: "A candid examination of the realities, limitations, and professional considerations when using AI-powered coding assistants in real-world development.",
      date: "15th March 2024",
      image: "/assets/ai-coding-tools-blog.svg",
      link: "ai-coding-reality",
      readTime: "10 min read"
    },
    {
      title: "Generative AI and Data Protection: Eight Essential Questions for Developers",
      excerpt: "Navigate the complex landscape of GDPR compliance and data protection requirements when developing and deploying generative AI systems.",
      date: "14th March 2024",
      image: "/assets/ai-data-protection-blog.svg",
      link: "ai-data-protection",
      readTime: "12 min read"
    },
    {
      title: "New ETSI Standards: Protecting AI Systems from Evolving Cyber Threats",
      excerpt: "Comprehensive analysis of the latest European standards for securing artificial intelligence systems against sophisticated cyber attacks.",
      date: "13th March 2024",
      image: "/assets/ai-security-standards-blog.svg",
      link: "ai-security-standards",
      readTime: "9 min read"
    },
    {
      title: "The Future of Programming: Why You Still Need Expertise in the AI Era",
      excerpt: "Examining how artificial intelligence is transforming software development whilst highlighting why human expertise remains absolutely essential.",
      date: "12th March 2024",
      image: "/assets/future-programming-blog.svg",
      link: "future-programming",
      readTime: "11 min read"
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
                onClick={() => navigate(`/blog/${blog.link}`)}
              >
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-read-time">{blog.readTime}</div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-read-more">
                    <span>Read Full Article</span>
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