import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import blogsData from '../../data/blogs.json';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const blogs = blogsData.blogs;



  const blog = blogs[id];

  if (!blog) {
    return (
      <div className="blog-detail-error">
        <h2>Blog not found</h2>
        <button onClick={() => navigate('/')} className="back-button">
          Return to Home
        </button>
      </div>
    );
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'heading':
        return <h2 key={index} className="blog-heading">{item.text}</h2>;
      case 'subheading':
        return <h3 key={index} className="blog-subheading">{item.text}</h3>;
      case 'paragraph':
        return <p key={index} className="blog-paragraph">{item.text}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="blog-detail" ref={ref}>
      <div className={`blog-detail-container ${inView ? 'animate' : ''}`}>
        {/* Header */}
        <div className="blog-detail-header">
          <button onClick={() => navigate('/#blogs')} className="back-button">
            ← Return to all blogs
          </button>
        </div>

        {/* Hero Section */}
        <div className="blog-detail-hero">
          <div className="blog-detail-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blog-detail-title-section">
            <h1 className="blog-detail-title">{blog.title}</h1>
            <div className="blog-detail-author">By {blog.author}</div>
            <div className="blog-detail-tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="blog-detail-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="blog-detail-content">
          {blog.content.map((item, index) => renderContent(item, index))}
        </div>

        {/* Footer */}
        <div className="blog-detail-footer">
          <button onClick={() => navigate('/')} className="back-button-footer">
            ← Return to All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;