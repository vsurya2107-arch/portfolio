import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-zinc-900 py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-extrabold tracking-tight text-zinc-950">V. SURYA</span>
          <span className="w-2 h-2 rounded-full bg-[#FF0033]" />
          <span className="text-xs font-mono text-zinc-600">
            B.Tech IT • MERN Stack Developer
          </span>
        </div>

        {/* Center Copyright */}
        <p className="text-xs font-mono text-zinc-500">
          © {new Date().getFullYear()} V. Surya. All rights reserved. Crafted with precision & performance.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          data-cursor="GO"
          className="flex items-center space-x-2 text-xs font-mono text-zinc-700 hover:text-[#FF0033] bg-zinc-100 hover:bg-zinc-200 px-4 py-2 rounded-full border border-zinc-200 transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#FF0033]" />
        </button>

      </div>
    </footer>
  );
}
