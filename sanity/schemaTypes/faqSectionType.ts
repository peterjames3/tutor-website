import { defineType } from "sanity";

export const FaqSectionType = defineType({
name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subheading', title: 'Subheading (optional)', type: 'string' },
    {
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            {
              name: 'answer',
              title: 'Answer',
              type: 'blockContent', // supports links, bold, lists in answers
            },
            {
              name: 'category',
              title: 'Category (for grouping)',
              type: 'string',
              options: {
                list: [
                  { title: 'Exam Support', value: 'exam-support' },
                  { title: 'Security & Confidentiality', value: 'security' },
                  { title: 'Technical Requirements', value: 'technical' },
                  { title: 'General', value: 'general' },
                ],
              },
            },
          ],
          preview: {
            select: { title: 'question', subtitle: 'category' },
          },
        },
      ],
    },
    {
      name: 'ctaBlock',
      title: 'Bottom CTA Block (optional)',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Text' },
        { name: 'buttonLabel', type: 'string', title: 'Button Label' },
        { name: 'buttonHref', type: 'string', title: 'Button URL' },
      ],
    },
  ],
 
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: `FAQ — ${title}` }
    },
  },
});
