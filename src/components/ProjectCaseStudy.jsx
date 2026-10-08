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
    <div ref={containerRef} className="mt-6 border-t border-zinc-200/80 pt-5 font-sans">
      {/* Top Case Study Toggle Control Button */}
      <button
        onClick={handleToggle}
        data-cursor="GO"
        className="w-full flex items-center justify-between p-4 sm:p-4.5 bg-zinc-950 text-white hover:bg-[#FF0033] rounded-2xl font-sans text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3">
          <div className="p-1.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
            <FileCode2 className="w-4 h-4 text-[#FF0033] group-hover:text-white transition-colors" />
          </div>
          <span>{isOpen ? hideLabel : openLabel}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-sans font-semibold text-white/80 hidden sm:inline">
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
            className="overflow-hidden mt-5 font-sans"
          >
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-5 sm:p-8 space-y-8 shadow-xs relative">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF0033]" />
                  <span className="text-xs font-sans font-bold text-[#FF0033] tracking-wide uppercase">
                    {caseStudy.badgeLabel || `TECHNICAL CASE STUDY // ${projectTitleUpper}`}
                  </span>
                </div>
                <span className="text-xs font-sans text-zinc-600 font-semibold bg-white px-3 py-1 rounded-full border border-zinc-200">
                  {caseStudy.badgeTag || project.category || "FULL-STACK"}
                </span>
              </div>

              {/* Problem Statement & Solution Architecture */}
              {(caseStudy.problemStatement || caseStudy.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {caseStudy.problemStatement && (
                    <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-2">
                      <div className="flex items-center space-x-2 text-[#FF0033]">
                        <AlertTriangle className="w-4 h-4" />
                        <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#FF0033]">PROBLEM STATEMENT</h4>
                      </div>
                      <p className="text-sm sm:text-[15px] font-sans text-zinc-700 leading-relaxed font-normal">
                        {caseStudy.problemStatement}
                      </p>
                    </div>
                  )}

                  {caseStudy.solution && (
                    <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <Lightbulb className="w-4 h-4" />
                        <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-emerald-600">SOLUTION ARCHITECTURE</h4>
                      </div>
                      <p className="text-sm sm:text-[15px] font-sans text-zinc-700 leading-relaxed font-normal">
                        {caseStudy.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* MY CONTRIBUTION SECTION */}
              {caseStudy.myContribution && caseStudy.myContribution.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-zinc-200 space-y-4">
                  <div className="flex items-center space-x-2 text-zinc-950 border-b border-zinc-100 pb-3">
                    <Wrench className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-950">MY CONTRIBUTION</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {caseStudy.myContribution.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200/80 space-y-1">
                        <span className="text-xs font-sans font-bold text-[#FF0033] block mb-1">
                          {item.area}
                        </span>
                        <p className="text-sm font-sans text-zinc-700 leading-relaxed font-normal">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legacy My Role fallback */}
              {!caseStudy.myContribution && caseStudy.myRole && (
                <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-1.5">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Wrench className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-950">MY CONTRIBUTION</h4>
                  </div>
                  <p className="text-sm font-sans text-zinc-700 leading-relaxed font-normal">
                    {caseStudy.myRole}
                  </p>
                </div>
              )}

              {/* ARCHITECTURE SECTION */}
              {caseStudy.architecture && caseStudy.architecture.flow && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Layers className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-950">ARCHITECTURE</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {caseStudy.architecture.flow.map((node, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-xl border border-zinc-200 space-y-1 relative">
                        <span className="text-xs font-sans font-extrabold text-[#FF0033] uppercase block">
                          {`STEP 0${idx + 1}`}
                        </span>
                        <h5 className="text-sm font-sans font-bold text-zinc-950">{node.step}</h5>
                        <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed">{node.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* API FLOW SECTION */}
              {caseStudy.apiFlow && caseStudy.apiFlow.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Workflow className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-950">API FLOW</h4>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2 text-center">
                      {caseStudy.apiFlow.map((stepItem, idx) => (
                        <div key={idx} className="p-2.5 bg-zinc-50 rounded-xl border border-zinc-200 flex flex-col justify-between text-left sm:text-center">
                          <span className="text-xs font-sans font-bold text-[#FF0033] block mb-1">
                            {stepItem.step}
                          </span>
                          <span className="text-xs sm:text-sm font-sans font-medium text-zinc-900 leading-snug">
                            {stepItem.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* DATABASE SECTION */}
              {caseStudy.database && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Database className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-950">DATABASE SCHEMA & DATA LAYER</h4>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm font-sans text-zinc-700 pb-3 border-b border-zinc-100">
                      <div><strong className="text-zinc-950 font-bold">DATABASE:</strong> {caseStudy.database.technology}</div>
                      <div><strong className="text-zinc-950 font-bold">ORM/DATA LAYER:</strong> {caseStudy.database.ormLayer}</div>
                    </div>
                    {caseStudy.database.models && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {caseStudy.database.models.map((mod, idx) => (
                          <div key={idx} className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 space-y-1">
                            <span className="text-xs font-sans font-bold text-zinc-950 uppercase block">{mod.name} Collection</span>
                            <p className="text-xs font-sans text-zinc-600 font-medium">{mod.fields}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* AUTHENTICATION SECTION */}
              {caseStudy.authentication && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <ShieldCheck className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-950">AUTHENTICATION & SECURITY</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 bg-white rounded-xl border border-zinc-200 space-y-1">
                      <span className="text-xs font-sans font-semibold text-zinc-500 uppercase block mb-1">AUTH PROVIDER & SCHEME</span>
                      <p className="text-sm font-sans font-bold text-zinc-900">{caseStudy.authentication.provider}</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-zinc-200 space-y-1">
                      <span className="text-xs font-sans font-semibold text-zinc-500 uppercase block mb-1">PROTECTED ROUTES</span>
                      <p className="text-sm font-sans text-zinc-700">{caseStudy.authentication.protectedRoutes}</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-zinc-200 space-y-1">
                      <span className="text-xs font-sans font-semibold text-zinc-500 uppercase block mb-1">USER & SESSION HANDLING</span>
                      <p className="text-sm font-sans text-zinc-700">{caseStudy.authentication.userSession}</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-zinc-200 space-y-1">
                      <span className="text-xs font-sans font-semibold text-zinc-500 uppercase block mb-1">ROLE-BASED ACCESS CONTROL</span>
                      <p className="text-sm font-sans text-zinc-700">{caseStudy.authentication.roleBasedAccess}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* AI INTEGRATION SECTION */}
              {caseStudy.aiIntegration && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-zinc-950">
                    <Cpu className="w-4 h-4 text-[#FF0033]" />
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-zinc-950">AI INTEGRATION</h4>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-3">
                    <div>
                      <span className="text-xs font-sans font-semibold text-zinc-500 uppercase block mb-1">PURPOSE & IMPLEMENTATION</span>
                      <p className="text-sm font-sans text-zinc-800 font-medium leading-relaxed">{caseStudy.aiIntegration.purpose}</p>
                    </div>
                    <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 text-xs sm:text-sm font-sans text-zinc-700 leading-relaxed font-normal">
                      <span className="text-[#FF0033] font-bold block mb-1">DATA FLOW PIPELINE:</span>
                      {caseStudy.aiIntegration.flow}
                    </div>
                  </div>
                </div>
              )}

              {/* CHALLENGES & ENGINEERING DECISIONS SECTION */}
              {caseStudy.engineeringDecisionsList && caseStudy.engineeringDecisionsList.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-sans font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    CHALLENGES & ENGINEERING DECISIONS
                  </h4>
                  <div className="space-y-4">
                    {caseStudy.engineeringDecisionsList.map((item, idx) => (
                      <div key={idx} className="p-5 bg-white rounded-2xl border border-zinc-200 space-y-3">
                        <div className="flex items-start space-x-2 text-[#FF0033]">
                          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-sans font-bold text-[#FF0033] uppercase block mb-0.5">CHALLENGE {idx + 1}</span>
                            <p className="text-sm font-sans font-bold text-zinc-950">{item.challenge}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-zinc-100 font-sans">
                          <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-1">
                            <span className="text-xs text-zinc-500 font-bold block mb-1">→ ENGINEERING DECISION</span>
                            <span className="text-xs sm:text-sm font-sans text-zinc-900 font-semibold leading-relaxed">{item.decision}</span>
                          </div>
                          <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 space-y-1">
                            <span className="text-xs text-zinc-500 font-bold block mb-1">→ IMPLEMENTATION</span>
                            <span className="text-xs sm:text-sm font-sans text-zinc-700 leading-relaxed">{item.implementation}</span>
                          </div>
                          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-1">
                            <span className="text-xs text-emerald-700 font-bold block mb-1">→ RESULT</span>
                            <span className="text-xs sm:text-sm font-sans text-emerald-950 font-bold leading-relaxed">{item.result}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Future Roadmap */}
              {caseStudy.futureImprovements && (
                <div className="pt-2 border-t border-zinc-200 space-y-1">
                  <h4 className="text-xs font-sans font-bold text-zinc-500 uppercase tracking-wider mb-1">FUTURE ROADMAP</h4>
                  <p className="text-sm font-sans text-zinc-700 leading-relaxed">{caseStudy.futureImprovements}</p>
                </div>
              )}

              {/* End-of-Content Collapse Control */}
              <div className="pt-4 border-t border-zinc-200 flex justify-center">
                <button
                  onClick={handleCloseFromBottom}
                  data-cursor="GO"
                  className="inline-flex items-center space-x-2 bg-zinc-950 hover:bg-[#FF0033] text-white px-6 py-3 rounded-2xl font-sans text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
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

