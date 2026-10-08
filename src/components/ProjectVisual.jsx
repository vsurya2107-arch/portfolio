import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Sprout, 
  ShieldAlert, 
  Bot, 
  ShoppingBag, 
  ExternalLink, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  Eye, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function ProjectVisual({ project }) {
  const { title, subtitle, image, visualType, technologies, category } = project;

  // Render actual image if user replaces project.image in portfolioData.js
  if (image) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-md group"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
      </motion.div>
    );
  }

  // Render Rich Visual Fallback UI based on visualType
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl p-4 sm:p-6 flex flex-col justify-between group">
      
      {/* Background Tech Grid & Glow Accent */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FF0033]/10 rounded-full blur-3xl group-hover:bg-[#FF0033]/20 transition-all duration-700" />

      {/* Top Application Header Bar Mockup */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-zinc-800 font-sans">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#FF0033]" />
          <span className="w-3 h-3 rounded-full bg-zinc-700" />
          <span className="w-3 h-3 rounded-full bg-zinc-800" />
          <span className="text-[11px] font-sans font-bold text-zinc-400 ml-2 tracking-wider">
            {category || "MERN STACK APP"}
          </span>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 text-[10px] font-sans font-semibold text-zinc-300">
          <Activity className="w-3 h-3 text-[#FF0033] animate-pulse" />
          <span>LIVE PLATFORM PREVIEW</span>
        </div>
      </div>

      {/* Center Dynamic Visual Mockup Content */}
      <div className="relative z-10 my-auto py-4 font-sans">
        {visualType === "construction" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#FF0033]/20 rounded-lg text-[#FF0033]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-zinc-400">HOMIQ ENGINE</p>
                  <p className="text-sm font-bold text-white">Homeowner & Engineer Digital Portal</p>
                </div>
              </div>
              <span className="text-[10px] font-sans font-bold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">
                CONNECTED
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80">
                <p className="text-[10px] font-sans font-bold text-zinc-500">PROJECT STAGE</p>
                <p className="text-xs font-bold text-white mt-1">Foundation Plan</p>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80">
                <p className="text-[10px] font-sans font-bold text-zinc-500">CIVIL ENGINEER</p>
                <p className="text-xs font-bold text-white mt-1">Verified Match</p>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80">
                <p className="text-[10px] font-sans font-bold text-zinc-500">STATUS</p>
                <p className="text-xs font-bold text-[#FF0033] mt-1">Active Build</p>
              </div>
            </div>
          </div>
        )}

        {visualType === "agriculture" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <Sprout className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-zinc-400">PASUMAI DIAGNOSTICS</p>
                  <p className="text-sm font-bold text-white">Crop Health & Disease AI Detector</p>
                </div>
              </div>
              <span className="text-[10px] font-sans font-bold bg-[#FF0033]/20 text-[#FF0033] px-2 py-1 rounded border border-[#FF0033]/30">
                AI SCANNER
              </span>
            </div>

            <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Early Disease Detection & Treatment</p>
                  <p className="text-[10px] font-sans font-medium text-zinc-400">Pest control advisories for farmers</p>
                </div>
              </div>
              <span className="text-xs font-sans font-bold text-emerald-400">OPTIMAL</span>
            </div>
          </div>
        )}

        {visualType === "security" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#FF0033]/20 rounded-lg text-[#FF0033]">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-zinc-400">MULE ACCOUNT ENGINE</p>
                  <p className="text-sm font-bold text-white">Fraud Prevention & Behavioral Rule Guard</p>
                </div>
              </div>
              <span className="text-[10px] font-sans bg-[#FF0033] text-white px-2 py-1 rounded font-bold shadow-[0_0_10px_#FF0033]">
                PROTECTED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                <p className="text-[10px] font-sans font-bold text-zinc-500">BEHAVIORAL PATTERN</p>
                <p className="text-xs font-bold text-white mt-1">Rule Engine Monitoring</p>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                <p className="text-[10px] font-sans font-bold text-zinc-500">RISK DETECTION</p>
                <p className="text-xs font-bold text-[#FF0033] mt-1">Multi-Account Lock</p>
              </div>
            </div>
          </div>
        )}

        {visualType === "ai-gesture" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-blue-500/20 rounded-lg text-blue-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-zinc-400">REAL-TIME TRANSLATOR</p>
                  <p className="text-sm font-bold text-white">AI Sign Language Gesture Engine</p>
                </div>
              </div>
              <span className="text-[10px] font-sans font-bold bg-blue-500/20 text-blue-400 px-2 py-1 rounded border border-blue-500/30">
                VISION ML
              </span>
            </div>

            <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#FF0033]" />
                <span className="text-xs font-sans text-zinc-300">Gesture Stream to Speech Output</span>
              </div>
              <span className="text-xs font-sans text-white font-bold">READY</span>
            </div>
          </div>
        )}

        {visualType === "ecommerce" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#FF0033]/20 rounded-lg text-[#FF0033]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-zinc-400">FULL-STACK STORE</p>
                  <p className="text-sm font-bold text-white">Product Browsing & Checkout System</p>
                </div>
              </div>
              <span className="text-[10px] font-sans font-bold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">
                SECURE AUTH
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                <p className="text-[10px] font-sans font-bold text-zinc-500">CHECKOUT FLOW</p>
                <p className="text-xs font-bold text-white mt-1">Cart & Order Pipeline</p>
              </div>
              <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                <p className="text-[10px] font-sans font-bold text-zinc-500">BACKEND DATABASE</p>
                <p className="text-xs font-bold text-emerald-400 mt-1">MongoDB Store</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
