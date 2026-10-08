import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Code } from 'lucide-react';
import { secondaryProjects } from '../data/portfolioData';

export default function OtherProjects() {
  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4 font-sans">
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-sans font-bold tracking-widest text-[#FF0033] uppercase">
            04 // SECONDARY ARCHIVE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 font-sans">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950 font-sans">
              PROJECT <span className="text-[#FF0033]">ARCHIVE</span>
            </h2>
            <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed mt-2 max-w-xl font-normal">
              Secondary application builds showcasing fundamental web technologies and API integrations.
            </p>
          </div>
          <span className="text-xs font-sans font-bold text-zinc-600 bg-white px-3 py-1.5 rounded-full border border-zinc-200">
            6 ARCHIVED REPOS
          </span>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-[#FF0033] transition-all duration-300 shadow-2xs hover:shadow-lg group flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 group-hover:bg-[#FF0033]/10 flex items-center justify-center text-zinc-700 group-hover:text-[#FF0033] transition-colors">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-sans font-bold text-zinc-400 group-hover:text-[#FF0033]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-sans text-zinc-900 group-hover:text-[#FF0033] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-sans text-zinc-600 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-sans font-medium bg-zinc-100 text-zinc-700 px-2.5 py-1 rounded border border-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
