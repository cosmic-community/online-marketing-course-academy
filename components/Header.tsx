import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              📚 Marketing Academy
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Courses
            </Link>
            <Link 
              href="/instructors" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Instructors
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Courses
            </Link>
            <Link 
              href="/instructors" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Instructors
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}