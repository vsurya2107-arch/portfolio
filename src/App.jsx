import React, { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
import Mentoring from './components/Mentoring';
import CertificationsAndActivities from './components/CertificationsAndActivities';
import Services from './components/Services';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Section Observer for active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-[#FF0033] selection:text-white relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Portfolio Sections */}
      <main>
        {/* 01. HERO SECTION */}
        <Hero />

        {/* 02. WHO I AM / ABOUT SECTION */}
        <About />

        {/* 03. TECHNICAL SKILLS EXPERIENCE */}
        <Skills />

        {/* 04. SELECTED MAIN PROJECTS SHOWCASE */}
        <FeaturedProjects />

        {/* 05. SECONDARY PROJECTS ARCHIVE */}
        <OtherProjects />

        {/* 06. LEADERSHIP & MENTORING EXPERIENCE */}
        <Mentoring />

        {/* 07. CERTIFICATIONS & TECHNICAL ACTIVITIES */}
        <CertificationsAndActivities />

        {/* 08. TECHNICAL CAPABILITIES / SERVICES */}
        <Services />

        {/* 09. RESUME SECTION */}
        <ResumeSection />

        {/* 10. CONTACT SECTION */}
        <Contact />

        {/* 11. FOOTER */}
        <Footer />
      </main>
    </div>
  );
}
