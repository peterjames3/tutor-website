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
};

export type ExamPrepFormData = BaseStudentFormData & {
  exam: string;
  subject: string;
  exam_date: string;
};
export type TutoringFormData = BaseStudentFormData & {
  subject_help: string;
  subject: string;
  exam_date: string;
  support_type: "Tutoring";
};
export type EndToEndSupportFormData = BaseStudentFormData & {
  subject: string;
  exam: string;
  exam_date: string;
  support_type: "End-to-End Exam Support";
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
  "exam-prep",
  "End-to-End Exam Support",
]);

export const BaseFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email({ message: "Invalid email address format" }),
  phone_number: z.string().min(1, "Phone number is required"),
  level: studentLevelEnum,
});

export const ExamPrepFormSchema = BaseFormSchema.extend({
  exam: z.string().min(1, "Exam is required"),
  subject: z.string().min(1, "Subject is required"),
  exam_date: z.string().min(1, "Exam date is required"),
  assistant: z.string(),
  status: studentStatusEnum,
});

export const TutoringFormSchema = BaseFormSchema.extend({
  subject_help: z.string().min(1, "Subject help is required"),
  subject: z.string().min(1, "Subject is required"),
  exam_date: z.string().min(1, "Exam date is required"),
  support_type: supportTypeEnum,
  assistant: z.string(),
  status: studentStatusEnum,
});

export const EndToEndSupportFormSchema = BaseFormSchema.extend({
  subject: z.string().min(1, "Subject is required"),
  exam: z.string().min(1, "Exam is required"),
  exam_date: z.string().min(1, "Exam date is required"),
  support_type: supportTypeEnum,
  assistant: z.string(),
  status: studentStatusEnum,
});
