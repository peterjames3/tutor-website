// StepTwo.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function PrepTwo() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step 2 image.png"
          alt="step two image"
          width={700}
          height={200}
          className="rounded-md object-cover"
        />
      </figcaption>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" w-full lg:w-1/2  p-6"
      >
        <nav className=" mb-4 headline flex items-center justify-center font-semibold size-16 rounded-full p-6 text-primary border-2 border-accent2">
          2
        </nav>
        <h2 className="headline font-semibold mb-2"> Test Prep Classes</h2>
        <div className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Experience unparalleled test prep support with our live classes,
          designed to help you build or reinforce fundamentals and basic
          test-taking strategies. These classes, which include overview sessions
          as well as section-specific lessons for dozens of exams, supplement
          1-on-1 tutoring for a comprehensive preparation experience. Taught by
          highly vetted instructors and tailored to students of various ages,
          these live classes provide an engaging and collaborative learning
          environment to further boost your test-taking skills and success.
        </div>
        <div className="bg-gradient-to-r  from-[#CEF3D6] to-[#FFEEEB] p-4 rounded-md">
          <h4 className="title font-bold text-primary">Emily Thompson</h4>
          <p className="label-text text-secondary mb-1">
            ⭐️⭐️⭐️⭐️⭐️ Admitted to Lakeside School
          </p>
          <p className="p-text text-gray-600 italic">
            &apos;The personalized study plan was a game-changer. It helped me
            focus on exactly what I needed to improve, and my grades improved
            drastically. &apos;
          </p>
        </div>
      </motion.div>
    </div>
  );
}
