import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';
import { mentoringData } from '../data/portfolioData';

export default function Mentoring() {
  return (
    <section id="mentoring" className="py-20 sm:py-28 bg-white border-t border-zinc-200/80 text-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF0033]" />
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            LEADERSHIP & MENTORSHIP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Stat Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-zinc-50 p-8 rounded-2xl border border-zinc-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 text-zinc-700 mb-6">
                <Users className="w-5 h-5 text-[#FF0033]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">PEER LEADERSHIP</span>
              </div>

              <div className="my-4">
                <span className="text-6xl sm:text-7xl font-extrabold text-zinc-950 tracking-tight block leading-none">
                  {mentoringData.mentoredCount}
                </span>
                <p className="text-sm font-bold text-zinc-800 uppercase mt-3 tracking-wide">
                  Junior Students Mentored
                </p>
              </div>

              <p className="text-xs text-zinc-600 mt-4 leading-relaxed font-normal">
                Role: <strong className="text-zinc-900">{mentoringData.role}</strong>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Evidence-Based Technical Contributions */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 uppercase tracking-tight mb-3">
                TECHNICAL <span className="text-[#FF0033]">MENTORSHIP</span>
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal max-w-2xl">
                Serving as a Student Technical Mentor, guiding junior IT students through core web development concepts, code reviews, and software debugging.
              </p>
            </div>

            {/* Structured Points */}
            <div className="space-y-3 pt-2">
              {mentoringData.points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex items-start space-x-3 bg-zinc-50 p-4 rounded-xl border border-zinc-200/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF0033] shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-zinc-800 leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
