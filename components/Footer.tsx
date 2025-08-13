import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span className="text-xl font-semibold">
                Marketing Academy
              </span>
            </div>
            <p className="text-primary-300 mb-6 max-w-md leading-relaxed">
              Master digital marketing with expert-led courses designed for real-world success. Join thousands of marketers advancing their careers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Courses</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/courses" className="text-primary-300">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-300">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-300">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-300">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/instructors" className="text-primary-300">
                  Instructors
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 text-center">
          <p className="text-primary-400">
            © 2025 Marketing Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}