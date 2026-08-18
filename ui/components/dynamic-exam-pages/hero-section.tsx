"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { HeroSectionData } from "@/lib/defination";
import FloatingElements from "../animation/FloatingElements";
import { ArrowLeft, ClipboardList, Users, Target } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection({ data }: { data: HeroSectionData }) {
  const router = useRouter();
  const {
    preHeading,
    heading,
    accentWord,
    subtext,
    ctaPrimary,
    ctaSecondary,
    sections: sectionsData,
  } = data;

  const headingParts = accentWord ? heading.split(accentWord) : [heading];

  // Pick first section for the tall featured card, remaining sections for the right column
  const sections = sectionsData ?? [];
  const featuredSection = sections[0];
  const sideSections = sections.slice(1);

  return (
    <section
      id="hero-main"
      className="relative bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] z-10 py-16 md:py-20"
    >
      <div className="pt-24 md:pt-32 pb-4 w-full mx-auto max-w-310 px-4 flex flex-col lg:flex-row gap-10 px-4 md:justify-between items-center">
        {/* Left — Text content */}
        <div className="w-full lg:w-1/2">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 mb-3 text-primary font-semibold hover:text-secondary transition-colors hover:cursor-pointer"
          >
            <ArrowLeft size={18} /> Go Back
          </button>

          {preHeading && (
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              {preHeading}
            </p>
          )}

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary">
            {headingParts[0]}
            {accentWord && (
              <span className="text-active-link">{accentWord}</span>
            )}
            {headingParts[1]}
          </h1>

          {subtext && (
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mt-4">
              {subtext}
            </p>
          )}

          <div className="flex flex-wrap gap-4 mt-6">
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="cta hover:cursor-pointer"
                aria-label={ctaPrimary.label}
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 rounded-md transition-all duration-300"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>

        {/* Right — Multi-column card layout */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Tall Featured Card (Left side of right container) */}
          {featuredSection && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-accent2 rounded-2xl p-6 flex flex-col  justify-center gap-4 text-slate-800 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-xs">
                <ClipboardList className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold leading-snug">
                {featuredSection.title}
              </h3>
              <p className="text-[1rem] text-slate-600 leading-relaxed">
                {featuredSection.content}
              </p>
            </motion.div>
          )}

          {/* Stacked Domain Cards (Right side of right container) */}
          <div className="flex flex-col gap-4">
            {sideSections.map((section, index) => {
              const isBlue = index % 2 === 0;
              return (
                <motion.div
                  key={section.title || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                  className={`${
                    isBlue ? "bg-[#BFDBFE]/80" : "bg-[#F0FDF4]/90"
                  } rounded-2xl p-6 flex flex-col gap-3 shadow-sm`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shrink-0 shadow-xs">
                      {isBlue ? (
                        <Users className="w-5 h-5 text-slate-700" />
                      ) : (
                        <Target className="w-5 h-5 text-slate-700" />
                      )}
                    </div>
                    <h3 className="font-bold text-slate-800 text-[1.3rem] leading-tight">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-[1rem] text-slate-600 leading-relaxed">
                    {section.content}
                  </p>

                  {section.tips?.[0] && (
                    <p className="text-[11px] text-slate-500 italic">
                      e.g., {section.tips[0]}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <FloatingElements />
    </section>
  );
}
