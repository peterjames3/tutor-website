// StepTwo.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function StepTwo() {
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
        <h2 className="headline font-semibold mb-2"> Fill a Quick Form</h2>
        <div className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Provide detailed information about your academic needs, including:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Subject name</strong> (e.g., Mathematics, Biology,
              History)
            </li>
            <li>
              <strong>Course name or level</strong> (e.g., AP Calculus, GCSE
              Physics, University-Level Statistics)
            </li>
            <li>
              <strong>Exam details</strong> (if applicable), such as:
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>Exam date & format</li>
                <li>Specific areas where you need assistance</li>
              </ul>
            </li>
            {/* <li>
              <strong>Specific challenges or goals</strong> (e.g., improving
              essay writing, mastering problem-solving techniques, understanding
              key concepts)
            </li> */}
          </ul>
          <p className="mt-3 italic">
            The more details you provide, the better we can tailor support to
            your needs!
          </p>
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
