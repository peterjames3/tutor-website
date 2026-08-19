"use client";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Calculator,
  PenTool,
} from "lucide-react";

const examServices = [
  // ===== PROFESSIONAL CERTIFICATIONS =====
  {
    icon: Award,
    title: "PMP Exam Help",
    subtitle: "Project Management Professional",
    tags: ["Project Management", "⭐ PMI Certified"],
    description:
      "Expert PMP exam takers handle your 180-question, 230-minute exam. Full coverage of People, Process, and Business Environment domains with guaranteed results.",
    features: [
      "Pay someone to take my PMP exam",
      "All 3 PMP domains fully covered",
      "PMI-certified expert assigned",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "200+", label: "PMPs passed" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about PMP help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me",
    },
  },
  {
    icon: Award,
    title: "PRINCE2 Exam Help",
    subtitle: "PRINCE2 Foundation & Practitioner",
    tags: ["Project Management", "⭐ PRINCE2 Certified"],
    description:
      "Qualified PRINCE2 specialists handle your Foundation or Practitioner exam. Every theme, process, and principle covered — so you walk away certified.",
    features: [
      "Pay someone to take my PRINCE2 exam",
      "Foundation & Practitioner covered",
      "PRINCE2-qualified expert assigned",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "100+", label: "PRINCE2s passed" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about PRINCE2 help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me",
    },
  },
  {
    icon: Briefcase,
    title: "SHRM Exam Help",
    subtitle: "SHRM-CP & SHRM-SCP Certification",
    tags: ["Human Resources", "⭐ SHRM Certified"],
    description:
      "SHRM-certified experts handle your HR certification exam. 160 questions covering behavioral competencies and HR knowledge domains — fully managed for you.",
    features: [
      "Pay someone to take my SHRM exam",
      "SHRM-CP & SHRM-SCP covered",
      "SHRM-certified expert assigned",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "150+", label: "SHRMs passed" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about SHRM help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me",
    },
  },
  {
    icon: Home,
    title: "Real Estate Exam Help",
    subtitle: "Real Estate Licensing Exam",
    tags: ["Real Estate", "⭐ Licensing"],
    description:
      "Expert real estate exam takers handle both national and state-specific portions of your licensing exam. Property ownership, contracts, finance, and more covered.",
    features: [
      "Pay someone to take my real estate exam",
      "National & state-specific covered",
      "Real estate expert assigned",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "80+", label: "Licenses earned" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Real Estate help →",
      href: "/real-estate-exam-help",
    },
  },

  // ===== HIGH SCHOOL EQUIVALENCY =====
  {
    icon: GraduationCap,
    title: "GED Exam Help",
    subtitle: "General Educational Development Test",
    tags: ["High School Equivalency", "⭐ GED"],
    description:
      "Expert GED exam takers handle all four subject areas: Math, Science, Social Studies, and Language Arts. Your pathway to a high school equivalency diploma.",
    features: [
      "Pay someone to take my GED exam",
      "All 4 subject areas covered",
      "GED expert assigned",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "120+", label: "GEDs passed" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about GED help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me",
    },
  },
  {
    icon: BookOpen,
    title: "HiSET Exam Help",
    subtitle: "High School Equivalency Test",
    tags: ["High School Equivalency", "⭐ HiSET"],
    description:
      "Professional HiSET exam takers handle all five subtests: Language Arts (Reading & Writing), Mathematics, Science, and Social Studies. Your path to equivalency.",
    features: [
      "Pay someone to take my HiSET exam",
      "All 5 subtests covered",
      "HiSET expert assigned",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "60+", label: "HiSETs passed" },
      { value: "4.7★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about HiSET help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me",
    },
  },

  // ===== ACADEMIC EXAMS =====
  {
    icon: Calculator,
    title: "Academic & College Exam Help",
    subtitle: "Math, Science, Nursing & More",
    tags: ["Academic Support", "⭐ All Subjects"],
    description:
      "Comprehensive academic exam help for college students. From math quizzes to nursing exams, our experts handle all subjects with guaranteed results.",
    features: [
      "Pay someone to take my nursing entrance exam",
      "Math, Science, and English exam help",
      "Mid-term and final exam support",
      "Regular quizzes and tests covered",
    ],
    stats: [
      { value: "98%", label: "Pass rate" },
      { value: "1000+", label: "Exams completed" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Academic help →",
      href: "/online-class-help",
    },
  },
 

  // ===== PROCTORED EXAMS =====
  {
    icon: PenTool,
    title: "Proctored & Lockdown Exam Help",
    subtitle: "Pearson VUE · ProctorU · Honorlock · Respondus",
    tags: ["Proctored Exams", "⭐ All Platforms"],
    description:
      "Professional proctored exam help across all major platforms. Our experts handle webcam monitoring, lockdown browsers, and strict proctoring environments.",
    features: [
      "Pay someone to take my proctored exam",
      "Pearson VUE & OnVUE support",
      "ProctorU, Honorlock & Respondus help",
      "ExamSoft, Proctorio & ProctorTrack covered",
    ],
    stats: [
      { value: "99%", label: "Pass rate" },
      { value: "500+", label: "Proctored exams" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Proctored help →",
      href: "/proctored-exam-help",
    },
  },
];

export default function VendorListSection() {


  return (
    <motion.section
      id='certification'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-4 bg-white"
    >
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
      >
        Expert Online Exam Help for Every Major Certification
      </motion.h2>
      <motion.p
        className="text-xl text-primary mb-12 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Professional exam takers ready to help you pass PMP, PRINCE2, SHRM, GED, HiSET, Real Estate, Nursing & more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full mx-auto max-w-full lg:max-w-310 px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {examServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              key={index}
              className="flex flex-col rounded-2xl p-6 text-white gap-4 border-2 border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Tags */}
              <div className="flex gap-2 flex-wrap text-center">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-sm text-center font-semibold px-3 py-2 rounded-full ${
                      tag.includes("⭐")
                        ? "bg-[#2DBF50] text-white border border-green-700"
                        : "bg-accent2 text-secondary border border-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="bg-green-900/40 rounded-xl p-3 shrink-0">
                  <Icon size={36} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-primary font-bold text-lg leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {service.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="size-4.5 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <polyline
                          points="2,6 5,9 10,3"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 rounded-xl overflow-hidden border border-gray-700 divide-x divide-gray-700">
                {service.stats.map((stat, i) => (
                  <div key={i} className="bg-[#252b32] py-2.5 text-center">
                    <div className="text-white font-bold text-base">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-[12px] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2 bg-green-950/50 border border-green-800/50 rounded-lg px-4 py-2.5 text-white text-sm font-medium">
                <ShieldCheck size={16} strokeWidth={2} />
                100% money-back if you don&apos;t pass
              </div>

              {/* CTAs */}
              <Link
                href={service.learnMore.href}
                className="text-center text-secondary text-sm underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                {service.learnMore.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
