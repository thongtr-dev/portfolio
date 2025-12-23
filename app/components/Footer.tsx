import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-mono font-bold text-white">&gt;_</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">Thong Truong</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 font-display">Initialize collaboration?</h3>
            <p className="text-gray-400 max-w-sm mb-8 font-light text-sm">
              Available for freelance projects and open to full-time opportunities.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/thongtruong"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded border border-gray-700 hover:border-primary hover:bg-primary/20 hover:text-primary flex items-center justify-center transition duration-300"
              >
                <span className="text-xs font-bold font-mono">IN</span>
              </a>
              <a
                href="https://github.com/thongtruong"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded border border-gray-700 hover:border-primary hover:bg-primary/20 hover:text-primary flex items-center justify-center transition duration-300"
              >
                <span className="text-xs font-bold font-mono">GH</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold font-mono mb-6 text-primary uppercase tracking-widest">
              {/* Sitemap */}
            </h4>
            <ul className="space-y-3 text-gray-400 font-mono text-xs">
              <li>
                <Link href="/" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-primary">&gt;</span> ./home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-primary">&gt;</span> ./projects
                </Link>
              </li>
              <li>
                <Link href="/cv" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-primary">&gt;</span> ./cv
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-primary">&gt;</span> ./contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold font-mono mb-6 text-primary uppercase tracking-widest">
              {/* Contact_Info */}
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <span className="material-icons text-primary text-sm mt-1 group-hover:animate-bounce">
                  email
                </span>
                <a
                  href="mailto:contact@thongtruong.com"
                  className="hover:text-white transition font-mono text-xs"
                >
                  contact@thongtruong.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-sm mt-1">place</span>
                <span className="font-mono text-xs">Ho Chi Minh City, VN</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
          <p>© {new Date().getFullYear()} Thong Truong. System_All_Rights_Reserved.</p>
          <p>
            Executed with <span className="text-primary">Logic</span> &amp;{' '}
            <span className="text-primary">Caffeine</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
