import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, ShieldCheck, Sparkles, Code } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  const serviceIcons = [Layout, Code, Server, Database, ShieldCheck, Sparkles];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-zinc-200/80 text-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FF0033]" />
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            TECHNICAL CAPABILITIES
          </span>
        </div>

        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950">
            WHAT I CAN <span className="text-[#FF0033]">BUILD</span>
          </h2>
          <p className="text-zinc-600 text-sm mt-2 max-w-xl font-normal">
            Full-stack web application development services based on practical project experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const IconComp = serviceIcons[idx % serviceIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 flex items-center justify-center mb-5">
                    <IconComp className="w-5 h-5 text-[#FF0033]" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
