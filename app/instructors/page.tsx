import { cosmic } from '@/lib/cosmic'
import InstructorCard from '@/components/InstructorCard'
import { Instructor } from '@/types'

export const metadata = {
  title: 'Our Instructors - Online Marketing Course Academy',
  description: 'Meet our expert instructors who bring years of real-world experience to help you master digital marketing skills.',
}

async function getInstructors(): Promise<Instructor[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'instructors' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return objects as Instructor[]
  } catch (error) {
    console.error('Error fetching instructors:', error)
    return []
  }
}

export default async function InstructorsPage() {
  const instructors = await getInstructors()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Expert Instructors
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Learn from industry professionals who have helped thousands of businesses 
              grow through proven digital marketing strategies
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {instructors.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Teaching Team
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Each instructor brings unique expertise and real-world experience 
                  to provide you with practical, actionable marketing knowledge.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {instructors.map((instructor) => (
                  <InstructorCard key={instructor.id} instructor={instructor} />
                ))}
              </div>

              {/* Stats Section */}
              <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Combined Experience
                  </h3>
                  <p className="text-gray-600">
                    Our instructors bring together decades of industry experience
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {instructors.reduce((total, instructor) => 
                        total + (instructor.metadata.experience_years || 0), 0
                      )}+
                    </div>
                    <div className="text-gray-600">Years Combined Experience</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      {instructors.length}
                    </div>
                    <div className="text-gray-600">Expert Instructors</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {Array.from(new Set(
                        instructors.flatMap(instructor => 
                          instructor.metadata.specialties || []
                        )
                      )).length}
                    </div>
                    <div className="text-gray-600">Specialty Areas</div>
                  </div>
                </div>
              </div>

              {/* Specialties Overview */}
              <div className="mt-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Areas of Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our instructors cover all aspects of modern digital marketing
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {Array.from(new Set(
                    instructors.flatMap(instructor => 
                      instructor.metadata.specialties || []
                    )
                  )).map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-500 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No Instructors Found
              </h3>
              <p className="text-gray-500">
                Our instructor profiles will be available soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Learn from the Best?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Browse our courses and start learning from industry experts today
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              View All Courses
            </a>
            <a
              href="/#features"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}