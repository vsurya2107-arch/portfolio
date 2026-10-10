import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Dumbbell, Globe } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="text-[#FF0033] font-mono font-bold text-xs select-none">//</span>
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            BIOGRAPHY & BACKGROUND
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 uppercase tracking-tight mb-10 sm:mb-12">
          WHO <span className="text-[#FF0033]">I AM</span>
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Concise Natural Summary */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-4"
            >
              <p className="text-lg sm:text-xl font-bold text-zinc-900 leading-relaxed">
                I am a <span className="text-[#FF0033]">B.Tech Information Technology student</span> at Suguna College of Engineering and a Full-Stack Developer.
              </p>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                Focused on building full-stack applications with React, Node.js, Express, and MongoDB. I work across frontend interfaces, REST API architecture, database schema design, and practical AI integrations to build production-grade web solutions.
              </p>
            </motion.div>

            {/* Areas of Interest */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
                TECHNICAL FOCUS AREAS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {personalData.areasOfInterest.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-zinc-200 text-left"
                  >
                    <span className="text-[#FF0033] font-mono font-bold text-xs select-none block mb-1">//</span>
                    <p className="text-xs font-semibold text-zinc-900">{interest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education, Languages, Discipline */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#FF0033] uppercase tracking-wider">
                  ACADEMIC BACKGROUND
                </span>
                <GraduationCap className="w-5 h-5 text-zinc-700" />
              </div>
              <div>
                <h4 className="text-base font-bold text-zinc-950">{personalData.education.degree}</h4>
                <p className="text-xs text-zinc-600 mt-1">{personalData.education.institution}</p>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-3"
            >
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-zinc-700" />
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">LANGUAGES</h4>
              </div>
              <div className="space-y-2">
                {personalData.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-zinc-200/60 last:border-0">
                    <span className="font-semibold text-zinc-900">{lang.name}</span>
                    <span className="text-zinc-600">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fitness & Discipline Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-2"
            >
              <div className="flex items-center space-x-2">
                <Dumbbell className="w-4 h-4 text-zinc-700" />
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">{personalData.personalInterest.title}</h4>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                {personalData.personalInterest.description}
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
