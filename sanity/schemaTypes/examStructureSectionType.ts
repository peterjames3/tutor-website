import { defineField, defineType, defineArrayMember } from "sanity";

/**
 * Reusable list item for exam structure points
 */
const examStructureListItem = defineType({
  name: "examStructureListItem",
  title: "Exam Structure List Item",
  type: "object",
  fields: [
    defineField({
      name: "point",
      title: "Point",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description (optional)",
      description: "Additional details about this point",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "link",
      title: "Link (optional)",
      description: "Where this list item should navigate to, if anywhere",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "point" },
  },
});

/**
 * An exam structure card containing a title and structured content
 */
const examStructureCard = defineType({
  name: "examStructureCard",
  title: "Exam Structure Card",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Card Title",
      type: "string",
      description: 'e.g., "PMP Exam Domains" or "Exam Format"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "List Items",
      type: "array",
      of: [defineArrayMember({ type: "examStructureListItem" })],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: { title: "title", items: "items" },
    prepare({ title, items }) {
      return {
        title,
        subtitle: `${items?.length || 0} item(s)`,
      };
    },
  },
});

/**
 * Exam Structure Section — left column content with right sidebar cards
 */
const examStructureSection = defineType({
  name: "examStructureSection",
  title: "Exam Structure Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'e.g., "PMP Exam Structure — What You Need to Know"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
      description: "Secondary heading text",
    }),
    defineField({
      name: "body",
      title: "Body Text",
      type: "array",
      description: "Main paragraph(s) of copy explaining the exam structure",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "structureCards",
      title: "Structure Cards (Sidebar)",
      type: "array",
      description: "Information cards shown in the right-hand column",
      of: [defineArrayMember({ type: "examStructureCard" })],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "diagramImage",
      title: "Diagram / Screenshot Image (optional)",
      description: "Optional visual element to enhance the section",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "href",
          title: "Button Link",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading", media: "diagramImage" },
    prepare({ title, media }) {
      return {
        title: `Exam Structure — ${title}`,
        subtitle: "Content-focused section",
        media,
      };
    },
  },
});

export const examStructureSchemaTypes = [
  examStructureListItem,
  examStructureCard,
  examStructureSection,
];

export default examStructureSchemaTypes;
