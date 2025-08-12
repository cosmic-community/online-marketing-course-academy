// app/courses/[slug]/page.tsx
import { getCourse, getLessonsByCourse } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Course, Lesson, Instructor } from '@/types';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.metadata.title} - Online Marketing Academy`,
    description: course.metadata.description?.replace(/<[^>]*>/g, '').slice(0, 160) || 'Learn digital marketing with expert instruction',
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  const lessons = await getLessonsByCourse(course.id);
  const instructor = course.metadata.instructor as Instructor;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Course Header */}
          <div className="mb-12">
            {course.metadata.course_image && (
              <img
                src={`${course.metadata.course_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                alt={course.metadata.title}
                className="w-full h-80 object-cover rounded-lg mb-8"
                width="800"
                height="400"
              />
            )}

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {course.metadata.difficulty?.value || 'All Levels'}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {course.metadata.course_status?.value || 'Available'}
              </span>
              {course.metadata.duration && (
                <span className="text-gray-600">
                  {course.metadata.duration} hours
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.metadata.title}
            </h1>

            {course.metadata.description && (
              <div 
                className="prose max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: course.metadata.description }}
              />
            )}

            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-6">
              <div className="flex items-center">
                {instructor?.metadata.photo && (
                  <img
                    src={`${instructor.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={instructor.metadata.name}
                    className="w-16 h-16 rounded-full mr-4"
                    width="80"
                    height="80"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {instructor?.metadata.name || 'Expert Instructor'}
                  </h3>
                  <p className="text-gray-600">
                    {instructor?.metadata.job_title || 'Course Instructor'}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary-600">
                  ${course.metadata.price}
                </div>
                <button className="mt-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          {course.metadata.learning_outcomes && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What You'll Learn
              </h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: course.metadata.learning_outcomes }}
              />
            </div>
          )}

          {/* Course Curriculum */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Course Curriculum
            </h2>

            {lessons.length > 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
                {lessons.map((lesson, index) => (
                  <div key={lesson.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mr-3">
                            {lesson.metadata.lesson_number}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {lesson.metadata.title}
                          </h3>
                          {lesson.metadata.is_preview && (
                            <span className="ml-2 inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                              Free Preview
                            </span>
                          )}
                        </div>
                        {lesson.metadata.content && (
                          <div 
                            className="prose text-gray-600 text-sm"
                            dangerouslySetInnerHTML={{ 
                              __html: lesson.metadata.content.slice(0, 200) + '...' 
                            }}
                          />
                        )}
                      </div>
                      <div className="ml-4 text-right">
                        {lesson.metadata.duration_minutes && (
                          <span className="text-sm text-gray-500">
                            {lesson.metadata.duration_minutes} min
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Course curriculum coming soon...</p>
            )}
          </div>

          {/* Instructor Section */}
          {instructor && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Meet Your Instructor
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  {instructor.metadata.photo && (
                    <img
                      src={`${instructor.metadata.photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={instructor.metadata.name}
                      className="w-24 h-24 rounded-full mr-6 flex-shrink-0"
                      width="120"
                      height="120"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {instructor.metadata.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {instructor.metadata.job_title}
                    </p>
                    {instructor.metadata.bio && (
                      <div 
                        className="prose text-gray-700"
                        dangerouslySetInnerHTML={{ __html: instructor.metadata.bio }}
                      />
                    )}
                    {instructor.metadata.specialties && instructor.metadata.specialties.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {instructor.metadata.specialties.map((specialty, index) => (
                            <span 
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}