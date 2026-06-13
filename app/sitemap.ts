import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { examPathsQuery, examServicePathQuery } from "@/sanity/lib/queries";
import { examAidCategories } from "@/lib/menuitem";
import groq from "groq";

const BASE_URL = "https://testhelpnow.com";

// ── Blog Posts Query ───────────────────────────────────────
const blogPathsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current,
    publishedAt
  }
`;

// ── Helpers ───────────────────────────────────────────────

const extractCategorySlugs = (categories: typeof examAidCategories) => {
  return Object.values(categories).flatMap((items) =>
    items.map((item) => ({ slug: item.slug })),
  );
};

function generateDynamicEntries(
  slugs: { slug: string }[],
  baseUrl: string,
  priority = 0.7,
  changeFrequency: MetadataRoute.Sitemap["0"]["changeFrequency"] = "weekly",
): MetadataRoute.Sitemap {
  return slugs.map(({ slug }) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

function generateBlogEntries(
  posts: { slug: string; publishedAt: string }[],
): MetadataRoute.Sitemap {
  return posts.map(({ slug, publishedAt }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: publishedAt ? new Date(publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
}

const dedupeSlugs = (slugs: { slug: string }[]) => {
  return Array.from(new Map(slugs.map((item) => [item.slug, item])).values());
};

// ── Sitemap ───────────────────────────────────────────────

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch from Sanity
  const [examAidSlugs, examServiceSlugs, blogPosts] = await Promise.all([
    client.fetch<{ slug: string }[]>(examPathsQuery),
    client.fetch<{ slug: string }[]>(examServicePathQuery),
    client.fetch<{ slug: string; publishedAt: string }[]>(blogPathsQuery),
  ]);

  // Extract local slugs
  const localExamAidSlugs = extractCategorySlugs(examAidCategories);

  // Merge + dedupe
  const allExamAidSlugs = dedupeSlugs([...localExamAidSlugs, ...examAidSlugs]);

  // ── Static pages ───────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/test-prep`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/proctored-exam-help`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/take-my-hiset-exam-for-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/take-my-ged-exam-for-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/academic/tutoring`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly", // updated to weekly since blog gets new posts
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // ── Dynamic pages ──────────────────────────────────────
  const examAidEntries = generateDynamicEntries(
    allExamAidSlugs,
    `${BASE_URL}/proctored-exam-help`,
    0.8,
  );

  const examServiceEntries = generateDynamicEntries(
    examServiceSlugs,
    `${BASE_URL}/proctored-exam-help`,
    0.9,
  );

  // ── Blog post entries ──────────────────────────────────
  const blogEntries = generateBlogEntries(blogPosts);

 const allEntries = [
  ...staticPages,
  ...examAidEntries,
  ...examServiceEntries,
  ...blogEntries,
];

// Dedupe by URL keeping last occurrence (highest priority)
const deduped = Array.from(
  new Map(allEntries.map((entry) => [entry.url, entry])).values()
);

return deduped;
}

