import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code2, Layers, AlertCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectVisual from './ProjectVisual';
import { mainProjects } from '../data/portfolioData';

import MagneticButton from './MagneticButton';

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-28 bg-white text-zinc-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
            03 // MAIN PROJECTS SHOWCASE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-950">
              SELECTED <span className="text-[#FF0033]">WORK</span>
            </h2>
            <p className="text-zinc-600 font-mono text-xs sm:text-sm mt-2 max-w-xl">
              Cinematic presentation of my 5 core software projects built with full-stack technologies.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200">
            5 FEATURED APPLICATIONS
          </span>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-24 sm:space-y-32">
          {mainProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left/Right Project Visual Presentation */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ProjectVisual project={project} />
                </div>

                {/* Left/Right Project Details & Typography */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Number & Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black font-mono text-zinc-200 hover:text-[#FF0033] transition-colors">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono font-bold bg-[#FF0033]/10 text-[#FF0033] px-3 py-1 rounded-full border border-[#FF0033]/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono font-semibold text-[#FF0033]">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base text-zinc-600 leading-relaxed font-normal whitespace-pre-line">
                    {project.description}
                  </p>

                  {/* Project Links (Only rendered if genuine links exist) */}
                  {(project.github || project.live) && (
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GO"
                          className="inline-flex items-center space-x-2 bg-zinc-950 text-white hover:bg-[#FF0033] px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all shadow-md"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>VIEW CODE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="OPEN"
                          className="inline-flex items-center space-x-2 bg-[#FF0033] text-white hover:bg-[#E0002D] px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all shadow-md shadow-[#FF0033]/20"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>LIVE DEMO</span>
                        </a>
                      )}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
