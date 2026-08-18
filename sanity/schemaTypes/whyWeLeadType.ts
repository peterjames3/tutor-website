import { defineType, defineField, defineArrayMember } from "sanity";

/**
 * Why We Lead Section — PMP Exam Help Services
 * A feature-rich section highlighting key benefits and trust signals
 */
export const WhyWeLeadType = defineType({
  name: "whyWeLead",
  title: "Why We Lead — PMP Exam Help Services",
  type: "object",
  fields: [
    defineField({
      name: "sectionId",
      title: "Section ID (for anchor links)",
      type: "string",
      description: 'e.g. "why-we-lead" → links to #why-we-lead',
    }),
    defineField({
      name: "heading",
      title: "Section Heading",
      type: "string",
      description: "e.g., 'Why We Lead in PMP Exam Help Services'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading (optional)",
      type: "string",
      description: "A brief description below the heading",
    }),
    
    // ── Benefit Cards ──
    defineField({
      name: "benefitCards",
      title: "Benefit Cards",
      type: "array",
      description: "The main benefit cards displayed in a grid",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Card Description (subtitle)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "content",
              title: "Card Content",
              type: "text",
              description: "Detailed description of this benefit",
              rows: 3,
              validation: (Rule) => Rule.required(),
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
              name: "iconColor",
              title: "Icon Color",
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
            defineField({
              name: "link",
              title: "Link (optional)",
              type: "string",
              description: "URL to learn more about this benefit",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              icon: "icon",
            },
            prepare({ title, subtitle, icon }) {
              return {
                title: `${icon || "📌"} ${title}`,
                subtitle: subtitle,
              };
            },
          },
        }),
      ],
    }),
    // ── Trust Badges / Stats ──
    defineField({
      name: "trustBadges",
      title: "Trust Badges / Stats",
      type: "array",
      description: "Key statistics shown at the bottom of the section",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Stat Value",
              type: "string",
              description: "e.g., '200+', '99%', '24/7'",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Stat Label",
              type: "string",
              description: "e.g., 'PMPs Passed', 'Pass Rate'",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Users", value: "Users" },
                  { title: "Award", value: "Award" },
                  { title: "Clock", value: "Clock" },
                  { title: "ShieldCheck", value: "ShieldCheck" },
                  { title: "Target", value: "Target" },
                  { title: "CheckCircle", value: "CheckCircle" },
                ],
              },
              initialValue: "Users",
            }),
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "label",
              icon: "icon",
            },
            prepare({ title, subtitle, icon }) {
              return {
                title: `${icon || "📊"} ${title}`,
                subtitle: subtitle,
              };
            },
          },
        }),
      ],
    }),
    // ── Footer Note ──
    defineField({
      name: "footerNote",
      title: "Footer Note (optional)",
      type: "string",
      description:
        "e.g., 'Full coverage of all 3 PMP domains — People (42%), Process (50%), and Business Environment (8%)'",
    }),
    defineField({
      name: "backgroundColor",
      title: "Section Background Color",
      type: "string",
      description: "e.g., #ffffff, #f8f9fa, #f0fdf4",
      initialValue: "#ffffff",
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
  ],
  preview: {
    select: {
      title: "heading",
      benefits: "benefitCards",
      badges: "trustBadges",
    },
    prepare({ title, benefits, badges }) {
      return {
        title: `Why We Lead — ${title || "Untitled"}`,
        subtitle: `${benefits?.length || 0} benefits, ${badges?.length || 0} stats`,
      };
    },
  },
});

export const whyWeLeadSchemaTypes = [WhyWeLeadType];
export default WhyWeLeadType;
