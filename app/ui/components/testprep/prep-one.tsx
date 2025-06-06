// StepOne.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function PrepOne() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className=" w-full lg:w-1/2  p-6 "
      >
        <nav className=" mb-4 headline flex items-center justify-center font-semibold size-16 rounded-full p-6 text-primary border-2 border-accent2">
          1
        </nav>
        <h2 className="headline font-semibold mb-2">
          1-one-1 preping
        </h2>
        <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Browse the type of support you need: Online Tutoring, Exam Preparation
          or Full Online Exam Handling.
        </p>
        <article className="flex gap-4 text-start">
          <article className="bg-accent2 p-4 rounded w-1/2">
            <h3 className="text-secondary font-bold text-2xl">94%</h3>
            <p className="p-text text-primary">
              of students feel more confident when they get customized support
              instaed of trying of trying to prepare alone.
            </p>
          </article>
          <div className="bg-accent2 p-4 rounded w-1/2">
            <h3 className="text-secondary font-bold text-2xl">85%</h3>
            <p className="p-text text-primary">
              of our students select serices/es that are customized to theri
              exact needs-whether it&apos;s tutoring, Exam support, or exam
              prep.
            </p>
          </div>
        </article>
      </motion.div>
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step 1 image.png"
          alt="step one image"
          width={700}
          height={200}
          className="rounded-md object-fill"
        />
      </figcaption>
    </div>
  );
}
