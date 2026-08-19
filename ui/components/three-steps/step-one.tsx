// StepOne.tsx
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function StepOne() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 p-6"
      >
        <nav className="mb-4 headline flex items-center justify-center font-semibold size-16 rounded-full p-6 text-primary border-2 border-accent2">
          1
        </nav>
         
        <h2 className="headline font-semibold mb-2">
          Choose Your <span className="text-secondary">Exam Help</span> Service.
        </h2>
         {/* ── UPDATED: service names are now internal links ── */}
        <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Pick from{" "}
          <Link
            href="/academic/tutoring"
            className="text-secondary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Online Tutoring
          </Link>
          ,{" "}
          <Link
            href="/test-prep"
            className="text-secondary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Exam Preparation
          </Link>
          , or{" "}
          <Link
            href="/proctored-exam-help"
            className="text-secondary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Full Proctored Exam Support
          </Link>{" "}
          — we cover every type of support you need.
        </p>
         
        <article className="flex gap-4 text-start">
          <article className="bg-accent2 p-4 rounded w-1/2">
            <h3 className="text-secondary font-bold text-2xl">94%</h3>
            <p className="p-text text-primary mb-2">
              of students reported increased confidence when receiving
              personalized exam prep guidance, rather than studying alone.
            </p>
            <p className="text-sm text-gray-500">
              Based on a survey of 500+ TestHelpNow students, 2024
            </p>
          </article>
           
          <div className="bg-accent2 p-4 rounded w-1/2">
            <h3 className="text-secondary font-bold text-2xl">85%</h3>
            <p className="p-text text-primary">
              of learners choose services that are tailored to their exact exam
              goals — whether it&apos;s one-on-one tutoring, test strategy
              sessions, or full prep programs.
            </p>
          </div>
        </article>
      </motion.div>
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step 1 image.png"
          alt="student  browsing TestHelpNow  exam help services on a laptop"
          width={700}
          height={200}
          className="rounded-md object-fill"
        />
      </figcaption>
    </div>
  );
}
