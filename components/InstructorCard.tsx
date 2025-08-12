import type { Instructor } from '@/types';

interface InstructorCardProps {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
      {instructor.metadata.photo && (
        <div className="relative mb-6">
          <img
            src={`${instructor.metadata.photo.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={instructor.metadata.name}
            className="w-24 h-24 rounded-full mx-auto border-4 border-primary-100 group-hover:border-accent-200 transition-colors duration-300"
            width="160"
            height="160"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold text-primary-900 mb-2">
        {instructor.metadata.name || instructor.title}
      </h3>

      {instructor.metadata.job_title && (
        <p className="text-accent-600 font-medium mb-3">
          {instructor.metadata.job_title}
        </p>
      )}

      {instructor.metadata.experience_years && (
        <p className="text-primary-500 text-sm mb-4 font-medium">
          {instructor.metadata.experience_years} years of experience
        </p>
      )}

      {instructor.metadata.bio && (
        <div className="text-primary-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {instructor.metadata.bio.replace(/<[^>]*>/g, '').slice(0, 140)}...
        </div>
      )}

      {instructor.metadata.specialties && instructor.metadata.specialties.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {instructor.metadata.specialties.slice(0, 3).map((specialty, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4">
        {instructor.metadata.linkedin_url && (
          <a 
            href={instructor.metadata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-accent-600 transition-colors font-medium text-sm"
          >
            LinkedIn
          </a>
        )}
        {instructor.metadata.twitter_url && (
          <a 
            href={instructor.metadata.twitter_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-accent-600 transition-colors font-medium text-sm"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  );
}