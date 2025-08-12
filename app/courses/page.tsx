import { getCourses } from '@/lib/cosmic';
import CourseCard from '@/components/CourseCard';
import type { Course } from '@/types';

export const metadata = {
  title: 'All Courses - Online Marketing Academy',
  description: 'Browse all available digital marketing courses. Learn SEO, social media marketing, email marketing, and more.',
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing courses designed to accelerate your career
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
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Courses Available</h2>
            <p className="text-gray-500">Check back soon for new courses!</p>
          </div>
        )}
      </div>
    </div>
  );
}