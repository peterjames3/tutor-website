import { defineType } from "sanity";

export const WhyChooseUsType = defineType({
 name: 'whyChooseUsSection',
  title: 'Why Choose Us Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subheading', title: 'Subheading (optional)', type: 'string' },
    { name: 'intro', title: 'Intro Paragraph', type: 'text' },
    {
      name: 'reasons',
      title: 'Reasons / Feature Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            // ── Icon per reason block ──
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: false },
              fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
            },
          ],
          preview: {
            select: { title: 'title', media: 'icon' },
          },
        },
      ],
    },
    // ── Optional background image for the section ──
    {
      name: 'backgroundImage',
      title: 'Background Image (optional)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
  ],
 
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: `Why Choose Us — ${title}` }
    },
  },
});
