import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowUpRight, CheckCircle, Copy, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!message || message.length < 5) {
      setErrorMessage('Please describe your inquiry or project details (at least 5 characters).');
      return;
    }

    setStatus('submitting');

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (response.ok && data.success && (data.emailId || data.id)) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
        }, 6000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Unable to send your message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Unable to send your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-zinc-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 mb-4"
        >
          <span className="w-8 h-[2px] bg-[#FF0033]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF0033] uppercase">
            09 // GET IN TOUCH
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-7xl font-black uppercase tracking-tight text-zinc-950 mb-12 leading-none"
        >
          LET'S BUILD <span className="text-[#FF0033]">SOMETHING.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-lg text-zinc-600 font-normal leading-relaxed">
              I am actively seeking internship opportunities, freelance web development projects, and software collaborations. Feel free to reach out directly through any channel below.
            </p>

            {/* Email Card */}
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-[#FF0033] transition-colors flex items-center justify-between group shadow-2xs">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FF0033]/10 text-[#FF0033] rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-zinc-400 uppercase">EMAIL ADDRESS</p>
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    data-cursor="GO"
                    className="text-base sm:text-lg font-bold text-zinc-950 hover:text-[#FF0033] transition-colors"
                  >
                    {personalData.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalData.contact.email, 'email')}
                className="p-2.5 bg-white hover:bg-zinc-100 rounded-xl border border-zinc-200 text-zinc-600 text-xs font-mono flex items-center space-x-1"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <span className="text-emerald-600 font-bold flex items-center space-x-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>COPIED</span>
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-[#FF0033] transition-colors flex items-center justify-between group shadow-2xs">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#FF0033]/10 text-[#FF0033] rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-zinc-400 uppercase">PHONE NUMBER</p>
                  <a
                    href={`tel:${personalData.contact.phoneRaw}`}
                    data-cursor="GO"
                    className="text-base sm:text-lg font-bold text-zinc-950 hover:text-[#FF0033] transition-colors"
                  >
                    {personalData.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalData.contact.phone, 'phone')}
                className="p-2.5 bg-white hover:bg-zinc-100 rounded-xl border border-zinc-200 text-zinc-600 text-xs font-mono flex items-center space-x-1"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? (
                  <span className="text-emerald-600 font-bold flex items-center space-x-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>COPIED</span>
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* GitHub & LinkedIn Link Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GO"
                className="p-4 bg-zinc-950 text-white hover:bg-[#FF0033] rounded-2xl font-mono text-xs font-bold transition-all flex items-center justify-between shadow-md group"
              >
                <div className="flex items-center space-x-2.5">
                  <GithubIcon className="w-5 h-5" />
                  <span>GITHUB</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GO"
                className="p-4 bg-zinc-950 text-white hover:bg-[#FF0033] rounded-2xl font-mono text-xs font-bold transition-all flex items-center justify-between shadow-md group"
              >
                <div className="flex items-center space-x-2.5">
                  <LinkedinIcon className="w-5 h-5" />
                  <span>LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 bg-zinc-50 p-8 rounded-3xl border border-zinc-200 shadow-sm relative"
          >
            <h3 className="text-xl font-bold text-zinc-950 uppercase mb-6 flex items-center space-x-2">
              <span>SEND A DIRECT MESSAGE</span>
              <span className="w-2 h-2 rounded-full bg-[#FF0033]" />
            </h3>

            {status === 'success' ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950">MESSAGE SENT SUCCESSFULLY.</h4>
                <p className="text-xs text-emerald-800 font-mono">
                  Your message has been submitted successfully.
                </p>
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                  <span>MESSAGE SUBMITTED ✓</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs font-mono text-red-700 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-500 uppercase mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#FF0033] transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-500 uppercase mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#FF0033] transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-500 uppercase mb-1">
                    MESSAGE / PROJECT DETAILS
                  </label>
                  <textarea
                    rows={4}
                    required
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your internship offer, project, or inquiry..."
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs font-sans text-zinc-900 focus:outline-none focus:border-[#FF0033] transition-colors resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="OPEN"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#FF0033] hover:bg-[#E0002D] disabled:bg-zinc-400 text-white py-4 rounded-xl font-mono text-xs font-bold tracking-wider transition-all shadow-md shadow-[#FF0033]/20 disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRY AGAIN</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
