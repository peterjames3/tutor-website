// StepThree.tsx
import { motion } from "framer-motion";
import Image from "next/image";

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
        <h2 className="headline font-semibold mb-2">
          24/7 Test Prep Assistance
        </h2>
        <p className="text-[1rem] lg:text-[1.3rem] text-primary mb-4">
          Enjoy round-the-clock test prep support with our 24/7 live chat
          assistance and instant study material access. Our platform connects
          you to a network of qualified experts and cutting-edge tools, ensuring
          that help is always available whenever you need guidance or support in
          your exam preparation journey.
        </p>
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
