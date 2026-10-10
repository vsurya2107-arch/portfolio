import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import HeroVisual from './HeroVisual';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clean Editorial Content */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Minimal Sub-Eyebrow */}
            <div className="flex items-center space-x-2">
              <span className="text-[#FF0033] font-mono font-bold text-xs select-none">//</span>
              <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                Full-Stack Developer & IT Engineer
              </span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 uppercase leading-none">
                V. <span className="text-[#FF0033]">SURYA</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-800 leading-snug">
                Full-Stack Developer Building AI-Powered Web Applications.
              </p>
            </div>

            {/* Concise Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl font-normal">
              Specializing in full-stack web applications with React, Node.js, Express, and MongoDB. I engineer responsive interfaces, robust REST APIs, and practical AI features for real-world digital products.
            </p>

            {/* Action CTA Hierarchy */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              {/* Primary Dominant CTA */}
              <a
                href="#work"
                data-cursor="VIEW"
                className="inline-flex items-center justify-center space-x-2 bg-[#FF0033] hover:bg-[#D9002B] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              {/* Secondary Actions & Links */}
              <div className="flex items-center space-x-4 justify-between sm:justify-start">
                {/* Secondary Resume Action */}
                <a
                  href={personalData.assets.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="DOWNLOAD"
                  className="inline-flex items-center space-x-2 text-zinc-700 hover:text-zinc-950 font-medium text-sm transition-colors py-2 px-3 hover:bg-zinc-100 rounded-lg"
                >
                  <Download className="w-4 h-4 text-zinc-500" />
                  <span>Download Resume</span>
                </a>

                {/* Understated Social Icon Links */}
                <div className="flex items-center space-x-1 border-l border-zinc-200 pl-3">
                  <a
                    href={personalData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="GO"
                    className="p-2 text-zinc-500 hover:text-zinc-950 transition-colors rounded-lg hover:bg-zinc-100"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={personalData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="GO"
                    className="p-2 text-zinc-500 hover:text-zinc-950 transition-colors rounded-lg hover:bg-zinc-100"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Natural Integrated Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <HeroVisual mode="image" imageSrc={personalData.assets.portrait} alt="V. Surya — Full-Stack Developer" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
