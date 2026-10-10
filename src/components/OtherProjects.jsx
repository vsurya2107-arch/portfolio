import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { secondaryProjects } from '../data/portfolioData';

export default function OtherProjects() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF0033]" />
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            SECONDARY ARCHIVE
          </span>
        </div>

        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950">
            PROJECT <span className="text-[#FF0033]">ARCHIVE</span>
          </h2>
          <p className="text-zinc-600 text-sm mt-2 max-w-xl font-normal">
            Archived web application builds and fundamental API integration projects.
          </p>
        </div>

        {/* 6 Archived Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon */}
                <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-center text-zinc-700 mb-4">
                  <FolderGit2 className="w-4 h-4" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-zinc-900 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-zinc-200/60 flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium bg-white text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200/80"
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
