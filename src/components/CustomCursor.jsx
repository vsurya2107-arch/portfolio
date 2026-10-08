import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check element under cursor for data-cursor attributes
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setCursorText(target.getAttribute('data-cursor') || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Main Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FF0033] rounded-full shadow-[0_0_10px_#FF0033] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Expanding Ring & Text Overlay */}
      <div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'w-16 h-16 bg-[#FF0033] text-white border-none shadow-[0_0_20px_rgba(255,0,51,0.6)]'
            : 'w-8 h-8 border border-[#FF0033]/50 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {isHovered && cursorText && (
          <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-white animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
