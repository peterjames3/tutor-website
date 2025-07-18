// app/lib/types/testprep.ts
export interface TestPrepProgram {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string; // Changed to string since you're using "slug": slug.current
  description: string;
  deliveryMethod?: string;
  educationLevel?: string;
  benefits?: string;
  structure?: string; // Adjust based on your actual structure
  sections?: Array<{
    _id: string;
    title: string;
    content?: string;
    tips?: string[];
    icon?: string;
  }>;
  testimonials?: Array<{
    _id: string;
    author: string;
    quote: string;
  }>;
}
