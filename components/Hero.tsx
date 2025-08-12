import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Learn from industry experts and transform your career with practical, results-driven courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Browse Courses
            </Link>
            <Link 
              href="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-100 mb-2">500+</div>
              <p className="text-primary-200">Students Enrolled</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-100 mb-2">95%</div>
              <p className="text-primary-200">Completion Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-100 mb-2">4.8★</div>
              <p className="text-primary-200">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}