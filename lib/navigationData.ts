import type { ExamCategory, AcademicService } from "./defination";

export const examAidCategories: ExamCategory = {
  "Certification Exams": [
    {
      name: "Take PMP Exam for Me",
      slug: "pay-someone-to-take-my-pmp-exam-for-me",
    },
  ],
  "High School Equivalency": [
    {
      name: "Take GED Exam for Me",
      slug: "pay-someone-to-take-my-ged-exam-for-me",
    },
    {
      name: "Take HiSET Exam for Me",
      slug: "pay-someone-to-take-my-hiset-exam-for-me",
    },
  ],
};

export const testPrepCategories: ExamCategory = {
   "Certification Exams": [
    {
      name: "Take PMP Exam for Me",
      slug: "pay-someone-to-take-my-pmp-exam-for-me",
    },
  ],
  "High School Equivalency": [
    {
      name: "Take GED Exam for Me",
      slug: "pay-someone-to-take-my-ged-exam-for-me",
    },
    {
      name: "Take HiSET Exam for Me",
      slug: "pay-someone-to-take-my-hiset-exam-for-me",
    },
  ],
};

export const academicServices: AcademicService[] = [
  { name: "Online Tutoring Services", href: "/academic/online-tutoring" },
];
