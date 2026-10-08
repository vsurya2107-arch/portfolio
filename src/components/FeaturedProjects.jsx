import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectVisual from './ProjectVisual';
import ProjectCaseStudy from './ProjectCaseStudy';
import { mainProjects } from '../data/portfolioData';

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
            03 // FEATURED PROJECTS & TECHNICAL PROOF
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-950">
              SELECTED <span className="text-[#FF0033]">WORK</span>
            </h2>
            <p className="text-zinc-600 font-mono text-xs sm:text-sm mt-2 max-w-2xl">
              Authentic software projects showcasing full-stack development, database architecture, and practical AI integrations.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200 font-bold">
            5 FEATURED APPLICATIONS
          </span>
        </div>

        {/* Unified Project Stack */}
        <div className="space-y-20 sm:space-y-24">
          {mainProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="pt-10 border-t border-zinc-200/80 first:border-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left/Right Visual */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ProjectVisual project={project} />
                  </div>

                  {/* Left/Right Unified Content */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Number & Category Pill */}
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black font-mono text-zinc-200 hover:text-[#FF0033] transition-colors">
                        {project.number}
                      </span>
                      <span className="text-xs font-mono font-bold bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full border border-zinc-200">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight uppercase leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono font-bold text-[#FF0033] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal whitespace-pre-line">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <div>
                        <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                          KEY FEATURES
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-xs font-mono text-zinc-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                        TECHNOLOGIES
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-zinc-100 text-zinc-900 px-3 py-1 rounded-full border border-zinc-200 text-xs font-mono font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links (Rendered ONLY if genuine URL exists) */}
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
                            <span>GITHUB REPOSITORY</span>
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
                </div>

                {/* Reusable Case Study Drawer */}
                {project.caseStudy && (
                  <ProjectCaseStudy project={project} />
                )}

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
