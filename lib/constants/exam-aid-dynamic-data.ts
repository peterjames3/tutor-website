export type Section = {
  title: string;
  content: string;
  tips?: string[];
};

export type Exam = {
  title: string;
  description: string;
  structure?: string[];
  sections: Section[];
  testimonials: { author: string; quote: string }[];
};

export const examContent: { [key: string]: Exam } = {
  psat: {
    title: "Digital PSAT® Preparation",
    description:
      " Prepare for the PSAT with our comprehensive digital Support you need.",
    sections: [
      {
        title: "Math",
        content: "If x² = 3x - 10...",
        tips: [
          "Remember to check all answer choices",
          "Choose the most concise answer",
        ],
      },
      {
        title: "Writing Test",
        content: "The writer wants to emphasize...",
        tips: ["Look for the most concise answer"],
      },
      {
        title: "Reading",
        content: "The passage suggests that...",
        tips: [
          "Pay attention to the context of the passage",
          "Look for clues in the text to support your answer",
        ],
      },
    ],
    testimonials: [
      {
        author: "Alice K",
        quote:
          "I like the clarity and meticulous nature of the course presentation. I like the fact that the course content and presentation was made using the content of the certification requirements. Great help, reasonably priced compared to the others which I see as rip off. Thanks. I passed my exam today!",
      },
    ],
  },
  isee: {
    title: "ISEE Exam Preparation",
    description: "Boost Your Score on the ISEE with Expert Guidance",
    sections: [
      {
        title: "Quantitative Reasoning",
        content: "Sample: A scientist observes that...",
        tips: ["Focus on data interpretation rather than prior knowledge"],
      },
      {
        title: "Mathematics",
        content: "If x² = 3x - 10...",
        tips: ["Remember to check all answer choices"],
      },
      {
        title: "Verbal Reasoning",
        content: "Sample: BENEVOLENT is to CRUEL as...",
        tips: [
          "Pay attention to word relationships",
          "Look for synonyms or antonyms in the options",
        ],
      },
    ],
    testimonials: [
      {
        author: "Emily Thompson",
        quote: "The personalized study plan was a game changer for me.",
      },
    ],
  },
  act: {
    title: "American College Testing (ACT)",
    description:
      "Master the ACT with expert-led prep and strategic test-taking techniques.",
    structure: [
      "75 English questions in 45 minutes, testing grammar and rhetorical skills",
      "60 Math questions in 60 minutes, covering algebra to trigonometry",
      "40 Reading questions in 35 minutes, focusing on comprehension and analysis",
      "40 Science questions in 35 minutes, requiring data interpretation and reasoning",
      "1 Optional Essay in 40 minutes to showcase your writing ability",
    ],
    sections: [
      {
        title: "Math",
        content: "If f(x) = 2x² − 3x + 5, what is the value of f(4)?",
        tips: [
          "Know key formulas for algebra, geometry, and trigonometry.",
          "Show your work to avoid simple mistakes and track your reasoning.",
          "Use substitution and plug in values when dealing with functions.",
          "Watch out for common traps in word problems—read carefully.",
        ],
      },

      {
        title: "English",
        content: "The writer wants to emphasize...",
        tips: ["Look for the most concise answer"],
      },
      {
        title: "Science",
        content:
          "Based on the data in the table, what conclusion can be drawn about the relationship between temperature and reaction rate?",
        tips: [
          "Carefully analyze graphs, tables, and charts before answering.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Alice K",
        quote:
          "I like the clarity and meticulous nature of the course presentation. I like the fact that the course content and presentation was made using the content of the certification requirements. Great help, reasonably priced compared to the others which I see as rip off. Thanks. I passed my exam today!",
      },
    ],
  },
  ap: {
    title: "Advanced Placement (AP) Exam Prep",
    description:
      "Prepare for AP exams with targeted lessons, practice questions, and expert strategies .",
    structure: [
      "Subject-Specific Prep: Focused review sessions for each AP subject (e.g., AP Calculus, AP Biology, AP English Literature).",
      "Timed Practice Exams: Simulate real exam conditions to build endurance and confidence.",
      "Free Response Strategies: Learn how to approach and structure essay and problem-solving responses effectively.",
      "Multiple Choice Mastery: Build critical reading and problem-solving skills for high-scoring answers.",
      "College Board Alignment: All content aligns with the official AP Course and Exam Descriptions.",
    ],
    sections: [
      {
        title: "Math (e.g., AP Calculus AB/BC)",
        content: "Evaluate the limit: lim(x→0) (sin x)/x.",
        tips: [
          "Master derivative and integral rules—product, quotient, and chain rule are essential.",
          "Familiarize yourself with the AP formula sheet and calculator policy.",
          "Show all steps clearly in free response to maximize partial credit.",
        ],
      },
      {
        title: "English (e.g., AP English Language/Literature)",
        content:
          "Analyze how the author uses rhetorical strategies to develop their argument in the passage.",
        tips: [
          "Identify tone, diction, and rhetorical devices like ethos, pathos, and logos.",
        ],
      },
      {
        title: "Science ( AP Biology, AP Chemistry, AP Environmental Science)",
        content:
          "Explain the relationship between enzyme activity and temperature based on the graph.",
        tips: [
          "Interpret data carefully—graphs, charts, and experimental results are common.",
          "Understand key concepts like cellular respiration, kinetics, or ecological relationships.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Michael S",
        quote:
          "The test prep services were exceptional—clear, thorough, and perfectly aligned with the certification requirements. The course content and presentation made my exam preparation much easier and more effective. The pricing is very reasonable compared to other expensive options out there. Thanks to this program, I passed my exam today with confidence!",
      },
    ],
  },
  microsoftAzure: {
    title: "Microsoft Azure Certification",
    description:
      "Comprehensive preparation for Microsoft Azure cloud certification exams.",
    structure: [
      "Cloud Concepts: Core Azure services, security, privacy, compliance, and trust",
      "Azure Architecture: Compute, network, storage, and governance solutions",
      "Azure Management: Monitoring, backup, and migration tools",
    ],
    sections: [
      {
        title: "Azure Fundamentals",
        content:
          "Which Azure service provides serverless computing capabilities?",
        tips: [
          "Understand core Azure services and their use cases",
          "Practice with Azure portal navigation",
          "Review pricing models and SLAs",
        ],
      },
      {
        title: "Security and Compliance",
        content:
          "What Azure service provides centralized security policy management?",
        tips: [
          "Study Azure security best practices",
          "Understand identity and access management",
          "Review compliance certifications",
        ],
      },
    ],
    testimonials: [
      {
        author: "Devon M.",
        quote:
          "The Azure prep materials were spot-on for the certification exam. I passed on my first attempt!",
      },
    ],
  },

  googleCloud: {
    title: "Google Cloud Certification",
    description:
      "Preparation for Google Cloud Platform (GCP) certification exams.",
    structure: [
      "GCP Fundamentals: Core infrastructure services and pricing",
      "Data Engineering: Big data and machine learning services",
      "Security: Identity and access management best practices",
    ],
    sections: [
      {
        title: "Compute Services",
        content: "When would you choose Cloud Run over Compute Engine?",
        tips: [
          "Compare GCP compute options",
          "Understand serverless vs. VM-based solutions",
          "Review auto-scaling capabilities",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sarah L.",
        quote:
          "The GCP prep helped me understand the key differences between services that were tested heavily.",
      },
    ],
  },

  cisco: {
    title: "Cisco Certification (CCNA/CCNP/CCIE)",
    description:
      "Comprehensive networking certification preparation for Cisco exams.",
    structure: [
      "Network Fundamentals: OSI model, IP addressing, and subnetting",
      "Infrastructure: Switching, routing, and wireless technologies",
      "Security: Network security concepts and Cisco security solutions",
    ],
    sections: [
      {
        title: "Network Fundamentals",
        content: "What is the purpose of the ARP protocol?",
        tips: [
          "Master subnetting calculations",
          "Understand network protocols and their functions",
          "Practice Cisco IOS commands",
        ],
      },
    ],
    testimonials: [
      {
        author: "Raj P.",
        quote:
          "The Cisco prep labs were invaluable for understanding practical networking scenarios.",
      },
    ],
  },

  itil: {
    title: "ITIL Certification",
    description: "Preparation for ITIL 4 Foundation and Practitioner exams.",
    structure: [
      "Service Management: Key concepts and principles",
      "ITIL Practices: 34 management practices",
      "Service Value System: Components and interactions",
    ],
    sections: [
      {
        title: "Service Value Chain",
        content:
          "Which activity in the service value chain focuses on ensuring services meet expectations?",
        tips: [
          "Understand the service value chain activities",
          "Study the ITIL guiding principles",
          "Practice scenario-based questions",
        ],
      },
    ],
    testimonials: [
      {
        author: "Emma T.",
        quote:
          "The ITIL prep made the framework concepts clear and practical for real-world application.",
      },
    ],
  },

  prince2: {
    title: "PRINCE2 Certification",
    description: "Preparation for PRINCE2 Foundation and Practitioner exams.",
    structure: [
      "Principles: 7 PRINCE2 principles",
      "Themes: Business case, organization, quality, etc.",
      "Processes: Starting up, initiating, managing project delivery",
    ],
    sections: [
      {
        title: "PRINCE2 Principles",
        content: "Which principle ensures the project remains viable?",
        tips: [
          "Memorize the 7 principles",
          "Understand how themes support principles",
          "Practice tailoring scenarios",
        ],
      },
    ],
    testimonials: [
      {
        author: "Michael B.",
        quote:
          "The PRINCE2 prep materials were perfectly aligned with the exam requirements.",
      },
    ],
  },

  pmiPmp: {
    title: "PMI PMP Certification",
    description: "Preparation for Project Management Professional (PMP) exam.",
    structure: [
      "People: Leading and managing project teams",
      "Process: Technical project management aspects",
      "Business Environment: Aligning projects with strategy",
    ],
    sections: [
      {
        title: "Project Processes",
        content: "Which process group includes developing the project charter?",
        tips: [
          "Understand the 49 processes and 5 process groups",
          "Study input-output-tools techniques",
          "Practice situational questions",
        ],
      },
    ],
    testimonials: [
      {
        author: "Lisa K.",
        quote:
          "The PMP prep was comprehensive and helped me pass on my first try.",
      },
    ],
  },
  sat: {
    title: "Scholastic Assessment Test (SAT)",
    description:
      "Excel in the SAT with our comprehensive prep program designed to build core skills.",
    structure: [
      "Reading and Writing: 54 questions in 64 minutes, assessing comprehension, grammar, vocabulary, and expression of ideas.",
      "Math: 44 questions in 70 minutes, split into calculator and non-calculator sections, covering algebra, problem-solving, data analysis, and advanced math.",
    ],
    sections: [
      {
        title: "Math",
        content:
          "A car rental company charges a flat fee of $50 plus $0.25 per mile driven. If the total cost of renting a car was $95, how many miles did the customer drive?",
        tips: [
          "Memorize key formulas—especially for linear equations, quadratics, and geometry.",

          "Watch for units, negative signs, and word problems that test reasoning in addition to computation.",
        ],
      },
      {
        title: "Reading and Writing",
        content:
          "Which choice best maintains the style and tone of the passage while improving clarity?",
        tips: [
          "Read the entire passage to understand the context before choosing your answer.",
          "Identify grammatical patterns—subject-verb agreement, parallel structure, and punctuation.",
          "Learn common vocabulary in context and rhetorical strategies such as tone and author’s purpose.",
          "Focus on evidence-based questions and know how to locate supporting lines quickly.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Martin H",
        quote:
          "The SAT prep course was well-structured, detailed, and aligned with the actual test content. The strategies I learned made tackling tricky math and reading questions much easier. I improved my score significantly and felt fully prepared on test day.",
      },
    ],
  },
  gre: {
    title: "Graduate Record Examination (GRE)",
    description:
      "Expert GRE prep builds analytical, verbal, and quantitative reasoning skills.",
    structure: [
      "Verbal Reasoning: 2 sections, 20 questions each, assessing reading comprehension, text completion, and sentence equivalence.",
      "Quantitative Reasoning: 2 sections, 20 questions each, testing arithmetic, algebra, geometry, and data analysis.",
      "Analytical Writing: 2 tasks — Analyze an Issue and Analyze an Argument, evaluating your critical thinking and writing skills.",
    ],
    sections: [
      {
        title: "Quantitative Reasoning",
        content:
          "If the average (arithmetic mean) of x and 4 is equal to 10, what is the value of x?",
        tips: [
          "Brush up on foundational math concepts including exponents, ratios, and percent changes.",
          "Practice data interpretation using graphs, charts, and tables.",
        ],
      },
      {
        title: "Verbal Reasoning",
        content:
          "Complete: 'Though she was known for her ________, her speeches were surprisingly uninformative and vague.'",
        tips: [
          "Expand your academic vocabulary and review high-frequency GRE words.",
        ],
      },
      {
        title: "Analytical Writing",
        content:
          "Write an essay: 'The rise in popularity of electric vehicles has directly caused a significant drop in oil demand.'",
        tips: [
          "Structure your essay with a clear thesis, logical arguments, and strong transitions.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sandra L",
        quote:
          "The GRE prep program gave me a solid grasp of both verbal and quantitative sections. The practice questions felt just like the real test, and the writing strategies helped me approach the essays with confidence. Highly recommended for anyone aiming for grad school!",
      },
    ],
  },
  adat: {
    title: "Advanced Dental Admission Test (ADAT)",
    description:
      "Boost ADAT scores with focused biomedical, clinical, and data prep.",
    structure: [
      "Biomedical Sciences: Covers anatomy, physiology, biochemistry, microbiology, and pathology.",
      "Clinical Sciences: Assesses dental clinical knowledge across disciplines.",
      "Data Analysis & Interpretation: Tests statistics, data interpretation, and evidence-based practice.",
    ],
    sections: [
      {
        title: "Biomedical Sciences",
        content:
          "Which vitamin deficiency causes rickets in children and osteomalacia in adults?",
        tips: [
          "Review key concepts in anatomy, physiology, and biochemistry.",
          "Focus on high-yield microbiology and pathology topics.",
          "Understand common disease mechanisms and nutritional deficiencies.",
        ],
      },
      {
        title: "Clinical Sciences",
        content:
          "What is the most appropriate treatment for early reversible pulpitis?",
        tips: [
          "Study common clinical cases in endodontics, periodontics, and oral surgery.",
        ],
      },
      {
        title: "Data Analysis & Interpretation",
        content:
          "Interpret the confidence interval from the given clinical trial results.",
        tips: [
          "Understand statistical terms and tests (e.g., p-values, confidence intervals).",
        ],
      },
    ],
    testimonials: [
      {
        author: "Dr. Kelvin R",
        quote:
          "The ADAT prep course was comprehensive and efficient. The clinical and data sections were spot on, and I felt confident going into the exam. I recommend it to any dentist aiming for residency.",
      },
    ],
  },
  gmat: {
    title: "Graduate Management Admission Test (GMAT)",
    description:
      "Prepare for GMAT with focused quantitative, verbal, and writing skills.",
    structure: [
      "Quantitative Reasoning: Problem-solving and data sufficiency questions on arithmetic, algebra, and geometry.",
      "Verbal Reasoning: Critical reasoning, reading comprehension, and sentence correction.",
      "Integrated Reasoning: Analyzing data from multiple sources, including graphs and tables.",
      "Analytical Writing Assessment: Writing an essay analyzing an argument.",
    ],
    sections: [
      {
        title: "Quantitative Reasoning",
        content:
          "If a product’s price increases 20% and then decreases 20%, what is the net percentage change?",
        tips: [
          "Review core math concepts and formulas.",
          "Practice data sufficiency questions carefully.",
          "Use estimation to check your answers.",
          "Manage time effectively on multi-step problems.",
        ],
      },
      {
        title: "Verbal Reasoning",
        content:
          "Identify the best revision to improve clarity: 'Despite the rain, the event was held successfully.'",
        tips: [
          "Master grammar rules and sentence structure.",
          "Develop strong critical reasoning skills.",
          "Practice reading comprehension regularly.",
          "Eliminate wrong answer choices efficiently.",
        ],
      },
      {
        title: "Integrated Reasoning",
        content:
          "Interpret data from a multi-source graph to determine trends in sales over time.",
        tips: [
          "Practice interpreting complex charts and tables.",
          "Improve your ability to synthesize data quickly.",
          "Focus on accuracy over speed initially.",
        ],
      },
      {
        title: "Analytical Writing Assessment",
        content:
          "Write an essay critiquing the reasoning behind a business decision.",
        tips: [
          "Structure your essay clearly with an introduction, body, and conclusion.",
          "Use relevant examples to support your critique.",
          "Edit carefully for clarity and grammar.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jessica M",
        quote:
          "The GMAT prep helped me master both quantitative and verbal sections. The integrated reasoning practice was invaluable.",
      },
    ],
  },
  map: {
    title: "Measures of Academic Progress (MAP)",
    description:
      "Improve MAP scores with targeted prep in math, reading, and language usage.",
    structure: [
      "Mathematics: Covers number operations, algebra, geometry, and data analysis.",
      "Reading: Assesses comprehension, vocabulary, and literary analysis.",
      "Language Usage: Tests grammar, sentence structure, and writing conventions.",
    ],
    sections: [
      {
        title: "Mathematics",
        content: "If a rectangle has length 8 and width 5, what is its area?",
        tips: [
          "Review basic arithmetic and algebraic operations.",
          "Practice geometry formulas and problem-solving.",
          "Interpret word problems carefully.",
        ],
      },
      {
        title: "Reading",
        content: "What is the main idea of the passage about renewable energy?",
        tips: ["Focus on understanding context and details."],
      },
      {
        title: "Language Usage",
        content: "Choose the correctly punctuated sentence from the options.",
        tips: ["Review grammar rules and punctuation."],
      },
    ],
    testimonials: [
      {
        author: "Sarah T",
        quote:
          "The MAP prep helped my child improve in math and reading significantly. The practice tests were very effective.",
      },
    ],
  },
  lsat: {
    title: "Law School Admission Test (LSAT)",
    description:
      "Excel in LSAT with prep focused on logical reasoning, reading comprehension, and analytical reasoning.",
    structure: [
      "Logical Reasoning: Evaluate arguments and identify flaws.",
      "Reading Comprehension: Understand and analyze complex texts.",
      "Analytical Reasoning: Solve logic games involving grouping and sequencing.",
    ],
    sections: [
      {
        title: "Logical Reasoning",
        content:
          "Identify the flaw in the argument about environmental policy effectiveness.",
        tips: [
          "Practice recognizing common logical fallacies.",
          "Focus on argument structure and assumptions.",
          "Eliminate answer choices that don’t address the question.",
        ],
      },
      {
        title: "Reading Comprehension",
        content:
          "What is the author's primary purpose in the passage about constitutional law?",
        tips: [
          "Read actively, annotating main ideas and details.",
          "Summarize each paragraph to understand structure.",
          "Practice timing to improve reading speed and accuracy.",
        ],
      },
      {
        title: "Analytical Reasoning",
        content:
          "Determine the order of events given specific constraints in a scheduling game.",
        tips: [
          "Diagram conditions carefully.",
          "Use process of elimination for possible solutions.",
          "Practice different types of logic games regularly.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Daniel S",
        quote:
          "The LSAT prep course sharpened my logical reasoning and helped me tackle complex reading passages confidently.",
      },
    ],
  },
  accuplacer: {
    title: "Accuplacer",
    description:
      "Prepare for Accuplacer with focused practice in math, reading, and writing skills.",
    structure: [
      "Arithmetic and Quantitative Reasoning: Basic math operations, algebra, and data analysis.",
      "Reading Comprehension: Understanding and analyzing short passages.",
      "Sentence Skills: Grammar, sentence structure, and writing conventions.",
    ],
    sections: [
      {
        title: "Math",
        content: "Simplify: If 3(x + 4) = 21, what is the value of x?",
        tips: [
          "Review foundational math concepts.",
          "Practice solving equations and word problems.",
          "Double-check your work to avoid simple errors.",
        ],
      },
      {
        title: "Reading",
        content: "What is the main idea of the passage about climate change?",
        tips: ["Focus on key details and overall message."],
      },
      {
        title: "Writing",
        content: "Choose the sentence with correct grammar and punctuation.",
        tips: ["Review grammar rules and sentence structure."],
      },
    ],
    testimonials: [
      {
        author: "Emily R",
        quote:
          "Accuplacer prep improved my confidence and test scores, especially in math and reading.",
      },
    ],
  },
  parcc: {
    title: "PARCC",
    description:
      "Build skills for PARCC success in math, English language arts, and writing.",
    structure: [
      "Math: Covers algebra, geometry, and problem-solving with real-world applications.",
      "English Language Arts: Focuses on reading comprehension, vocabulary, and text analysis.",
      "Writing: Tests argument construction, explanatory writing, and narrative skills.",
    ],
    sections: [
      {
        title: "Math",
        content: "Solve for x: If 2x + 5 = 17, what is the value of x?",
        tips: [
          "Understand how to set up and solve linear equations.",
          "Practice applying math concepts to real-world problems.",
          "Check your answers carefully for calculation errors.",
        ],
      },
      {
        title: "English Language Arts",
        content:
          "What is the author’s main argument in the passage about environmental conservation?",
        tips: ["Identify the thesis and supporting evidence."],
      },
      {
        title: "Writing",
        content:
          "Write a brief essay supporting or opposing the use of renewable energy sources.",
        tips: [
          "Structure your essay with a clear introduction, body, and conclusion.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jessica M",
        quote:
          "The PARCC prep materials made complex topics manageable, helping my daughter improve her scores and confidence significantly.",
      },
    ],
  },
  mcat: {
    title: "Medical College Admission Test (MCAT)",
    description:
      "Focused MCAT prep in biology, chemistry, physics, and reasoning.",
    structure: [
      "Biological and Biochemical Foundations: Covers biology, biochemistry, and organic chemistry.",
      "Chemical and Physical Foundations: Focuses on general chemistry, physics, and biochemistry.",
      "Psychological and Social Foundations: Tests psychology, sociology, and behavior.",
      "Critical Analysis and Reasoning Skills (CARS): Assesses comprehension and analytical reasoning.",
    ],
    sections: [
      {
        title: "Biological Sciences",
        content:
          "Explain how an increase in enzyme concentration affects reaction rate, assuming substrate saturation.",
        tips: [
          "Understand enzyme kinetics and saturation points.",
          "Review cell biology and biochemical pathways.",
          "Practice interpreting experimental data.",
        ],
      },
      {
        title: "Chemical and Physical Sciences",
        content: "Calculate the pH of a 0.01 M HCl solution.",
        tips: [
          "Memorize key chemistry formulas and concepts.",
          "Practice balancing chemical equations.",
        ],
      },
      {
        title: "CARS",
        content:
          "What is the author’s tone in the passage discussing healthcare ethics?",
        tips: [
          "Focus on passage structure and argument flow.",
          "Practice identifying author’s intent and tone.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Dr. Sarah L",
        quote:
          "MCAT prep was comprehensive and challenging, perfectly simulating real test conditions and boosting my confidence.",
      },
    ],
  },
  hspt: {
    title: "High School Placement Test (HSPT)",
    description:
      "Prepare for the HSPT with focused practice in verbal skills, math, reading, and quantitative reasoning.",
    structure: [
      "Verbal Skills: Synonyms, analogies, and vocabulary.",
      "Math: Arithmetic, algebra, and geometry fundamentals.",
      "Reading: Comprehension and critical analysis of passages.",
      "Quantitative Skills: Number sequences, problem-solving, and data interpretation.",
    ],
    sections: [
      {
        title: "Math",
        content: "What is the next number in the sequence: 2, 4, 8, 16, __?",
        tips: [
          "Recognize patterns in number sequences.",
          "Practice fundamental operations and algebraic thinking.",
          "Double-check calculations to avoid mistakes.",
        ],
      },
      {
        title: "Verbal Skills",
        content:
          "Choose the synonym for the word ‘benevolent’ from the options below.",
        tips: [
          "Build a strong vocabulary foundation.",
          "Understand word relationships and roots.",
        ],
      },
      {
        title: "Reading",
        content:
          "What is the main idea of the passage about historical events?",
        tips: [
          "Focus on the author’s purpose and key details.",
          "Practice summarizing and inferencing.",
        ],
      },
    ],
    testimonials: [
      {
        author: "James T",
        quote:
          "The HSPT prep helped my son improve his vocabulary and math skills, making test day less stressful.",
      },
    ],
  },
  toefl: {
    title: "Test of English as a Foreign Language (TOEFL)",
    description: "Focused TOEFL prep in reading, listening, speaking, writing",
    structure: [
      "Reading: Comprehension of academic texts and inference skills.",
      "Listening: Understanding lectures, conversations, and note-taking.",
      "Speaking: Expressing ideas clearly in English with proper pronunciation.",
      "Writing: Constructing well-organized essays and integrated responses.",
    ],
    sections: [
      {
        title: "Reading",
        content: "What is the main idea of the passage about climate change?",
        tips: [
          "Identify key points and supporting details.",
          "Practice skimming and scanning techniques.",
          "Focus on vocabulary in context.",
        ],
      },
      {
        title: "Listening",
        content:
          "What can be inferred from the professor’s comment about the experiment?",
        tips: ["Take effective notes during listening."],
      },
      {
        title: "Speaking",
        content:
          "Describe a memorable event from your life and explain why it was important.",
        tips: ["Organize your thoughts before speaking."],
      },
    ],
    testimonials: [
      {
        author: "Linda S",
        quote:
          "The TOEFL prep course improved my English skills and boosted my confidence on test day.",
      },
    ],
  },
  mttle: {
    title: "Minnesota Teacher Licensure Examinations (MTTLE)",
    description: "Focused MTTLE prep in subject knowledge, pedagogy, skills.",
    structure: [
      "Content Knowledge: Tests subject-specific expertise.",
      "Pedagogy: Assesses teaching methods and strategies.",
      "Professional Knowledge: Covers ethics, assessment, and classroom management.",
    ],
    sections: [
      {
        title: "Content Knowledge",
        content:
          "Explain how formative assessment supports student learning and instructional adjustments.",
        tips: [
          "Review core concepts in your subject area.",
          "Understand assessment types and their purposes.",
          "Practice applying knowledge in teaching scenarios.",
        ],
      },
      {
        title: "Pedagogy",
        content:
          "Describe effective strategies for differentiating instruction in diverse classrooms.",
        tips: [
          "Learn about various instructional models.",
          "Focus on student engagement techniques.",
          "Understand accommodations and modifications.",
        ],
      },
      {
        title: "Professional Knowledge",
        content:
          "What are key ethical considerations in teacher-student relationships?",
        tips: [
          "Review education ethics and professional standards.",
          "Familiarize with classroom management best practices.",
          "Know reporting and confidentiality rules.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Emily R",
        quote:
          "MTTLE prep gave me the confidence and knowledge to pass my teaching certification with ease.",
      },
    ],
  },
  nmsqt: {
    title: "National Merit Scholarship Qualifying Test (NMSQT)",
    description:
      "Prepare for the NMSQT with focused training in math, reading, and writing skills.",
    structure: [
      "Math: Algebra, geometry, and basic arithmetic problems.",
      "Reading: Comprehension and analysis of passages.",
      "Writing: Grammar, usage, and rhetorical skills.",
    ],
    sections: [
      {
        title: "Math",
        content: "If 3x + 5 = 20, what is the value of x?",
        tips: [
          "Practice algebraic manipulation and solving equations.",
          "Review geometry concepts and formulas.",
          "Focus on speed and accuracy.",
        ],
      },
      {
        title: "Reading",
        content: "What is the author’s main purpose in the passage?",
        tips: [
          "Identify main ideas and supporting details.",
          "Practice summarizing paragraphs.",
          "Improve vocabulary in context.",
        ],
      },
      {
        title: "Writing",
        content: "Choose the sentence that best corrects the grammar error.",
        tips: [
          "Know common grammar rules and exceptions.",
          "Practice punctuation and sentence structure.",
          "Read carefully to spot errors.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jason T",
        quote:
          "NMSQT prep helped me boost my scores and qualify for scholarships.",
      },
    ],
  },
  btecs: {
    title: "Business and Technology Education Council (BTECs)",
    description:
      "Prepare for BTECs with targeted training in practical skills, applied knowledge, and coursework.",
    structure: [
      "Applied Learning: Real-world scenarios and case studies.",
      "Project Work: Independent and group assignments.",
      "Examinations: Subject-specific tests on theory and application.",
    ],
    sections: [
      {
        title: "Applied Learning",
        content:
          "Analyze a business case study and recommend effective strategies.",
        tips: [
          "Understand how to apply theory to practice.",
          "Develop critical thinking and problem-solving skills.",
          "Work collaboratively and manage projects efficiently.",
        ],
      },
      {
        title: "Project Work",
        content:
          "Prepare a detailed report on a given technology implementation.",
        tips: [
          "Organize your work and research thoroughly.",
          "Use clear, concise language in reports.",
        ],
      },
      {
        title: "Examinations",
        content:
          "Answer questions on core concepts and practical applications.",
        tips: [
          "Review subject fundamentals regularly.",
          "Practice past papers under timed conditions.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sarah L",
        quote:
          "BTEC prep provided practical skills that helped me excel in coursework and exams.",
      },
    ],
  },
  seriesExams: {
    title: "Series Exams (Number and Pattern Recognition)",
    description:
      "Prepare for series exams by mastering pattern recognition and logical reasoning skills.",
    structure: [
      "Number Series: Identify patterns and predict the next numbers.",
      "Alphabet Series: Recognize letter sequences and rules.",
      "Mixed Series: Combine numbers and letters in sequences.",
    ],
    sections: [
      {
        title: "Number Series",
        content:
          "Find the next number in the sequence: 7, 3, 6, 65, 63, 66, ...",
        tips: [
          "Look for arithmetic or geometric patterns.",
          "Check differences, ratios, or alternating sequences.",
          "Consider multiple steps or combined patterns.",
        ],
      },
      {
        title: "Alphabet Series",
        content: "Identify the next letter in the sequence: A, C, F, J, O, ...",
        tips: [
          "Analyze alphabetical positions and jumps.",
          "Consider skipping letters or reverse orders.",
          "Practice common series types to improve speed.",
        ],
      },
      {
        title: "Mixed Series",
        content:
          "Determine the next element in the series: 2A, 4C, 6E, 8G, ...",
        tips: [
          "Separate number and letter patterns.",
          "Look for parallel progression in both parts.",
          "Practice combined reasoning for faster recognition.",
        ],
      },
    ],
    testimonials: [
      {
        author: "David M",
        quote:
          "Series exam prep sharpened my logical thinking and improved my test scores.",
      },
    ],
  },
  ukcat: {
    title: "UK Clinical Aptitude Test (UCAT)",
    description:
      "Prepare for UCAT with focused training in five key reasoning skills.",
    structure: [
      "Verbal Reasoning: Evaluate written information quickly and accurately.",
      "Decision Making: Apply logic to solve complex problems.",
      "Quantitative Reasoning: Analyze numerical data efficiently.",
      "Abstract Reasoning: Identify patterns and relationships.",
      "Situational Judgment: Assess responses to real-life scenarios.",
    ],
    sections: [
      {
        title: "Verbal Reasoning",
        content: "Determine the best conclusion based on the given passage.",
        tips: [
          "Practice reading quickly while maintaining comprehension.",
          "Identify keywords and logical connections.",
          "Avoid assumptions beyond the passage.",
        ],
      },
      {
        title: "Decision Making",
        content: "Choose the best course of action from provided options.",
        tips: [
          "Understand logical reasoning principles.",
          "Evaluate all options carefully.",
          "Use process of elimination.",
        ],
      },
      {
        title: "Quantitative Reasoning",
        content: "Calculate the percentage increase from 120 to 150.",
        tips: [
          "Refresh basic math skills.",
          "Practice data interpretation.",
          "Manage your time effectively.",
        ],
      },
      {
        title: "Abstract Reasoning",
        content: "Identify the next shape in the pattern sequence.",
        tips: [
          "Look for symmetry, rotations, and repetitions.",
          "Practice with varied pattern types.",
          "Develop quick visual analysis skills.",
        ],
      },
      {
        title: "Situational Judgment",
        content:
          "Rank the following actions based on ethical and professional standards.",
        tips: [
          "Understand core professional values.",
          "Consider consequences of actions.",
          "Practice decision-making in ethical dilemmas.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Emily R",
        quote:
          "UCAT prep helped me improve my reasoning skills and boosted my confidence.",
      },
    ],
  },
  ib: {
    title: "International Baccalaureate (IB)",
    description: "Prepare for IB with comprehensive training in core subjects.",
    structure: [
      "Language and Literature: Analyze texts and improve communication skills.",
      "Mathematics: Develop problem-solving, algebra, calculus, and statistics abilities.",
      "Sciences: Focus on biology, chemistry, and physics concepts and experiments.",
      "Individuals and Societies: Study history, economics, geography, and global issues.",
      "Theory of Knowledge (TOK): Enhance critical thinking and understanding of knowledge.",
      "Extended Essay: Conduct independent research and academic writing.",
    ],
    sections: [
      {
        title: "Language and Literature",
        content:
          "Analyze the themes and techniques in a given literary passage.",
        tips: [
          "Practice close reading and annotation.",
          "Understand literary devices and their effects.",
          "Develop clear and supported analytical writing.",
        ],
      },
      {
        title: "Mathematics",
        content:
          "A function ( f(x) = 2x^3 - 3x^2 + x - 5 ). Find ( f'(2) ), the derivative of ( f ) at ( x=2 ).",
        tips: [
          "Master differentiation rules including product and chain rules.",
          "Practice interpreting and solving calculus-based problems.",
          "Understand how to apply derivatives to find slopes and rates of change.",
        ],
      },

      {
        title: "Sciences",
        content:
          "Explain the process of photosynthesis and its importance in ecosystems.",
        tips: [
          "Understand key concepts and scientific terminology.",
          "Practice interpreting data from experiments.",
          "Focus on connections between scientific principles and real life.",
        ],
      },
      {
        title: "Individuals and Societies",
        content: "Evaluate the causes and consequences of a historical event.",
        tips: [
          "Develop strong essay-writing skills.",
          "Use evidence to support arguments.",
          "Understand different perspectives and contexts.",
        ],
      },
      {
        title: "Theory of Knowledge (TOK)",
        content: "Discuss how personal bias can affect knowledge acquisition.",
        tips: [
          "Reflect critically on knowledge sources.",
          "Explore examples from different areas of knowledge.",
          "Practice clear, logical reasoning.",
        ],
      },
      {
        title: "Extended Essay",
        content:
          "Write a research question and outline for your extended essay.",
        tips: [
          "Choose a focused, manageable topic.",
          "Plan research and time effectively.",
          "Develop coherent arguments supported by evidence.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sophia L",
        quote:
          "IB prep helped me master challenging subjects and develop critical academic skills.",
      },
    ],
  },
  bmat: {
    title: "BioMedical Admissions Test (BMAT)",
    description:
      "Excel in BMAT with targeted training in science, critical thinking, and writing skills.",
    structure: [
      "Section 1: Thinking Skills – Problem-solving and critical thinking (32 MCQs, 60 minutes)",
      "Section 2: Scientific Knowledge and Applications – Biology, Chemistry, Physics, and Math (27 MCQs, 30 minutes)",
      "Section 3: Writing Task – Short essay on a medical or ethical topic (1 question, 30 minutes)",
    ],
    sections: [
      {
        title: "Thinking Skills",
        content:
          "A train travels 120 km at an average speed of 80 km/h. How long does the journey take?",
        tips: [
          "Practice quick mental calculations and logical reasoning.",
          "Understand assumptions behind arguments to spot flaws.",
          "Work on identifying patterns and using elimination effectively.",
        ],
      },
      {
        title: "Scientific Knowledge and Applications",
        content:
          "Which organelle is primarily responsible for producing ATP in eukaryotic cells?",
        tips: [
          "Review GCSE-level Biology, Chemistry, Physics, and basic Math concepts.",
          "Be comfortable with multi-step scientific reasoning.",
          "Practice past papers under timed conditions.",
        ],
      },
      {
        title: "Writing Task",
        content:
          "‘Doctors should always prioritize patients' wishes, even if it goes against medical advice.’ Do you agree?",
        tips: [
          "Structure essays clearly: introduction, arguments, counterarguments, and conclusion.",
          "Stick to the topic and support points with logical examples.",
          "Avoid complex vocabulary—focus on clarity and coherence.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sofia T",
        quote:
          "The BMAT prep sessions gave me clarity and speed. I became more confident tackling complex reasoning tasks, and my essay scores improved with targeted feedback. Highly recommend!",
      },
    ],
  },
  teas: {
    title: "Test of Essential Academic Skills (TEAS)",
    description:
      "Strengthen your TEAS performance with prep in reading, math, science, and English usage.",
    structure: [
      "Reading: 45 questions in 55 minutes, assessing comprehension and integration of ideas",
      "Math: 38 questions in 57 minutes, covering algebra, measurements, and data interpretation",
      "Science: 50 questions in 60 minutes, including biology, anatomy, and scientific reasoning",
      "English and Language Usage: 37 questions in 37 minutes, testing grammar and sentence structure",
    ],
    sections: [
      {
        title: "Reading",
        content:
          "After reading a passage on healthcare policy, identify the author's primary argument.",
        tips: [
          "Skim the passage first, then read the questions.",
          "Focus on topic sentences and transitions for key ideas.",
          "Practice identifying main ideas vs supporting details.",
        ],
      },
      {
        title: "Math",
        content:
          "A nurse prepares 250 mL of solution. If each patient needs 50 mL, how many patients can be treated?",
        tips: [
          "Master basic algebra, ratios, and percentages.",
          "Double-check units when solving dosage and measurement questions.",
          "Use estimation when you're short on time.",
        ],
      },
      {
        title: "Science",
        content:
          "Which organ is primarily responsible for filtering blood and producing urine?",
        tips: [
          "Review anatomy and physiology basics like the circulatory and urinary systems.",
          "Understand scientific method and experimental design.",
          "Make flashcards for key biology terms and systems.",
        ],
      },
      {
        title: "English and Language Usage",
        content:
          "Choose the sentence with correct subject-verb agreement: 'The nurses _____ on their break.'",
        tips: [
          "Brush up on grammar rules—especially punctuation and sentence structure.",
          "Study common homophones and spelling rules.",
          "Practice editing paragraphs for clarity and grammar.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jessica M",
        quote:
          "The TEAS prep course helped me understand how to approach each section strategically. I especially appreciated the science review and math tips—my score jumped 15 points!",
      },
    ],
  },
  hesipn: {
    title: "HESI Admission Assessment (HESI A2 / HESI-PN)",
    description:
      "Boost your HESI performance with focused prep in math, reading, vocabulary, grammar, and science.",
    structure: [
      "Math: 50 questions in 50 minutes, covering basic operations, ratios, and dosage calculations",
      "Reading Comprehension: 47 questions in 60 minutes, testing understanding, inference, and meaning",
      "Vocabulary: 50 questions in 50 minutes, assessing medical and general word knowledge",
      "Grammar: 50 questions in 50 minutes, focused on sentence structure and punctuation",
      "Science: 25–50 questions, covering anatomy, physiology, biology, and chemistry",
    ],
    sections: [
      {
        title: "Math",
        content:
          "A doctor orders 500 mL of IV fluid over 4 hours. What is the flow rate in mL/hr?",
        tips: [
          "Memorize conversion factors (e.g., mg to g, mL to L).",
          "Understand how to solve ratio and proportion problems.",
          "Practice word problems with real clinical scenarios.",
        ],
      },
      {
        title: "Reading Comprehension",
        content:
          "After reading a paragraph on patient care, determine the author's purpose.",
        tips: [
          "Identify the main idea before reading the questions.",
          "Pay attention to tone and author’s intent.",
          "Practice summarizing paragraphs to improve comprehension.",
        ],
      },
      {
        title: "Vocabulary",
        content:
          "Choose the meaning of the word 'benign' in a medical context.",
        tips: [
          "Focus on medical prefixes, suffixes, and root words.",
          "Create flashcards for common healthcare terms.",
          "Use context clues to define unfamiliar words.",
        ],
      },
      {
        title: "Grammar",
        content:
          "Identify the sentence with correct punctuation and grammar: 'The nurse, who was late, apologized quickly.'",
        tips: [
          "Review parts of speech and sentence structure.",
          "Understand common grammar pitfalls like subject-verb agreement.",
          "Edit sample paragraphs for errors to sharpen skills.",
        ],
      },
      {
        title: "Science",
        content:
          "Which organ is responsible for regulating blood glucose levels?",
        tips: [
          "Review body systems, especially endocrine, nervous, and digestive systems.",
          "Understand lab values and their physiological implications.",
          "Practice diagram labeling and basic chemistry concepts.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Nina R.",
        quote:
          "The HESI prep helped me focus on what really mattered. The math and science sections felt easier thanks to the real-world examples and targeted practice!",
      },
    ],
  },
  attteas: {
    title: "ATI TEAS (Test of Essential Academic Skills)",
    description:
      "Master the ATI TEAS with prep in reading, math, science, and English language skills.",
    structure: [
      "Reading: 45 questions in 55 minutes – Key ideas, integration of knowledge, and craft & structure.",
      "Math: 38 questions in 57 minutes – Numbers, algebra, measurement, and data interpretation.",
      "Science: 50 questions in 60 minutes – Life science, physical science, human anatomy & physiology.",
      "English Language Usage: 37 questions in 37 minutes – Grammar, sentence structure, and vocabulary acquisition.",
    ],
    sections: [
      {
        title: "Reading",
        content:
          "After reading a patient’s discharge instructions, what should the patient do next?",
        tips: [
          "Highlight main ideas and supporting details.",
          "Focus on the purpose of each paragraph.",
          "Practice drawing logical inferences from written texts.",
        ],
      },
      {
        title: "Math",
        content:
          "A medication is given every 8 hours. How many doses are given in 3 days?",
        tips: [
          "Practice with dosage calculations and time conversions.",
          "Understand basic algebra and percentages.",
          "Work on solving multi-step word problems quickly.",
        ],
      },
      {
        title: "Science",
        content: "Which organelle is known as the powerhouse of the cell?",
        tips: [
          "Review anatomy, physiology, and cellular biology.",
          "Understand the basics of chemistry and the scientific method.",
          "Practice interpreting lab results and scientific information.",
        ],
      },
      {
        title: "English Language Usage",
        content:
          "Which sentence is correct? A) Their going to the lab. B) They’re going to the lab.",
        tips: [
          "Review commonly confused words and grammar rules.",
          "Practice editing for punctuation and spelling.",
          "Use practice questions to identify sentence structure issues.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jasmine K.",
        quote:
          "The ATI TEAS prep gave me the confidence I needed. I improved in math and science dramatically with real practice questions and breakdowns.",
      },
    ],
  },
  ged: {
    title: "GED (General Educational Development Test)",
    description:
      "Succeed in the GED with targeted prep in math, science, language arts, and social studies.",
    structure: [
      "Mathematical Reasoning: 45 questions in 115 minutes – Algebra, geometry, quantitative problem-solving.",
      "Reasoning Through Language Arts: 46 questions in 150 minutes – Reading comprehension, grammar, and extended response writing.",
      "Science: 34 questions in 90 minutes – Life, physical, and Earth science, plus data interpretation.",
      "Social Studies: 35 questions in 70 minutes – Civics, economics, geography, and U.S. history.",
    ],
    sections: [
      {
        title: "Mathematical Reasoning",
        content: "Solve: If 3x - 7 = 11, what is the value of x?",
        tips: [
          "Brush up on linear equations, fractions, and decimals.",
          "Practice word problems and learn how to extract key data.",
          "Understand how to use calculators efficiently during the test.",
        ],
      },
      {
        title: "Reasoning Through Language Arts",
        content:
          "Which of the following best states the main idea of the passage?",
        tips: [
          "Read for tone, main idea, and supporting details.",
          "Practice writing structured essays with a clear thesis.",
          "Review grammar rules, sentence structure, and punctuation.",
        ],
      },
      {
        title: "Science",
        content:
          "Which variable is the dependent variable in a plant growth experiment measuring sunlight exposure?",
        tips: [
          "Know the basics of biology, chemistry, and physics.",
          "Interpret data from tables and graphs.",
          "Understand scientific methods and experimental design.",
        ],
      },
      {
        title: "Social Studies",
        content:
          "What principle is most associated with the U.S. Constitution’s system of checks and balances?",
        tips: [
          "Review historical documents like the Constitution and Declaration of Independence.",
          "Understand basic economic principles and government structures.",
          "Interpret timelines, maps, and historical texts.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Anthony S.",
        quote:
          "The GED prep course helped me pass on my first try. The math practice and essay tips were especially useful!",
      },
    ],
  },

  sie: {
    title: "Securities Industry Essentials (SIE) Exam",
    description:
      "Prepare for the SIE with focused training in securities markets, regulatory frameworks, and financial concepts.",
    structure: [
      "75 multiple-choice questions in 105 minutes.",
      "Covers knowledge of basic products, risks, market structure, regulatory agencies, and prohibited practices.",
    ],
    sections: [
      {
        title: "Capital Markets",
        content:
          "Which of the following best describes the primary purpose of a secondary market?",
        tips: [
          "Understand the roles of primary vs. secondary markets.",
          "Familiarize yourself with economic indicators and interest rates.",
          "Know the functions of financial institutions like broker-dealers and investment advisers.",
        ],
      },
      {
        title: "Understanding Products and Their Risks",
        content:
          "An investor buys a corporate bond with a 5% coupon rate. What risk is the investor exposed to if interest rates rise?",
        tips: [
          "Learn the characteristics of equities, bonds, mutual funds, and annuities.",
          "Know the risks: interest rate, credit, and liquidity.",
          "Use flashcards for key product terms and features.",
        ],
      },
      {
        title:
          "Understanding Trading, Customer Accounts & Prohibited Activities",
        content:
          "A registered rep recommends a mutual fund without understanding the client’s profile. What rule might this violate?",
        tips: [
          "Review FINRA rules on suitability and communications with the public.",
          "Understand order types, account types, and trade settlement.",
          "Know red flags for unethical or illegal practices.",
        ],
      },
      {
        title: "Overview of the Regulatory Framework",
        content:
          "Which organization enforces federal securities laws and oversees self-regulatory organizations like FINRA?",
        tips: [
          "Memorize functions of the SEC, FINRA, MSRB, and other regulators.",
          "Understand reporting requirements and disciplinary actions.",
          "Study prohibited practices like insider trading and money laundering.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Laura M.",
        quote:
          "The SIE prep was spot-on. I felt confident walking into the exam and passed on my first attempt!",
      },
    ],
  },
  dat: {
    title: "Dental Admission Test (DAT)",
    description:
      "Prep for DAT: science, perceptual ability, and reading comprehension.",
    structure: [
      "Survey of Natural Sciences: 100 questions in 90 minutes covering Biology, General Chemistry, and Organic Chemistry.",
      "Perceptual Ability Test (PAT): 90 questions in 60 minutes evaluating spatial reasoning and visual acuity.",
      "Reading Comprehension: 50 questions in 60 minutes on scientific passages.",
      "Quantitative Reasoning: 40 questions in 45 minutes testing math skills and data analysis.",
    ],
    sections: [
      {
        title: "Survey of Natural Sciences",
        content:
          "Which organelle is responsible for producing ATP through cellular respiration in eukaryotic cells?",
        tips: [
          "Master biology, general chemistry, and organic chemistry basics.",
          "Review diagrams and practice applying knowledge to scenarios.",
          "Focus on lab techniques and scientific processes.",
        ],
      },
      {
        title: "Perceptual Ability Test",
        content:
          "Visualize how a 3D object would appear from a different angle. Which of the following matches the rotated view?",
        tips: [
          "Practice daily with angle ranking, cube counting, and pattern folding.",
          "Use timing strategies to improve speed and accuracy.",
          "Train your eye for detail and spatial orientation.",
        ],
      },
      {
        title: "Reading Comprehension",
        content:
          "After reading a complex science passage, which statement best summarizes the author's main argument?",
        tips: [
          "Skim first for structure, then dive deep into details.",
          "Use line references to back up your answers.",
          "Practice critical reading with scientific articles.",
        ],
      },
      {
        title: "Quantitative Reasoning",
        content:
          "If a dental clinic's revenue increased by 15% in January and then by 10% in February, what is the total percent increase over the two months?",
        tips: [
          "Practice percentage changes, proportions, and data interpretation.",
          "Know basic algebra and statistics concepts.",
          "Work on solving under time pressure using estimation and logic.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Kevin R.",
        quote:
          "The DAT prep broke everything down clearly. The PAT practice was a game changer. I nailed the exam!",
      },
    ],
  },
  taks: {
    title: "Texas Assessment of Knowledge and Skills (TAKS)",
    description:
      "Targeted TAKS prep focusing on reading, math, science, and social studies mastery.",
    structure: [
      "Reading: Assesses comprehension, vocabulary, and critical thinking using literary and informational texts.",
      "Mathematics: Covers number operations, algebraic reasoning, geometry, and data interpretation.",
      "Science: Evaluates knowledge of physical, earth, and life sciences, and scientific investigation.",
      "Social Studies: Tests understanding of U.S. history, government, geography, and citizenship concepts.",
    ],
    sections: [
      {
        title: "Reading",
        content:
          "Read the passage and answer: What is the author's primary purpose in writing this text?",
        tips: [
          "Practice summarizing passages to grasp main ideas quickly.",
          "Pay attention to the tone and point of view.",
          "Underline key phrases or transition words during reading.",
          "Answer questions based on evidence from the text.",
        ],
      },
      {
        title: "Mathematics",
        content:
          "A rectangular garden is 10 feet long and 6 feet wide. What is the area?",
        tips: [
          "Review geometry formulas like area, perimeter, and volume.",
          "Double-check units and your calculations for accuracy.",
          "Understand how to interpret charts and graphs.",
          "Practice with word problems to improve problem-solving speed.",
        ],
      },
      {
        title: "Science",
        content:
          "Which of the following is an example of a chemical change: melting ice, boiling water, or rusting iron?",
        tips: [
          "Understand key science vocabulary and experiment-based reasoning.",
          "Review cycles like the water cycle and photosynthesis.",
          "Familiarize yourself with lab tools and procedures.",
          "Connect science concepts with real-life examples.",
        ],
      },
      {
        title: "Social Studies",
        content:
          "Which U.S. document established the idea of checks and balances in government?",
        tips: [
          "Study major historical events and their impact.",
          "Know the U.S. Constitution and foundational civic principles.",
          "Practice reading maps, timelines, and political cartoons.",
          "Understand cause-and-effect relationships in history.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Renee T",
        quote:
          "This TAKS prep made everything feel easier. The tips and examples were just like what I saw on test day!",
      },
    ],
  },
  aims: {
    title: "Arizona's Instrument to Measure Standards (AIMS)",
    description:
      "Focused AIMS prep covering reading, writing, and mathematics to meet Arizona academic standards.",
    structure: [
      "Reading: Comprehension of literary and informational texts, vocabulary, and critical thinking.",
      "Writing: Grammar, sentence structure, and essay composition to demonstrate effective communication.",
      "Mathematics: Number operations, algebraic thinking, geometry, and problem solving.",
    ],
    sections: [
      {
        title: "Reading",
        content:
          "What is the main idea of the passage and how does the author support it?",
        tips: [
          "Highlight topic sentences and supporting details.",
          "Practice making inferences based on text clues.",
          "Identify the author's tone and purpose.",
          "Use context to understand unfamiliar vocabulary.",
        ],
      },
      {
        title: "Writing",
        content:
          "Revise the sentence for grammar and clarity: 'Her and me went to the store yesterday.'",
        tips: [
          "Review subject-verb agreement and pronoun usage.",
          "Practice writing clear and concise sentences.",
        ],
      },
      {
        title: "Mathematics",
        content:
          "If the function f(x) = 2x² - 3x + 7, what is the value of f(3)?",
        tips: [
          "Recall how to substitute values into quadratic functions.",
          "Review order of operations (PEMDAS) carefully.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jared M",
        quote:
          "The AIMS prep helped me focus on key skills and pass with confidence!",
      },
    ],
  },
  oat: {
    title: "Optometry Admission Test (OAT)",
    description:
      "Prepare for OAT with focused science, reading, physics, math training.",
    structure: [
      "Biology: 40 questions covering cellular biology, anatomy, physiology, and microbiology.",
      "General Chemistry: 30 questions on atomic structure, bonding, and chemical reactions.",
      "Organic Chemistry: 30 questions including functional groups, reaction mechanisms, and synthesis.",
      "Physics: 30 questions on mechanics, electricity, magnetism, and optics.",
      "Reading Comprehension: 50 questions assessing understanding and analysis of scientific passages.",
      "Quantitative Reasoning: 40 questions involving algebra, geometry, and data analysis.",
    ],
    sections: [
      {
        title: "Quantitative Reasoning",
        content:
          "A contact lens manufacturer produces lenses in batches of 120. If 5% of the lenses in a batch are defective, how many lenses in the batch are expected to be non-defective?",
        tips: [
          "Practice evaluating quadratic functions.",
          "Review algebraic manipulation and order of operations.",
          "Apply substitution carefully to avoid mistakes.",
        ],
      },
      {
        title: "Biology",
        content:
          "What is the primary function of mitochondria in eukaryotic cells?",
        tips: ["Focus on cell organelles and their specific roles."],
      },
      {
        title: "Physics",
        content:
          "A light ray passes through a prism with an angle of incidence of 30°. Calculate the angle of refraction assuming the prism’s refractive index is 1.5.",
        tips: [
          "Recall Snell's Law and how to apply it to refraction problems.",
        ],
      },
    ],
    testimonials: [
      {
        author: "Samantha R",
        quote:
          "The OAT prep program gave me the confidence and skills to excel in every test section.",
      },
    ],
  },
  ssat: {
    title: "Secondary School Admission Test (SSAT)",
    description:
      "Prepare for the SSAT with focused training in verbal reasoning, quantitative skills, reading comprehension, and writing.",
    structure: [
      "Verbal: 60 questions testing vocabulary, synonyms, and analogies.",
      "Quantitative: 50 questions covering arithmetic, algebra, and geometry.",
      "Reading Comprehension: 40 questions based on passages testing understanding and inference.",
      "Writing Sample: One essay to demonstrate writing and reasoning skills.",
    ],
    sections: [
      {
        title: "Quantitative",
        content:
          "If a rectangle has a length of 8 cm and a width that is half its length, what is its area?",
        tips: [
          "Recall area formulas for rectangles and other shapes.",
          "Practice working with fractions and ratios.",
          "Double-check your calculations to avoid careless mistakes.",
          "Visualize word problems to understand what's being asked.",
        ],
      },
      {
        title: "Verbal",
        content:
          "Choose the word that best completes the analogy: CAT is to KITTEN as DOG is to ___.",
        tips: [
          "Build a strong vocabulary through reading and practice.",
          "Understand relationships between words in analogies.",
          "Use process of elimination on multiple-choice questions.",
        ],
      },
      {
        title: "Reading Comprehension",
        content:
          "What is the main idea of the passage regarding environmental conservation?",
        tips: [
          "Identify the author’s purpose and tone.",
          "Look for topic sentences and supporting details.",
          "Practice summarizing paragraphs in your own words.",
        ],
      },
    ],
    testimonials: [
      {
        author: "James L",
        quote:
          "SSAT prep helped me improve my verbal and math skills, boosting my confidence.",
      },
    ],
  },
  terraform: {
    title: "Terraform Certification",
    description:
      "Preparation for HashiCorp Certified: Terraform Associate exam.",
    structure: [
      "Terraform Basics",
      "Terraform Workflow",
      "State Management",
      "Modules",
      "Collaboration",
    ],
    sections: [
      {
        title: "Infrastructure as Code",
        content: "What command would you use to preview Terraform changes?",
        tips: [
          "Practice core Terraform commands",
          "Understand state file management",
          "Study module composition",
        ],
      },
    ],
    testimonials: [
      {
        author: "David W.",
        quote:
          "The Terraform prep labs were excellent for hands-on practice with real-world scenarios.",
      },
    ],
  },

  oracle: {
    title: "Oracle Certification",
    description:
      "Preparation for Oracle Database and Cloud certification exams.",
    structure: [
      "Database Architecture",
      "SQL and PL/SQL",
      "Backup and Recovery",
      "Performance Tuning",
    ],
    sections: [
      {
        title: "SQL Fundamentals",
        content: "Which SQL statement would you use to modify existing data?",
        tips: [
          "Master SQL syntax and functions",
          "Understand Oracle database architecture",
          "Practice performance tuning techniques",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sophia C.",
        quote:
          "The Oracle prep covered all the advanced database concepts tested on the exam.",
      },
    ],
  },
  pmiAcp: {
    title: "PMI Agile Certified Practitioner (PMI-ACP)",
    description: "Preparation for PMI Agile Certified Practitioner exam.",
    structure: [
      "Agile Principles and Mindset",
      "Value-Driven Delivery",
      "Stakeholder Engagement",
      "Team Performance",
      "Adaptive Planning",
      "Problem Detection and Resolution",
      "Continuous Improvement",
    ],
    sections: [
      {
        title: "Agile Methodologies",
        content:
          "Which of the following is NOT a principle in the Agile Manifesto?",
        tips: [
          "Understand all Agile methodologies (Scrum, Kanban, XP, etc.)",
          "Know the Agile Manifesto principles by heart",
          "Practice estimating techniques like planning poker",
        ],
      },
    ],
    testimonials: [
      {
        author: "Mark T.",
        quote:
          "The PMI-ACP prep helped me connect Agile theory to practical application scenarios.",
      },
    ],
  },

  pmiRmp: {
    title: "PMI Risk Management Professional (PMI-RMP)",
    description: "Preparation for PMI Risk Management Professional exam.",
    structure: [
      "Risk Strategy and Planning",
      "Risk Identification",
      "Risk Analysis",
      "Risk Response",
      "Monitor and Close Risks",
    ],
    sections: [
      {
        title: "Risk Analysis",
        content:
          "What is the difference between qualitative and quantitative risk analysis?",
        tips: [
          "Understand risk breakdown structures",
          "Practice risk probability and impact calculations",
          "Know risk response strategies",
        ],
      },
    ],
    testimonials: [
      {
        author: "Lisa H.",
        quote:
          "The risk management frameworks and templates were invaluable for the exam.",
      },
    ],
  },

  capm: {
    title: "Certified Associate in Project Management (CAPM)",
    description:
      "Preparation for Certified Associate in Project Management exam.",
    structure: [
      "Project Management Fundamentals",
      "Project Environment",
      "Role of the Project Manager",
      "Project Integration Management",
      "Project Scope Management",
      "Project Schedule Management",
      "Project Cost Management",
      "Project Quality Management",
      "Project Resource Management",
      "Project Communications Management",
      "Project Risk Management",
      "Project Procurement Management",
      "Project Stakeholder Management",
    ],
    sections: [
      {
        title: "Project Processes",
        content: "Which process group includes developing the project charter?",
        tips: [
          "Memorize the 49 processes and 5 process groups",
          "Understand input-output-tools techniques",
          "Know the differences between predictive and adaptive approaches",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jason B.",
        quote:
          "The CAPM prep made the PMBOK guide much more approachable and understandable.",
      },
    ],
  },

  cisa: {
    title: "Certified Information Systems Auditor (CISA)",
    description: "Preparation for Certified Information Systems Auditor exam.",
    structure: [
      "Information System Auditing Process",
      "Governance and Management of IT",
      "Information Systems Acquisition, Development and Implementation",
      "Information Systems Operations and Business Resilience",
      "Protection of Information Assets",
    ],
    sections: [
      {
        title: "IT Governance",
        content: "What are the three lines of defense model in IT governance?",
        tips: [
          "Understand COBIT framework thoroughly",
          "Study IT control types and testing approaches",
          "Know risk assessment methodologies",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sarah K.",
        quote:
          "The CISA prep aligned perfectly with the job practice domains and exam content.",
      },
    ],
  },

  cism: {
    title: "Certified Information Security Manager (CISM)",
    description: "Preparation for Certified Information Security Manager exam.",
    structure: [
      "Information Security Governance",
      "Information Risk Management",
      "Information Security Program",
      "Incident Management",
    ],
    sections: [
      {
        title: "Security Governance",
        content:
          "What are the key components of an information security strategy?",
        tips: [
          "Understand how security aligns with business objectives",
          "Study security metrics and reporting",
          "Know regulatory requirements and standards",
        ],
      },
    ],
    testimonials: [
      {
        author: "David L.",
        quote:
          "The CISM prep helped me think like a security manager, not just a technician.",
      },
    ],
  },

  ceh: {
    title: "Certified Ethical Hacker (CEH)",
    description: "Preparation for Certified Ethical Hacker exam.",
    structure: [
      "Footprinting and Reconnaissance",
      "Scanning Networks",
      "Enumeration",
      "Vulnerability Analysis",
      "System Hacking",
      "Malware Threats",
      "Sniffing",
      "Social Engineering",
      "Denial-of-Service",
      "Session Hijacking",
      "Evading IDS, Firewalls and Honeypots",
      "Hacking Web Servers",
      "Hacking Web Applications",
      "SQL Injection",
      "Hacking Wireless Networks",
      "Hacking Mobile Platforms",
      "IoT Hacking",
      "Cloud Computing",
      "Cryptography",
    ],
    sections: [
      {
        title: "Penetration Testing",
        content:
          "What is the first phase of a penetration test according to EC-Council?",
        tips: [
          "Know the tools in Kali Linux",
          "Understand different attack vectors",
          "Study the methodology thoroughly",
        ],
      },
    ],
    testimonials: [
      {
        author: "Alex R.",
        quote:
          "The CEH labs were amazing for hands-on practice with real hacking tools.",
      },
    ],
  },

  crisc: {
    title: "Certified in Risk and Information Systems Control (CRISC)",
    description:
      "Preparation for Certified in Risk and Information Systems Control exam.",
    structure: [
      "Governance",
      "IT Risk Assessment",
      "Risk Response and Reporting",
      "Information Technology and Security",
    ],
    sections: [
      {
        title: "Risk Identification",
        content: "What is the difference between inherent and residual risk?",
        tips: [
          "Understand risk appetite vs risk tolerance",
          "Study risk assessment methodologies",
          "Know control types and their effectiveness",
        ],
      },
    ],
    testimonials: [
      {
        author: "Michelle W.",
        quote:
          "The CRISC prep made complex risk concepts clear and applicable.",
      },
    ],
  },

  awsSolutionArchitectProfessional: {
    title: "AWS Certified Solutions Architect - Professional",
    description:
      "Preparation for AWS Certified Solutions Architect - Professional exam.",
    structure: [
      "Design for Organizational Complexity",
      "Design for New Solutions",
      "Migration Planning",
      "Cost Control",
      "Continuous Improvement for Existing Solutions",
    ],
    sections: [
      {
        title: "AWS Architecture",
        content:
          "What factors would you consider when designing a multi-region active-active architecture?",
        tips: [
          "Know all AWS services deeply",
          "Understand advanced networking concepts",
          "Practice with AWS Well-Architected Framework",
        ],
      },
    ],
    testimonials: [
      {
        author: "Raj N.",
        quote:
          "The AWS professional prep covered all the advanced scenarios I saw on the exam.",
      },
    ],
  },

  comptiasecurityplus: {
    title: "CompTIA Security+",
    description: "Preparation for CompTIA Security+ certification exam.",
    structure: [
      "Attacks, Threats and Vulnerabilities",
      "Architecture and Design",
      "Implementation",
      "Operations and Incident Response",
      "Governance, Risk and Compliance",
    ],
    sections: [
      {
        title: "Security Concepts",
        content:
          "What is the difference between symmetric and asymmetric encryption?",
        tips: [
          "Know all acronyms",
          "Understand security controls and frameworks",
          "Study attack types and mitigation techniques",
        ],
      },
      {
        title: "Security Concepts",
        content:
          "What is the difference between confidentiality, integrity, and availability (CIA Triad)?",
        tips: ["Understand how each principle applies in real-world security"],
      },
      {
        title: "Security Concepts",
        content:
          "What are the differences between technical, administrative, and physical security controls?",
        tips: ["Memorize examples of each type of control"],
      },
    ],
    testimonials: [
      {
        author: "Tom B.",
        quote:
          "The Security+ prep was comprehensive and helped me pass on my first attempt.",
      },
    ],
  },

  comptiaNetworkPlus: {
    title: "CompTIA Network+",
    description: "Preparation for CompTIA Network+ certification exam.",
    structure: [
      "Networking Fundamentals",
      "Network Implementations",
      "Network Operations",
      "Network Security",
      "Network Troubleshooting",
    ],
    sections: [
      {
        title: "Network Protocols",
        content:
          "What port numbers are associated with HTTP, HTTPS, FTP, and SSH?",
        tips: [
          "Memorize OSI model layers",
          "Know common port numbers",
          "Understand subnetting",
        ],
      },
    ],
    testimonials: [
      {
        author: "Jessica M.",
        quote:
          "The Network+ prep made complex networking concepts easy to understand.",
      },
    ],
  },

  comptiaAPlus: {
    title: "CompTIA A+",
    description: "Preparation for CompTIA A+ certification exam.",
    structure: [
      "Hardware",
      "Operating Systems",
      "Software Troubleshooting",
      "Networking",
      "Hardware and Network Troubleshooting",
      "Security",
      "Mobile Devices",
      "Virtualization and Cloud Computing",
      "Operational Procedures",
    ],
    sections: [
      {
        title: "Hardware Components",
        content: "What are the differences between DDR3 and DDR4 RAM?",
        tips: [
          "Know hardware components and specifications",
          "Understand troubleshooting methodology",
          "Study operating system features",
        ],
      },
    ],
    testimonials: [
      {
        author: "Chris D.",
        quote:
          "The A+ prep covered all the hardware and software knowledge I needed.",
      },
    ],
  },

  cybersecurityAnalyst: {
    title: "Cybersecurity Analyst (CySA+)",
    description:
      "Preparation for CompTIA Cybersecurity Analyst (CySA+) certification exam.",
    structure: [
      "Threat and Vulnerability Management",
      "Software and Systems Security",
      "Security Operations and Monitoring",
      "Incident Response",
      "Compliance and Assessment",
    ],
    sections: [
      {
        title: "Threat Detection",
        content:
          "What tools would you use to analyze network traffic for anomalies?",
        tips: [
          "Know security tools and their outputs",
          "Understand log analysis",
          "Study incident response procedures",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sam R.",
        quote:
          "The CySA+ prep was perfect for learning real-world security analysis skills.",
      },
    ],
  },
  pmp: {
    title: "Cybersecurity Analyst (CySA+)",
    description:
      "Preparation for CompTIA Cybersecurity Analyst (CySA+) certification exam.",
    structure: [
      "Threat and Vulnerability Management",
      "Software and Systems Security",
      "Security Operations and Monitoring",
      "Incident Response",
      "Compliance and Assessment",
    ],
    sections: [
      {
        title: "Threat Detection",
        content:
          "What tools would you use to analyze network traffic for anomalies?",
        tips: [
          "Know security tools and their outputs",
          "Understand log analysis",
          "Study incident response procedures",
        ],
      },
    ],
    testimonials: [
      {
        author: "Sam R.",
        quote:
          "The CySA+ prep was perfect for learning real-world security analysis skills.",
      },
    ],
  },

  pentest: {
    title: "PenTest+",
    description: "Preparation for CompTIA PenTest+ certification exam.",
    structure: [
      "Planning and Scoping",
      "Information Gathering and Vulnerability Identification",
      "Attacks and Exploits",
      "Penetration Testing Tools",
      "Reporting and Communication",
    ],
    sections: [
      {
        title: "Penetration Testing Methodology",
        content:
          "What is the difference between a vulnerability scan and a penetration test?",
        tips: [
          "Know the penetration testing process",
          "Understand common vulnerabilities",
          "Practice with testing tools",
        ],
      },
      {
        title: "Types of Penetration Tests",
        content:
          "What are the differences between black-box, white-box, and gray-box penetration testing?",
        tips: ["Study the levels of access in each testing type"],
      },
      {
        title: "Penetration Testing Tools",
        content:
          "Which tools are commonly used in penetration testing and what are their functions?",
        tips: [
          "Familiarize yourself with tools like Metasploit, Nmap, and Burp Suite",
        ],
      },
    ],
    testimonials: [
      {
        author: "Kevin L.",
        quote:
          "The PenTest+ prep gave me hands-on experience with real penetration testing scenarios.",
      },
    ],
  },
};
