import type { MetadataRoute } from "next";

// Test prep pages
const testPrepPages = [
  "DAT",
  "OAT",
  "MCAT",
  "LSAT",
  "GMAT",
  "GRE",
  "PCAT",
  "CLEP",
  "CLEID",
  "ACUPLACER",
  "NCLEX",
  "TOEFL",
  "TEAS",
  "Medical Coding",
  "HesiPn",
  "Series 7",
  "MAP",
  "TAKS",
  "AIMS",
  "SAT",
  "PSAT",
  "ACT",
  "AP",
  "SSAT",
  "ISEE",
  "HSPT",
  "GED",
];

// Exam-aid pages
const examAidPages = [
  "Azure Fundamentals",
  "Google Cloud",
  "Cisco",
  "ITIL",
  "Prince2 Practitioner",
  "PMP",
  "CAPM",
  "CISA",
  "CISM",
  "CEH",
  "CRISC",
  "AWS Solution Architect Professional",
  "CompTIA Security+",
  "CompTIA Network+",
  "CompTIA A+",
  "Terraform",
  "Oracle",
  "Maryland Real Estate License Exam",
  "DAT",
  "OAT",
  "MCAT",
  "GRE",
  "GED",
  "LSAT",
  "GMAT",
  "PCAT",
  "NCLEX",
  "TOEFL",
  "TEAS",
  "Medical Coding",
  "HesiPn",
  "Series 7",
  "CLEP",
  "ACT",
  "SAT",
  "AP",
  "PSAT",
  "SSAT",
  "ISEE",
  "HSPT",
];

// Helper function to generate sitemap entries
function generateSitemapEntries(
  pages: string[],
  baseUrl: string,
  priority = 0.7,
  changeFrequency: MetadataRoute.Sitemap["0"]["changeFrequency"] = "weekly"
) {
  return pages.map((page) => {
    const slug = page.toLowerCase().replace(/\s+/g, "-");
    return {
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://testhelpnow.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://testhelpnow.com/academic/tutoring",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://testhelpnow.com/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://testhelpnow.com/how-it-works",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://testhelpnow.com/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://testhelpnow.com/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const testPrepEntries = generateSitemapEntries(
    testPrepPages,
    "https://testhelpnow.com/test-prep"
  );
  const examAidEntries = generateSitemapEntries(
    examAidPages,
    "https://testhelpnow.com/exam-aid"
  );

  return [...staticPages, ...testPrepEntries, ...examAidEntries];
}
