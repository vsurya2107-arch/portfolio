import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectVisual({ project }) {
  const { title, image, category } = project;

  if (image) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200/90 shadow-sm group"
      >
        {/* Browser Frame Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-400">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="text-[11px] text-zinc-500 font-medium truncate max-w-[200px]">
            {title} — Screenshot
          </span>
        </div>

        <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
          <img
            src={image}
            alt={`${title} project preview`}
            className="w-full h-full object-cover object-top select-none transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          />
        </div>
      </motion.div>
    );
  }

  // Restrained summary fallback if image is missing
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <span className="text-xs font-medium text-zinc-400">{category || "Application Build"}</span>
        <span className="text-[11px] text-zinc-500">Project Showcase</span>
      </div>
      <div className="my-auto py-4 text-center space-y-2">
        <h4 className="text-base font-bold text-white">{title}</h4>
        <p className="text-xs text-zinc-400 max-w-xs mx-auto">Full-stack web application showcase.</p>
      </div>
    </div>
  );
}
