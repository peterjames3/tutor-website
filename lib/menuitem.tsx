import { ExamCategory, AcademicService, MenuItem } from "./defination";

export const examAidCategories: ExamCategory = {
  "Certification Exams": [
    {
      name: "Take PMP Exam for Me",
      slug: "pay-someone-to-take-my-pmp-exam-for-me",
    },
     {
      name: "Take SHRM Exam for Me",
      slug: "pay-someone-to-take-my-shrm-exam-for-me",
    },
     {
      name: "Take PRINCE2 Exam for Me",
      slug: "pay-someone-to-take-my-prince2-exam-for-me",
    },
  ],
  "High School Level": [
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
  // { name: "Assignment Help", href: "/academic/assignment-help" },
  { name: "Online Class Help", href: "/academic/online-class-help" },
  // { name: "Class Assistant", href: "/academic/class-assistant" },
];


const categoryToSubmenu = (categories: ExamCategory, basePath?: string) => {
  return Object.entries(categories).flatMap(([group, items]) => [
    { name: group, href: "#", group }, // Group header
    ...items.map((item) => {
      // If basePath is provided, prepend it; otherwise use the slug directly
      const href = basePath 
        ? `${basePath}/${item.slug
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, "")}`
        : `/${item.slug}`;
      
      return {
        name: item.name,
        href: href,
        group,
      };
    }),
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
    name: "Proctored Exam Help",
    href: "/proctored-exam-help",
    submenu: categoryToSubmenu(examAidCategories, "/proctored-exam-help"),
  },
  {
   name:"Real Estate Exam Help", href:"/real-estate-exam-help"
  },
  { name:"Faqs", href:"/faq"},
  { name: "Blog", href: "/blog" },
  
];
