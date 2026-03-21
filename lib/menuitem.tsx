import { ExamCategory, AcademicService, MenuItem } from "./defination";

export const examAidCategories: ExamCategory = {
  "Certification Exams": ["PMP"],
  "High School Equivalency": ["GED", "HiSET"],
};

export const testPrepCategories: ExamCategory = {
  "High School Equivalency": ["GED", "HiSET"],
  "Certification Exams": ["PMP"],
};

export const academicServices: AcademicService[] = [
  // { name: "Assignment Help", href: "/academic/assignment-help" },
  { name: "Online Tutoring Services", href: "/academic/tutoring" },
  // { name: "Class Assistant", href: "/academic/class-assistant" },
];

// Helper function to convert ExamCategory to SubMenuItem[]
const categoryToSubmenu = (categories: ExamCategory, basePath: string) => {
  return Object.entries(categories).flatMap(([group, items]) => [
    { name: group, href: "#", group }, // Group header
    ...items.map((item) => ({
      name: item,
      href: `${basePath}/${item
        .toLowerCase()
        // .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")}`,
      group,
    })),
  ]);
};

export const MenuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Academic",
    href: "#",
    submenu: academicServices,
  },
  {
    name: "Test Prep",
    href: "/test-prep",
    submenu: categoryToSubmenu(testPrepCategories, "/test-prep"),
  },
  {
    name: "Proctored Exam Help",
    href: "/exam-help",
    submenu: categoryToSubmenu(examAidCategories, "/exam-help"),
  },
  { name: "Blog", href: "/blog" },
  { name: "How It Works", href: "/how-it-works" },
];
