import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectVisual from './ProjectVisual';
import ProjectCaseStudy from './ProjectCaseStudy';
import { mainProjects } from '../data/portfolioData';

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-white text-zinc-950 border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF0033]" />
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            SELECTED PROJECTS
          </span>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950">
            FEATURED <span className="text-[#FF0033]">WORK</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl font-normal">
            Selected full-stack software applications featuring React, Node.js, Express, MongoDB, and practical AI integrations.
          </p>
        </div>

        {/* Project List Stack */}
        <div className="space-y-16 sm:space-y-20">
          {mainProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isFlagship = project.flagship || project.id === 'homiq';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`pt-12 border-t border-zinc-200/80 first:border-0 first:pt-0 ${
                  isFlagship ? 'bg-zinc-50/50 p-6 sm:p-8 rounded-3xl border border-zinc-200/80' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Screenshot Container */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ProjectVisual project={project} />
                  </div>

                  {/* Project Details Content */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Category & Flagship Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FF0033] uppercase tracking-wider">
                        {isFlagship ? '★ FLAGSHIP PROJECT' : project.category}
                      </span>
                      <span className="text-xs font-semibold text-zinc-400">
                        {project.number}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight uppercase leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-600 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem & Overview */}
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal whitespace-pre-line max-w-xl">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
                          KEY FEATURES
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-xs font-medium text-zinc-800 leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
                        TECHNOLOGY STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white text-zinc-800 px-3 py-1 rounded-lg border border-zinc-200/80 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GO"
                          className="inline-flex items-center space-x-2 bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub Repository</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center space-x-2 bg-zinc-100 text-zinc-400 border border-zinc-200/80 px-3.5 py-2 rounded-xl text-xs font-medium">
                          <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                          <span>GitHub Link Unavailable</span>
                        </span>
                      )}

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="OPEN"
                          className="inline-flex items-center space-x-2 bg-[#FF0033] hover:bg-[#D9002B] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center space-x-2 bg-zinc-100 text-zinc-400 border border-zinc-200/80 px-3.5 py-2 rounded-xl text-xs font-medium">
                          <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Demo Link Unavailable</span>
                        </span>
                      )}
                    </div>

                  </div>
                </div>

                {/* Case Study Accordion Drawer */}
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
