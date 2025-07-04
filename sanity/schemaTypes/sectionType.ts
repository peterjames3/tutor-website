import { defineField, defineType } from "sanity";
export const sectionType = defineType({
  name: "section",
  title: "Exam Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Sample Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tips",
      title: "Tips",
      type: "array",
      of: [{ type: "string" }],
      description: "Add test-taking tips for this section",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Math", value: "math" },
          { title: "Reading", value: "reading" },
          { title: "Writing", value: "writing" },
          { title: "Science", value: "science" },
          { title: "Verbal", value: "verbal" },
          { title: "Quantitative", value: "quantitative" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "content",
    },
  },
});
