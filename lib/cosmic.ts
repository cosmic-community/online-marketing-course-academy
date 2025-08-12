import { createBucketClient } from '@cosmicjs/sdk';
import type { Course, Lesson, Instructor, CosmicResponse } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
});

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all courses
export async function getCourses(): Promise<Course[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'courses' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Course[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch courses');
  }
}

// Get single course by slug
export async function getCourse(slug: string): Promise<Course | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'courses', slug })
      .depth(1);
    
    const course = response.object as Course;
    
    if (!course || !course.metadata) {
      return null;
    }
    
    return course;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch course');
  }
}

// Get lessons for a course
export async function getLessonsByCourse(courseId: string): Promise<Lesson[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'lessons', 
        'metadata.course': courseId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('metadata.lesson_number');
    
    return response.objects as Lesson[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch lessons');
  }
}

// Get single lesson by slug
export async function getLesson(slug: string): Promise<Lesson | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'lessons', slug })
      .depth(1);
    
    const lesson = response.object as Lesson;
    
    if (!lesson || !lesson.metadata) {
      return null;
    }
    
    return lesson;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch lesson');
  }
}

// Fetch all instructors
export async function getInstructors(): Promise<Instructor[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'instructors' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Instructor[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch instructors');
  }
}

// Get single instructor by slug
export async function getInstructor(slug: string): Promise<Instructor | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'instructors', slug });
    
    const instructor = response.object as Instructor;
    
    if (!instructor || !instructor.metadata) {
      return null;
    }
    
    return instructor;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch instructor');
  }
}