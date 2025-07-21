import React, { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const scrollY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced transform values for smoother Lenis integration
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.8, 4]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, -800]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0]);
  
  // Transform for the emerging content with Lenis easing
  const contentY = useTransform(scrollYProgress, [0.5, 1], [200, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 0.3, 1]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section id="home" className="landing-page" ref={containerRef}>
        <div className={`landing-content ${isVisible ? 'fade-in' : ''}`}>
          <motion.div 
            className="spline-container"
            style={{
              scale,
              z,
              opacity
            }}
          >
            <Spline
              scene="https://prod.spline.design/qopHYF3Zzu-WVFa4/scene.splinecode"
              className="spline-scene"
            />
          </motion.div>
          
          {/* Enhanced portal overlay for smoother transition */}
          <motion.div 
            className="portal-overlay"
            style={{
              opacity: useTransform(scrollYProgress, [0.4, 0.8], [0, 1]),
              scale: useTransform(scrollYProgress, [0.4, 1], [0.5, 2])
            }}
          />
        </div>
      </section>
      
      {/* Content that emerges with Lenis smooth scrolling */}
      <motion.div 
        className="emerging-content"
        style={{
          y: contentY,
          opacity: contentOpacity
        }}
      >
        <div className="content-wrapper">
          <motion.h2 
            className="emerging-title"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to Our Universe
          </motion.h2>
          <motion.p 
            className="emerging-subtitle"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experience the future through our innovative solutions
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;