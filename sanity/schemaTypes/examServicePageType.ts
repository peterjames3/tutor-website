import { defineType } from "sanity";

export const ExamServicePageType = defineType({
  name: "examServicePage",
  title: "Exam Service Page",
  type: "document",
  fields: [
    // ── SEO ──
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Shown in browser tab and Google results (~60 chars)",
      validation: (Rule) => Rule.max(100),
    },
    {
      name: "seoDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Google snippet (~155 chars)",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "ogImage",
      title: "Social Share Image (OG Image)",
      type: "image",
      description: "Used when shared on social media (1200×630px recommended)",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "seoTitle", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    // ── Page sections (page builder) ──
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "hero" },
        { type: "contentSectionWithImage" },
        { type: "whyWeLead" },
        { type: "keyWordExpound" },
        { type: "examStructureSection" },
        { type: "certOverviewSection" },
        { type: "certCompareSection" },
        { type: "faqSection" },
      ],
    },
  ],
  preview: {
    select: { title: "seoTitle", slug: "slug.current" },
    prepare({ title, slug }) {
      return { title, subtitle: `/${slug}` };
    },
  },
});
