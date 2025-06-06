export interface TestPrepProgram {
  name: string;
  slug: string;
  banner: string;
  category: string;
  duration: string;
  description: string;
  benefit?: string;
}

export const TEST_PREP_PROGRAMS: TestPrepProgram[] = [
  {
    name: "PSAT",
    slug: "psat",
    banner: "LiveOnline",
    category: "High School",
    duration: "4-week prep plan",
    description:
      "Preliminary SAT – practice test for the SAT and entry for National Merit Scholarships.",
    benefit: "Helps build familiarity with SAT structure and pacing.",
  },
  {
    name: "ISEE",
    slug: "isee",
    banner: "LiveOnline",
    category: "K-12",
    duration: "Flexible schedule",
    description:
      "Independent School Entrance Exam – test prep to gain admission into private middle/high schools.",
    benefit: "Master verbal, math, and reasoning skills.",
  },
  {
    name: "ACT",
    slug: "act",
    banner: "LiveOnline",
    category: "College Entrance",
    duration: "6-week bootcamp",
    description:
      "American College Testing – tailored strategies to maximize scores across all sections.",
    benefit: "Boost college admission chances.",
  },
  {
    name: "GRE",
    slug: "gre",
    banner: "LiveOnline",
    category: "Graduate",
    duration: "8-week intensive",
    description:
      "Graduate Record Examination – math and verbal prep for grad school admissions.",
    benefit: "Achieve a competitive grad school score.",
  },
  {
    name: "ADAT",
    slug: "adat",
    banner: "LiveOnline",
    category: "Professional",
    duration: "Flexible prep",
    description:
      "Advanced Dental Admission Test – prep for dental program applications.",
    benefit: "Strengthen biomedical and clinical knowledge.",
  },
  {
    name: "AP",
    slug: "ap",
    banner: "LiveOnline",
    category: "High School",
    duration: "Course-aligned",
    description:
      "Advanced Placement – improve AP exam performance for college credit.",
    benefit: "Earn college credits while in high school.",
  },
  {
    name: "GMAT",
    slug: "gmat",
    banner: "LiveOnline",
    category: "Graduate",
    duration: "6-week program",
    description:
      "Graduate Management Admission Test – prep for MBA and business school applications.",
    benefit: "Master quantitative and verbal reasoning.",
  },
  {
    name: "MAP",
    slug: "map",
    banner: "LiveOnline",
    category: "K-12",
    duration: "Adaptive prep",
    description:
      "Measure of Academic Progress – customized preparation for growth-based assessments.",
    benefit: "Track and improve learning progress.",
  },
  {
    name: "LSAT",
    slug: "lsat",
    banner: "LiveOnline",
    category: "Graduate",
    duration: "6-week strategy course",
    description:
      "Law School Admission Test – prep for reading comprehension and logical reasoning.",
    benefit: "Ace logic games and boost law school chances.",
  },
  {
    name: "Accuplacer",
    slug: "accuplacer",
    banner: "LiveOnline",
    category: "College Placement",
    duration: "Self-paced",
    description: "Placement exam prep to assess college course readiness.",
    benefit: "Ensure you're placed in the right level.",
  },
  {
    name: "PARCC",
    slug: "parcc",
    banner: "LiveOnline",
    category: "K-12",
    duration: "By grade level",
    description:
      "Partnership for Assessment of Readiness for College and Careers.",
    benefit: "Support for Common Core standards.",
  },
  {
    name: "MCAT",
    slug: "mcat",
    banner: "LiveOnline",
    category: "Professional",
    duration: "10-week prep",
    description:
      "Medical College Admission Test – full subject review and practice exams.",
    benefit: "Thorough science and reasoning mastery.",
  },
  {
    name: "HSPT",
    slug: "hspt",
    banner: "LiveOnline",
    category: "K-12",
    duration: "4-week prep",
    description:
      "High School Placement Test – prep for Catholic high school entrance.",
    benefit: "Targeted review of key academic skills.",
  },
  {
    name: "TOEFL",
    slug: "toefl",
    banner: "LiveOnline",
    category: "Language Proficiency",
    duration: "6-week course",
    description:
      "Test of English as a Foreign Language – reading, writing, listening, and speaking practice.",
    benefit: "Prove your English language skills.",
  },
  {
    name: "MTTLE",
    slug: "mttle",
    banner: "LiveOnline",
    category: "Teacher Certification",
    duration: "Flexible",
    description: "Missouri Teacher Tests – support for educator certification.",
    benefit: "Ace your teaching credential exam.",
  },
  {
    name: "NMSQT",
    slug: "nmsqt",
    banner: "LiveOnline",
    category: "High School",
    duration: "Short term",
    description:
      "National Merit Scholarship Qualifying Test – prep for scholarship qualification.",
    benefit: "Boost chances for scholarship awards.",
  },
  {
    name: "BTECs",
    slug: "btecs",
    banner: "LiveOnline",
    category: "Vocational",
    duration: "Course-based",
    description:
      "Business and Technology Education Council – test prep support for applied learning.",
  },
  {
    name: "Series 7, 3, 6, 63, 65, 66",
    slug: "series-exams",
    banner: "LiveOnline",
    category: "Financial Licensing",
    duration: "Varies by exam",
    description:
      "Securities licensing exams – prep for FINRA/NASAA certifications.",
    benefit: "Pass your licensing exams with confidence.",
  },
  {
    name: "SAT",
    slug: "sat",
    banner: "LiveOnline",
    category: "College Entrance",
    duration: "6-week intensive",
    description:
      "Scholastic Assessment Test – math, reading, and writing prep for college entry.",
    benefit: "Boost your score for top universities.",
  },
  {
    name: "UKCAT",
    slug: "ukcat",
    banner: "LiveOnline",
    category: "Professional",
    duration: "Focused program",
    description:
      "UK Clinical Aptitude Test – UK medical and dental school admission support.",
    benefit: "Strengthen decision-making and reasoning skills.",
  },
  {
    name: "IB",
    slug: "ib",
    banner: "LiveOnline",
    category: "High School",
    duration: "Subject-aligned",
    description:
      "International Baccalaureate – prep for high academic performance.",
  },
  {
    name: "BMAT",
    slug: "bmat",
    banner: "LiveOnline",
    category: "Professional",
    duration: "8-week program",
    description:
      "BioMedical Admissions Test – prep for UK medical and biomedical schools.",
  },

  {
    name: "TEAS",
    slug: "teas",
    banner: "LiveOnline",
    category: "Nursing",
    duration: "Prep at your pace",
    description:
      "Test of Essential Academic Skills – entry exam support for nursing programs.",
  },
  {
    name: "HesiPN",
    slug: "hesipn",
    banner: "LiveOnline",
    category: "Nursing",
    duration: "Comprehensive review",
    description:
      "Health Education Systems Inc. Practical Nurse – prepare for PN entrance testing.",
  },
  {
    name: "AttTeas",
    slug: "attteas",
    banner: "LiveOnline",
    category: "Nursing",
    duration: "Nursing school prep",
    description: "ATI TEAS test – prep for nursing program entry.",
  },
  {
    name: "GED",
    slug: "ged",
    banner: "LiveOnline",
    category: "High School Equivalency",
    duration: "Flexible learning",
    description:
      "General Educational Development – high school diploma equivalent prep.",
  },
  {
    name: "SIE",
    slug: "sie",
    banner: "LiveOnline",
    category: "Financial Licensing",
    duration: "Structured path",
    description: "Securities Industry Essentials – entry-level FINRA prep.",
  },
];
