"use client";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
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
            How Our Proctored Exam Help Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From booking to results - here&apos;s exactly what happens at every
            step
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
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-normal text-gray-600">Step 1</h3>
                <div className="bg-accent2 text-primary text-sm rounded-xl py-2 px-5">
                  Book
                </div>
              </div>

              <p className="text-2xl text-primary font-semibold mb-6">
                Tell us about your exam
              </p>
              <p className="text-gray-500 mb-6">
                Share your exam type, platform, date, and login details. We only
                need 3 fields to get started.
              </p>
              <p className="flex items-center gap-3 fonr-semibold text-secondary">
                <Clock /> Takes 2 minutes
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
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-normal text-gray-600">Step 2</h3>
                <div className="bg-accent2 text-primary text-sm rounded-xl py-2 px-5">
                  Match
                </div>
              </div>

              <p className="text-2xl text-primary font-semibold mb-6">
                Get matched with your expert
              </p>
              <p className="text-gray-500 mb-4">
                We pair you with a specialist who has passed the same exam or
                worked on the same platform before. You confirm the match.
              </p>
              <p className="flex items-center gap-3 fonr-semibold text-secondary">
                Same day, usually within 1 hour
                <Clock />
              </p>
          
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
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-normal text-gray-600">Step 3</h3>
                <div className="bg-accent2 text-primary text-sm rounded-xl py-2 px-5">
                  Exam day
                </div>
              </div>
              <p className="text-2xl text-primary font-semibold mb-6">
                We handle the session live
              </p>
              <p className="text-gray-500 mb-4">
                Your expert accesses your exam using your credentials. They
                manage identity checks, lockdown browser, webcam, and every
                timed section.
              </p>
               <p className="flex items-center gap-3 fonr-semibold text-secondary">
        
                <Clock /> Duration of your exam
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
