"use client";
import { useState, useRef } from "react";
import LeftHero from "./hero-left";
import RightHero from "./hero-right";
import FloatingElements from "../animation/FloatingElements";
import { motion, AnimatePresence } from "framer-motion";
import MultiStepForm from "@/app/ui/components/form/MultiStepForm";
import { useUIState, useUIDispatch } from "@/context/UIContext";
import Quote from "@/app/ui/components/form/quote";

export default function MainHero() {
  const [showHomeQuote, setShowHomeQuote] = useState(false);
  const { isVisible } = useUIState();
  const dispatch = useUIDispatch();

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
      className="bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] min-h-screen z-10 relative"
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
            <MultiStepForm onBack={() => dispatch({ type: "HIDE_HELP" })} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div
          className="pt-[10rem] py-2 w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] flex flex-col gap-10 lg:flex-row md:justify-between"
          onClick={showHomeQuote ? handleOverlayClick : undefined}
        >
          {/* Left — always visible */}
          <div className="w-full lg:w-1/2">
            <LeftHero
             
              onGetQuote={() => setShowHomeQuote(true)}
            />
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
      )}

      <FloatingElements />
    </section>
  );
}
