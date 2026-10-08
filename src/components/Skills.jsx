import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layers, Terminal, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    mern: Layers,
    programming: Code2,
    web: Terminal,
    database: Database,
    tools: Wrench
  };

  return (
    <section id="skills" className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
            02 // TECHNICAL STACK
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black text-zinc-950 uppercase tracking-tight">
              TECHNICAL <span className="text-[#FF0033]">SKILLS</span>
            </h2>
            <p className="text-zinc-600 font-mono text-xs sm:text-sm mt-2 max-w-xl">
              Authentic core skills derived strictly from practical development and project experience.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                activeCategory === "all"
                  ? 'bg-[#FF0033] text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
              }`}
            >
              ALL SKILLS
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#FF0033] text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-[#FF0033] shadow-2xs hover:shadow-md transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Red Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF0033] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FF0033]/10 border border-[#FF0033]/20 flex items-center justify-center text-[#FF0033]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-mono font-bold text-zinc-950 tracking-wider">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded border border-zinc-200 font-bold">
                        {category.skills.length} TECHS
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Tags List */}
                    <div className="flex flex-wrap gap-2.5 mb-4">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-zinc-50 px-3.5 py-2 rounded-xl border border-zinc-200 group-hover:border-zinc-300 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033]" />
                          <span className="text-xs font-mono font-semibold text-zinc-900">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Badge */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>DOMAIN EXPERIENCE</span>
                    <span className="text-[#FF0033] font-bold">PRACTICAL</span>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
