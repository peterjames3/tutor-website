import { defineType, defineField, defineArrayMember } from "sanity";

/**
 * Keyword Expound Section
 * A compelling keyword expound  section to start covering our seo key words
 */
export const KeyWordExpoundType = defineType({
  name: "keyWordExpound",
  title: "keyword Expound — Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID (for anchor links)",
      type: "string",
      description: 'e.g. "pmp-exam-help-hero" → links to #pmp-exam-help-hero',
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description:
        "e.g., 'PMP Exam Help – Pass Your PMP Certification With Confidence'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlightedText",
      title: "Highlighted Text",
      type: "string",
      description: "Text to highlight in the heading (e.g., 'PMP Exam Help')",
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      description: "Main paragraph(s) of copy",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "string",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ── CTA Buttons ──
    defineField({
      name: "primaryCTA",
      title: "Primary CTA Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          type: "string",
          title: "Label",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "href",
          type: "string",
          title: "URL",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // ── Feature Tags ──
    defineField({
      name: "featureTags",
      title: "Feature Tags",
      type: "array",
      description:
        "Additional features shown as tags (e.g., '180 Questions', '230 Minutes', '3 Domains')",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Tag Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "color",
              title: "Tag Color",
              type: "string",
              options: {
                list: [
                  { title: "Blue", value: "blue" },
                  { title: "Green", value: "green" },
                  { title: "Purple", value: "purple" },
                  { title: "Orange", value: "orange" },
                  { title: "Red", value: "red" },
                  { title: "Teal", value: "teal" },
                ],
              },
              initialValue: "blue",
            }),
          ],
          preview: {
            select: { title: "label" },
          },
        }),
      ],
    }),
    // ── Image ──
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Describe the image for screen readers and SEO",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "No image", value: "none" },
        ],
        layout: "radio",
      },
      initialValue: "right",
    }),
    defineField({
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
      description: "e.g., #ffffff, #f8f9fa, #f0fdf4",
      initialValue: "#ffffff",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
      stats: "keyStats",
    },
    prepare({ title, media }) {
      return {
        title: `PMP Hero — ${title || "Untitled"}`,
        // subtitle: `${stats?.length || 0} trust signals`,
        media,
      };
    },
  },
});

export const keyWordExpoundSchemaTypes = [KeyWordExpoundType];
export default KeyWordExpoundType;
