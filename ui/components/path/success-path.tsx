// components/SuccessPath.tsx
"use client";

import { motion } from "framer-motion";
import SuccessStep from "./success-step";

import {
  MessageSquare,
  CalendarCheck,
  UserCheck,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    title: "Tell Us your Exam Details",
    description:
      "Share the exam type, platform, date, and login credentials. Takes under 2 minutes.",
    icon: <MessageSquare className="text-green-500 w-6 h-6" />,
    bgColor: "bg-red-50",
  },
  {
    title: "Get Paires With a  Specialist",
    description:
      "We match you with an expert who has passed the same exam or worked on the same platform before.",
    icon: <CalendarCheck className="text-green-500 w-6 h-6" />,
    bgColor: "bg-blue-200",
  },
  {
    title: "We Handle Everything Live",
    description:
      "Your expert joins securely, manages the proctoring session, and completes the exam on time.",
    icon: <UserCheck className="text-green-500 w-6 h-6" />,
    bgColor: "bg-green-100",
  },
  {
    title: "You Get Your Grade",
    description:
      "We debrief you on the outcome. If we miss our agreed target, you get your money back — no questions asked.",
    icon: <GraduationCap className="text-green-500 w-6 h-6" />,
    bgColor: "bg-blue-300",
  },
];

export default function SuccessPath() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="w-full mx-auto max-w-full lg:max-w-310  flex flex-col text-center justify-center sm:flex-row sm:text-start lg:items-center sm:justify-between mb-10 px-9">
        <h2 className="text-4xl font-bold text-primary mb-2">
          Unlock Your Path to <br /> Success with Us
        </h2>
        <p className="text-[1rem] lg:text-[1.3rem] text-primary">
          Our simple process makes it easy to get the <br /> academic support
          you need
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" w-full mx-auto max-w-full lg:max-w-310 flex flex-wrap justify-center gap-6"
      >
        {steps.map((step, index) => (
          <SuccessStep key={index} {...step} />
        ))}
      </motion.div>
    </section>
  );
}
