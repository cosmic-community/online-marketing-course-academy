'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-primary-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <span className="text-xl font-semibold text-primary-900">
              Marketing Academy
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-primary-600 hover:text-primary-900 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="text-primary-600 hover:text-primary-900 font-medium transition-colors duration-200"
            >
              Courses
            </Link>
            <Link 
              href="/instructors" 
              className="text-primary-600 hover:text-primary-900 font-medium transition-colors duration-200"
            >
              Instructors
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="btn-primary text-sm">
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-primary-600 hover:text-primary-900 hover:bg-primary-50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-primary-100 mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-primary-600 hover:text-primary-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className="text-primary-600 hover:text-primary-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/instructors" 
                className="text-primary-600 hover:text-primary-900 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Instructors
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}