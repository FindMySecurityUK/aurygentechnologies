import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import blogsData from '../../data/blogs.json';
import './BlogsSection.css';

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Convert JSON data to array format for the carousel
    const blogArray = blogsData.blogOrder.map((blogId, index) => {
      const blogData = blogsData.blogs[blogId];
      return {
        id: index + 1,
        title: blogData.title,
        excerpt: blogData.excerpt,
        date: blogData.date,
        image: blogData.image,
        link: blogId,
        readTime: blogData.readTime,
        author: blogData.author
      };
    });
    setBlogs(blogArray);
  }, []);

  return (
    <section className="blogs-section" ref={ref}>
      <div className={`blogs-container ${inView ? 'animate' : ''}`}>
        <h2 className="blogs-title">Latest Blogs</h2>
        <div className="blogs-carousel-container">
          <div className="blogs-carousel-track">
            {[...blogs, ...blogs].map((blog, index) => (
              <Link 
                key={index} 
                to={`/blog/${blog.link}`}
                className="blog-card"
              >
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-read-time">{blog.readTime}</div>
                  <div className="blog-date">{blog.date}</div>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-author">
                    <span>By {blog.author}</span>
                  </div>
                </div>
               </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;