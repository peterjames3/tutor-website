import { defineField, defineType } from "sanity";
export const examprepType = defineType({
  name: "exam_prep",
  title: "Exam Prep",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
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
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "deliveryMethod",
      title: "Delivery Method",
      type: "string",
      options: {
        list: [
          { title: "Online", value: "online" },
          { title: "In-Person", value: "in_person" },
          { title: "Both", value: "both" },
        ],
        layout: "radio",
      },
      initialValue: "online",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "educationLevel",
      title: "Education Level",
      type: "string",
      options: {
        list: [
          { title: "High School", value: "high_school" },
          { title: "College Entrance", value: " college_entrance" },
          { title: "Nursing Entry program", value: "nursing_entry_program" },
          { title: "Pre-Dental School", value: "pre-dental students" },
          { title: "Pre-Medical School", value: "pre-medical students" },
          { title: "Undergraduate", value: "undergraduate" },
          { title: "Graduate", value: "graduate" },
          { title: "Professional", value: "professional" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "benefits",
      title: "Exam Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: "List how passing this exam unlocks opportunities",
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
