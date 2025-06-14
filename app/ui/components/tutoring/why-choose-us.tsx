"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TutoringImage from "@/public/tutoring image 1.png";
import LearningImage from "@/public/tutoring image 2.png";
import CourseImage from "@/public/tutoring  image 3.png";

export default function WhyChooseUs() {
  const services = [
    {
      title: "Expert Tutoring and Support",
      description: "Tailored to Your Unique Learning Needs",
      content:
        "Our services include personalized ACT tutoring, a complete essentials course, and proctored exam support.",
      image: TutoringImage,
      alt: "ACT tutoring session",
    },
    {
      title: "Experience Tailored Learning",
      description: "With Our One-on-One or Group Tutoring",
      content:
        "Benefit from customized sessions that focus on your strengths and areas for improvement.",
      image: LearningImage,
      alt: "Personalized learning",
    },
    {
      title: "Master the ACT",
      description: "With Our Comprehensive Essentials Course",
      content:
        "Covering all subjects, our course equips you with the knowledge to excel.",
      image: CourseImage,
      alt: "ACT essentials course",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Our Tutoring Services Stand Out
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-tertiary-30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={item}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Image Section with animation */}
              <motion.div
                className="h-48 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="title font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-lg text-primary mt-2">
                    {service.description}
                  </p>
                </motion.div>

                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {service.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
