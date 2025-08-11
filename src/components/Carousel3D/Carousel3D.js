import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel3D.css';

const Carousel3D = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
  title = "Our Services",
  subtitle = "Tailored Digital Solutions for Startups & Growing Businesses",
  tagline = "Explore our end-to-end technology services, spanning software development, AI, cybersecurity, and cloud infrastructure, engineered to accelerate innovation, automate operations, and scale businesses globally.",
  isMobileSwipe = true,
}) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  // Auto-rotate effect
  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  // Intersection observer for auto-rotate
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  // Get animation class for each card based on position
  const getCardAnimationClass = (index) => {
    if (index === active) return 'carousel3d-card-active';
    if (index === (active + 1) % items.length) return 'carousel3d-card-right';
    if (index === (active - 1 + items.length) % items.length) return 'carousel3d-card-left';
    return 'carousel3d-card-hidden';
  };

  // Navigation handlers
  const goToNext = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setActive(index);
  };

  return (
    <section className="carousel3d-section">
      <div className="carousel3d-container">
        {/* Header */}
        <div className="carousel3d-header">
          <h2 className="carousel3d-title">{title}</h2>
          <h3 className="carousel3d-subtitle">{subtitle}</h3>
          <p className="carousel3d-tagline">{tagline}</p>
        </div>

        {/* Carousel */}
        <div
          className="carousel3d-wrapper"
          style={{ height: `${cardHeight + 100}px` }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="carousel3d-cards-container">
            {items.map((item, index) => (
              <div
                key={item.id || index}
                className={`carousel3d-card ${getCardAnimationClass(index)}`}
                style={{ height: `${cardHeight}px` }}
                onClick={() => item.onClick && item.onClick()}
              >
                {/* Card Image */}
                <div
                  className="carousel3d-card-image"
                  style={{
                    backgroundImage: `url(${item.imageUrl || item.image || 'https://via.placeholder.com/400x300/1a1a1a/00d4ff?text=Service'})`,
                  }}
                >
                  <div className="carousel3d-card-overlay">
                    <div className="carousel3d-card-brand">
                      <h3>{(item.brand || item.title || '').toUpperCase()}</h3>
                      <div className="carousel3d-brand-line"></div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="carousel3d-card-content">
                  <h4 className="carousel3d-card-title">{item.title}</h4>
                  <p className="carousel3d-card-subtitle">{item.brand || item.category || ''}</p>
                  <p className="carousel3d-card-description">{item.description || item.shortDescription}</p>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="carousel3d-tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="carousel3d-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Service count for services data */}
                  {item.subcategories && (
                    <div className="carousel3d-service-count">
                      {item.subcategories.length} Services
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel3d-nav carousel3d-nav-prev"
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="carousel3d-nav carousel3d-nav-next"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel3d-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel3d-indicator ${index === active ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
export { Carousel3D };