import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle,
  Lightbulb,
  Wrench,
  FileCode2,
  Database,
  ShieldCheck,
  Cpu,
  Workflow
} from 'lucide-react';

export default function ProjectCaseStudy({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;
  const projectTitleUpper = project.title ? project.title.toUpperCase() : "PROJECT";
  
  const openLabel = `Explore ${project.title} Case Study`;
  const hideLabel = `Hide ${project.title} Case Study`;

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
    <div ref={containerRef} className="mt-8 border-t border-zinc-200/80 pt-4">
      {/* Case Study Drawer Toggle Button */}
      <button
        onClick={handleToggle}
        data-cursor="GO"
        className="w-full flex items-center justify-between p-4 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-2.5">
          <FileCode2 className="w-4 h-4 text-[#FF0033]" />
          <span>{isOpen ? hideLabel : openLabel}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-zinc-400 hidden sm:inline">
            {isOpen ? "Collapse" : "Technical Breakdown"}
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-zinc-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          )}
        </div>
      </button>

      {/* Expandable Technical Details Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-4"
          >
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-5 sm:p-7 space-y-6 text-zinc-900">
              
              {/* Header Tagline */}
              <div className="flex items-center justify-between border-b border-zinc-200/80 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#FF0033] font-mono font-bold text-xs select-none">//</span>
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    {caseStudy.badgeLabel || `Technical Case Study // ${projectTitleUpper}`}
                  </span>
                </div>
                <span className="text-xs text-zinc-600 bg-white px-2.5 py-1 rounded-md border border-zinc-200/80 font-medium">
                  {caseStudy.badgeTag || project.category || "Architecture"}
                </span>
              </div>

              {/* Problem & Solution Architecture */}
              {(caseStudy.problemStatement || caseStudy.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.problemStatement && (
                    <div className="p-4 bg-white rounded-xl border border-zinc-200/80 space-y-1.5">
                      <div className="flex items-center space-x-2 text-zinc-900">
                        <AlertTriangle className="w-4 h-4 text-[#FF0033]" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">Problem Statement</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {caseStudy.problemStatement}
                      </p>
                    </div>
                  )}

                  {caseStudy.solution && (
                    <div className="p-4 bg-white rounded-xl border border-zinc-200/80 space-y-1.5">
                      <div className="flex items-center space-x-2 text-zinc-900">
                        <Lightbulb className="w-4 h-4 text-emerald-600" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">Solution Architecture</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {caseStudy.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* My Technical Contributions */}
              {caseStudy.myContribution && caseStudy.myContribution.length > 0 && (
                <div className="p-5 bg-white rounded-xl border border-zinc-200/80 space-y-3">
                  <div className="flex items-center space-x-2 text-zinc-950 border-b border-zinc-100 pb-2">
                    <Wrench className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">Technical Contributions</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {caseStudy.myContribution.map((item, idx) => (
                      <div key={idx} className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/60 space-y-1">
                        <span className="text-xs font-bold text-zinc-950 block">
                          {item.area}
                        </span>
                        <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Flow */}
              {caseStudy.architecture && caseStudy.architecture.flow && (
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Layers className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">Architecture Flow</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {caseStudy.architecture.flow.map((node, idx) => (
                      <div key={idx} className="p-3.5 bg-white rounded-xl border border-zinc-200/80 space-y-1">
                        <span className="text-[11px] font-bold text-[#FF0033] block">
                          STEP 0{idx + 1}
                        </span>
                        <h5 className="text-xs font-bold text-zinc-950">{node.step}</h5>
                        <p className="text-xs text-zinc-600 leading-relaxed">{node.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Database Schema Layer */}
              {caseStudy.database && (
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Database className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">Database Architecture</h4>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-zinc-200/80 space-y-3">
                    <div className="flex flex-wrap gap-4 text-xs text-zinc-700 pb-2 border-b border-zinc-100">
                      <div><strong className="text-zinc-950 font-bold">Database:</strong> {caseStudy.database.technology}</div>
                      <div><strong className="text-zinc-950 font-bold">Data Layer:</strong> {caseStudy.database.ormLayer}</div>
                    </div>
                    {caseStudy.database.models && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {caseStudy.database.models.map((mod, idx) => (
                          <div key={idx} className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/60 space-y-0.5">
                            <span className="text-xs font-bold text-zinc-950 block">{mod.name} Collection</span>
                            <p className="text-xs text-zinc-600 font-normal">{mod.fields}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* AI Integration */}
              {caseStudy.aiIntegration && (
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Cpu className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">AI Feature Integration</h4>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-zinc-200/80 space-y-2">
                    <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">{caseStudy.aiIntegration.purpose}</p>
                    <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/60 text-xs text-zinc-600 leading-relaxed font-normal">
                      <span className="font-semibold text-zinc-950 block mb-0.5">Pipeline:</span>
                      {caseStudy.aiIntegration.flow}
                    </div>
                  </div>
                </div>
              )}

              {/* Challenges & Engineering Decisions */}
              {caseStudy.engineeringDecisionsList && caseStudy.engineeringDecisionsList.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Engineering Challenges & Decisions
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.engineeringDecisionsList.map((item, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-xl border border-zinc-200/80 space-y-2">
                        <div className="flex items-start space-x-2 text-zinc-950">
                          <AlertTriangle className="w-4 h-4 text-[#FF0033] shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm font-bold text-zinc-950">{item.challenge}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-zinc-100 text-xs">
                          <div className="p-2.5 bg-zinc-50 rounded-lg border border-zinc-200/60">
                            <span className="text-[11px] text-zinc-500 font-bold block mb-0.5">Decision</span>
                            <span className="text-zinc-900 font-medium">{item.decision}</span>
                          </div>
                          <div className="p-2.5 bg-zinc-50 rounded-lg border border-zinc-200/60">
                            <span className="text-[11px] text-zinc-500 font-bold block mb-0.5">Implementation</span>
                            <span className="text-zinc-700">{item.implementation}</span>
                          </div>
                          <div className="p-2.5 bg-zinc-50 rounded-lg border border-zinc-200/60">
                            <span className="text-[11px] text-zinc-500 font-bold block mb-0.5">Result</span>
                            <span className="text-zinc-900 font-semibold">{item.result}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Professional Confidentiality Notice */}
              {caseStudy.confidentialityNotice && (
                <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200/80 flex items-start space-x-2.5 text-xs text-zinc-500 font-normal">
                  <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{caseStudy.confidentialityNotice}</p>
                </div>
              )}

              {/* Collapse Drawer Control */}
              <div className="pt-2 border-t border-zinc-200/80 flex justify-center">
                <button
                  onClick={handleCloseFromBottom}
                  data-cursor="GO"
                  className="inline-flex items-center space-x-2 bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>{hideLabel}</span>
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
