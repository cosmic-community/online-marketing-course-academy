import Link from 'next/link';
import type { Course, Instructor } from '@/types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const instructor = course.metadata.instructor as Instructor;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {course.metadata.course_image && (
        <img
          src={`${course.metadata.course_image.imgix_url}?w=400&h=240&fit=crop&auto=format,compress`}
          alt={course.metadata.title}
          className="w-full h-48 object-cover"
          width="400"
          height="240"
        />
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {course.metadata.difficulty?.value || 'All Levels'}
          </span>
          <span className="text-sm text-gray-500">
            {course.metadata.duration ? `${course.metadata.duration} hours` : ''}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.metadata.title}
        </h3>

        {course.metadata.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {course.metadata.description.replace(/<[^>]*>/g, '').slice(0, 120)}...
          </p>
        )}

        {instructor && (
          <div className="flex items-center mb-4">
            {instructor.metadata.photo && (
              <img
                src={`${instructor.metadata.photo.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                alt={instructor.metadata.name}
                className="w-8 h-8 rounded-full mr-2"
                width="40"
                height="40"
              />
            )}
            <span className="text-sm text-gray-600">
              {instructor.metadata.name || instructor.title}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600">
            ${course.metadata.price}
          </div>
          <Link 
            href={`/courses/${course.slug}`}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}