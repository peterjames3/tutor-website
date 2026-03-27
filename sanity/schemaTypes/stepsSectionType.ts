import { defineType } from "sanity";

export const StepsSectionType = defineType({
  name: "stepsSection",
  title: "Steps / Process Section",
  type: "object",
  fields: [
    { name: "heading", title: "Section Heading", type: "string" },
    { name: "subheading", title: "Subheading", type: "string" },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "stepNumber", title: "Step Number", type: "number" },
            {
              name: "label",
              title: 'Step Label (e.g. "Step", "Setup")',
              type: "string",
            },
            { name: "title", title: "Step Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            // ── Optional icon or illustration per step ──
            {
              name: "icon",
              title: "Step Icon / Image",
              type: "image",
              options: { hotspot: false },
              fields: [{ name: "alt", type: "string", title: "Alt text" }],
            },
          ],
          preview: {
            select: { title: "title", subtitle: "stepNumber", media: "icon" },
            prepare({ title, subtitle, media }) {
              return { title, subtitle: `Step ${subtitle}`, media };
            },
          },
        },
      ],
    },
    {
      name: "ctaButton",
      title: "CTA Button (optional)",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "URL" },
      ],
    },
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: `Steps — ${title}` };
    },
  },
});
