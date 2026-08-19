"use client";

import { motion } from "motion/react";
import { User, MonitorX, ScanEye } from "lucide-react";

export default function HeroRightContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full flex items-center gap-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Quantitative Reasoning */}
      <motion.div
        className="relative bg-accent2 rounded-md flex items-center justify-between h-full w-full px-3 py-[9.8rem] overflow-hidden"
        variants={itemVariants}
      >
        <section className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-full p-3 bg-accent">
              <User />
            </div>
            <h3 className="text-2xl font-bold text-primary">
              Identity Verification
            </h3>
          </div>
          <p className="text-gray-600">
            Webcam ID checks, face matching, and biometric prompts - We handle
            every Verification step each platform requires before the exam
            begins.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Works across ProctorU, Examity, Honorlock, and Pearson VUE
              identity flows.
            </span>
          </p>
        </section>
      </motion.div>

      {/* Communication & Writing */}
      <div className="flex flex-col gap-5 py-2">
        {/* Verbal Communication */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support2 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
            <MonitorX />

            </div>
            <h3 className="text-xl font-semibold text-primary">
              Lockdown Browser
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            Respondus, ExamSoft, and similar tools restrict all other
            applications. Our experts operate within these environments without
            triggering alerts or flags.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Respondus Lockdown Browser, ExamSoft Examplify, and
              institution-specific lockdown tools.
            </span>
          </p>
        </motion.div>

        {/* AI Behaviour Monitoring */}
        <motion.div
          className="space-y-3 rounded-md bg-cardBg-support3 h-full w-full px-3 py-[2rem]"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full p-3 bg-accent">
              <ScanEye />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              AI Behaviour Monitoring
            </h3>
          </div>
          <p className="text-gray-600 ml-7">
            Modern proctoring tools flag unusual eye movement, typing rhythm,
            and tab switching. We know exactly what each platform watches for
            and how to stay within expected behaviour patterns.
            <br />
            <span className="text-sm italic text-gray-500">
              e.g., Honorlock AI, ProctorU Guardian, and Examity Smart
              Proctoring detection systems.
            </span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
