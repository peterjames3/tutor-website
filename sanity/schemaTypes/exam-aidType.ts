import { defineField, defineType } from "sanity";
export const examaidType = defineType({
  name: "exam",
  title: "Exam Aid",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "title",
      title: "Exam Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "structure",
      title: "Exam Structure",
      type: "array",
      of: [{ type: "string" }],
      description: "List the sections/timing of the exam",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "reference", to: [{ type: "section" }] }],
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
    },
  },
});
