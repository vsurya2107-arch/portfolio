import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Dumbbell, Globe, CheckCircle, Award } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
            01 // BIOGRAPHY & BACKGROUND
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-zinc-950 uppercase tracking-tight mb-12">
          WHO <span className="text-[#FF0033]">I AM</span>
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Large Editorial Summary Statement */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF0033]/5 rounded-bl-full pointer-events-none" />
              
              <p className="text-xl sm:text-2xl font-bold text-zinc-900 leading-relaxed mb-6">
                I am an enthusiastic <span className="text-[#FF0033]">B.Tech Information Technology student</span> at Suguna College of Engineering with a strong passion for software development and modern web technologies.
              </p>

              <div className="space-y-4 text-base text-zinc-700 leading-relaxed font-normal">
                <p>
                  I am proficient in the <strong className="text-zinc-950">MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>, JavaScript, Python, C++, HTML5, and CSS3. My focus is on building robust full-stack applications from scratch, solving real-world challenges, and writing clean, maintainable code.
                </p>
                <p>
                  I am actively seeking an <strong className="text-[#FF0033]">internship opportunity</strong> to apply my technical skills, gain real-world industry experience, and contribute effectively to meaningful digital projects.
                </p>
              </div>

              {/* Status Callout Badge */}
              <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#FF0033]" />
                  <span className="text-xs font-mono font-bold text-zinc-900 uppercase">AUTHENTIC STUDENT PROFILE</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">MERN STACK ENTHUSIAST</span>
              </div>
            </motion.div>

            {/* Areas of Interest Cards */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-4">
                RELEVANT AREAS OF INTEREST
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {personalData.areasOfInterest.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-zinc-200 hover:border-[#FF0033] transition-colors group shadow-2xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FF0033] mb-3 group-hover:scale-150 transition-transform" />
                    <p className="text-xs font-mono font-bold text-zinc-900">{interest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education, Languages, Fitness & Discipline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-white text-zinc-900 rounded-2xl border border-zinc-200 shadow-2xs relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#FF0033] uppercase tracking-widest">
                    ACADEMIC BACKGROUND
                  </span>
                  <h4 className="text-lg font-bold text-zinc-950 mt-1">{personalData.education.degree}</h4>
                </div>
                <div className="p-2.5 bg-[#FF0033]/10 rounded-xl text-[#FF0033] border border-[#FF0033]/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm font-mono text-zinc-600">{personalData.education.institution}</p>
              <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>DEGREE PROGRAM</span>
                <span className="text-zinc-950 font-bold">INFORMATION TECHNOLOGY</span>
              </div>
            </motion.div>

            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-5 h-5 text-[#FF0033]" />
                <h4 className="text-sm font-mono font-bold text-zinc-900 uppercase">LANGUAGES PROFICIENCY</h4>
              </div>
              <div className="space-y-3">
                {personalData.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono pb-2 border-b border-zinc-200 last:border-0 last:pb-0">
                    <span className="font-bold text-zinc-900">{lang.name}</span>
                    <span className="text-zinc-600 bg-white px-2 py-0.5 rounded border border-zinc-200">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Interest & Discipline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Dumbbell className="w-5 h-5 text-[#FF0033]" />
                  <h4 className="text-sm font-mono font-bold text-zinc-900 uppercase">{personalData.personalInterest.title}</h4>
                </div>
                <span className="text-[10px] font-mono bg-[#FF0033]/10 text-[#FF0033] px-2 py-0.5 rounded font-bold">
                  DISCIPLINE & GROWTH
                </span>
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
