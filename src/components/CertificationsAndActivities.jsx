import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, Eye, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { certificationsData, technicalActivitiesData } from '../data/portfolioData';

export default function CertificationsAndActivities() {
  const [singleCertModal, setSingleCertModal] = useState(null);
  const [isMongoModalOpen, setIsMongoModalOpen] = useState(false);
  const [mongoCertIndex, setMongoCertIndex] = useState(0);

  const mongoCertData = certificationsData.find(c => c.type === 'multi');

  // Keyboard navigation for modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isMongoModalOpen) {
        if (e.key === 'Escape') setIsMongoModalOpen(false);
        if (e.key === 'ArrowLeft') {
          setMongoCertIndex((prev) => (prev === 0 ? mongoCertData.certificates.length - 1 : prev - 1));
        }
        if (e.key === 'ArrowRight') {
          setMongoCertIndex((prev) => (prev === mongoCertData.certificates.length - 1 ? 0 : prev + 1));
        }
      } else if (singleCertModal) {
        if (e.key === 'Escape') setSingleCertModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMongoModalOpen, singleCertModal, mongoCertData]);

  const openMongoModal = (index = 0) => {
    setMongoCertIndex(index);
    setIsMongoModalOpen(true);
  };

  return (
    <section className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-8 h-[2px] bg-[#FF0033]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
                  06 // VERIFIED CREDENTIALS
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950">
                CERTIFICATIONS
              </h2>
            </div>

            <div className="space-y-6">
              {certificationsData.map((cert) => {
                if (cert.type === 'single') {
                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-[#FF0033] transition-all relative overflow-hidden group shadow-2xs flex flex-col sm:flex-row gap-6 items-start justify-between"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono font-bold bg-[#FF0033]/10 text-[#FF0033] px-2.5 py-0.5 rounded uppercase">
                            ISSUER: {cert.issuer}
                          </span>
                        </div>

                        <h3 className="text-xl font-extrabold text-zinc-900 group-hover:text-[#FF0033] transition-colors">
                          {cert.title}
                        </h3>

                        {cert.collaboration && (
                          <p className="text-xs font-mono text-zinc-500 font-medium">
                            {cert.collaboration}
                          </p>
                        )}

                        <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                          {cert.description}
                        </p>

                        <div className="pt-3">
                          <button
                            onClick={() => setSingleCertModal(cert)}
                            data-cursor="VIEW"
                            className="inline-flex items-center space-x-2 bg-white hover:bg-zinc-950 hover:text-white text-zinc-900 px-4 py-2 rounded-xl text-xs font-mono font-bold border border-zinc-200 shadow-2xs transition-all cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#FF0033]" />
                            <span>VIEW CERTIFICATE</span>
                          </button>
                        </div>
                      </div>

                      {/* Thumbnail Preview */}
                      <div 
                        onClick={() => setSingleCertModal(cert)}
                        className="w-full sm:w-36 h-24 bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200 relative group/thumb cursor-pointer shrink-0 shadow-2xs"
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Multi-certificate card (MongoDB - 5 Certificates)
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-[#FF0033] transition-all relative overflow-hidden group shadow-2xs flex flex-col sm:flex-row gap-6 items-start justify-between"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold bg-[#FF0033]/10 text-[#FF0033] px-2.5 py-0.5 rounded uppercase">
                          ISSUER: {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono font-bold bg-zinc-950 text-white px-2.5 py-0.5 rounded flex items-center space-x-1">
                          <Layers className="w-3 h-3 text-[#FF0033]" />
                          <span>5 CERTIFICATES</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-zinc-900 group-hover:text-[#FF0033] transition-colors">
                        {cert.title}
                      </h3>

                      <p className="text-xs font-mono text-zinc-500 font-medium">
                        {cert.collaboration}
                      </p>

                      <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                        {cert.description}
                      </p>

                      <div className="pt-3">
                        <button
                          onClick={() => openMongoModal(0)}
                          data-cursor="VIEW"
                          className="inline-flex items-center space-x-2 bg-[#FF0033] hover:bg-[#D9002B] text-white px-4 py-2.5 rounded-xl text-xs font-mono font-bold shadow-md shadow-[#FF0033]/20 transition-all cursor-pointer"
                        >
                          <Layers className="w-4 h-4 text-white" />
                          <span>VIEW ALL 5 CERTIFICATES</span>
                        </button>
                      </div>
                    </div>

                    {/* Representative Thumbnail Preview */}
                    <div 
                      onClick={() => openMongoModal(0)}
                      className="w-full sm:w-36 h-28 bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200 relative group/thumb cursor-pointer shrink-0 shadow-2xs"
                    >
                      <img 
                        src={cert.representativeImage} 
                        alt="MongoDB Certification Collection" 
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-zinc-950/60 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center space-y-1">
                        <Layers className="w-5 h-5 text-[#FF0033]" />
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                          5 CERTIFICATES
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Technical Activities */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-8 h-[2px] bg-[#FF0033]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
                  07 // ACTIVE ENGAGEMENT
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950">
                TECHNICAL ACTIVITIES
              </h2>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-6 sm:p-8 border border-zinc-200 space-y-6 shadow-sm">
              <p className="text-xs font-mono text-zinc-600 leading-relaxed">
                Active participation in academic and technology events enhancing technical domain knowledge and collaborative capabilities.
              </p>

              <div className="space-y-3">
                {technicalActivitiesData.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3.5 bg-white rounded-xl border border-zinc-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#FF0033] shrink-0" />
                    <span className="text-xs font-mono font-semibold text-zinc-800">{activity}</span>
                  </div>
                ))}
              </div>

              {/* Skills Growth Outcome Pills */}
              <div className="pt-4 border-t border-zinc-200">
                <p className="text-[10px] font-mono font-bold text-[#FF0033] uppercase tracking-wider mb-3">
                  CORE SKILLS ENHANCED
                </p>
                <div className="flex flex-wrap gap-2">
                  {technicalActivitiesData.outcomes.map((outcome, idx) => (
                    <span key={idx} className="text-[11px] font-mono font-medium bg-white border border-zinc-200 text-zinc-700 px-3 py-1 rounded-full shadow-2xs">
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SINGLE CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {singleCertModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSingleCertModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full border border-zinc-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
                <div>
                  <span className="text-[10px] font-mono font-bold bg-[#FF0033]/10 text-[#FF0033] px-2.5 py-0.5 rounded uppercase">
                    ISSUER: {singleCertModal.issuer}
                  </span>
                  <h3 className="text-lg font-black text-zinc-950 uppercase mt-1">
                    {singleCertModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSingleCertModal(null)}
                  className="p-2 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200 rounded-full transition-colors cursor-pointer"
                  aria-label="Close Certificate Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Preview */}
              <div className="p-4 sm:p-6 bg-zinc-100 flex items-center justify-center overflow-auto flex-1 min-h-[350px]">
                <img 
                  src={singleCertModal.image} 
                  alt={singleCertModal.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl border border-zinc-200 shadow-md"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MONGODB 5-CERTIFICATE VIEWER MODAL */}
      <AnimatePresence>
        {isMongoModalOpen && mongoCertData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsMongoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full border border-zinc-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold bg-[#FF0033] text-white px-2.5 py-0.5 rounded uppercase">
                      MONGODB CREDENTIAL {mongoCertIndex + 1} OF 5
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                      {mongoCertIndex + 1} / 5
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 uppercase">
                    {mongoCertData.certificates[mongoCertIndex].title}
                  </h3>
                </div>

                <button
                  onClick={() => setIsMongoModalOpen(false)}
                  className="p-2 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200 rounded-full transition-colors cursor-pointer"
                  aria-label="Close MongoDB Certificate Viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Display with Next/Prev Arrow Buttons */}
              <div className="relative p-4 sm:p-6 bg-zinc-900 flex items-center justify-center flex-1 min-h-[380px] overflow-hidden">
                {/* Previous Button */}
                <button
                  onClick={() => setMongoCertIndex((prev) => (prev === 0 ? mongoCertData.certificates.length - 1 : prev - 1))}
                  className="absolute left-4 z-10 p-3 bg-zinc-950/80 hover:bg-[#FF0033] text-white rounded-full transition-colors shadow-lg cursor-pointer border border-zinc-700 hover:border-[#FF0033]"
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Active Image */}
                <motion.img 
                  key={mongoCertIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  src={mongoCertData.certificates[mongoCertIndex].image} 
                  alt={mongoCertData.certificates[mongoCertIndex].title}
                  className="max-h-[55vh] max-w-full w-auto object-contain rounded-xl border border-zinc-700 shadow-2xl"
                />

                {/* Next Button */}
                <button
                  onClick={() => setMongoCertIndex((prev) => (prev === mongoCertData.certificates.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 z-10 p-3 bg-zinc-950/80 hover:bg-[#FF0033] text-white rounded-full transition-colors shadow-lg cursor-pointer border border-zinc-700 hover:border-[#FF0033]"
                  aria-label="Next Certificate"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails Row & Navigation Controls Footer */}
              <div className="p-4 sm:p-6 border-t border-zinc-200 bg-zinc-50 space-y-4">
                
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-zinc-700">
                    CLICK THUMBNAIL TO VIEW (5 TOTAL):
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setMongoCertIndex((prev) => (prev === 0 ? mongoCertData.certificates.length - 1 : prev - 1))}
                      className="px-3 py-1 bg-white hover:bg-zinc-200 border border-zinc-200 rounded-lg text-zinc-800 font-bold transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>PREV</span>
                    </button>
                    <span className="font-bold text-[#FF0033]">
                      {mongoCertIndex + 1} / 5
                    </span>
                    <button
                      onClick={() => setMongoCertIndex((prev) => (prev === mongoCertData.certificates.length - 1 ? 0 : prev + 1))}
                      className="px-3 py-1 bg-white hover:bg-zinc-200 border border-zinc-200 rounded-lg text-zinc-800 font-bold transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <span>NEXT</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 5 Thumbnails Grid */}
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {mongoCertData.certificates.map((cert, index) => {
                    const isActive = index === mongoCertIndex;

                    return (
                      <button
                        key={cert.id}
                        onClick={() => setMongoCertIndex(index)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer aspect-[4/3] bg-zinc-200 ${
                          isActive
                            ? 'border-[#FF0033] ring-2 ring-[#FF0033]/30 scale-105 shadow-md'
                            : 'border-zinc-200 hover:border-zinc-400 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-x-0 bottom-0 p-1 text-[9px] font-mono font-bold truncate ${
                          isActive ? 'bg-[#FF0033] text-white' : 'bg-zinc-950/70 text-zinc-200'
                        }`}>
                          {index + 1}. {cert.title.split(' ')[0]}
                        </div>
                      </button>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
