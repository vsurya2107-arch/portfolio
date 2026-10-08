import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, ShieldCheck, Sparkles, Code, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  const serviceIcons = [Layout, Code, Server, Database, ShieldCheck, Sparkles];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
            08 // FREELANCE & PRODUCT CAPABILITIES
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-950">
              WHAT I CAN <span className="text-[#FF0033]">BUILD</span>
            </h2>
            <p className="text-zinc-600 font-mono text-xs sm:text-sm mt-2 max-w-xl">
              Turning concepts and requirements into reliable, full-stack digital solutions.
            </p>
          </div>
          
          <div className="bg-white px-4 py-3 rounded-2xl border border-zinc-200 shadow-2xs">
            <p className="text-xs font-mono font-bold text-zinc-900">AVAILABLE FOR FREELANCE & PROJECTS</p>
            <p className="text-[11px] text-zinc-500">MERN Stack • Full Stack Web • APIs</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const IconComp = serviceIcons[idx % serviceIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-[#FF0033] transition-all duration-300 group shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 group-hover:bg-[#FF0033] text-zinc-900 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 group-hover:text-[#FF0033] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>SERVICE 0{idx + 1}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#FF0033]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
