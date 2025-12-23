import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden tech-grid min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-primary/20 bg-primary/5 rounded-md backdrop-blur-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="font-mono text-primary text-xs font-bold tracking-wide uppercase">
                    Associate Founder & Dev Lead
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                  Building <br />
                  <span className="relative inline-block text-primary">
                    <span className="relative z-10">Data-Driven</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -skew-x-12"></span>
                  </span>
                  <br />
                  Solutions at <br />
                  Scale
                </h1>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-800/50 border-l-4 border-primary p-6 backdrop-blur-sm max-w-2xl rounded-r-lg">
                <p className="font-mono text-sm text-primary mb-2 opacity-75">{/* bio.txt */}</p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  I&apos;m Thong, Associate Founder at <span className="font-bold text-gray-900 dark:text-white">Nexus Tech Global</span> and Dev Lead for <span className="font-bold text-gray-900 dark:text-white">SiteBotic</span>. Full-stack developer and data engineer specializing in Python, TypeScript, and scalable data pipelines. I architect AI-powered SaaS platforms and ETL systems that process millions of data points.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <Link 
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    View_Projects <span className="material-icons text-sm">arrow_forward</span>
                  </span>
                </Link>
              </div>
              
              <div className="pt-8 flex flex-wrap gap-8 text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest border-t border-gray-200 dark:border-gray-800 mt-8">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-lg text-primary">storage</span>
                  Data Engineering
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-lg text-accent">psychology</span>
                  AI/ML Integration
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-lg text-blue-400">code</span>
                  Full Stack
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group">
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-accent/20 rounded-full border-dashed animate-[spin_8s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded opacity-0 group-hover:opacity-100 transition duration-700 blur-xl"></div>
                
                <div className="relative bg-background-light dark:bg-background-dark p-2 border border-gray-200 dark:border-gray-700 shadow-2xl">
                  <div className="corner-bracket corner-bracket-tl"></div>
                  <div className="corner-bracket corner-bracket-tr"></div>
                  <div className="corner-bracket corner-bracket-bl"></div>
                  <div className="corner-bracket corner-bracket-br"></div>
                  
                  <div className="relative overflow-hidden bg-gray-800 aspect-[3/4] group-hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
                    <div className="scanlines absolute inset-0 z-20 opacity-30"></div>
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition duration-500"></div>
                    
                    <Image
                      src="/profile.jpg"
                      alt="Thong Truong - Professional Portrait"
                      width={400}
                      height={533}
                      className="relative w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition duration-700"
                      priority
                      unoptimized
                    />
                    
                    <div className="absolute top-4 left-4 z-30 flex flex-col gap-1">
                      <span className="bg-black/80 backdrop-blur text-primary text-[10px] font-mono px-2 py-0.5 border-l-2 border-primary">
                        ID: T_TRUONG
                      </span>
                      <span className="bg-black/80 backdrop-blur text-white/70 text-[10px] font-mono px-2 py-0.5 border-l-2 border-accent">
                        ROLE: DEV
                      </span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-30">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-accent text-xs font-mono mb-1">STATUS: AVAILABLE</p>
                          <div className="h-1 w-24 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                          </div>
                        </div>
                        <span className="material-icons text-white/50 text-2xl">fingerprint</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex justify-between items-center px-1">
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">IMG_SRC_001.JPG</span>
                    <span className="text-[10px] font-mono text-primary">100% RENDERED</span>
                  </div>
                </div>
                
                <div className="absolute -right-6 bottom-20 bg-surface-light dark:bg-surface-dark p-3 rounded border border-gray-200 dark:border-gray-700 shadow-xl hidden md:block z-40 transform translate-x-4 group-hover:translate-x-0 transition duration-500">
                  <div className="flex gap-1.5 mb-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="font-mono text-[10px] leading-tight text-gray-500 dark:text-gray-400">
                    <span className="text-purple-500">def</span> <span className="text-blue-500">build_future</span>():
    <span className="text-purple-500">return</span> <span className="text-green-500">&quot;Innovation&quot;</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-12 border-y border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="material-icons text-gray-400">terminal</span>
              <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                Stack_Inventory:
              </p>
            </div>
            
            <div className="w-full">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-10 gap-y-6">
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">🐍</span>
                  <span className="font-mono text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition">Python</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="w-2 h-2 rounded-sm bg-teal-500 group-hover:bg-teal-400 transition-colors"></span>
                  <span className="font-mono text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-teal-400 transition">FastAPI</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="w-2 h-2 rounded-sm bg-blue-500 group-hover:bg-blue-400 transition-colors"></span>
                  <span className="font-mono text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-400 transition">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="w-2 h-2 rounded-sm bg-cyan-500 group-hover:bg-cyan-400 transition-colors"></span>
                  <span className="font-mono text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-cyan-400 transition">React</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="w-2 h-2 rounded-sm bg-orange-600 group-hover:bg-orange-500 transition-colors"></span>
                  <span className="font-mono text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-orange-500 transition">Apache Spark</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="w-2 h-2 rounded-sm bg-blue-700 group-hover:bg-blue-600 transition-colors"></span>
                  <span className="font-mono text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Competencies Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-gray-200 dark:border-gray-800 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-primary"></span>
                <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-widest">Capabilities</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">Core Competencies</h3>
            </div>
            <p className="text-gray-500 font-mono text-xs text-right hidden md:block">
              {/* SYSTEM_MODULES_LOADED<br />
              OPTIMIZED_FOR_PERFORMANCE */}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-surface-light dark:bg-surface-dark p-1 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition duration-300">
              <div className="h-full bg-background-light dark:bg-background-dark p-7 rounded border border-gray-200 dark:border-gray-800 group-hover:border-primary/50 relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition transform group-hover:scale-110">
                  <span className="material-icons text-8xl text-primary">dns</span>
                </div>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-6 rounded border border-primary/20">
                  <span className="material-icons text-2xl">dns</span>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  Building high-performance APIs with <span className="font-mono text-xs text-primary">FastAPI</span> and <span className="font-mono text-xs text-primary">Python</span>. Implementing RAG pipelines, async processing with Dramatiq, and microservices architecture with Docker.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 text-xs font-mono text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> Active
                </div>
              </div>
            </div>
            
            <div className="group bg-surface-light dark:bg-surface-dark p-1 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition duration-300">
              <div className="h-full bg-background-light dark:bg-background-dark p-7 rounded border border-gray-200 dark:border-gray-800 group-hover:border-primary/50 relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition transform group-hover:scale-110">
                  <span className="material-icons text-8xl text-primary">web</span>
                </div>
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent mb-6 rounded border border-accent/20">
                  <span className="material-icons text-2xl">web</span>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">Frontend Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  Crafting modern web applications with <span className="font-mono text-xs text-accent">React</span> and <span className="font-mono text-xs text-accent">TypeScript</span>. Building real-time dashboards, data visualizations, and responsive SaaS interfaces with Tailwind CSS.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 text-xs font-mono text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> Active
                </div>
              </div>
            </div>
            
            <div className="group bg-surface-light dark:bg-surface-dark p-1 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition duration-300">
              <div className="h-full bg-background-light dark:bg-background-dark p-7 rounded border border-gray-200 dark:border-gray-800 group-hover:border-primary/50 relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition transform group-hover:scale-110">
                  <span className="material-icons text-8xl text-primary">analytics</span>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 rounded border border-blue-500/20">
                  <span className="material-icons text-2xl">analytics</span>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3">Data Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  Designing ETL pipelines with <span className="font-mono text-xs text-blue-500">Apache Spark</span> and <span className="font-mono text-xs text-blue-500">Airflow</span>. Building distributed data processing systems, implementing Customer 360 analytics, and optimizing PostgreSQL warehouses.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 text-xs font-mono text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Selected Projects Preview */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark relative border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">Selected Works</h2>
              <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">{/* Executed_Projects_List */}</p>
            </div>
            <Link 
              href="/projects"
              className="text-primary font-medium font-mono text-sm hover:text-blue-700 transition flex items-center gap-2 group border-b border-transparent hover:border-primary pb-0.5"
            >
              view_all_projects() <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative bg-background-light dark:bg-background-dark rounded border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition duration-300 flex flex-col h-full">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t border-b border-gray-200 dark:border-gray-700">
                <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1 rounded">Production</div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                <Image
                  src="/nexus-tech-global-thumbnail.png"
                  alt="Nexus Tech Global"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Nexus Tech Global</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">Associate Founder - AI technology company delivering enterprise chatbot solutions and custom software development.</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white dark:bg-gray-800 text-[10px] font-mono font-bold text-primary border border-gray-200 dark:border-gray-700 rounded-sm uppercase">AI Solutions</span>
                  <span className="px-2 py-1 bg-white dark:bg-gray-800 text-[10px] font-mono font-bold text-primary border border-gray-200 dark:border-gray-700 rounded-sm uppercase">Leadership</span>
                  <span className="px-2 py-1 bg-white dark:bg-gray-800 text-[10px] font-mono font-bold text-primary border border-gray-200 dark:border-gray-700 rounded-sm uppercase">Enterprise</span>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-background-light dark:bg-background-dark rounded border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition duration-300 flex flex-col h-full">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-t border-b border-gray-200 dark:border-gray-700">
                <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1 rounded">Production</div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                <Image
                  src="/sitebotic-thumbnail.png"
                  alt="SiteBotic AI Chatbot Platform"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">SiteBotic</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">Dev Lead - No-code AI chatbot platform enabling websites to deploy intelligent bots trained on their content.</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white dark:bg-gray-800 text-[10px] font-mono font-bold text-primary border border-gray-200 dark:border-gray-700 rounded-sm uppercase">FastAPI</span>
                  <span className="px-2 py-1 bg-white dark:bg-gray-800 text-[10px] font-mono font-bold text-primary border border-gray-200 dark:border-gray-700 rounded-sm uppercase">React</span>
                  <span className="px-2 py-1 bg-white dark:bg-gray-800 text-[10px] font-mono font-bold text-primary border border-gray-200 dark:border-gray-700 rounded-sm uppercase">pgvector</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
