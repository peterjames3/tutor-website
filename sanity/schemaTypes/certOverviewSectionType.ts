import { defineField, defineType } from "sanity";

/**
 * Page-builder section that renders live certification data
 * (difficulty, domains, cost, renewal) fetched client-side from
 * the certifications API. Sanity only stores which cert to show —
 * all the actual detail data comes from GET /certifications/:slug.
 */
export const certOverviewSectionType = defineType({
  name: "certOverviewSection",
  title: "Certification Overview Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
    }),
    defineField({
      name: "certSlug",
      title: "Certification Slug",
      description:
        'Must match a slug from the certifications API, e.g. "comptia-security-plus"',
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "certSlug" },
    prepare({ title }) {
      return {
        title: title
          ? `Cert overview: ${title}`
          : "Cert overview (no slug set)",
      };
    },
  },
});
