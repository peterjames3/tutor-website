
"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { ArrowUpRight, Mail } from "lucide-react";

export const AnimatedBanner = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className="relative py-16 px-8  overflow-hidden min-h-[500px] flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Image with overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/banner image desktop.png" 
           alt="Students studying"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-dark/90" /> {/* Dark overlay */}
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-background mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Exam In Less Than 24 Hours?
        </motion.h2>

        <motion.p
          className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Join thousands of students across the US and Canada who passed their
          proctored exams with TestHelpNow. It&apos;s free to get a quote — no
          commitment, no pressure.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-10"
        >
          <button
            onClick={handleClick}
            className="flex gap-2 bg-white hover:cursor-pointer text-primary font-semibold px-8 py-3 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get a free quote
            <span>
              <ArrowUpRight />
            </span>
          </button>
          <address className="flex items-center justify-center gap-4  text-lg text-gray-600">
            {/* <div className="flex items-center gap-2 text-primary bg-white font-semibold px-8 py-4  rounded-xl">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <a href="tel:(800) 803-4058">(800) 803-4058</a>

              
            </div> */}
            <div className="flex items-center gap-2 text-primary bg-white font-semibold px-8 py-3  rounded-xl">
              <Mail className="h-3 w-3 md:h-4 md:w-4" />
              <a href="mailto:info@testhelpnow.com">info@testhelpnow.com</a>
            </div>
          </address>
        </motion.div>
      </div>
    </motion.section>
  );
};
