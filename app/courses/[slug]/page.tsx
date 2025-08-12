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
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Course Header */}
          <div className="mb-16">
            {course.metadata.course_image && (
              <div className="relative mb-10 rounded-2xl overflow-hidden">
                <img
                  src={`${course.metadata.course_image.imgix_url}?w=1200&h=500&fit=crop&auto=format,compress`}
                  alt={course.metadata.title}
                  className="w-full h-80 lg:h-96 object-cover"
                  width="1200"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-accent-100 text-accent-800">
                {course.metadata.difficulty?.value || 'All Levels'}
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                {course.metadata.course_status?.value || 'Available'}
              </span>
              {course.metadata.duration && (
                <span className="text-primary-600 font-medium">
                  {course.metadata.duration} hours of content
                </span>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              {course.metadata.title}
            </h1>

            {course.metadata.description && (
              <div 
                className="prose prose-lg max-w-none mb-10"
                dangerouslySetInnerHTML={{ __html: course.metadata.description }}
              />
            )}

            <div className="card p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex items-center mb-6 lg:mb-0">
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
                    <h3 className="text-lg font-semibold text-primary-900">
                      {instructor?.metadata.name || 'Expert Instructor'}
                    </h3>
                    <p className="text-primary-600">
                      {instructor?.metadata.job_title || 'Course Instructor'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-primary-900 mb-3">
                    ${course.metadata.price}
                  </div>
                  <button className="btn-primary text-lg px-8 py-4 w-full lg:w-auto">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          {course.metadata.learning_outcomes && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">
                What You'll Learn
              </h2>
              <div className="card p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: course.metadata.learning_outcomes }}
                />
              </div>
            </div>
          )}

          {/* Course Curriculum */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">
              Course Curriculum
            </h2>

            {lessons.length > 0 ? (
              <div className="card divide-y divide-primary-200">
                {lessons.map((lesson, index) => (
                  <div key={lesson.id} className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center w-10 h-10 bg-accent-100 text-accent-700 text-sm font-bold rounded-full mr-4">
                            {lesson.metadata.lesson_number}
                          </div>
                          <h3 className="text-xl font-semibold text-primary-900">
                            {lesson.metadata.title}
                          </h3>
                          {lesson.metadata.is_preview && (
                            <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              Free Preview
                            </span>
                          )}
                        </div>
                        {lesson.metadata.content && (
                          <div 
                            className="prose text-primary-600"
                            dangerouslySetInnerHTML={{ 
                              __html: lesson.metadata.content.slice(0, 300) + '...' 
                            }}
                          />
                        )}
                      </div>
                      <div className="ml-6 text-right">
                        {lesson.metadata.duration_minutes && (
                          <span className="text-sm text-primary-500 font-medium">
                            {lesson.metadata.duration_minutes} min
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card p-12 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Curriculum Coming Soon</h3>
                <p className="text-primary-600">Course content is being finalized and will be available shortly.</p>
              </div>
            )}
          </div>

          {/* Instructor Section */}
          {instructor && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-900 mb-8">
                Meet Your Instructor
              </h2>
              <div className="card p-8">
                <div className="flex flex-col lg:flex-row items-start">
                  {instructor.metadata.photo && (
                    <img
                      src={`${instructor.metadata.photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                      alt={instructor.metadata.name}
                      className="w-32 h-32 rounded-2xl mr-8 mb-6 lg:mb-0 flex-shrink-0"
                      width="160"
                      height="160"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">
                      {instructor.metadata.name}
                    </h3>
                    <p className="text-accent-600 font-semibold mb-4 text-lg">
                      {instructor.metadata.job_title}
                    </p>
                    {instructor.metadata.bio && (
                      <div 
                        className="prose prose-lg text-primary-600 mb-6"
                        dangerouslySetInnerHTML={{ __html: instructor.metadata.bio }}
                      />
                    )}
                    {instructor.metadata.specialties && instructor.metadata.specialties.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-3 text-lg">Specialties:</h4>
                        <div className="flex flex-wrap gap-3">
                          {instructor.metadata.specialties.map((specialty, index) => (
                            <span 
                              key={index}
                              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
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