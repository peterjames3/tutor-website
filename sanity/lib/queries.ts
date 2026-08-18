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

//   Get all exam service page slugs (for generateStaticParams)

export const examServicePathQuery = groq`
  *[_type == "examServicePage" && defined(slug.current)] {
    "slug": slug.current
  }
    
`;

// Get a single exam service page by slug
export const examServicePageQuery = groq`
  *[_type == "examServicePage" && slug.current == $slug][0] {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,

    // OG image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },

    // Page builder sections
    sections[] {
      _type,

      // ── Hero ──────────────────────────────────────────────
      _type == "hero" => {
        preHeading,
        heading,
        accentWord,
        subtext,
        ctaPrimary,
        ctaSecondary,
         "sections": sections[]-> {
          title,
          content,
          tips,
          icon
        },
        "heroImage": heroImage {
          alt,
          "url": asset->url,
          hotspot,
          crop
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        },
        backgroundColor
      },

      // ── Content Section with Image ─────────────────────────
      _type == "contentSectionWithImage" => {
        sectionId,
        heading,
        subheading,
        body, // Portable Text — rendered with <PortableText />
        imagePosition,
        imageSize,
        backgroundColor,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        keyPoints[] {
          title,
          description,
          link
        },
        ctaButton {
          label,
          href,
          variant
        },
    help {
  heading,
  intro,
  bulletPoints[] { title, description },
  closingNote,
  closingCta { label, href }
},
      },

      // ── Why We Lead ───────────────────────────────────
      _type == "whyWeLead" => {
        sectionId,
        heading,
        subheading,
        mainImage,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },


        benefitCards[] {
          title,
          "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
          description,
          content,
          icon,
          iconColor,
          link
        },
        trustBadges[] {
          value,
          label,
          icon
        },
        footerNote,
        backgroundColor,
        ctaButton {
          label,
          href,
          variant
        }
      },

      // ── Keyword Expound Section ────────────────────────
      _type == "keyWordExpound" => {
        sectionId,
        heading,
        highlightedText,
        body, // Portable Text
        primaryCTA {
          label,
          href
        },
        featureTags[] {
          label,
          color
        },
        "image": image {
          alt,
          "url": asset->url,
          hotspot,
          crop
        },
        imagePosition,
        backgroundColor
      },

      // ── Exam Structure Section ──────────────────────────────────
      _type == "examStructureSection" => {
        heading,
        subheading,
        body, // Portable Text
        structureCards[] {
          title,
          badgeColor,
          items[] {
            point,
            description,
            link
          }
        },
        "diagramImage": diagramImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton {
          label,
          href
        }
      },

      // ── Certification Overview Section ──────────────────────────
      _type == "certOverviewSection" => {
        sectionId,
        certSlug
      },

      // ── Certification Comparison Section ────────────────────────
      _type == "certCompareSection" => {
        sectionId,
        heading,
        certSlugs
      },

      // ── FAQ ───────────────────────────────────────────────
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer, // Portable Text
          category
        },
        ctaBlock
      }
    }
  }
`;

// Get all exam service pages (for listing/sitemap)
export const allExamServicePagesQuery = groq`
  *[_type == "examServicePage"] | order(_createdAt desc) {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    }
  }
`;
// Fetch all exam service pages as a lightweight listing
// Used in the "Exams We Support" section on proctored-exam-help and other pages
export const examsWeSupportQuery = groq`
  *[_type == "examServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    // Pull the hero image as the card thumbnail
    "thumbnail": sections[_type == "hero"][0].heroImage {
      alt,
      "url": asset->url
    },
    // Pull the first content section's heading as a short tagline fallback
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;
