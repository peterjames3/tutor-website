"use client";
import { motion } from "motion/react";
import { useUIDispatch } from "@/context/UIContext";
import { Monitor, BookOpen, BriefcaseBusiness } from "lucide-react";

const examServices = [
  {
    icon: BookOpen,
    title: "GED Exam Help",
    description:
      "Earning your GED is a fresh start for educational advancement. Our experienced GED test-takers can help you achieve it by delivering guaranteed results with zero stress on your part.",
  },
  {
    icon: Monitor,
    title: "HiSET Exam Help",
    description:
      "The HiSET is your path to a high school equivalency credential. Our experts know every subtest inside out and will help you pass with confidence and ease.",
  },
  {
    icon: BriefcaseBusiness,
    title: "PMP Exam Help",
    description:
      "The PMP certification opens doors to senior project management roles. Our certified professionals will help you tackle the exam with precision and deliver the result you need.",
  },
];

export default function ExamHelpSection() {
  const dispatch = useUIDispatch();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      dispatch({ type: "SHOW_HELP" });
    }, 1000);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-4 bg-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Our Exam Portfolio
      </motion.h2>
      <motion.p
        className="text-xl text-primary mb-8 text-center mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Trusted Experts For High-Stakes Exam Support
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {examServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-10 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6 text-secondary">
                <Icon size={56} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-primary title font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-md leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={handleClick}
                className="bg-secondary hover:cursor-pointer text-white font-semibold px-8 py-3 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Order Now
              </button>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
