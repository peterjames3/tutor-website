"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import HeroLeft from "./hero-left-content";
import HeroRight from "./hero-right-content";
import FloatingElements from "../animation/FloatingElements";
import Quote from "@/ui/components/form/quote";

export default function HeroMainSection() {
  const [showQuote, setShowQuote] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);

  // Close quote when clicking outside the quote card
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (quoteRef.current && !quoteRef.current.contains(e.target as Node)) {
      setShowQuote(false);
    }
  };

  return (
    <div
      id="Hero"
      className="w-full bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-[30rem] z-10 relative"
    >
      {/* ── Level 1: full-hero swap ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key="hero"
          className="py-[10rem] w-full mx-auto max-w-full lg:max-w-310 flex flex-col gap-10 lg:flex-row md:justify-between px-4 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          // click-away handler lives on the hero row so any click
          // outside the quote card collapses it
          onClick={showQuote ? handleOverlayClick : undefined}
        >
          {/* Left — always visible */}
          <div className="w-full lg:w-1/2">
            <HeroLeft onGetQuote={() => setShowQuote(true)} />
          </div>

          {/* Right — Level 2: HeroRight ↔ Quote swap */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              {showQuote ? (
                <motion.div
                  key="quote"
                  ref={quoteRef}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 60 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Quote />
                </motion.div>
              ) : (
                <motion.div
                  key="hero-right"
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <HeroRight />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      <FloatingElements />
    </div>
  );
}
