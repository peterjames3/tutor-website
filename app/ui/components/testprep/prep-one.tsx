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
        <h2 className="headline font-semibold mb-2">1-one-1 prepping</h2>
        <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Discover the ultimate test prep solution, customized to meet your
          individual needs. Our comprehensive platform offers targeted support
          across a wide array tests, icluding high school and college entrance
          exams, graduate school test prep, and professional certifications. No
          matter which exam you&apos;re preparing for, we provide the resources
          and expertise to help you excel in your academic journey, ensuring a
          personalized and effective test preparation experience.
        </p>
        <article className="flex gap-4 text-start">
          <article className="bg-accent2 p-4 rounded w-1/2">
            <h3 className="text-secondary font-bold text-2xl">94%</h3>
            <p className="p-text text-primary">
              of students reported increased confidence when receiving
              personalized exam prep guidance, rather than studying alone.
            </p>
          </article>
          <div className="bg-accent2 p-4 rounded w-1/2">
            <h3 className="text-secondary font-bold text-2xl">85%</h3>
            <p className="p-text text-primary">
              of learners choose services that are tailored to their exact exam
              goals—whether it&apos;s one-on-one tutoring, test strategy
              sessions, or full prep programs.
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
