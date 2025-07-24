import React, { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced transform values for smoother Lenis integration
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.8, 4]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, -800]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0]);
  const portalOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const portalScale = useTransform(scrollYProgress, [0.4, 1], [0.5, 2]);
  // Removed scroll-based opacity for mobile text to prevent glitchy behavior
  


  useEffect(() => {
    setIsVisible(true);
    
    // Hide star animation on landing page
    document.body.style.setProperty('--hide-stars', '1');
    
    // Mobile detection
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      document.body.style.removeProperty('--hide-stars');
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <section id="home" className="landing-page" ref={containerRef}>
        <div className={`landing-content ${isVisible ? 'fade-in' : ''}`}>
          <motion.div 
            className="spline-container"
            style={isMobile ? {} : {
              scale,
              z,
              opacity
            }}
          >
            <Spline
              scene={isMobile ? "https://prod.spline.design/oDCC72pUlaRTnSTj/scene.splinecode" : "https://prod.spline.design/CA9ldpfRYX1ZeKvC/scene.splinecode"}
              //scene="https://prod.spline.design/i38VSl8eMNuM1HXs/scene.splinecode"
              //scene="https://prod.spline.design/qopHYF3Zzu-WVFa4/scene.splinecode"
              className="spline-scene"
              onLoad={(splineApp) => {
                // Ensure high-quality rendering
                if (splineApp && splineApp.canvas) {
                  const canvas = splineApp.canvas;
                  
                  // Disable interactions on mobile devices
                  if (isMobile) {
                    canvas.style.pointerEvents = 'none';
                    canvas.style.touchAction = 'pan-y';
                    // Disable Spline's built-in touch controls
                    if (splineApp.setVariable) {
                      try {
                        splineApp.setVariable('enableTouch', false);
                        splineApp.setVariable('enableMouse', false);
                      } catch (e) {
                        console.log('Spline variables not available');
                      }
                    }
                  }
                  
                  // Set high pixel ratio for crisp rendering
                  const pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
                  canvas.style.width = canvas.offsetWidth + 'px';
                  canvas.style.height = canvas.offsetHeight + 'px';
                  canvas.width = canvas.offsetWidth * pixelRatio;
                  canvas.height = canvas.offsetHeight * pixelRatio;
                }
              }}
            />
          </motion.div>
          
          {/* Enhanced portal overlay for smoother transition */}
          <motion.div 
            className="portal-overlay"
            style={isMobile ? { display: 'none' } : {
              opacity: portalOpacity,
              scale: portalScale
            }}
          />
          

        </div>
      </section>
      

    </>
  );
};

export default LandingPage;