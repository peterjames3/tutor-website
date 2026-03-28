import type { MetadataRoute } from 'next';
import { client } from "@/sanity/lib/client";
import { examPathsQuery, examServicePathQuery } from "@/sanity/lib/queries";
import { examAidCategories } from "@/lib/menuitem"; // adjust path if needed

const BASE_URL = "https://testhelpnow.com";

// ── Helpers ───────────────────────────────────────────────

// Extract slugs from local category config
const extractCategorySlugs = (categories: typeof examAidCategories) => {
  return Object.values(categories).flatMap((items) =>
    items.map((item) => ({ slug: item.slug })),
  );
};

// Generate entries from slug list
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

// Remove duplicate slugs
const dedupeSlugs = (slugs: { slug: string }[]) => {
  return Array.from(new Map(slugs.map((item) => [item.slug, item])).values());
};

// ── Sitemap ───────────────────────────────────────────────

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch from Sanity
  const [examAidSlugs, examServiceSlugs] = await Promise.all([
    client.fetch<{ slug: string }[]>(examPathsQuery),
    client.fetch<{ slug: string }[]>(examServicePathQuery),
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
      url: `${BASE_URL}/test-prep`, // ✅ single page
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
      url: `${BASE_URL}/academic/tutoring`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
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

  // Combined (local + sanity)
  const examAidEntries = generateDynamicEntries(
    allExamAidSlugs,
    `${BASE_URL}/proctored-exam-help`,
    0.8,
  );

  // Page-builder / high priority pages
  const examServiceEntries = generateDynamicEntries(
    examServiceSlugs,
    `${BASE_URL}/proctored-exam-help`,
    0.9,
  );

  return [...staticPages, ...examAidEntries, ...examServiceEntries];
}
