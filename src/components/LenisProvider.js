import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.5,
      smoothTouch: true,
      touchMultiplier: 1,
      infinite: false,
      normalizeWheel: true,
      wheelMultiplier: 0.6,
      autoResize: true,
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchInertiaMultiplier: 20,
      lerp: 0.08,
    });

    let rafId;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    function raf(time) {
      if (time - lastTime >= frameInterval) {
        lenis.raf(time);
        lastTime = time;
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
       if (rafId) {
         cancelAnimationFrame(rafId);
       }
       lenis.destroy();
     };
  }, []);

  return children;
};

export default LenisProvider;