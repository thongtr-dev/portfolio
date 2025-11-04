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
            <h2 className="text-2xl md:text-4xl font-bold text-white">Data Engineering & AI Systems Engineer</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              I architect intelligent, scalable backend systems with expertise in Python, FastAPI, and AI integration. Focused on building production-ready platforms with distributed task processing, vector search, and containerized self-hosted VPS/cloud deployments.
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              Specialized in <span className="text-purple-400">AI-powered FastAPI backend systems</span>, <span className="text-teal-400">distributed task processing with Celery/Dramatiq, Redis/RabbitMQ</span>, and <span className="text-blue-400">data engineering with Apache Spark</span>
            </p>
          </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-xs md:text-sm border border-yellow-500/30">Python</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-600/20 rounded-full text-purple-300 text-xs md:text-sm border border-purple-500/30">FastAPI</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-600/20 rounded-full text-teal-300 text-xs md:text-sm border border-teal-500/30">SQLAlchemy</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-full text-blue-300 text-xs md:text-sm border border-blue-500/30">PostgreSQL</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-500/20 rounded-full text-red-300 text-xs md:text-sm border border-red-500/30">Redis</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-xs md:text-sm border border-indigo-500/30">Dramatiq</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-xs md:text-sm border border-emerald-500/30">Docker</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-pink-500/20 rounded-full text-pink-300 text-xs md:text-sm border border-pink-500/30">OpenAI API</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-xs md:text-sm border border-cyan-500/30">pgvector</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-600/20 rounded-full text-orange-300 text-xs md:text-sm border border-orange-500/30">Dokploy</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-400/20 rounded-full text-blue-200 text-xs md:text-sm border border-blue-400/30">TypeScript</span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-600/20 rounded-full text-blue-300 text-xs md:text-sm border border-blue-500/30">Next.js</span>
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
              {/* Backend Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                }`}
                onMouseEnter={() => setSelectedStack('backend')}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Python Backend Systems</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    FastAPI with Async SQLAlchemy ORM
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    PostgreSQL + pgvector for AI embeddings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Dramatiq + Redis for distributed tasks
                    </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    OpenAI & Gemini LLM integration
                    </li>
                </ul>
              </div>

              {/* Frontend Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                }`}
                onMouseEnter={() => setSelectedStack('frontend')}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Frontend Integration</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Next.js for admin dashboards
                    </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    TypeScript & React components
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    RESTful API consumption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    WebSocket real-time updates
                  </li>
                </ul>
              </div>

              {/* DevOps Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
                }`}
                onMouseEnter={() => setSelectedStack('devops')}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">DevOps & Infrastructure</h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Docker multi-stage builds
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Dokploy self-hosted deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Traefik reverse proxy & SSL
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Multi-environment CI/CD pipelines
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