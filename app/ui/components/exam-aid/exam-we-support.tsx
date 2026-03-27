"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ExamCard {
  _id: string;
  seoTitle: string;
  seoDescription?: string;
  slug: string;
  thumbnail?: {
    url: string;
    alt?: string;
  };
  tagline?: string;
}

interface ExamsWeSupportProps {
  exams: ExamCard[];
}

export default function ExamsWeSupport({ exams }: ExamsWeSupportProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  if (!exams?.length) return null;

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto px-6">
        {/* Header + nav buttons row */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">
              What We Cover
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Exams We Support
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              We specialize in end-to-end support for all major proctored
              testing platforms. Click any exam to learn more.
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${
                  canScrollLeft
                    ? "border-active-link text-active-link hover:bg-active-link hover:text-white"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${
                  canScrollRight
                    ? "border-active-link text-active-link hover:bg-active-link hover:text-white"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Slider track */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-6
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {exams.map((exam) => (
          <Link
            key={exam._id}
            href={`/proctored-exam-help/${exam.slug}`}
            className="group flex-shrink-0 snap-start w-[300px] sm:w-[320px] flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div className="relative h-44 bg-gray-100 overflow-hidden">
              {exam.thumbnail?.url ? (
                <Image
                  src={exam.thumbnail.url}
                  alt={exam.thumbnail.alt ?? exam.seoTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/10 to-active-link/10">
                  <span className="text-4xl font-bold text-active-link/30 select-none">
                    {exam.seoTitle?.slice(0, 3).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-2 p-5 flex-1">
              <h3 className="font-bold text-primary text-2xl leading-snug group-hover:text-active-link transition-colors duration-200">
                {exam.seoTitle}
              </h3>
              {(exam.tagline ?? exam.seoDescription) && (
                <p className="text-gray-500 text-[1rem] lg:text-[1.3rem] leading-relaxed line-clamp-3">
                  {exam.tagline ?? exam.seoDescription}
                </p>
              )}
            </div>

            {/* Card footer */}
            <div className="px-5 pb-5">
              <span className="inline-flex items-center gap-1 text-[1rem] font-semibold text-active-link group-hover:gap-2 transition-all duration-200">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
