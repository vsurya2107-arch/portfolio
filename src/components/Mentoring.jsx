import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Award, CheckCircle2, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { mentoringData } from '../data/portfolioData';

function CounterNumber({ target = 21 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setCount(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function Mentoring() {
  return (
    <section id="mentoring" className="py-24 bg-zinc-50/60 border-y border-zinc-200 text-zinc-950 relative overflow-hidden">
      {/* Subtle Light Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
            05 // LEADERSHIP & MENTORING
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Prominent GIANT 21 Stat Counter Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 relative overflow-hidden shadow-sm text-center flex flex-col justify-center items-center"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#FF0033]/10 border border-[#FF0033]/30 px-3.5 py-1.5 rounded-full text-[#FF0033] text-xs font-mono font-bold mb-6">
              <Award className="w-4 h-4" />
              <span>KEY DIFFERENTIATOR</span>
            </div>

            {/* GIANT NUMBER 21 */}
            <div className="relative my-2">
              <span className="text-8xl sm:text-9xl font-black font-mono text-[#FF0033] leading-none block">
                <CounterNumber target={21} />
              </span>
              <div className="w-20 h-1 bg-[#FF0033] mx-auto my-4 rounded-full" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 uppercase mt-2">
              JUNIOR STUDENTS MENTORED
            </h3>

            <p className="text-xs font-mono text-zinc-600 mt-2">
              Role: <strong className="text-zinc-950">{mentoringData.role}</strong>
            </p>

            <div className="mt-6 pt-6 border-t border-zinc-200 w-full flex items-center justify-around text-xs font-mono text-zinc-600">
              <span>DOMAIN: MERN STACK</span>
              <span className="text-[#FF0033]">•</span>
              <span>PEER LEADERSHIP</span>
            </div>
          </motion.div>

          {/* Right Column: Mentoring Impact Points */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF0033] uppercase tracking-wider">
                STUDENT TECHNICAL MENTOR
              </span>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mt-1 mb-4">
                Empowering the Next Generation of Developers
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Beyond building full-stack applications, I actively mentor junior IT students, guiding them through web development fundamentals, software architecture, and real-world project debugging.
              </p>
            </div>

            {/* Exact Points from prompt */}
            <div className="space-y-4 pt-2">
              {mentoringData.points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start space-x-3.5 bg-white p-4 rounded-xl border border-zinc-200 hover:border-[#FF0033] transition-colors shadow-2xs"
                >
                  <div className="p-1 bg-[#FF0033]/10 rounded text-[#FF0033] mt-0.5 shrink-0 border border-[#FF0033]/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium text-zinc-800 leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-2 text-xs font-mono text-zinc-600">
              <ShieldCheck className="w-4 h-4 text-[#FF0033]" />
              <span>STRENGTHENED LEADERSHIP, COMMUNICATION, AND TEAM COORDINATION SKILLS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
