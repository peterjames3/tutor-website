import { defineType } from "sanity";

export const ContentSectionWithImageType = defineType({
 name: 'contentSectionWithImage',
  title: 'Content Section with Image',
  type: 'object',
  fields: [
    {
      name: 'sectionId',
      title: 'Section ID (for anchor links)',
      type: 'string',
      description: 'e.g. "what-is-hiset" → links to #what-is-hiset',
    },
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading (optional)',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'blockContent', // portable text with inline images supported
    },
    // ── Section image ──
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: { hotspot: true }, // smart cropping in Sanity studio
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for screen readers and SEO',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption (optional)',
        },
      ],
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'No image', value: 'none' },
        ],
        layout: 'radio',
      },
      initialValue: 'right',
    },
    {
      name: 'imageSize',
      title: 'Image Column Width',
      type: 'string',
      options: {
        list: [
          { title: '1/3', value: '33' },
          { title: '1/2', value: '50' },
          { title: '2/3', value: '66' },
        ],
        layout: 'radio',
      },
      initialValue: '50',
    },
    {
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'string',
      description: 'e.g. #ffffff, #f8f9fa',
    },
    {
      name: 'ctaButton',
      title: 'CTA Button (optional)',
      type: 'object',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'href', type: 'string', title: 'URL' },
        {
          name: 'variant',
          type: 'string',
          options: { list: ['primary', 'secondary', 'outline'], layout: 'radio' },
          initialValue: 'primary',
        },
      ],
    },
  ],
 
  preview: {
    select: { title: 'heading', media: 'image', pos: 'imagePosition' },
    prepare({ title, media, pos }) {
      return { title: `Content — ${title}`, subtitle: `Image: ${pos}`, media }
    },
  },
});
