# Online Marketing Course Academy

![Course Platform Preview](https://imgix.cosmicjs.com/87834fb0-77ae-11f0-a051-23c10f41277a-photo-1460925895917-afdab827c52f-1755025191340.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional online marketing course platform built with Next.js 15, showcasing digital marketing courses with beautiful UI and seamless content management through Cosmic.

## ✨ Features

- 📚 **Course Catalog** - Browse and discover marketing courses
- 🎓 **Course Details** - Comprehensive course information and curriculum
- 👨‍🏫 **Instructor Profiles** - Meet your expert instructors
- 📖 **Lesson Management** - Structured learning with video content
- 🎨 **Modern Design** - Clean, professional, and responsive
- 📱 **Mobile Optimized** - Perfect experience on all devices
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal speed
- 🔍 **SEO Friendly** - Optimized for search engines

## Clone this Bucket

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=689b89aa5741dd88af67a09e&clone_repository=689b90d24ae321c44ad499ec)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create an online marketing course website."

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic** - Headless CMS for content management
- **Vercel** - Recommended deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the course content model

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd online-marketing-course-academy
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📚 Cosmic SDK Examples

### Fetch All Courses
```typescript
const courses = await cosmic.objects
  .find({ type: 'courses' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Get Course with Lessons
```typescript
const course = await cosmic.objects
  .findOne({ type: 'courses', slug: courseSlug })
  .depth(1);

const lessons = await cosmic.objects
  .find({ 
    type: 'lessons', 
    'metadata.course': course.id 
  })
  .sort({ 'metadata.lesson_number': 1 });
```

### Fetch Instructor Profile
```typescript
const instructor = await cosmic.objects
  .findOne({ type: 'instructors', slug: instructorSlug })
  .props(['id', 'title', 'slug', 'metadata']);
```

## 🎨 Cosmic CMS Integration

This application integrates with three main Cosmic object types:

### Courses
- Course title and description
- Pricing and duration information
- Difficulty level and status
- Connected instructor profiles
- Learning outcomes and curriculum

### Lessons
- Lesson content and video URLs
- Course association and ordering
- Duration and resource files
- Preview availability settings

### Instructors
- Instructor profiles and photos
- Experience and specialties
- Social media links
- Detailed biographies

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically with every push

### Deploy to Netlify
1. Connect your Git repository
2. Set build command: `bun run build`
3. Set publish directory: `out` (if using static export)
4. Add environment variables in Netlify dashboard

### Environment Variables for Production
Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->