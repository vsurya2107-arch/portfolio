import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

import MagneticButton from './MagneticButton';

export default function ResumeSection() {
  const handleDownload = () => {
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FF0033', '#ffffff', '#111111']
      });
    } catch (e) {
      // Fallback
    }

    // Open actual uploaded PDF resume
    window.open(personalData.assets.resumePdf, '_blank');
  };

  return (
    <section id="resume" className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-50 rounded-3xl p-8 sm:p-14 border border-zinc-200 shadow-sm relative overflow-hidden"
        >
          
          {/* Top Red Bar Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF0033]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Career Objective & Summary */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-[#FF0033]/10 border border-[#FF0033]/30 px-3.5 py-1.5 rounded-full text-[#FF0033] text-xs font-mono font-bold">
                <FileText className="w-4 h-4" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-none">
                MY <span className="text-[#FF0033]">RESUME</span>
              </h2>

              {/* Career Objective Box */}
              <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-2xs space-y-3">
                <p className="text-xs font-mono font-bold text-[#FF0033] uppercase tracking-wider">
                  CAREER OBJECTIVE
                </p>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal italic">
                  "{personalData.objective}"
                </p>
              </div>

              {/* Key Highlights Quick Pills */}
              <div className="flex flex-wrap gap-2.5 text-xs font-mono">
                <span className="bg-white text-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-200 flex items-center space-x-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033]" />
                  <span>B.Tech IT — Suguna College of Eng.</span>
                </span>
                <span className="bg-white text-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-200 flex items-center space-x-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033]" />
                  <span>Full-Stack & AI Developer</span>
                </span>
                <span className="bg-white text-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-200 flex items-center space-x-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0033]" />
                  <span>21 Juniors Mentored</span>
                </span>
              </div>

            </div>

            {/* Right Column: Prominent Download CTA */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-4">
              
              <MagneticButton>
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  data-cursor="DOWNLOAD"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#FF0033] hover:bg-[#E0002D] text-white px-8 py-5 rounded-2xl font-mono text-sm font-extrabold tracking-wider shadow-md shadow-[#FF0033]/20 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </motion.button>
              </MagneticButton>

              <a
                href={personalData.assets.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-zinc-600 hover:text-zinc-950 flex items-center space-x-1 underline underline-offset-4"
              >
                <span>Preview Document in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF0033]" />
              </a>

              <p className="text-[11px] font-mono text-zinc-500">
                Verified File: V_Surya_Resume.pdf
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
