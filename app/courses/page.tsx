import { getCourses } from '@/lib/cosmic';
import CourseCard from '@/components/CourseCard';
import CallToAction from '@/components/CallToAction';
import type { Course } from '@/types';

export const metadata = {
  title: 'All Courses - Online Marketing Academy',
  description: 'Browse all available digital marketing courses. Learn SEO, social media marketing, email marketing, and more.',
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              All Courses
            </h1>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing courses designed to accelerate your career and deliver measurable results for your business.
            </p>
          </div>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">No Courses Available Yet</h2>
                <p className="text-primary-600 mb-6">We're working hard to bring you amazing courses. Check back soon for exciting new content!</p>
                <button className="btn-secondary">
                  Notify Me When Available
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Ready to Learn CTA Section */}
      <CallToAction />
    </>
  );
}