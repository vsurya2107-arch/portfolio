import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import HeroVisual from './HeroVisual';
import MagneticButton from './MagneticButton';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax layers
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 bg-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Subtle Grid with subtle parallax */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Minimal Hero Hierarchy */}
          <motion.div 
            style={{ y: textY }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7"
          >
            
            {/* 1. Status Line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-mono font-semibold tracking-widest text-zinc-700 uppercase flex items-center space-x-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AVAILABLE FOR FULL-STACK & AI DEVELOPER ROLES</span>
            </motion.div>

            {/* 2. Identity & Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-950 uppercase leading-none">
                V. <span className="text-[#FF0033]">SURYA</span>
              </h1>
              <p className="text-sm sm:text-base font-sans font-black text-zinc-800 tracking-tight uppercase">
                FULL-STACK DEVELOPER BUILDING AI-POWERED WEB APPLICATIONS
              </p>
            </motion.div>

            {/* 3. Bold Editorial Caption Headline */}
            <div className="pt-1 space-y-1 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] text-zinc-950"
              >
                TURNING IDEAS INTO
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] text-zinc-950"
              >
                SCALABLE WEB & AI
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] text-[#FF0033]"
              >
                EXPERIENCES.
              </motion.div>
            </div>

            {/* 4. Core Technology Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1"
            >
              <p className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                CORE TECHNOLOGIES
              </p>
              <div className="flex flex-wrap gap-2">
                {personalData.coreTechnologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-100 text-zinc-900 px-3 py-1 rounded-full border border-zinc-200 text-xs font-mono font-bold hover:border-[#FF0033] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 5. Accessible Recruiter Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <MagneticButton>
                <a
                  href="#work"
                  data-cursor="VIEW"
                  className="group inline-flex items-center space-x-2.5 bg-[#FF0033] hover:bg-[#D9002B] text-white px-6 py-3 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={personalData.assets.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="DOWNLOAD"
                  className="inline-flex items-center space-x-2 bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-3 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300 shadow-sm transform hover:-translate-y-0.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF0033]" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="GO"
                  className="inline-flex items-center space-x-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 px-4 py-3 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-900" />
                  <span>GITHUB</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="GO"
                  className="inline-flex items-center space-x-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 px-4 py-3 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                  <span>LINKEDIN</span>
                </a>
              </MagneticButton>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Visual Portrait */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <HeroVisual mode="image" imageSrc={personalData.assets.portrait} alt="V. Surya" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}


