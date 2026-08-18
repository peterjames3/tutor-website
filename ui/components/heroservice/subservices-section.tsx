"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ExamServices() {
  return (
    <section className="bg-[#e2ebf3]/30 py-16 px-4 sm:px-6 lg:px-10 ">
      <div className="w-full max-w-full lg:max-w-310 px-4 mx-auto">
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
            Three ways we help you pass
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you&apos;re working adult, busy student, or a professional
            chasing certification- pick the support that fits your situation.
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
              <div className="rounded-2xl text-center py-2 mb-3 text-sm text-primary font-semibold bg-[#BEDBFF]">
                {" "}
                Most Popular
              </div>
              <h3 className="text-lg font-normal text-gray-600 mb-4">
                Expert Exam-taking
              </h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                Let Our Experts Take Your Exams for You
              </p>
              <p className="text-gray-500 mb-6">
                A certified expert logs into your exam session and completes
                your proctored test on your behalf. Handles webcam monitoring,
                lockdown browsers, timed sections, and all platform
                requirements.
              </p>

              <Link
                href="/proctored-exam-help"
                className="flex items-center text-primary font-semibold group"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </section>
            <figcaption className="h-full  w-1/2">
              <Image
                src="/process image 1.png"
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
              <div className="max-w-[14rem] rounded-2xl text-center py-2 mb-2 text-sm text-primary font-semibold bg-[#FBF7F0]">
                {" "}
                Build Confidence
              </div>
              <h3 className="text-lg font-normal text-gray-600 mb-4">Expert</h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                1-On-1 Tutoring
              </p>
              <p className="text-gray-500 mb-4">
                Certified instructors work with you directly — on your schedule,
                in your subject, at your pace. K–12 through college and
                professional certifications.
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
                src="/process image 2.png"
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
              <div className="max-w-[14rem] text-center py-2 mb-2 rounded-2xl text-sm text-primary font-semibold bg-[#E9F5EA]">
                {" "}
                Ace it yourself
              </div>
              <h3 className="text-lg font-normal text-gray-600 mb-4">
                Test Prep
              </h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                Ace Your Exam
              </p>
              <p className="text-gray-500 mb-4">
                Practice tests, expert study guides, and targeted coaching for
                GED, HiSET, PMP, SHRM, and more. Get fully prepared before exam
                day.
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
                src="/process image 3.png"
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
