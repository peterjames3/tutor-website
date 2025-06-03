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
    title: "Request Support",
    description:
      "Tell us about your class or exam needs through our simple request form.",
    icon: <MessageSquare className="text-green-500 w-6 h-6" />,
    bgColor: "bg-red-50",
  },
  {
    title: "Get Matched",
    description:
      "We'll match you with the perfect academic expert for your specific subject and needs.",
    icon: <CalendarCheck className="text-green-500 w-6 h-6" />,
    bgColor: "bg-blue-200",
  },
  {
    title: "Receive Assistance",
    description:
      "Your expert provides personalized support, whether attending classes or preparing for exams.",
    icon: <UserCheck className="text-green-500 w-6 h-6" />,
    bgColor: "bg-green-100",
  },
  {
    title: "Succeed Academically",
    description:
      "Achieve better grades and reduce stress with our comprehensive academic support.",
    icon: <GraduationCap className="text-green-500 w-6 h-6" />,
    bgColor: "bg-blue-300",
  },
];

export default function SuccessPath() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px]  flex flex-col text-center justify-center sm:flex-row sm:text-start lg:items-center sm:justify-between mb-10 px-9">
        <h2 className="text-4xl font-bold text-primary mb-2">
          Unlock Your Path to <br /> Success with Us
        </h2>
        <p className="text-primary p-text">
          Our simple process makes it easy to get the <br /> academic support
          you need
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=" w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] flex flex-wrap justify-center gap-6"
      >
        {steps.map((step, index) => (
          <SuccessStep key={index} {...step} />
        ))}
      </motion.div>
    </section>
  );
}
