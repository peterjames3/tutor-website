// schemas/objects/certCompareSection.ts
import { defineField, defineType } from "sanity";

/**
 * Page-builder section that renders a live certification comparison table
 * (cost, difficulty, salary, renewal, domains) fetched client-side from
 * GET /certifications/compare?slugs=a,b,c. Sanity only stores which
 * certs to compare — all detail data comes from the API.
 */
export const certCompareSectionType = defineType({
  name: "certCompareSection",
  title: "Certification Comparison Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Optional heading shown above the comparison table.",
    }),
    defineField({
      name: "certSlugs",
      title: "Certification Slugs",
      description:
        'Slugs from the certifications API to compare, e.g. "comptia-security-plus", "cissp", "cisa". Choose 2–4.',
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(4)
          .error("Select between 2 and 4 certifications to compare."),
    }),
  ],
  preview: {
    select: { slugs: "certSlugs", heading: "heading" },
    prepare({ slugs, heading }) {
      const list =
        Array.isArray(slugs) && slugs.length ? slugs.join(" vs ") : null;
      return {
        title:
          heading ||
          (list ? `Compare: ${list}` : "Cert comparison (no slugs set)"),
        subtitle: heading && list ? list : undefined,
      };
    },
  },
});
