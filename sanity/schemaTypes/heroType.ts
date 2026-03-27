import { defineType } from "sanity";

export const HeroType = defineType({
 name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'preHeading',
      title: 'Pre-heading (small label above h1)',
      type: 'string',
      description: 'e.g. "Pay Someone To Take my"',
    },
    {
      name: 'heading',
      title: 'Main Heading (H1)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'accentWord',
      title: 'Accent / Highlighted Word',
      type: 'string',
      description: 'e.g. "Help" — rendered in brand color',
    },
    {
      name: 'subtext',
      title: 'Subtext / Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'ctaPrimary',
      title: 'Primary CTA Button',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Button Label' },
        { name: 'href', type: 'string', title: 'URL or anchor link' },
      ],
    },
    {
      name: 'ctaSecondary',
      title: 'Secondary CTA Button (optional)',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Button Label' },
        { name: 'href', type: 'string', title: 'URL or anchor link' },
      ],
    },
    // ── Hero image (right side in screenshot) ──
    {
      name: 'heroImage',
      title: 'Hero Image (right column)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    // ── Optional background ──
    {
      name: 'backgroundImage',
      title: 'Background Image (optional)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
    {
      name: 'backgroundColor',
      title: 'Background Color (fallback)',
      type: 'string',
      description: 'Hex or Tailwind class, e.g. #f0f4ff',
    },
  ],
 
  preview: {
    select: { title: 'heading', media: 'heroImage' },
    prepare({ title, media }) {
      return { title: `Hero — ${title}`, media }
    },
  },});
