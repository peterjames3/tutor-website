"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ExamAidProgram {
  slug: string;
  name: string;
  description: string;
  duration: string;
  banner: string;
  category: string;
  benefit?: string;
}

interface ExamAidSliderProps {
  programs: ExamAidProgram[];
}

export default function ExamAidSlider({ programs }: ExamAidSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) {
          setItemsPerPage(3);
        } else if (window.innerWidth >= 768) {
          setItemsPerPage(2);
        } else {
          setItemsPerPage(1);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(programs.length / itemsPerPage);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Get current items to display
  const currentItems = programs.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  // Animation variants
  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="relative overflow-hidden" ref={sliderRef}>
      {/* Slider Navigation Arrows */}
      <button
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
      </button>

      {/* Slider Content */}
      <div className="relative h-[400px] md:h-[450px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentItems.map((test) => (
              <motion.div
                key={test.slug}
                className="h-full py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/exam-aid/${test.slug}`} className="block h-full">
                  <div className="bg-background p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
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
                        <p className="text-sm text-primary">{test.benefit}</p>
                      </div>
                    )}

                    <button className="mt-auto cursor-pointer w-full py-2 bg-button-login-default hover:bg-button-login-hover text-background font-medium rounded-lg transition-colors">
                      View Program
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="flex justify-center mt-8 gap-2">
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
      </div>
    </div>
  );
}
