import Link from 'next/link';
import type { Course, Instructor } from '@/types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const instructor = course.metadata.instructor as Instructor;

  return (
    <div className="card overflow-hidden group">
      {course.metadata.course_image && (
        <div className="relative overflow-hidden">
          <img
            src={`${course.metadata.course_image.imgix_url}?w=600&h=240&fit=crop&auto=format,compress`}
            alt={course.metadata.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            width="600"
            height="240"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-100 text-accent-800">
            {course.metadata.difficulty?.value || 'All Levels'}
          </span>
          {course.metadata.duration && (
            <span className="text-sm text-primary-500 font-medium">
              {course.metadata.duration} hours
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-primary-900 mb-3 line-clamp-2 leading-tight">
          {course.metadata.title}
        </h3>

        {course.metadata.description && (
          <p className="text-primary-600 text-sm mb-6 line-clamp-3 leading-relaxed">
            {course.metadata.description.replace(/<[^>]*>/g, '').slice(0, 140)}...
          </p>
        )}

        {instructor && (
          <div className="flex items-center mb-6">
            {instructor.metadata.photo && (
              <img
                src={`${instructor.metadata.photo.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                alt={instructor.metadata.name}
                className="w-10 h-10 rounded-full mr-3"
                width="48"
                height="48"
              />
            )}
            <div>
              <p className="text-sm font-medium text-primary-900">
                {instructor.metadata.name || instructor.title}
              </p>
              <p className="text-xs text-primary-500">
                {instructor.metadata.job_title}
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-900">
            ${course.metadata.price}
          </div>
          <Link 
            href={`/courses/${course.slug}`}
            className="btn-primary text-sm px-6 py-3"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}