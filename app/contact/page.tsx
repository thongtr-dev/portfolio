'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: 'Python Development',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name} - ${formData.sector}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Sector: ${formData.sector}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:contact@thongtruong.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', sector: 'Python Development', message: '' });

    // Show success message
    alert('Email client opened with your message! Please send it to complete submission.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navigation />
      
      <main className="flex-grow pt-20 relative z-10 min-h-screen">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 tech-grid opacity-[0.4]"></div>
        </div>
        <div className="fixed top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 pointer-events-none z-0"></div>
        <div className="fixed bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-primary font-mono text-xs font-semibold tracking-wider uppercase">
                    Initialize Contact
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Let&apos;s build something <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                    future-proof.
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-10">
                  Associate Founder at Nexus Tech Global and Dev Lead for SiteBotic. Full-stack Python/TypeScript developer and data engineer. I build AI-powered SaaS platforms, design ETL pipelines, and architect enterprise solutions. Let&apos;s transform your ideas into production-ready systems.
                </p>
                
                {/* Contact Methods */}
                <div className="grid grid-cols-1 gap-4 mb-10">
                  <a
                    href="mailto:contact@thongtruong.com"
                    className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 bg-white dark:bg-white/5 hover:bg-blue-50/50 dark:hover:bg-white/10 transition-all group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mr-5">
                      <span className="material-icons text-2xl">email</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider mb-0.5">
                        Direct Line
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium text-lg">
                        contact@thongtruong.com
                      </p>
                    </div>
                  </a>
                  
                  <div
                    className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 opacity-60 cursor-not-allowed group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-5">
                      <span className="material-icons text-2xl">schedule</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider mb-0.5">
                        Sync Up
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium text-lg">
                        Book a 30m slot
                      </p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Block */}
              <div className="hidden lg:block p-6 rounded-xl bg-surface-dark border border-white/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 tech-grid opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-xs leading-relaxed">
                    <div className="text-gray-400">
                      <span className="text-primary">while</span>{' '}
                      <span className="text-text-dark">project_active</span>:
                    </div>
                    <div className="pl-4 text-gray-500">
                      <span className="text-accent">await</span>{' '}
                      <span className="text-yellow-300">input</span>
                      (<span className="text-green-400">&quot;New Idea&quot;</span>)
                    </div>
                    <div className="pl-4 text-gray-500">
                      <span className="text-text-dark">build_solution</span>()
                    </div>
                    <div className="pl-4 text-gray-500">
                      <span className="text-primary">deploy</span>()
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-md opacity-20 dark:opacity-30"></div>
                
                <form
                  onSubmit={handleSubmit}
                  className="relative h-full flex flex-col justify-center space-y-8 bg-surface-light dark:bg-surface-dark p-8 lg:p-12 rounded-xl shadow-2xl border border-gray-100 dark:border-white/10"
                >
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/5 pb-6">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                      Send a Message
                    </h3>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-75"></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                      >
                        Name_
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="block w-full rounded-lg border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                      >
                        Email_
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="block w-full rounded-lg border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label
                      htmlFor="sector"
                      className="block text-xs font-mono font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                    >
                      Sector_
                    </label>
                    <div className="relative">
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-gray-900 dark:text-white focus:border-primary focus:ring-0 py-3 px-4 transition-all appearance-none"
                      >
                        <option>Python Development</option>
                        <option>Data Engineering</option>
                        <option>Full Stack Architecture</option>
                        <option>Code Review / Audit</option>
                        <option>Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-icons text-sm">expand_more</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                    >
                      Message_
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project requirements..."
                      rows={6}
                      className="block w-full rounded-lg border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center py-4 px-4 border border-transparent rounded-lg shadow-lg shadow-primary/20 text-sm font-mono font-bold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all uppercase tracking-wide overflow-hidden relative"
                  >
                    <span className="absolute w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12"></span>
                    <span className="mr-2">Send Transmission</span>
                    <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
