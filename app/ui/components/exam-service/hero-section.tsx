"use client";
//import Image from "next/image";
import Link from "next/link";
import MultiStepForm from "@/app/ui/components/form/MultiStepForm";
import { useUIState, useUIDispatch } from "@/context/UIContext";
import { motion, AnimatePresence } from "framer-motion";
import HeroRight from "@/app/ui/components/pmp/hero-right";
import type { HeroSectionData } from "@/app/(site)/proctored-exam-help/[slug]/page";
import FloatingElements from "../animation/FloatingElements";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function HeroSection({ data }: { data: HeroSectionData }) {
  const { isVisible } = useUIState();
  const dispatch = useUIDispatch();
  const router = useRouter();
  const {
    preHeading,
    heading,
    accentWord,
    subtext,
    ctaPrimary,
    ctaSecondary,
    //heroImage,
    // backgroundImage,
    // backgroundColor,
  } = data;

  // Split heading to wrap accent word in a span
  const headingParts = accentWord ? heading.split(accentWord) : [heading];

  return (
    <section
      id="hero-main"
      className="relative bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-screen z-10 relative"
    >
      {isVisible ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="form"
            className="py-[5rem] w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] px-4 md:px-2 lg:px-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <MultiStepForm
              onBack={() => {
                dispatch({ type: "HIDE_HELP" });
              }}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="pt-[10rem] py-2 w-full mx-auto max-w-full lg:max-w-310 flex  flex-col gap-10 lg:flex-row  md:justify-between items-center">
          <div className="w-full lg:w-1/2">
            {/* Left — text */}
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
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {subtext}
              </p>
            )}

            <div className="flex flex-wrap gap-4 mt-2">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  id="get-help-now-btn"
                  type="button"
                  className=" mt-6 cta hover:cursor-pointer"
                  aria-label="Book Your Free 15-minute strategy Call"
                  aria-pressed="false"
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
          <div className="w-full lg:w-1/2">
            <HeroRight />
          </div>
        </div>
      )}

      <FloatingElements />
    </section>
  );
}
