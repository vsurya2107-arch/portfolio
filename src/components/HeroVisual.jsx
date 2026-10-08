import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * HeroVisual Component
 * Renders floating natural profile portrait with seamless white background blending
 * and subtle desktop mouse tilt interaction.
 */
export default function HeroVisual({
  mode = "image", // "image" | "video"
  imageSrc = "/surya_portrait.png",
  videoSrc = "",
  alt = "V. Surya — B.Tech IT Student & MERN Stack Developer"
}) {
  const [isTouch, setIsTouch] = useState(false);
  const rotateX = useSpring(0, { stiffness: 150, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 25 });

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 4; // Max 2deg tilt
    const y = ((e.clientY - top) / height - 0.5) * -4;
    rotateY.set(x);
    rotateX.set(y);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div 
      className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Natural Portrait */}
      <motion.div
        className="relative w-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        style={!isTouch ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {mode === "video" && videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-[560px] lg:max-h-[640px] object-contain object-bottom pointer-events-none"
          />
        ) : (
          <div className="relative w-full flex justify-center items-end">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full max-h-[520px] sm:max-h-[580px] lg:max-h-[650px] object-contain object-bottom filter brightness-[1.01] contrast-[1.01] pointer-events-none select-none"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
              }}
            />
            {/* Subtle white bottom gradient fade ensuring suit smoothly merges into white page background */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          </div>
        )}
      </motion.div>
    </div>
  );
}


