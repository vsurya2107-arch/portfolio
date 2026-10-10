import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function ResumeSection() {
  const handleDownload = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF0033', '#18181b', '#ffffff']
      });
    } catch {
      // Fallback if confetti fails
    }

    window.open(personalData.assets.resumePdf, '_blank');
  };

  return (
    <section id="resume" className="py-20 sm:py-28 bg-white text-zinc-950 border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-50 rounded-2xl p-6 sm:p-12 border border-zinc-200/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Career Objective & Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center space-x-2.5">
                <span className="text-[#FF0033] font-mono font-bold text-xs select-none">//</span>
                <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  CURRICULUM VITAE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950">
                MY <span className="text-[#FF0033]">RESUME</span>
              </h2>

              {/* Career Objective Box */}
              <div className="p-5 bg-white rounded-xl border border-zinc-200/80 space-y-2">
                <span className="text-xs font-semibold text-[#FF0033] uppercase tracking-wider block">
                  Career Objective
                </span>
                <p className="text-sm text-zinc-700 leading-relaxed font-normal italic">
                  "{personalData.objective}"
                </p>
              </div>

              {/* Key Highlights */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white text-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-200/80 flex items-center space-x-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033]" />
                  <span>B.Tech IT — Suguna College of Engineering</span>
                </span>
                <span className="bg-white text-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-200/80 flex items-center space-x-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033]" />
                  <span>Full-Stack & AI Developer</span>
                </span>
                <span className="bg-white text-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-200/80 flex items-center space-x-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033]" />
                  <span>21 Junior Students Mentored</span>
                </span>
              </div>

            </div>

            {/* Right Column: Download CTA */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3 pt-2 lg:pt-0">
              <button
                onClick={handleDownload}
                data-cursor="DOWNLOAD"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FF0033] hover:bg-[#D9002B] text-white px-7 py-4 rounded-xl font-semibold text-sm transition-colors shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
