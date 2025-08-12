// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Course object type
interface Course extends CosmicObject {
  type: 'courses';
  metadata: {
    title: string;
    description?: string;
    course_image?: {
      url: string;
      imgix_url: string;
    };
    price: number;
    duration?: number;
    difficulty?: {
      key: string;
      value: string;
    };
    instructor?: Instructor | string;
    learning_outcomes?: string;
    course_status?: {
      key: string;
      value: string;
    };
  };
}

// Lesson object type
interface Lesson extends CosmicObject {
  type: 'lessons';
  metadata: {
    title: string;
    course?: Course | string;
    lesson_number: number;
    video_url?: string;
    content?: string;
    duration_minutes?: number;
    resources?: any[];
    is_preview?: boolean;
  };
}

// Instructor object type
interface Instructor extends CosmicObject {
  type: 'instructors';
  metadata: {
    name: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    job_title?: string;
    bio?: string;
    experience_years?: number;
    specialties?: string[];
    linkedin_url?: string;
    twitter_url?: string;
  };
}

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
function isCourse(obj: CosmicObject): obj is Course {
  return obj.type === 'courses';
}

function isLesson(obj: CosmicObject): obj is Lesson {
  return obj.type === 'lessons';
}

function isInstructor(obj: CosmicObject): obj is Instructor {
  return obj.type === 'instructors';
}

// Utility types
type CreateCourseData = Omit<Course, 'id' | 'created_at' | 'modified_at'>;
type UpdateCourseData = Partial<CreateCourseData>;

export type {
  CosmicObject,
  Course,
  Lesson,
  Instructor,
  CosmicResponse,
  CreateCourseData,
  UpdateCourseData
};

export {
  isCourse,
  isLesson,
  isInstructor
};