import { ExamCategory, AcademicService, MenuItem } from "./defination";

export const examAidCategories: ExamCategory = {
  "Certification Exams": [
    "Azure Fundamentals",
    "Google Cloud",
    "Cisco",
    "ITIL",
    "Prince2  Practitioner",

    "PMP",
    "CAPM",
    "CISA",
    "CISM",
    "CEH",
    "CRISC",
    "AWS Solution Architect Professional",
    "CompTIA Security+",
    "CompTIA Network+",
    "CompTIA A+",
    "Cybersecurity Analyst",
    "Pentest+",
    "Terraform",
    "Oracle",
  ],
  "College Level": [
    "DAT",
    "OAT",
    "MCAT",
    "GRE",
    "GED",
    "LSAT",
    "GMAT",
    "PCAT",
    "NCLEX",
    "TOEFL",
    "TEAS",
    "Medical Coding",
    "HesiPn",
    "Series 7",
    "CLEP",
    "CLEID",
    "ACUPLACER",
  ],
  "Grades K-12": ["ACT", "SAT", "AP", "PSAT", "SSAT", "ISEE", "HSPT"],
};

export const testPrepCategories: ExamCategory = {
  "Grades K-8": ["MAP", "TAKS", "AIMS"],
  "Grades 9-12": ["SAT", "PSAT", "ACT", "AP", "SSAT", "ISEE", "HSPT", "GED"],
  Graduate: [
    "DAT",
    "OAT",
    "MCAT",
    "LSAT",
    "GMAT",
    "GRE",
    "PCAT",
    "CLEP",
    "CLEID",
    "ACUPLACER",
    "NCLEX",
    "TOEFL",
    "TEAS",
    "Medical Coding",
    "HesiPn",
    "Series 7",
  ],
};

export const academicServices: AcademicService[] = [
  { name: "Assignment Help", href: "/academic/assignment-help" },
  { name: "Online Tutoring Services", href: "/academic/tutoring" },
  { name: "Class Assistant", href: "/academic/class-assistant" },
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
    name: "Exam Aid",
    href: "/exam-aid",
    submenu: categoryToSubmenu(examAidCategories, "/exam-aid"),
  },
  { name: "Blog", href: "/blog" },
  { name: "How It Works", href: "/how-it-works" },
];
