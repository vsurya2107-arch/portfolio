import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';

import MagneticButton from './MagneticButton';

export default function Navbar({ activeSection = "hero" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "EXPERIENCE", href: "#mentoring", id: "mentoring" },
    { name: "PROJECTS", href: "#work", id: "work" },
    { name: "RESUME", href: "#resume", id: "resume" },
    { name: "CONTACT", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-lg border-b border-zinc-200/80 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <div className="flex items-center space-x-1 bg-zinc-100/80 p-1.5 rounded-full border border-zinc-200/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  data-cursor="GO"
                  className={`relative px-4 py-1.5 text-xs font-mono font-bold tracking-wider rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-[#FF0033] rounded-full shadow-[0_2px_10px_rgba(255,0,51,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Quick Resume CTA Button */}
          <MagneticButton>
            <a
              href={personalData.assets.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="DOWNLOAD"
              className="ml-3 inline-flex items-center space-x-1.5 bg-zinc-900 hover:bg-[#FF0033] text-white px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </MagneticButton>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-900 focus:outline-none rounded-lg hover:bg-zinc-100"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#FF0033]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-mono font-bold text-zinc-800 hover:text-[#FF0033] border-b border-zinc-100"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
              ))}
              <a
                href={personalData.assets.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center space-x-2 bg-[#FF0033] text-white py-3 rounded-xl text-xs font-mono font-bold tracking-wider shadow-lg shadow-[#FF0033]/20"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
