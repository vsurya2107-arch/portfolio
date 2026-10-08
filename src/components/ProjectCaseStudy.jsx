import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle,
  Lightbulb,
  Wrench,
  FileCode2
} from 'lucide-react';

export default function ProjectCaseStudy({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;
  const projectTitleUpper = project.title ? project.title.toUpperCase() : "PROJECT";
  
  // Custom button labels
  const openLabel = `EXPLORE ${projectTitleUpper} CASE STUDY`;
  const hideLabel = `HIDE ${projectTitleUpper} CASE STUDY`;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseFromBottom = () => {
    setIsOpen(false);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div ref={containerRef} className="mt-6 border-t border-zinc-200/80 pt-5">
      {/* Top Case Study Toggle Control Button */}
      <button
        onClick={handleToggle}
        data-cursor="GO"
        className="w-full flex items-center justify-between p-4 sm:p-4.5 bg-zinc-950 text-white hover:bg-[#FF0033] rounded-2xl font-mono text-xs sm:text-xs font-bold tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3">
          <div className="p-1.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
            <FileCode2 className="w-4 h-4 text-[#FF0033] group-hover:text-white transition-colors" />
          </div>
          <span>{isOpen ? hideLabel : openLabel}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono opacity-80 hidden sm:inline">
            {isOpen ? "HIDE DETAILS" : "TECHNICAL CASE STUDY"}
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-[#FF0033] group-hover:text-white transition-colors" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#FF0033] group-hover:text-white transition-colors" />
          )}
        </div>
      </button>

      {/* Expandable Case Study Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-5"
          >
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-5 sm:p-8 space-y-8 shadow-xs relative">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF0033]" />
                  <span className="text-xs font-mono font-extrabold text-[#FF0033] uppercase">
                    {caseStudy.badgeLabel || `TECHNICAL CASE STUDY // ${projectTitleUpper}`}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 font-bold bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {caseStudy.badgeTag || project.category || "FULL-STACK"}
                </span>
              </div>

              {/* 1 & 2. Problem Statement & Solution */}
              {(caseStudy.problemStatement || caseStudy.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {caseStudy.problemStatement && (
                    <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-2">
                      <div className="flex items-center space-x-2 text-[#FF0033]">
                        <AlertTriangle className="w-4 h-4" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider">1. PROBLEM STATEMENT</h4>
                      </div>
                      <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                        {caseStudy.problemStatement}
                      </p>
                    </div>
                  )}

                  {caseStudy.solution && (
                    <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <Lightbulb className="w-4 h-4" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider">2. SOLUTION ARCHITECTURE</h4>
                      </div>
                      <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                        {caseStudy.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 3. My Role / Contribution */}
              {caseStudy.myRole && (
                <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-1.5">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Wrench className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider">3. MY ROLE & VERIFIED CONTRIBUTION</h4>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                    {caseStudy.myRole}
                  </p>
                </div>
              )}

              {/* Dynamic Project Architecture & Workflow Sections */}
              {caseStudy.sections && caseStudy.sections.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3">
                    SYSTEM & TECHNICAL ARCHITECTURE
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.sections.map((sec, idx) => (
                      <div key={idx} className="p-4.5 bg-white rounded-xl border border-zinc-200 space-y-1.5">
                        <div className="flex items-center space-x-2 text-zinc-950">
                          <Layers className="w-3.5 h-3.5 text-[#FF0033]" />
                          <span className="text-xs font-mono font-bold">{sec.label}</span>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed">{sec.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Major System Capabilities / Features */}
              {caseStudy.majorFeatures && caseStudy.majorFeatures.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3">
                    VERIFIED SYSTEM CAPABILITIES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {caseStudy.majorFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 p-3 bg-white rounded-xl border border-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-[#FF0033] shrink-0" />
                        <span className="text-xs font-mono font-semibold text-zinc-900">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Challenges & Solutions */}
              {(caseStudy.technicalChallenges || caseStudy.solutionsImplemented) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {caseStudy.technicalChallenges && (
                    <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-1.5">
                      <h4 className="text-xs font-mono font-bold text-zinc-950 uppercase">TECHNICAL CHALLENGES</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">{caseStudy.technicalChallenges}</p>
                    </div>
                  )}

                  {caseStudy.solutionsImplemented && (
                    <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-1.5">
                      <h4 className="text-xs font-mono font-bold text-zinc-950 uppercase">SOLUTIONS IMPLEMENTED</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">{caseStudy.solutionsImplemented}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Engineering Decisions & Future Roadmap */}
              {(caseStudy.engineeringDecisions || caseStudy.futureImprovements) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-zinc-200">
                  {caseStudy.engineeringDecisions && (
                    <div className="space-y-1">
                      <h4 className="text-[11px] font-mono font-bold text-zinc-400 uppercase">ENGINEERING DECISIONS</h4>
                      <p className="text-xs text-zinc-700 leading-relaxed">{caseStudy.engineeringDecisions}</p>
                    </div>
                  )}

                  {caseStudy.futureImprovements && (
                    <div className="space-y-1">
                      <h4 className="text-[11px] font-mono font-bold text-zinc-400 uppercase">FUTURE ROADMAP</h4>
                      <p className="text-xs text-zinc-700 leading-relaxed">{caseStudy.futureImprovements}</p>
                    </div>
                  )}
                </div>
              )}

              {/* End-of-Content Collapse Control */}
              <div className="pt-4 border-t border-zinc-200 flex justify-center">
                <button
                  onClick={handleCloseFromBottom}
                  data-cursor="GO"
                  className="inline-flex items-center space-x-2 bg-zinc-950 hover:bg-[#FF0033] text-white px-6 py-3 rounded-2xl font-mono text-xs font-bold tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
                >
                  <span>{hideLabel}</span>
                  <ChevronUp className="w-4 h-4 text-[#FF0033] group-hover:text-white transition-colors" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
