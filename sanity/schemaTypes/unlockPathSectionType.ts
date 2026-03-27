import { defineType } from "sanity";

export const UnlockPathSectionType = defineType({
name: 'unlockPathSection',
  title: 'Unlock Path Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subheading', title: 'Subheading', type: 'string' },
    {
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            // ── Icon or illustration per card ──
            {
              name: 'icon',
              title: 'Icon / Illustration',
              type: 'image',
              options: { hotspot: false },
              fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
            },
            {
              name: 'accentColor',
              title: 'Card Accent Color',
              type: 'string',
              description: 'Hex color for card border or background',
            },
          ],
          preview: {
            select: { title: 'title', media: 'icon' },
          },
        },
      ],
    },
    // ── Large decorative/background image on the right side ──
    {
      name: 'sideImage',
      title: 'Side Decorative Image (right column)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt text' },
        { name: 'caption', type: 'string', title: 'Caption (optional)' },
      ],
    },
  ],
 
  preview: {
    select: { title: 'heading', media: 'sideImage' },
    prepare({ title, media }) {
      return { title: `Unlock Path — ${title}`, media }
    },
  },
});
