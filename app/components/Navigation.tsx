'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center border border-primary/20">
              <span className="font-mono font-bold text-xl text-primary">&gt;_</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              Thong Truong<span className="text-primary">.py</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-1 items-center bg-gray-100 dark:bg-gray-800/50 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-mono text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-gray-800 rounded-md transition-all"
            >
              ./home
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 text-sm font-mono text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-gray-800 rounded-md transition-all"
            >
              ./projects
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-mono text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-gray-800 rounded-md transition-all"
            >
              ./contact
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-primary bg-primary/5 text-sm font-mono font-medium rounded text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              init_contact()
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none p-2"
            >
              <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-mono text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
              >
                ./home
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-mono text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
              >
                ./projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-mono text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
              >
                ./contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
