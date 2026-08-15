"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Check } from "lucide-react";
import Link from "next/link";

const pricingCards = [
  { title: "Class", price: "$60", unit: "/week" },
  { title: "Exams", price: "$100", unit: "" },
  { title: "Quiz", price: "$60", unit: "" },
  { title: "Assignment", price: "$25", unit: "" },
  { title: "Homework", price: "$25", unit: "" },
  { title: "Essay", price: "$10", unit: "/page" },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-310 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Description & Bullets */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-black leading-snug ">
            Unbeatable Pricing for Professional Academic Help
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At TestHelpNow Help, budget constraints shouldn&apos;t stand between you
            and academic success. That is why we offer a transparent,
            student-friendly pricing model for comprehensive online academic help,
            with no hidden fees. Whether you need fast assignment help, in-depth
            study help, or reliable academic support for students, you are making
            an investment in guaranteed grade improvement. Our experts deliver
            top-tier homework help, personalized online tutoring services, and
            tailored subject help. We handle the heavy lifting, providing the best
            professional academic help to secure your top grades.
          </p>

          <ul className="space-y-4 pt-2">
            {[
              "Premium expert help fitted to your budget.",
              "Identity and coursework remain strictly confident.",
              "Top grades with accurate, zero-plagiarism results.",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[#1e293b] font-medium text-base">
                <span className="flex items-center justify-center size-6 rounded-full bg-secondary text-white shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Pricing Box Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-6"
        >
          <div className="bg-accent2 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-[#e0e7ff]">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] text-center mb-8 tracking-tight">
              The Best Price Offer You&apos;ve Seen
            </h3>

            {/* 3x2 Grid Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {pricingCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-h-[110px] sm:min-h-[125px]"
                >
                  <span className="text-gray-500 font-medium text-xs sm:text-sm mb-1">
                    {item.title}
                  </span>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl sm:text-4xl font-extrabold text-yellow-900 tracking-tight">
                      {item.price}
                    </span>
                    {item.unit && (
                      <span className="text-[11px] sm:text-xs text-yellow-900 font-semibold ml-0.5">
                        {item.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#hero"
              className="block w-full text-center bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-colors"
            >
              Order Now
            </Link>

            {/* Guarantee Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 bg-white/70 text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-gray-900 fill-gray-900 stroke-white" />
                <span>Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 bg-white/70 text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-900 fill-gray-900 stroke-white" />
                <span>No Hidden Charges</span>
              </div>
            </div>

            {/* Payment Method Badges */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6">
              {/* Visa */}
              <div className="bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm flex items-center justify-center h-8 w-14">
                <span className="font-black italic text-blue-900 tracking-tighter text-sm">
                  VISA
                </span>
              </div>
              {/* Mastercard */}
              <div className="bg-[#0a1b2a] px-3 py-1.5 rounded-md border border-gray-200 shadow-sm flex items-center justify-center h-8 w-14 overflow-hidden">
                <div className="flex -space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#eb001b]" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-90" />
                </div>
              </div>
              {/* American Express */}
              <div className="bg-[#007bc1] text-white px-2 py-1 rounded-md border border-gray-200 shadow-sm flex flex-col items-center justify-center h-8 w-14 leading-none">
                <span className="text-[7px] font-black tracking-tighter">AMERICAN</span>
                <span className="text-[7px] font-black tracking-tighter">EXPRESS</span>
              </div>
              {/* Discover */}
              <div className="bg-white px-2 py-1 rounded-md border border-gray-200 shadow-sm flex items-center justify-center h-8 w-14">
                <span className="text-[9px] font-extrabold text-gray-800 tracking-tighter">
                  DISC<span className="text-[#f97316]">O</span>VER
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
