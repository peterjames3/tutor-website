import { z } from "zod";

//clean extraction of common fields and the specialized form types using TypeScript. This helps you stay DRY and makes your form components reusable and maintainable.

export type BaseStudentFormData = {
  id?: number;
  name: string;
  email: string;
  phone_number: string;
  level: "High School" | "Undergraduate" | "Graduate" | "Professional";
  assistant?: string;
  status?: "Pending" | "In Progress" | "Completed";
  support_type: "Exam Prep" | "Tutoring" | "End to End Exam Support";
};

export type ExamPrepFormData = BaseStudentFormData & {
  exam: string;
  subject: string;
  exam_date: string;
};
export type TutoringFormData = BaseStudentFormData & {
  subject: string;
  exam_date: string;
};
export type EndToEndSupportFormData = BaseStudentFormData & {
  subject: string;
  exam: string;
  exam_date: string;
};

export const studentLevelEnum = z.enum([
  "High School",
  "Undergraduate",
  "Graduate",
  "Professional",
]);
export const studentStatusEnum = z.enum([
  "Pending",
  "In Progress",
  "Completed",
]);
export const supportTypeEnum = z.enum([
  "Tutoring",
  "Exam Prep",
  "End to End Exam Support",
]);

export type FormData =
  | ExamPrepFormData
  | TutoringFormData
  | EndToEndSupportFormData;
export const BaseFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email({ message: "Invalid email address format" }),
  phone_number: z.string().min(1, "Phone number is required"),
  level: studentLevelEnum,
});
export const ExamPrepFormSchema = BaseFormSchema.extend({
  exam: z.string().min(1, "Exam is required"),
  subject: z.string().min(1, "Subject is required"),
  exam_date: z.string().refine(
    (value) => {
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
    { message: "Date must be in the future" }
  ),
  assistant: z.string().default("Liam Martin"),
  status: studentStatusEnum.default("Pending"),
  support_type: supportTypeEnum.default("Exam Prep"),
});

export const TutoringFormSchema = BaseFormSchema.extend({
  subject: z.string().min(1, "Subject is required"),
  exam_date: z.string().refine(
    (value) => {
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
    { message: "Date must be in the future" }
  ),
  support_type: supportTypeEnum.default("Tutoring"),
  assistant: z.string().default("Liam Martin"),
  status: studentStatusEnum.default("Pending"),
});

export const EndToEndSupportFormSchema = BaseFormSchema.extend({
  subject: z.string().min(1, "Subject is required"),
  exam: z.string().min(1, "Exam is required"),
  exam_date: z.string().refine(
    (value) => {
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    },
    { message: "Date must be in the future" }
  ),
  support_type: supportTypeEnum.default("End to End Exam Support"),
  assistant: z.string().default("Liam Martin"),
  status: studentStatusEnum.default("Pending"),
});
