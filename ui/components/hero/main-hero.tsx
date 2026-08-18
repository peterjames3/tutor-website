"use client";
import { useState, useRef } from "react";
import LeftHero from "./hero-left";
import RightHero from "./hero-right";
import FloatingElements from "../animation/FloatingElements";
import { motion, AnimatePresence } from "framer-motion";

import Quote from "@/ui/components/form/quote";

export default function MainHero() {
  const [showHomeQuote, setShowHomeQuote] = useState(false);

  const quoteRef = useRef<HTMLDivElement>(null);

  // Close quote when clicking outside the quote card
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (quoteRef.current && !quoteRef.current.contains(e.target as Node)) {
      setShowHomeQuote(false);
    }
  };

  return (
    <section
      id="hero-main"
      className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] z-10 relative py-20 md:py-24"
    >
      <div
        className=" mt-24 w-full mx-auto max-w-full lg:max-w-310 flex flex-col gap-10 lg:flex-row md:justify-between"
        onClick={showHomeQuote ? handleOverlayClick : undefined}
      >
        {/* Left — always visible */}
        <div className="w-full lg:w-1/2">
          <LeftHero onGetQuote={() => setShowHomeQuote(true)} />
        </div>

        {/* Right — swaps between RightHero and Quote */}
        <div className="w-full lg:w-1/2">
          <AnimatePresence mode="wait">
            {showHomeQuote ? (
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
                <RightHero />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <FloatingElements />
    </section>
  );
}
