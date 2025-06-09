"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProctoredProcess() {
  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-10 ">
      <div className="w-full max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.p
            className="text-lg font-semibold text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Process
          </motion.p>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How Our End-to-End Exam <br /> Assistance(Proctored) Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Allow our expert to handle your exams and classes
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service Card 1 */}
          <motion.div
            className="flex gap-2  shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <section className="px-2 w-1/2 flex flex-col justify-center">
              <h3 className="text-lg font-normal text-gray-600 mb-4">Step</h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                Schedule Your Exam Date
              </p>
              <p className="text-gray-500 mb-6">
                Got an exam date? That&apos;s all we need to get started.
              </p>
            </section>
            <figcaption className="h-full  w-1/2">
              <Image
                src="/process image 1.png"
                alt="expert exam assistance"
                width={300}
                height={400}
                className="object-fill w-full h-full"
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
            <section className=" h-[45%] p-3 ">
              <h3 className="text-lg font-normal text-gray-600 mb-4">Setup</h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                Join your Exam
              </p>
              <p className="text-gray-500 mb-4">
                Securely join your exam session and we&apos;ll handle the rest
              </p>
              <button className="flex items-center text-primary font-semibold group">
                Explore various exams we provide support{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
            <section className=" h-[45%] p-3 ">
              <h3 className="text-lg font-normal text-gray-600 mb-4">
                Follow-up
              </h3>
              <p className="text-2xl text-primary font-semibold mb-6">
                We Complete the Exam
              </p>
              <p className="text-gray-500 mb-4">
                Receive feedback and support after your exam
              </p>
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
