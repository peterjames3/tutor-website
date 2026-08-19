"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TutoringImage from "@/public/tutoring image 1.png";
import LearningImage from "@/public/tutoring image 2.png";
import CourseImage from "@/public/tutoring  image 3.png";

export default function GoToChoice() {
  const services = [
    {
      title: "Expert Real Estate Exam Help",
      description: "Licensed Professionals at Your Service",
      content:
        "Our certified real estate experts handle both national and state-specific portions of your licensing exam. From property ownership and contracts to finance and agency relationships — we cover everything to help you pass with confidence.",
      image: TutoringImage,
      alt: "Real estate exam help session",
    },
    {
      title: "100% Confidential & Secure",
      description: "Your Privacy Is Our Priority",
      content:
        "We guarantee complete confidentiality with every real estate exam help request. Your personal information, exam credentials, and licensing details are never shared or stored. Pass your exam with complete peace of mind.",
      image: LearningImage,
      alt: "Confidential real estate exam assistance",
    },
    {
      title: "Guaranteed Licensing Success",
      description: "Pass Your Real Estate Exam or Your Money Back",
      content:
        "Pay someone to take my real estate exam with confidence. We guarantee you'll pass your salesperson or broker licensing exam — or your money back. Join 80+ successful real estate professionals who trusted us.",
      image: CourseImage,
      alt: "Guaranteed real estate exam success",
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
      <div className="max-w-310 px-4 max-w-full mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our Real Estate Exam Help Services
        </motion.h2>

        <motion.div
          className="max-w-310 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
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

        {/* Trust Badges - Real Estate Specific */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex gap-4 items-center text-gray-200 bg-gray-900 px-4 py-2 rounded-full border border-gray-700 justify-center">
            <div className="text-[1rem] font-medium">80+</div>
            <div className="text-sm text-yellow-300">Real Estate Professionals</div>
          </div>
          <div className="flex gap-4 items-center justify-center text-gray-200 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
            <div className="text-[1rem] font-medium">100%</div>
            <div className="text-sm text-yellow-300">Licensing Exam Pass Rate</div>
          </div>
          <div className="flex gap-4 items-center justify-center text-gray-200 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
            <div className="text-[1rem] font-medium">50+</div>
            <div className="text-sm text-yellow-300">States Covered</div>
          </div>
          <div className="flex gap-4 items-center justify-center text-gray-200 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
            <div className="text-[1rem] font-medium">100%</div>
            <div className="text-sm text-yellow-300">Confidential</div>
          </div>
        </motion.div>

        {/* State Coverage Note */}
        <motion.p
          className="text-center text-sm text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          We cover all 50 states including California (DRE), Texas (TREC), Florida (DBPR), New York (DOS), and more.
        </motion.p>
      </div>
    </div>
  );
}