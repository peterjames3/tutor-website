"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ExamServices() {
  return (
    <section className="bg-[#e2ebf3]/30 py-16 px-4 sm:px-6 lg:px-10 ">
      <div className="w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.p
            className="text-lg font-semibold text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empower
          </motion.p>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Achieve Your Exam Goals
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Allow our expert tutors to handle your exams and classes
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <motion.div
            className="flex gap-2  shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <section className="p-2 w-1/2">
              <h3 className="text-lg font-normal text-gray-600 mb-4">
                Expert Exam Assistance
              </h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                Let Our Experts Take Your Exams for You
              </p>
              <p className="text-gray-500 mb-6">
                Personalized support to ensure your success with ease and
                confidence.
              </p>

              <Link
                href="/exam-aid"
                className="flex items-center text-primary font-semibold group"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </section>
            <figcaption className="h-full  w-1/2">
              <Image
                src="/service 1.png"
                alt="expert exam assistance"
                width={300}
                height={400}
                className="object-fill h-full w-full"
              />
            </figcaption>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="  shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <section className=" h-[45%] p-3 mb-2 ">
              <h3 className="text-lg font-normal text-gray-600 mb-4">Expert</h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                Tutoring
              </p>
              <p className="text-gray-500 mb-4">
                Get personalized tutoring from certified instructors to boost
                your confidence and performance.
              </p>
              <Link
                href="/academic/tutoring"
                className="flex items-center text-primary font-semibold group"
              >
                Explore About Tutoring{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </section>
            <figcaption className="h-[55%]  w-full">
              <Image
                src="/service 2.png"
                alt="expert exam assistance"
                width={800}
                height={400}
                className="object-fill h-full w-full"
              />
            </figcaption>
          </motion.div>

          {/* Service Card 3 */}

          <motion.div
            className="shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <section className=" h-[45%] p-3 mb-2 ">
              <h3 className="text-lg font-normal text-gray-600 mb-4">
                Test Prep
              </h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                Ace Your Exam
              </p>
              <p className="text-gray-500 mb-4">
                Get ready with targeted practice, expert guidance, and full
                support.
              </p>
              <Link
                href="/test-prep"
                className="flex items-center text-primary font-semibold group"
              >
                Explore More On Exam Prep{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </section>
            <figcaption className="h-[55%]  w-full">
              <Image
                src="/services 3.png"
                alt="expert exam assistance"
                width={800}
                height={400}
                className="object-fill h-full w-full"
              />
            </figcaption>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
