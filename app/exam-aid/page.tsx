"use client";

//import { useRef, useState } from "react";
//import { motion, AnimatePresence } from "framer-motion";
//import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "@/app/ui/components/exam-aid/main-hero-section";
import WhyChooseUs from "@/app/ui/components/exam-aid/why-choose-us";
import FAQSection from "@/app/ui/components/exam-aid/faq";
//import PrepSection from "@/app/ui/components/testprep/prep-section";
import ProctoredProcess from "../ui/components/exam-aid/proctored-process";
//import { TEST_PREP_PROGRAMS } from "@/lib/constants/test-prep-data";
import { Services } from "@/app/ui/components/exam-aid/services";

import TestimonialsSection from "@/app/ui/components/Testimonial/testimonials-section";
//import Link from "next/link";

export default function TestPrepHome() {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const [direction, setDirection] = useState<"left" | "right">("right");
  //   const sliderRef = useRef<HTMLDivElement>(null);

  //   // Show 3 items at a time on desktop, 1 on mobile
  //   const itemsPerPage =
  //     typeof window !== "undefined"
  //       ? window.innerWidth >= 1024
  //         ? 3
  //         : window.innerWidth >= 768
  //         ? 2
  //         : 1
  //       : 1;

  //   const totalSlides = Math.ceil(TEST_PREP_PROGRAMS.length / itemsPerPage);

  //   const nextSlide = () => {
  //     setDirection("right");
  //     setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  //   };

  //   const prevSlide = () => {
  //     setDirection("left");
  //     setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  //   };

  //   const goToSlide = (index: number) => {
  //     setDirection(index > currentIndex ? "right" : "left");
  //     setCurrentIndex(index);
  //   };

  //   // Get current items to display
  //   const currentItems = TEST_PREP_PROGRAMS.slice(
  //     currentIndex * itemsPerPage,
  //     (currentIndex + 1) * itemsPerPage
  //   );

  return (
    <>
      <Hero />
      <ProctoredProcess />
      <Services />
      <WhyChooseUs />
      {/* Uncomment the following section if you want to include the PrepSection */}
      {/* <PrepSection /> */}
      {/* <section className="bg-[#e2ebf3]/30 py-16 px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Test Preparation Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Comprehensive prep courses for all major standardized tests
          </p>
        </div>
      {/* Uncomment the following section if you want to include the PrepSection */}
      {/* <section className="bg-[#e2ebf3]/30 py-16 px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Test Preparation Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Comprehensive prep courses for all major standardized tests
          </p>
        </div>
      {/* <section className="bg-[#e2ebf3]/30 py-16 px-4 sm:px-6 lg:px-10">
        <div className="w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Test Preparation Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Comprehensive prep courses for all major standardized tests
          </p>
        </div>
      <PrepSection />

      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Test Preparation Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive prep courses for all major standardized tests
          </p>
        </motion.div> */}

      {/* <div className="relative overflow-hidden" ref={sliderRef}> */}
      {/* Slider Navigation Arrows */}
      {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button> */}

      {/* Slider Content */}
      {/* <div className="relative h-[400px] md:h-[450px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentItems.map((test) => (
                  <motion.div key={test.slug} className="h-full py-2">
                    <Link
                      href={`/test-prep/${test.slug}`}
                      className="block h-full"
                    >
                      <div className="bg-background  p-6 rounded-2xl shadow-md hover:shadow-md transition-shadow h-full flex flex-col">
                        <div className="flex flex-wrap gap-6 mb-5">
                          <span className="bg-accent2 text-secondary px-2 py-1 rounded-md label-text">
                            {test.duration}
                          </span>
                          <span className="bg-purple-100 text-primary px-2 py-1 rounded-md label-text">
                            {test.banner}
                          </span>
                        </div>

                        <div className="flex justify-between items-start mb-5">
                          <h2 className="headline font-bold text-primary">
                            {test.name}
                          </h2>
                          <span className="bg-accent2 text-secondary px-2 py-1 rounded-md label-text">
                            {test.category}
                          </span>
                        </div>

                        <p className="text-primary p-text mb-5">
                          {test.description}
                        </p>

                        {test.benefit && (
                          <div className="bg-accent px-3 py-4 rounded-lg mb-5">
                            <p className="text-sm text-primary">
                              {test.benefit}
                            </p>
                          </div>
                        )}

                        <button className="mt-auto  cursor-pointer w-full py-2 bg-button-login-default hover:bg-button-login-hover text-background font-medium rounded-lg transition-colors">
                          View Program
                        </button>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Indicators */}
      {/* <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-secondary w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      {/* </section> */}

      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
