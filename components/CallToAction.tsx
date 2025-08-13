import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Learn from the Best?
        </h2>
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Browse our courses and start learning from industry experts today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/courses"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:text-white hover:shadow-lg transition-all duration-200"
          >
            View All Courses
          </Link>
          <Link 
            href="/courses"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-primary-900 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}