"use client";

import { motion } from "motion/react";

export default function ChatwootIllustration() {
  return (
    <div className="fixed bottom-20 right-6 z-50 pointer-events-none flex flex-col items-end gap-2">
      
      {/* ── Illustration 1: Curved Arrow pointing to the Chat Bubble ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="relative flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200"
      >
        {/* Text Badge */}
        <span className="text-sm font-semibold text-primary-700 whitespace-nowrap">
          Live Chat Us Now
        </span>
        
        {/* Curved Arrow SVG pointing DOWN-RIGHT towards the widget */}
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform rotate-12"
        >
          <path
            d="M2 5C10 5 25 5 35 15C38 18 39 22 39 28"
            stroke="#2563EB"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 24L39 28L35 33"
            stroke="#2563EB"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* ── Illustration 2: Pulsing "Live" Indicator Badge ── */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.5, type: "spring" }}
        className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 mr-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        Live
      </motion.div>

      {/* ── Illustration 3: Small Pulse Ring below the arrow ── */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 3 }}
        className="w-4 h-4 rounded-full border-2 border-primary-700 bg-primary-700/10 ml-[-30px] animate-pulse mt-[-10px]"
      />

    </div>
  );
}