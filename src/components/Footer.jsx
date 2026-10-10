import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-zinc-900 py-10 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Brand Identity */}
        <div className="flex items-center space-x-2">
          <span className="font-extrabold text-zinc-950 text-sm tracking-tight">V. SURYA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF0033]" />
          <span className="text-zinc-500 font-medium">
            Full-Stack Developer & IT Engineer
          </span>
        </div>

        {/* Copyright */}
        <p className="text-zinc-500 font-normal">
          © {new Date().getFullYear()} V. Surya. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          data-cursor="GO"
          className="flex items-center space-x-1.5 text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 px-3.5 py-1.5 rounded-lg border border-zinc-200/80 transition-colors cursor-pointer font-medium"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-zinc-500" />
        </button>

      </div>
    </footer>
  );
}
