import { defineType } from "sanity";

export const ExamStructureSectionType = defineType({
 name: 'examStructureSection',
  title: 'Exam Structure Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subheading', title: 'Subheading', type: 'string' },
    {
      name: 'body',
      title: 'Body / Description',
      type: 'blockContent',
    },
    // ── Bullet list of structure points ──
    {
      name: 'structurePoints',
      title: 'Structure Points (bullet list)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'point', title: 'Point', type: 'string' },
          ],
        },
      ],
    },
    // ── Screenshot or diagram on the right ──
    {
      name: 'diagramImage',
      title: 'Diagram / Screenshot Image (right column)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ],
    },
  ],
 
  preview: {
    select: { title: 'heading', media: 'diagramImage' },
    prepare({ title, media }) {
      return { title: `Exam Structure — ${title}`, media }
    },
  },
});
