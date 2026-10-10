import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Eye, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { certificationsData, technicalActivitiesData } from '../data/portfolioData';

export default function CertificationsAndActivities() {
  const [singleCertModal, setSingleCertModal] = useState(null);
  const [isMongoModalOpen, setIsMongoModalOpen] = useState(false);
  const [mongoCertIndex, setMongoCertIndex] = useState(0);

  const mongoCertData = certificationsData.find(c => c.type === 'multi');

  // Keyboard navigation for modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isMongoModalOpen && mongoCertData) {
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
    <section className="py-20 sm:py-28 bg-white text-zinc-950 border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="text-[#FF0033] font-mono font-bold text-xs select-none">//</span>
                <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  VERIFIED CREDENTIALS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950">
                CERTIFICATIONS
              </h2>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => {
                if (cert.type === 'single') {
                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200/80 flex flex-col sm:flex-row gap-5 items-start justify-between"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-[#FF0033] uppercase">
                            {cert.issuer}
                          </span>
                        </div>

                        <h3 className="text-lg font-extrabold text-zinc-950">
                          {cert.title}
                        </h3>

                        {cert.collaboration && (
                          <p className="text-xs text-zinc-500 font-medium">
                            {cert.collaboration}
                          </p>
                        )}

                        <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                          {cert.description}
                        </p>

                        <div className="pt-2">
                          <button
                            onClick={() => setSingleCertModal(cert)}
                            data-cursor="VIEW"
                            className="inline-flex items-center space-x-2 bg-white text-zinc-900 hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-200/80 transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </button>
                        </div>
                      </div>

                      {/* Thumbnail Preview */}
                      <div 
                        onClick={() => setSingleCertModal(cert)}
                        className="w-full sm:w-32 h-22 bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200/80 relative cursor-pointer shrink-0 group"
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </motion.div>
                  );
                }

                // Multi-certificate card (MongoDB - 5 Certificates)
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200/80 flex flex-col sm:flex-row gap-5 items-start justify-between"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-[#FF0033] uppercase">
                          {cert.issuer}
                        </span>
                        <span className="text-[11px] font-semibold text-zinc-500">
                          (5 Credentials)
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-zinc-950">
                        {cert.title}
                      </h3>

                      <p className="text-xs text-zinc-500 font-medium">
                        {cert.collaboration}
                      </p>

                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                        {cert.description}
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={() => openMongoModal(0)}
                          data-cursor="VIEW"
                          className="inline-flex items-center space-x-2 bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>View All 5 Certificates</span>
                        </button>
                      </div>
                    </div>

                    {/* Thumbnail Preview */}
                    <div 
                      onClick={() => openMongoModal(0)}
                      className="w-full sm:w-32 h-22 bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200/80 relative cursor-pointer shrink-0 group"
                    >
                      <img 
                        src={cert.representativeImage} 
                        alt="MongoDB Certification Collection" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Technical Activities */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="text-[#FF0033] font-mono font-bold text-xs select-none">//</span>
                <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  ACTIVE ENGAGEMENT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950">
                TECHNICAL ACTIVITIES
              </h2>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-7 border border-zinc-200/80 space-y-5">
              <div className="space-y-2.5">
                {technicalActivitiesData.activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-zinc-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#FF0033] shrink-0" />
                    <span className="text-xs font-semibold text-zinc-800">{activity}</span>
                  </div>
                ))}
              </div>

              {/* Skills Growth Outcome Tags */}
              <div className="pt-3 border-t border-zinc-200/60">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">
                  Skills Enhanced
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {technicalActivitiesData.outcomes.map((outcome, idx) => (
                    <span key={idx} className="text-xs font-medium bg-white border border-zinc-200/80 text-zinc-700 px-3 py-1 rounded-lg">
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
            className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSingleCertModal(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full border border-zinc-200 shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-4 sm:p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
                <div>
                  <span className="text-xs font-bold text-[#FF0033] uppercase">
                    Issuer: {singleCertModal.issuer}
                  </span>
                  <h3 className="text-base font-extrabold text-zinc-950 mt-0.5">
                    {singleCertModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSingleCertModal(null)}
                  className="p-2 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close Certificate Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 bg-zinc-100 flex items-center justify-center overflow-auto flex-1 min-h-[350px]">
                <img 
                  src={singleCertModal.image} 
                  alt={singleCertModal.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl border border-zinc-200 shadow-sm"
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
            className="fixed inset-0 z-50 bg-zinc-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsMongoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full border border-zinc-200 shadow-xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              <div className="p-4 sm:p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
                <div>
                  <span className="text-xs font-bold text-[#FF0033] uppercase">
                    MongoDB Certificate {mongoCertIndex + 1} of 5
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-zinc-950 mt-0.5">
                    {mongoCertData.certificates[mongoCertIndex].title}
                  </h3>
                </div>

                <button
                  onClick={() => setIsMongoModalOpen(false)}
                  className="p-2 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close MongoDB Certificate Viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative p-4 sm:p-6 bg-zinc-900 flex items-center justify-center flex-1 min-h-[360px] overflow-hidden">
                <button
                  onClick={() => setMongoCertIndex((prev) => (prev === 0 ? mongoCertData.certificates.length - 1 : prev - 1))}
                  className="absolute left-4 z-10 p-2.5 bg-zinc-950/80 hover:bg-[#FF0033] text-white rounded-full transition-colors cursor-pointer border border-zinc-700"
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <motion.img 
                  key={mongoCertIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  src={mongoCertData.certificates[mongoCertIndex].image} 
                  alt={mongoCertData.certificates[mongoCertIndex].title}
                  className="max-h-[55vh] max-w-full w-auto object-contain rounded-xl border border-zinc-700 shadow-xl"
                />

                <button
                  onClick={() => setMongoCertIndex((prev) => (prev === mongoCertData.certificates.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 z-10 p-2.5 bg-zinc-950/80 hover:bg-[#FF0033] text-white rounded-full transition-colors cursor-pointer border border-zinc-700"
                  aria-label="Next Certificate"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 border-t border-zinc-200 bg-zinc-50 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-700">
                    5 MongoDB Certificates Collection:
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setMongoCertIndex((prev) => (prev === 0 ? mongoCertData.certificates.length - 1 : prev - 1))}
                      className="px-2.5 py-1 bg-white hover:bg-zinc-200 border border-zinc-200 rounded-lg text-zinc-800 font-semibold transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev</span>
                    </button>
                    <span className="font-bold text-[#FF0033]">
                      {mongoCertIndex + 1} / 5
                    </span>
                    <button
                      onClick={() => setMongoCertIndex((prev) => (prev === mongoCertData.certificates.length - 1 ? 0 : prev + 1))}
                      className="px-2.5 py-1 bg-white hover:bg-zinc-200 border border-zinc-200 rounded-lg text-zinc-800 font-semibold transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {mongoCertData.certificates.map((cert, index) => {
                    const isActive = index === mongoCertIndex;

                    return (
                      <button
                        key={cert.id}
                        onClick={() => setMongoCertIndex(index)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all cursor-pointer aspect-[4/3] bg-zinc-200 ${
                          isActive
                            ? 'border-[#FF0033] ring-2 ring-[#FF0033]/30 shadow-sm'
                            : 'border-zinc-200 hover:border-zinc-400 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-x-0 bottom-0 p-1 text-[9px] font-semibold truncate ${
                          isActive ? 'bg-[#FF0033] text-white' : 'bg-zinc-950/80 text-zinc-200'
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
