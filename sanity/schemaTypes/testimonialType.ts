import { defineField, defineType } from "sanity";

export const TestimonialsType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "exam",
      title: "Author",
      type: "reference",
      to: [{ type: "exam" }],
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "quote",
    },
  },
});
