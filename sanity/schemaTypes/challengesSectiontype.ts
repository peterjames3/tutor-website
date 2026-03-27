import { defineType } from "sanity";

export const ChallengesSectionType = defineType({
  name: "challengesSection",
  title: "Challenges Section",
  type: "object",
  fields: [
    { name: "heading", title: "Heading", type: "string" },
    { name: "intro", title: "Intro Paragraph", type: "text" },
    {
      name: "challenges",
      title: "Challenge Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Challenge Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            // ── Icon per challenge card ──
            {
              name: "icon",
              title: "Icon (SVG or PNG)",
              type: "image",
              options: { hotspot: false },
              fields: [{ name: "alt", type: "string", title: "Alt text" }],
            },
          ],
          preview: {
            select: { title: "title", media: "icon" },
          },
        },
      ],
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    },
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: `Challenges — ${title}` };
    },
  },
});
