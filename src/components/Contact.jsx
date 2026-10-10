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
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-zinc-950 border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="text-[#FF0033] font-mono font-bold text-xs select-none">//</span>
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            GET IN TOUCH
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 mb-10 sm:mb-12">
          LET'S BUILD <span className="text-[#FF0033]">SOMETHING.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-zinc-900 font-bold leading-relaxed">
                Open for Full-Stack Developer and AI-enabled Software Developer roles.
              </p>
              <p className="text-xs font-medium text-zinc-500 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200/80 inline-block">
                📍 {personalData.contact.location}
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 bg-zinc-50 rounded-2xl border border-zinc-200/80 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-white text-zinc-900 rounded-xl border border-zinc-200/80">
                  <Mail className="w-5 h-5 text-[#FF0033]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-zinc-500 uppercase">Email Address</p>
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    data-cursor="GO"
                    className="text-sm sm:text-base font-bold text-zinc-950 hover:text-[#FF0033] transition-colors"
                  >
                    {personalData.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalData.contact.email, 'email')}
                className="p-2 bg-white hover:bg-zinc-100 rounded-lg border border-zinc-200/80 text-zinc-600 text-xs font-medium flex items-center space-x-1 cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <span className="text-emerald-600 font-bold flex items-center space-x-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 bg-zinc-50 rounded-2xl border border-zinc-200/80 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-white text-zinc-900 rounded-xl border border-zinc-200/80">
                  <Phone className="w-5 h-5 text-[#FF0033]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-zinc-500 uppercase">Phone Number</p>
                  <a
                    href={`tel:${personalData.contact.phoneRaw}`}
                    data-cursor="GO"
                    className="text-sm sm:text-base font-bold text-zinc-950 hover:text-[#FF0033] transition-colors"
                  >
                    {personalData.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalData.contact.phone, 'phone')}
                className="p-2 bg-white hover:bg-zinc-100 rounded-lg border border-zinc-200/80 text-zinc-600 text-xs font-medium flex items-center space-x-1 cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? (
                  <span className="text-emerald-600 font-bold flex items-center space-x-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </span>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* GitHub & LinkedIn Link Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GO"
                className="p-3.5 bg-zinc-950 text-white hover:bg-zinc-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GO"
                className="p-3.5 bg-zinc-950 text-white hover:bg-zinc-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 bg-zinc-50 p-6 sm:p-8 rounded-2xl border border-zinc-200/80">
            <h3 className="text-lg font-extrabold text-zinc-950 uppercase mb-5">
              Send a Direct Message
            </h3>

            {status === 'success' ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">Message Sent Successfully</h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out. Your message has been delivered.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1.5">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project, or opportunity..."
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 transition-colors resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="OPEN"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#FF0033] hover:bg-[#D9002B] disabled:bg-zinc-400 text-white py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm cursor-pointer disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Try Again</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
