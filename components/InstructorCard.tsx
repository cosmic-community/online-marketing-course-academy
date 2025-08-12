import type { Instructor } from '@/types';

interface InstructorCardProps {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
      {instructor.metadata.photo && (
        <img
          src={`${instructor.metadata.photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={instructor.metadata.name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
          width="160"
          height="160"
        />
      )}

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {instructor.metadata.name || instructor.title}
      </h3>

      {instructor.metadata.job_title && (
        <p className="text-primary-600 font-medium mb-3">
          {instructor.metadata.job_title}
        </p>
      )}

      {instructor.metadata.experience_years && (
        <p className="text-gray-600 text-sm mb-4">
          {instructor.metadata.experience_years} years of experience
        </p>
      )}

      {instructor.metadata.bio && (
        <div 
          className="text-gray-600 text-sm mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ 
            __html: instructor.metadata.bio.replace(/<[^>]*>/g, '').slice(0, 120) + '...'
          }}
        />
      )}

      {instructor.metadata.specialties && instructor.metadata.specialties.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {instructor.metadata.specialties.slice(0, 3).map((specialty, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-primary-100 text-primary-800"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-3">
        {instructor.metadata.linkedin_url && (
          <a 
            href={instructor.metadata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            LinkedIn
          </a>
        )}
        {instructor.metadata.twitter_url && (
          <a 
            href={instructor.metadata.twitter_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  );
}