export interface ExamAidProgram {
  name: string;
  slug: string;
  banner: string;
  category: string;
  duration: string;
  description: string;
  benefit?: string;
}

export const EXAM_AID_PROGRAMS: ExamAidProgram[] = [
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
  {
    name: "AWS Certified Cloud Practitioner",
    slug: "aws-cloud-practitioner",
    banner: "LiveOnline",
    category: "Cloud Certification",
    duration: "90 minutes",
    description:
      "Entry-level AWS certification – foundational cloud knowledge and services overview.",
    benefit: "Kickstart your cloud career with AWS fundamentals.",
  },
  {
    name: "CompTIA A+",
    slug: "comptia-a-plus",
    banner: "LiveOnline",
    category: "IT Certification",
    duration: "90 minutes per core exam (2 exams)",
    description:
      "Core IT certification – covers hardware, networking, security, and troubleshooting.",
    benefit: "Begin a career in IT support and technical roles.",
  },
  {
    name: "Google Associate Cloud Engineer",
    slug: "google-ace",
    banner: "LiveOnline",
    category: "Cloud Certification",
    duration: "120 minutes",
    description:
      "Prepare for Google Cloud’s ACE certification – deploy, manage, and secure cloud solutions.",
    benefit: "Demonstrate hands-on GCP expertise.",
  },
  {
    name: "(AZ-900)",
    slug: "azure-fundamentals",
    banner: "LiveOnline",
    category: "Cloud Certification",
    duration: "60 minutes",
    description:
      "Introductory Azure certification – core cloud concepts and Azure services.",
    benefit: "Validate foundational cloud skills with Microsoft.",
  },
  {
    name: "(CCNA)",
    slug: "ccna",
    banner: "LiveOnline",
    category: "Networking",
    duration: "120 minutes",
    description:
      "Core networking certification – IP services, network fundamentals, and automation.",
    benefit: "Launch your networking career with CCNA certification.",
  },
  {
    name: " (CCNP)",
    slug: "ccnp",
    banner: "LiveOnline",
    category: "Networking",
    duration: "120 minutes per exam (2–3 exams)",
    description:
      "Advanced networking certification – enterprise infrastructure, routing, switching, and troubleshooting.",
    benefit:
      "Advance your networking career and validate enterprise-level skills.",
  },
  {
    name: " (CCIE)",
    slug: "ccie",
    banner: "LiveOnline",
    category: "Networking",
    duration: "8 hours (Lab Exam) + 120-minute written exam",
    description:
      "Expert-level Cisco certification – complex network infrastructure, design, and troubleshooting.",
    benefit:
      "Establish expert status in networking with Cisco's most prestigious certification.",
  },
  {
    name: "ITIL 4 Foundation",
    slug: "itil-foundation",
    banner: "LiveOnline",
    category: "IT Certification",
    duration: "60 minutes",
    description:
      "Foundation in IT service management – principles, practices, and service value system.",
    benefit:
      "Enhance service management skills and efficiency in IT operations.",
  },
  {
    name: "PRINCE2 Foundation",
    slug: "prince2-foundation",
    banner: "LiveOnline",
    category: "Project Management",
    duration: "60 minutes",
    description:
      "Project management methodology – structured approach for managing projects effectively.",
    benefit:
      "Gain foundational knowledge of PRINCE2 project management methodology.",
  },
  {
    name: "PRINCE2 Practitioner",
    slug: "prince2-practitioner",
    banner: "LiveOnline",
    category: "Project Management",
    duration: "150 minutes",
    description:
      "Application-level PRINCE2 – manage and tailor projects using real-world scenarios.",
    benefit:
      "Apply PRINCE2 principles confidently in real project environments.",
  },
  {
    name: " (PMP)",
    slug: "pmp",
    banner: "LiveOnline",
    category: "Project Management",
    duration: "230 minutes",
    description:
      "Globally recognized project management certification – leadership, planning, and delivery.",
    benefit:
      "Lead successful projects with the world’s top project management credential.",
  },
  {
    name: "(PMI-ACP)",
    slug: "pmi-acp",
    banner: "LiveOnline",
    category: "Project Management",
    duration: "180 minutes",
    description:
      "Agile-focused certification – Scrum, Kanban, Lean, and agile project delivery techniques.",
    benefit: "Showcase your agile project leadership skills across industries.",
  },
  {
    name: " (PMI-RMP)",
    slug: "pmirmp",
    banner: "LiveOnline",
    category: "Project Management",
    duration: "210 minutes",
    description:
      "Specialized certification in identifying, analyzing, and managing project risks.",
    benefit:
      "Elevate your risk management expertise within project environments.",
  },
  {
    name: " (CAPM)",
    slug: "capm",
    banner: "LiveOnline",
    category: "Project Management",
    duration: "180 minutes",
    description:
      "Entry-level PMI certification – project management fundamentals and terminology.",
    benefit: "Start a career in project management with global recognition.",
  },
  {
    name: " (CISA)",
    slug: "cisa",
    banner: "LiveOnline",
    category: "Cybersecurity",
    duration: "240 minutes",
    description:
      "Audit and control certification – information systems auditing, governance, and security.",
    benefit: "Advance your career in IT auditing and risk control.",
  },
  {
    name: "Certified Information Security Manager (CISM)",
    slug: "cism",
    banner: "LiveOnline",
    category: "Cybersecurity",
    duration: "240 minutes",
    description:
      "Security leadership certification – governance, risk, and incident response management.",
    benefit: "Lead enterprise-level information security strategies.",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    slug: "ceh",
    banner: "LiveOnline",
    category: "Cybersecurity",
    duration: "240 minutes",
    description:
      "Ethical hacking certification – penetration testing and vulnerability assessment.",
    benefit: "Develop the skills to think and act like a hacker, legally.",
  },
  {
    name: "Certified in Risk and Information Systems Control (CRISC)",
    slug: "crisc",
    banner: "LiveOnline",
    category: "Cybersecurity",
    duration: "240 minutes",
    description:
      "Risk-focused certification – IT risk identification, evaluation, and response.",
    benefit: "Specialize in enterprise risk management and compliance.",
  },
  {
    name: "AWS Certified Solutions Architect – Professional",
    slug: "aws-solution-architect-professional",
    banner: "LiveOnline",
    category: "Cloud Certification",
    duration: "180 minutes",
    description:
      "Advanced AWS certification – solution design, architecture, and deployment on AWS.",
    benefit: "Design and manage complex AWS solutions at scale.",
  },
  {
    name: "CompTIA Security+",
    slug: "comptia-security-plus",
    banner: "LiveOnline",
    category: "Cybersecurity",
    duration: "90 minutes",
    description:
      "Entry-level cybersecurity certification – threats, vulnerabilities, and risk management.",
    benefit:
      "Start your cybersecurity career with a globally recognized credential.",
  },
  {
    name: "CompTIA Network+",
    slug: "comptia-network-plus",
    banner: "LiveOnline",
    category: "Networking",
    duration: "90 minutes",
    description:
      "Foundational networking certification – network design, configuration, and troubleshooting.",
    benefit: "Build networking skills for IT infrastructure roles.",
  },
  {
    name: "CompTIA Cybersecurity Analyst (CySA+)",
    slug: "comptia-cysa-plus",
    banner: "LiveOnline",
    category: "Cybersecurity",
    duration: "165 minutes",
    description:
      "Behavioral analytics certification – proactive threat detection and response.",
    benefit: "Protect organizations through data-driven security insights.",
  },
  {
    name: "CompTIA PenTest+",
    slug: "comptia-pentest-plus",
    banner: "LiveOnline",
    category: "Cybersecurity",
    duration: "165 minutes",
    description:
      "Hands-on penetration testing certification – planning, scoping, and exploiting vulnerabilities.",
    benefit: "Validate offensive security and ethical hacking skills.",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    slug: "terraform",
    banner: "LiveOnline",
    category: "DevOps & Automation",
    duration: "60 minutes",
    description:
      "Infrastructure as code certification – Terraform basics and provisioning workflows.",
    benefit: "Automate cloud infrastructure using Terraform efficiently.",
  },
  {
    name: " Oracle Database and Cloud",
    slug: "oracle",
    banner: "LiveOnline",
    category: "Cloud Certification",
    duration: "90 minutes",
    description:
      "Intro to Oracle Cloud – compute, storage, networking, and security on OCI.",
    benefit:
      "Develop and manage cloud solutions with Oracle Cloud Infrastructure.",
  },
];
