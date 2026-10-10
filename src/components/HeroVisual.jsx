import React from 'react';

/**
 * HeroVisual Component
 * Renders developer profile portrait naturally integrated with a subtle neutral background tint.
 */
export default function HeroVisual({
  mode = "image",
  imageSrc = "/surya_portrait.png",
  videoSrc = "",
  alt = "V. Surya — Full-Stack Developer"
}) {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
      {/* Integrated Natural Portrait Frame */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100/80">
        {mode === "video" && videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />
        ) : (
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover object-top select-none"
          />
        )}
      </div>
    </div>
  );
}
