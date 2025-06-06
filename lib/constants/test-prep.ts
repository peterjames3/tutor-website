export type TestService = {
  id: string;
  name: string;
  description: string;
  sections: {
    title: string;
    content: string[];
    tips?: { text: string; checked: boolean }[];
    sample?: string;
  }[];
  testimonials: {
    name: string;
    quote: string;
  }[];
  services: {
    title: string;
    description: string;
    features: string[];
  }[];
};

export const TEST_SERVICES: Record<string, TestService> = {
  psat: {
    id: "psat",
    name: "PSAT",
    description: "Get the Digital PSAT® prep and Proctored Support you need",
    sections: [
      {
        title: "Math",
        content: [],
        sample: "If ( x^2 = 3x - 10 )",
        tips: [
          { text: "Remember to check all answer choices", checked: false },
          { text: "Choose the most concise answer", checked: false },
        ],
      },
      {
        title: "Writing Test",
        content: ["The writer wants to emphasize..."],
        tips: [{ text: "Look for the most concise answer", checked: false }],
      },
    ],
    testimonials: [
      {
        name: "Alice K",
        quote:
          "I like the clarity and meticulous nature of the course presentation... Thanks. I passed my exam today!",
      },
    ],
    services: [
      {
        title: "Proctored Exam Support",
        description: "We handle proctored exams for you",
        features: ["Available 24/7", "Confidential service"],
      },
    ],
  },
  isee: {
    id: "isee",
    name: "ISEE",
    description: "Boost Your Score on the ISEE with Expert Guidance",
    sections: [
      {
        title: "What is the ISEE?",
        content: [
          "The ISEE is a standardized test for school admissions",
          "Three levels: Lower, Middle, and Upper",
        ],
      },
    ],
    testimonials: [
      {
        name: "Emily Thompson",
        quote: "The personalized study plan was a game changer for me...",
      },
    ],
    services: [
      {
        title: "Personalized Tutoring",
        description: "Custom learning plans for each student",
        features: ["1-on-1 sessions", "Score improvement guarantee"],
      },
    ],
  },
};
