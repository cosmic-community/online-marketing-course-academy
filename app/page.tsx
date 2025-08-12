import { getCourses, getInstructors } from '@/lib/cosmic';
import CourseCard from '@/components/CourseCard';
import Hero from '@/components/Hero';
import InstructorCard from '@/components/InstructorCard';
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your digital marketing journey with our expertly designed courses
            </p>
          </div>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No courses available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Meet Our Instructors Section */}
      {instructors.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Expert Instructors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn from industry professionals with years of real-world experience
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
    </>
  );
}