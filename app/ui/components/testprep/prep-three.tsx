// StepThree.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

export default function PrepThree() {

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full lg:w-1/2  p-6"
      >
        <nav className=" mb-4 headline flex items-center justify-center font-semibold size-16 rounded-full p-6 text-primary border-2 border-accent2">
          3
        </nav>
        <h2 className="headline font-semibold mb-2">Get Personalized Help</h2>
        <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Our team will review your info and contact you directly.
        </p>
        <ul className="p-text text-gray-700 space-y-3">
          <li className="flex gap-3 items-center">
            <CircleCheckBig size={22} className="text-secondary mr-2" /> Set up
            coaching sessions if needed
          </li>
          <li className="flex gap-3 items-center">
            <CircleCheckBig size={22} className="text-secondary mr-2" /> Prepare
            you for success
          </li>
          <li className="flex gap-3 items-center">
            <CircleCheckBig size={22} className="text-secondary mr-2" /> Handle
            your exam discreetly
          </li>
         
        </ul>
      </motion.div>
      <figcaption className="w-full h-full lg:w-1/2">
        <Image
          src="/step 3 image.png"
          alt="step three image"
          width={700}
          height={200}
          className="rounded-md object-fill"
        />
      </figcaption>
    </div>
  );
}
