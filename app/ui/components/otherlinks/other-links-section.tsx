"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  tutorSubjects,
  testPrepSubjects,
  certifications,
  gradeLevels,
} from "@/lib/navData";

export const OtherLinksSection = () => {
  return (
    <div className="py-12 bg-background">
      <section className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px]">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Services
        </motion.h2>

        {/* Combined Top Subjects and Test Prep Row */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tutors Section */}
          <div className="flex-1">
            <motion.div className="bg-background p-2" whileHover={{ y: -5 }}>
              <h3 className="text-xl font-bold mb-4 text-primary">Tutors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tutorSubjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    className="p-2 text-primary border-b border-gray-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    {subject}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Test Prep Section */}
          <div className="flex-1">
            <motion.div className="bg-background p-2" whileHover={{ y: -5 }}>
              <h3 className="text-xl font-bold mb-4 text-primary">Test Prep</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {testPrepSubjects.map((subject) => (
                  <motion.div
                    key={subject.slug}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={`/${subject.slug}`}
                      className="block p-2 text-primary hover:text-secondary transition-colors border-b border-gray-100"
                    >
                      {subject.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="bg-background p-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">
            Professional Certification Exams
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {certifications.map((cert) => (
              <motion.div
                key={cert.slug}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={`/exam-aid/${cert.slug}`}
                  className="block p-3 hover:bg-gray-50 rounded-md text-primary hover:text-secondary transition-colors"
                >
                  {cert.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grade Levels Section */}
        <motion.div
          className="bg-background p-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-primary">
            Tutoring By Grade Level
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {gradeLevels.map((grade, index) => (
              <motion.div
                key={index}
                className="p-3 text-primary"
                whileHover={{ scale: 1.02 }}
              >
                {grade.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
