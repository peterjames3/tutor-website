"use client";
import { useState } from "react";
import Link from 'next/link';
import Logo from "@/app/ui/Logo";

type ExamCategory = "k12" | "academics";

interface ExamItem {
  name: string;
  path: string;
  description?: string;
}

interface ExamCategoryData {
  title: string;
  exams: ExamItem[];
}

const LeftHero = () => {
  const [activeCategory, setActiveCategory] = useState<ExamCategory>("k12");

  const examData: Record<ExamCategory, ExamCategoryData> = {
    k12: {
      title: "Grades K-12",
      exams: [
        // {
        //   name: "SAT",
        //   path: "/exam-aid/sat",
        //   description: "College admission test",
        // },
        // {
        //   name: "ACT",
        //   path: "/exam-aid/act",
        //   description: "Alternative college admission test",
        // },
        // {
        //   name: "AP",
        //   path: "/exam-aid/ap",
        //   description: "Advanced Placement exams",
        // },
        {
          name: "GED",
          path: "/take-my-ged-exam-for-me",
          description: "High School Equivalency Test",
        },
        {
          name: "HiSET",
          path: "/take-my-hiset-exam-for-me",
          description: "High School Equivalency Test",
        },
        {
          name: "and More",
          path: "/proctored-exam-help",
          description: "Proctored Exam Help Page",
        },
      ],
    },
    // graduate: {
    //   title: "Graduate & Beyond",
    //   exams: [
    //     {
    //       name: "GRE",
    //       path: "/exam-aid/gre",
    //       description: "Graduate Record Examination",
    //     },
    //     {
    //       name: "GMAT",
    //       path: "/exam-aid/gmat",
    //       description: "Graduate Management Admission Test",
    //     },
    //     {
    //       name: "LSAT",
    //       path: "/exam-aid/lsat",
    //       description: "Law School Admission Test",
    //     },
    //     {
    //       name: "MCAT",
    //       path: "/exam-aid/mcat",
    //       description: "Medical College Admission Test",
    //     },
    //     {
    //       name: "DAT",
    //       path: "/exam-aid/dat",
    //       description: "Dental Admission Test",
    //     },
    //     {
    //       name: "PCAT",
    //       path: "/exam-aid/pcat",
    //       description: "Pharmacy College Admission Test",
    //     },
    //     {
    //       name: "NCLEX",
    //       path: "/exam-aid/nclex",
    //       description: "State Bar Examination",
    //     },
    //   ],
    // },
    academics: {
      title: "Certificates Exams",
      exams: [
        // {
        //   name: "AWS",
        //   path: "/exam-aid/awssolutionarchitectprofessional",
        // },
        // {
        //   name: "SHRM",
        //   path: "/take-my-shrm-exam-for-me",
        //   description: "Society for Human Resource Management",
        // },
        { name: "PMP", path: "/take-my-pmp-exam-for-me" },
        // {
        //   name: "PRINCE2",
        //   path: "/take-my-prince2-exam-for-me",
        //   description: "Projects in Controlled Environments",
        // },
        {
          name: "and More",
          path: "/proctored-exam-help",
        },
      ],
    },
    // healthcare: {
    //   title: "Healthcare & Nursing",
    //   exams: [
    //     {
    //       name: "Nursing Entrance",
    //       path: "/exam-aid/nursing-entrance",
    //       description: "TEAS, HESI, Kaplan Nursing",
    //     },
    //     {
    //       name: "NCLEX",
    //       path: "/exam-aid/nclex",
    //       description: "Nursing License Exam",
    //     },
    //     {
    //       name: "MCAT",
    //       path: "/exam-aid/mcat",
    //       description: "Medical College Admission Test",
    //     },
    //     {
    //       name: "DAT",
    //       path: "/exam-aid/dat",
    //       description: "Dental Admission Test",
    //     },
    //     {
    //       name: "and More",
    //       path: "/exam-aid",
    //       description: "Other healthcare exams",
    //     },
    //   ],
    // },
  };

  const currentCategory = examData[activeCategory];

  return (
    <div className=" h-full w-full mx-auto px-6 pt-12">
      <div className="">
        {/* ───────────────────────────────────────────────────────────────
            Left Side: Title + Description + Category Tabs
        ───────────────────────────────────────────────────────────────── */}
        <div>
          <h1 className="text-3xl sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.6rem] font-bold mb-4 leading-tight">
            <span className="text-primary">Get the </span>
            <span className="text-secondary">Support </span>
            <br />
            <span className="text-primary">You Need to Pass</span>
            <span className="text-secondary">Your High-Stakes </span>
            <span className="text-primary"> Exam</span>
          </h1>

          <p className="text-primary mb-4 text-lg leading-relaxed">
            Supporting candidates preparing for: professional certifications
            <br />
            PmP certifications, PRINCE2 Project Management, SHRM Human Resource
            Certifications, Healthcare & Academic Exams, Nursing Entrance
            Exams, GED, HiSET{" "}
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            What can we help you with?
          </h2>

          {/* ───── Category Tabs ───── */}
          <div className="flex gap-8 mb-3  rounded-md  overflow-hidden border border-active-link max-w-[25.1rem]">
            {Object.entries(examData).map(([key, category]) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as ExamCategory)}
                  className={`
                    px-6  py-3 text-[1.2rem] font-semibold  transition-all
                    ${
                      isActive
                        ? "bg-secondary text-background hover:cursor-pointer"
                        : " text-primary hover:bg-accent hover:cursor-pointer"
                    }
                  `}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────────
            Right Side: Exam “Pills” Grid
        ───────────────────────────────────────────────────────────────── */}
        <div className=" py-2 px-2 ">
          <h3 className="flex items-center text-xl font-bold mb-3 text-green-700">
            <span className="mr-3">
              <Logo />
            </span>
            {currentCategory.title}
          </h3>

          {/* Wrap exam names as pill‐shaped links */}
          <div className="flex flex-wrap gap-3">
            {currentCategory.exams.map((exam) => (
              <Link
                key={exam.path}
                href={exam.path}
                className="
                  inline-block
                  px-4 py-2
                  text-primary font-medium label-text
                  border border-green-500 rounded-full
                  hover:bg-green-500 hover:text-white
                  transition-all
                "
              >
                {exam.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
