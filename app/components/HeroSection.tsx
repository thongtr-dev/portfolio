'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
  const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

  return (
   <section className="min-h-screen relative overflow-hidden pt-20 pb-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8 md:mb-12"
        >
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <h1 className="text-4xl leading-normal md:leading-relaxed md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
              Thong Truong
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Data Engineer & Backend Developer</h2>
            
            {/* Contact Bar - Compact & Scannable */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-400 py-3">
              <a href="mailto:contact@thongtruong.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                contact@thongtruong.com
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://www.linkedin.com/in/thongtr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://github.com/thongtr-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://drive.google.com/file/d/1QSMxjzTM1aEXf5T8QPCUkOA8E-G8DTXe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-bold text-base md:text-lg bg-green-500/10 hover:bg-green-500/20 px-3 py-1.5 rounded-lg border border-green-500/30 hover:border-green-500/50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                Resume PDF
              </a>
              <span className="text-gray-600">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ho Chi Minh City, Vietnam
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Data Engineer with strong backend engineering foundation, building scalable ETL pipelines, distributed data processing, AI-powered platforms, and end-to-end data products using Python, SQL, and modern data technologies. Full-stack experience with React, TypeScript, and Next.js for complete data-driven solutions.
            </p>
          </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-xs md:text-sm border border-yellow-500/30">Python</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-600/20 rounded-full text-purple-300 text-xs md:text-sm border border-purple-500/30">FastAPI</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-full text-blue-300 text-xs md:text-sm border border-blue-500/30">PostgreSQL</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-600/20 rounded-full text-orange-300 text-xs md:text-sm border border-orange-500/30">Apache Spark</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-600/20 rounded-full text-red-300 text-xs md:text-sm border border-red-500/30">Apache Airflow</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-lime-500/20 rounded-full text-lime-300 text-xs md:text-sm border border-lime-500/30">Apache Kafka</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-600/20 rounded-full text-teal-300 text-xs md:text-sm border border-teal-500/30">SQL</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-500/20 rounded-full text-red-300 text-xs md:text-sm border border-red-500/30">Redis</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-600/20 rounded-full text-indigo-300 text-xs md:text-sm border border-indigo-500/30">pgvector</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-pink-500/20 rounded-full text-pink-300 text-xs md:text-sm border border-pink-500/30">Dramatiq</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-xs md:text-sm border border-emerald-500/30">Docker</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-500/20 rounded-full text-slate-300 text-xs md:text-sm border border-slate-500/30">Metabase</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-xs md:text-sm border border-cyan-500/30">React</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-600/20 rounded-full text-blue-300 text-xs md:text-sm border border-blue-500/30">TypeScript</span>
            </div>
        </motion.div>

        {/* Interactive System Architecture */}
        <div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Data Pipeline Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                }`}
                onMouseEnter={() => setSelectedStack('backend')}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Data Pipelines & Processing</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Apache Spark (PySpark) for distributed processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Apache Airflow for workflow orchestration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    ETL pipelines for data extraction & transformation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Real-time data ingestion & batch processing
                    </li>
                </ul>
              </div>

              {/* Data Infrastructure Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                }`}
                onMouseEnter={() => setSelectedStack('frontend')}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Data Storage & APIs</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    PostgreSQL with advanced SQL & query optimization
                    </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Vector databases (pgvector) for embeddings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    FastAPI for data service APIs & microservices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Redis for caching & message queuing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Apache Kafka for event streaming & data pipelines
                  </li>
                </ul>
              </div>

              {/* Analytics & DevOps Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                }`}
                onMouseEnter={() => setSelectedStack('devops')}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">Analytics & Infrastructure</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Business intelligence with Metabase dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Data quality monitoring & validation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Containerized pipelines with Docker
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    CI/CD for data pipeline deployments
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}