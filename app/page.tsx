import { getCourses, getInstructors } from '@/lib/cosmic';
import CourseCard from '@/components/CourseCard';
import Hero from '@/components/Hero';
import InstructorCard from '@/components/InstructorCard';
import Link from 'next/link';
import type { Course, Instructor } from '@/types';

export const metadata = {
  title: 'Online Marketing Course Academy - Master Digital Marketing',
  description: 'Learn digital marketing from industry experts. Master SEO, social media, email marketing, and more with our comprehensive courses.',
};

export default async function HomePage() {
  const courses = await getCourses();
  const instructors = await getInstructors();

  return (
    <>
      <Hero />
      
      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
              Start your digital marketing journey with our expertly designed courses that deliver real-world results
            </p>
          </div>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Coming Soon</h3>
                <p className="text-primary-600">New courses are being added regularly. Check back soon!</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Meet Our Instructors Section */}
      {instructors.length > 0 && (
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
                Meet Our Expert Instructors
              </h2>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
                Learn from industry professionals with years of real-world experience and proven track records
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ready to Learn CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Learn from the Best?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their careers with our expert-led marketing courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-900 bg-white rounded-xl hover:bg-primary-50 transition-colors duration-200"
            >
              Start Learning Today
            </Link>
            <Link 
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-primary-900 transition-colors duration-200"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}