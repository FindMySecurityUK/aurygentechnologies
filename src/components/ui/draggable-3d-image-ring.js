"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, easeIn, easeOut } from "framer-motion";
import { animate } from "framer-motion";

// Utility function for class names (simple implementation)
const cn = (...classes) => classes.filter(Boolean).join(' ');

export function Draggable3DImageRing({
  images,
  width = 300,
  perspective = 2000,
  imageDistance = 500,
  initialRotation = 180,
  animationDuration = 1.5,
  staggerDelay = 0.1,
  hoverOpacity = 0.5,
  containerClassName,
  ringClassName,
  imageClassName,
  backgroundColor,
  draggable = true,
  ease = "easeOut",
  mobileBreakpoint = 768,
  mobileScaleFactor = 0.8,
  inertiaPower = 0.8,
  inertiaTimeConstant = 300,
  inertiaVelocityMultiplier = 20,
}) {
  const containerRef = useRef(null);
  const ringRef = useRef(null);

  const rotationY = useMotionValue(initialRotation);
  const startX = useRef(0);
  const currentRotationY = useRef(initialRotation);
  const isDragging = useRef(false);
  const velocity = useRef(0);

  const [currentScale, setCurrentScale] = useState(1);
  const [showImages, setShowImages] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const angle = useMemo(() => 360 / images.length, [images.length]);

  const getBgPos = (imageIndex, currentRot, scale) => {
    const scaledImageDistance = imageDistance * scale;
    const effectiveRotation = currentRot - 180 - imageIndex * angle;
    const parallaxOffset = ((effectiveRotation % 360 + 360) % 360) / 360;
    return `${-(parallaxOffset * (scaledImageDistance / 1.5))}px 0px`;
  };

  useEffect(() => {
    const unsubscribe = rotationY.on("change", (latestRotation) => {
      if (ringRef.current) {
        Array.from(ringRef.current.children).forEach((imgElement, i) => {
          imgElement.style.backgroundPosition = getBgPos(
            i,
            latestRotation,
            currentScale
          );
        });
      }
      currentRotationY.current = latestRotation;
    });
    return () => unsubscribe();
  }, [rotationY, images.length, imageDistance, currentScale, angle]);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const newScale = viewportWidth <= mobileBreakpoint ? mobileScaleFactor : 1;
      setCurrentScale(newScale);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint, mobileScaleFactor]);

  useEffect(() => {
    setShowImages(true);
  }, []);

  const handleDragStart = (event) => {
    if (!draggable) return;
    isDragging.current = true;
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    startX.current = clientX;
    rotationY.stop();
    velocity.current = 0;
    if (ringRef.current) {
      ringRef.current.style.cursor = "grabbing";
    }
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", handleDragEnd);
  };

  const handleDrag = (event) => {
    if (!draggable || !isDragging.current) return;

    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const deltaX = clientX - startX.current;

    velocity.current = -deltaX * 0.5;
    rotationY.set(currentRotationY.current + velocity.current);
    startX.current = clientX;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    if (ringRef.current) {
      ringRef.current.style.cursor = "grab";
    }

    // Apply inertia animation
    if (Math.abs(velocity.current) > 1) {
      const finalVelocity = velocity.current * inertiaVelocityMultiplier;
      const targetRotation = currentRotationY.current + finalVelocity;
      
      animate(rotationY, targetRotation, {
        type: "decay",
        power: inertiaPower,
        timeConstant: inertiaTimeConstant,
        restDelta: 0.5,
      });
    }

    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", handleDragEnd);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        containerClassName
      )}
      style={{
        width: `${width * currentScale}px`,
        height: `${width * currentScale}px`,
        perspective: `${perspective}px`,
        backgroundColor: backgroundColor || "transparent",
      }}
    >
      <motion.div
        ref={ringRef}
        className={cn("relative preserve-3d cursor-grab", ringClassName)}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          rotateY: rotationY,
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <AnimatePresence>
          {showImages &&
            images.map((image, index) => {
              const rotateY = index * angle;
              const isHovered = hoveredIndex === index;
              const shouldDim = hoveredIndex !== null && !isHovered;

              return (
                <motion.div
                  key={index}
                  className={cn(
                    "absolute inset-0 rounded-lg bg-cover bg-center bg-no-repeat cursor-pointer",
                    imageClassName
                  )}
                  style={{
                    backgroundImage: `url(${image.src || image})`,
                    transform: `rotateY(${rotateY}deg) translateZ(${imageDistance * currentScale}px)`,
                    transformStyle: "preserve-3d",
                    opacity: shouldDim ? hoverOpacity : 1,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotateY: rotateY + 180,
                  }}
                  animate={{
                    opacity: shouldDim ? hoverOpacity : 1,
                    scale: 1,
                    rotateY: rotateY,
                  }}
                  transition={{
                    duration: animationDuration,
                    delay: index * staggerDelay,
                    ease: ease,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => image.onClick && image.onClick(image, index)}
                >
                  {image.content && (
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-white bg-black bg-opacity-50 rounded-lg">
                      {image.content}
                    </div>
                  )}
                </motion.div>
              );
            })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}