"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/app/ui/Logo";

type ExamCategory = "k12" | "graduate" | "academics";

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
        {
          name: "SAT",
          path: "/exams/sat",
          description: "College admission test",
        },
        {
          name: "ACT",
          path: "/exams/act",
          description: "Alternative college admission test",
        },
        {
          name: "AP",
          path: "/exams/ap",
          description: "Advanced Placement exams",
        },
        { name: "PSAT", path: "/exams/psat", description: "Preliminary SAT" },
        {
          name: "SHSAT",
          path: "/exams/shsat",
          description: "Specialized High Schools Admissions Test",
        },
        {
          name: "SSAT",
          path: "/exams/ssat",
          description: "Secondary School Admission Test",
        },
        {
          name: "ISEE",
          path: "/exams/isee",
          description: "Independent School Entrance Exam",
        },
      ],
    },
    graduate: {
      title: "Graduate & Beyond",
      exams: [
        {
          name: "GRE",
          path: "/exams/gre",
          description: "Graduate Record Examination",
        },
        {
          name: "GMAT",
          path: "/exams/gmat",
          description: "Graduate Management Admission Test",
        },
        {
          name: "LSAT",
          path: "/exams/lsat",
          description: "Law School Admission Test",
        },
        {
          name: "MCAT",
          path: "/exams/mcat",
          description: "Medical College Admission Test",
        },
        {
          name: "DAT",
          path: "/exams/dat",
          description: "Dental Admission Test",
        },
        {
          name: "PCAT",
          path: "/exams/pcat",
          description: "Pharmacy College Admission Test",
        },
        {
          name: "BAR Exam",
          path: "/exams/bar",
          description: "State Bar Examination",
        },
      ],
    },
    academics: {
      title: " Certiticates Exams",
      exams: [
        {
          name: "CCNA",
          path: "/services/cisco-exams",
        },
        {
          name: "CompTIA",
          path: "/services/comptia-exams",
        },
        {
          name: "AWS",
          path: "/services/cloud-exams",
        },
        { name: "CEH", path: "/services/ceh-exam" },
        { name: "PMI (PMP, CAPM)", path: "/services/pmi-exams" },
        {
          name: "MCSA",
          path: "/services/microsoft-exams",
        },
      ],
    },
  };

  const currentCategory = examData[activeCategory];

  return (
    <div className=" h-full w-full mx-auto px-6 pt-12">
      <div className="">
        {/* ───────────────────────────────────────────────────────────────
            Left Side: Title + Description + Category Tabs
        ───────────────────────────────────────────────────────────────── */}
        <div>
          <h1 className="text-3xl sm:text-[2.5rem] md:text-[3rem] lg:text-[4.1rem] font-bold mb-4 leading-tight">
            <span className="text-primary">Ace Your </span>
            <span className="text-secondary">Exams </span>
            <br />
            <span className="text-primary">with </span>
            <span className="text-secondary">Expert </span>
            <span className="text-primary"> Assistance</span>
          </h1>

          <p className="text-primary mb-4 text-lg leading-relaxed">
            Struggling with exams? Let our experts handle it for you!
            <br />
            We ensure top-quality results while you focus on what matters most.
            Say goodbye to stress and hello to success!
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            What can we help you with?
          </h2>

          {/* ───── Category Tabs ───── */}
          <div className="flex justify-between mb-3  rounded-md  overflow-hidden border border-active-link">
            {Object.entries(examData).map(([key, category]) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as ExamCategory)}
                  className={`
                    px-6  py-3 text-[]1.2rem] font-semibold  transition-all
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
