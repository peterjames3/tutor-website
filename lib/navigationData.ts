import type { ExamCategory, AcademicService } from "./defination";

export const examAidCategories: ExamCategory = {
  "Certification Exams": ["PMP"],

  "High School Equivalency": ["GED", "HiSET"],
};

export const testPrepCategories: ExamCategory = {
  "High School Equivalency": ["GED", "HiSET"],
  Certificate: ["PMP"],
};

export const academicServices: AcademicService[] = [
  { name: "Online Tutoring Services", href: "/academic/online-tutoring" },
];
