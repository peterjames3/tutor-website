"use client";

import { motion } from "framer-motion";
import FloatingElements from "../animation/FloatingElements";

export default function SubTestimonialCard() {
  return (
    <section className="py-16 w-full bg-[#e2ebf3]/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[840px] mx-auto p-6 rounded-2xl shadow-md bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB] border border-gray-200 relative"
      >
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          Jamie L.
        </h3>

        <div className="flex items-center justify-center mt-2 space-x-2">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.42 8.263L12 18.897l-7.42 4.636L6 15.27 0 9.423l8.332-1.268z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-blue-600">2 months ago</span>
        </div>

        <p className="mt-4 text-gray-700 text-sm text-center leading-relaxed">
          &apos;The tutoring sessions were incredibly helpful — they made
          complex topics easy to understand. I felt supported every step of the
          way, and my tutor adjusted the pace just for me. The service is
          professional, affordable, and far better than anything I&apos;ve tried
          before. Whether you&apos;re in grade school or prepping for your
          doctorate, I highly recommend this team!&apos;
        </p>
        <FloatingElements />
      </motion.div>
    </section>
  );
}
