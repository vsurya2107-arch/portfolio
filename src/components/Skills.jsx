import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Wrench, Bot } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    tools: Wrench,
    ai: Bot
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF0033]" />
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            TECHNICAL STACK
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 uppercase tracking-tight">
              TECHNICAL <span className="text-[#FF0033]">SKILLS</span>
            </h2>
            <p className="text-zinc-600 text-sm mt-2 max-w-xl font-normal">
              Core technologies applied in practical full-stack project development.
            </p>
          </div>

          {/* Clean Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === "all"
                  ? 'bg-zinc-950 text-white'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200/80'
              }`}
            >
              All Skills
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-zinc-950 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200/80'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories
            .filter((cat) => activeCategory === "all" || activeCategory === cat.id)
            .map((category) => {
              const IconComponent = categoryIcons[category.id] || Code2;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/80 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2.5 bg-white rounded-xl border border-zinc-200/80 text-zinc-900">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-zinc-950 tracking-wide">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-600 mb-5 leading-relaxed font-normal">
                      {category.description}
                    </p>

                    {/* Skill Tags List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-white px-3 py-1.5 rounded-lg border border-zinc-200/80 text-xs font-medium text-zinc-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
