import { groq } from "next-sanity";

//Get all posts

export const postsQuery = groq`
*[_type == "post"]{
   _id,
   _createdAt,
   description,
    title,
   slug,
   mainImage,
  "imageURL": mainImage.asset->url,
   "authorName": author->name,
   "categories": categories[]->{title, description},
 }
 `;

// Get a single post by its slug
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    "categories": categories[]->{title, description},
    body, // Full body content for PortableText rendering
    // Extract headings for table of contents
    "headings": body[][
      _type == "block" &&
      (style == "h2" || style == "h3") // Querying for h2 and h3
    ] {
      _key,
      style,
      children[] {
        text
      }
    }
  }
`;
// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`;

// Get the latest posts by published date, limited to the first 5 posts
export const latestPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) [0...8] {
  _id,
    _createdAt,
    title,
    slug,
    body,
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
     "authorImage": author->image.asset->url,
    "categories": categories[]->{title, description}
    
  }
`;

// Fetch Slugs and Exam aid programs
export const examPathsQuery = `
  *[_type == "exam_aid"] {
    "slug": slug.current
  }
`;

export const examQuery = `
  *[_type == "exam_aid" && slug.current == $slug] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    description,
    deliveryMethod,
    educationLevel,
    benefits,
    structure,
    "sections": sections[]->{
      _id,
      title,
      content,
      tips,
      icon
    },
    "testimonials": testimonials[]->{
      _id,
      author,
      quote
    }
  }
`;
export const examAidProgramsQuery = `
  *[_type == "exam_aid"] | order(title asc) {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    description,
    deliveryMethod,
    educationLevel,
    benefits,
    structure,
    "sections": sections[]->{
      _id,
      title,
      content,
      tips,
      icon
    },
    "testimonials": testimonials[]->{
      _id,
      author,
      quote
    }
  }
`;

//fetch slugs  for exam prep programs

export const examPrepPathsQuery = `
*[_type == "exam_prep"] {
  "slug": slug.current
}
`;

export const examPrepQuery = `
*[_type == "exam_prep" && slug.current == $slug] {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  deliveryMethod,
  educationLevel,
  benefits,
  structure,
  "sections": sections[]->{
    _id,
    title, 
    content,
    tips,
    icon
  },
  "testimonials": testimonials[]->{
    _id,
    author,
    quote
  }
}
`;
export const examPrepProgramsQuery = `
*[_type == "exam_prep"]  {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  deliveryMethod,
  educationLevel,   
  benefits,
  structure,
  "sections": sections[]->{
    _id,
    title,
    content,
    tips,
    icon
  },
  "testimonials": testimonials[]->{
    _id,
    author,
    quote
  }
}
`;
