"use client";
import { motion } from "motion/react";

import Link from "next/link";
import {
  GraduationCap,
  Monitor,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

const examServices = [
  {
    icon: GraduationCap,
    title: "GED Exam Help",
    subtitle: "Academic / equivalency",
    tags: ["Academic"],
    description:
      "All 4 subtests covered — Math, RLA, Science & Social Studies. Accepted in all 50 US states and Canadian provinces.",
    features: [
      "Expert takes the exam for you",
      "Online ",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "500+", label: "GEDs passed" },
      { value: "4.9★", label: "Rating" },
    ],
    price: "$100",
    learnMore: {
      label: "Learn more about GED help →",
      href: "proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me",
    },
  },
  {
    icon: Monitor,
    title: "HiSET Exam Help",
    subtitle: "Academic / equivalency",
    tags: ["Academic", "⭐ Most requested"],
    description:
      "All 5 HiSET subtests handled. Available in 23 US states. Our specialists have a proven pass rate across every section — including the essay.",
    features: [
      "Expert takes the exam for you",
      "Online ",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "300+", label: "HiSETs passed" },
      { value: "4.8★", label: "Rating" },
    ],
    price: "$159",
    learnMore: {
      label: "Learn more about HiSET help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me",
    },
  },
  {
    icon: ClipboardList,
    title: "PMP Exam Help",
    subtitle: "Professional / PM",
    tags: ["Professional / PM", "⭐ Most requested"],
    description:
      "PMI-certified experts handle your PMP exam. 180 questions, 230 minutes — we manage every domain: People, Process, and Business Environment.",
    features: [
      "PMI-certified expert assigned",
      "All 3 domains fully covered",
      "Last-minute bookings accepted",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "200+", label: "PMPs passed" },
      { value: "4.9★", label: "Rating" },
    ],
    price: "$249",
    learnMore: {
      label: "Learn more about PMP help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me",
    },
  },
];

export default function ExamHelpSection() {
  

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  };

  return (
    <motion.section
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
        Expert Help for Every Major Exam
      </motion.h2>
      <motion.p
        className="text-xl text-primary mb-12 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Certified specialists across academic, professional, and healthcare
        exams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {examServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col  rounded-2xl p-6 text-white gap-4  border-2 border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Tags */}
              <div className="flex gap-2 flex-wrap text-center">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-sm text-center font-semibold px-3 py-2 rounded-full ${
                      tag.includes("⭐")
                        ? "bg-[#2DBF50] text-white border border-green-700"
                        : "bg-accent2 text-primary border border-gray-600"
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
              <p className="text-gray-700  leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {service.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="w-[18px] h-[18px] bg-primary rounded-full flex items-center justify-center shrink-0">
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

              {/* Pricing */}
              <p className="text-gray-400 text-sm">
                Starting from{" "}
                <span className="text-white font-bold">{service.price}</span> ·
                free quote in 60 sec
              </p>

              {/* Guarantee */}
              <div className="flex items-center gap-2 bg-green-950/50 border border-green-800/50 rounded-lg px-4 py-2.5 text-primary text-sm font-medium">
                <ShieldCheck size={16} strokeWidth={2} />
                100% money-back if you don&apos;t pass
              </div>

              {/* CTAs */}
              <button
                onClick={handleClick}
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-base px-8 py-3 rounded-xl cursor-pointer transition-colors"
              >
                Get a free quote →
              </button>
              <Link
                href={service.learnMore.href}
                className="text-center text-primary text-sm underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                {service.learnMore.label}
              </Link>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
