import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-medium mb-8">
            <span className="mr-2">🚀</span>
            New courses launching this month
          </div>
          
          <h1 className="font-bold mb-8 leading-tight">
            Master Digital Marketing
            <span className="block gradient-text mt-2">
              Build Skills That Matter
            </span>
          </h1>
          
          <p className="text-xl text-primary-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Learn from industry experts and transform your career with practical, results-driven courses designed for modern marketers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/courses"
              className="btn-primary text-lg px-8 py-4 rounded-xl"
            >
              Browse Courses
            </Link>
            <Link 
              href="/courses"
              className="btn-secondary text-lg px-8 py-4 rounded-xl"
            >
              Start Free Trial
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <p className="text-primary-600 font-medium">Students Enrolled</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <p className="text-primary-600 font-medium">Completion Rate</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">4.8★</div>
              <p className="text-primary-600 font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}