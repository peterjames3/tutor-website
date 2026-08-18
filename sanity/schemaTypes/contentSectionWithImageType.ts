import { defineType, defineField, defineArrayMember } from "sanity";

export const ContentSectionWithImageType = defineType({
  name: "contentSectionWithImage",
  title: "Content Section with Image",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID (for anchor links)",
      type: "string",
      description: 'e.g. "what-is-pmp-exam" → links to #what-is-pmp-exam',
    }),
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading (optional)",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
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
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        }),
      ],
    }),
    // ── Section image ──
    defineField({
      name: "image",
      title: "Section Image",
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
        defineField({
          name: "caption",
          type: "string",
          title: "Caption (optional)",
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
      name: "imageSize",
      title: "Image Column Width",
      type: "string",
      options: {
        list: [
          { title: "1/3", value: "33" },
          { title: "1/2", value: "50" },
          { title: "2/3", value: "66" },
        ],
        layout: "radio",
      },
      initialValue: "50",
    }),
    defineField({
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
      description: "e.g. #ffffff, #f8f9fa",
    }),
    defineField({
      name: "keyPoints",
      title: "Key Points (Bullet List)",
      type: "array",
      description: "Important points to highlight in the section",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Point Title",
              type: "string",
              description: "e.g., Insufficient Time",
            }),
            defineField({
              name: "description",
              title: "Point Description",
              type: "text",
              description:
                "e.g., Students often fail because they don't have enough time",
              rows: 2,
            }),
            defineField({
              name: "link",
              title: "Link (optional)",
              type: "string",
              description: "Internal or external URL",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        }),
      ],
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Button (optional)",
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
        defineField({
          name: "variant",
          type: "string",
          options: {
            list: ["primary", "secondary", "outline"],
            layout: "radio",
          },
          initialValue: "primary",
        }),
      ],
    }),
    // ── Optional bottom block: full-width bullet highlights ──
    defineField({
      name: "help",
      title: "Bottom Bullet Block (optional, full width)",
      description:
        'Renders full-width below the intro/image row, e.g. "Why Do Students Need PMP Exam Help?"',
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "intro",
          title: "Intro Text",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "bulletPoints",
          title: "Bullet Points",
          type: "array",
          description:
            'Each renders as "• Title: description" on one line',
          of: [
            defineArrayMember({
              type: "object",
              name: "helpBulletPoint",
              fields: [
                defineField({
                  name: "title",
                  title: "Bold Lead-in",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 2,
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "description" },
              },
            }),
          ],
        }),
        defineField({
          name: "closingNote",
          title: "Closing Note (italic)",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "closingCta",
          title: "Closing CTA (optional inline link)",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading", media: "image", pos: "imagePosition" },
    prepare({ title, media, pos }) {
      return {
        title: `PMP Content — ${title || "Untitled"}`,
        subtitle: `Image: ${pos || "none"}`,
        media,
      };
    },
  },
});
