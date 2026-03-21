"use client";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

const steps = [
  {
    label: "Step 1",
    description: "Fill in the Form",
  },
  {
    label: "Step 2",
    description: "We Receive Your Details",
  },
  {
    label: "Step 3",
    description: "Get a Custom Quote",
  },
  {
    label: "Step 4",
    description: "We Handle the Rest",
  },
];

const Stepper = () => {
  return (
    <div className="flex flex-col justify-between gap-15 h-full">
      <div className="flex flex-col gap-3 justify-between mb-10 relative py-5 md:h-[26rem]">
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-16"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4 z-10">
            <div className="w-16 h-16 rounded-full border border-accent3 bg-accent3 text-primary flex items-center justify-center text-2xl font-semibold shrink-0">
              {index + 1}
            </div>
            <div className="text-background w-1/2">
              <h3 className="text-sm font-medium opacity-80">{step.label}</h3>
              <p className="text-[0.9rem] md:text-[1.0rem] lg:text-[1.1rem] font-semibold">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-auto">
        <Link
          className="mb-8 w-full flex items-end justify-start rounded-md bg-[#2b9e3b] p-4 md:h-50"
          href="/"
        >
          <div className="w-full text-white flex text-xl md:text-2xl lg:text-3xl items-center gap-5 font-semibold">
            <GraduationCap size={64} /> TestHelpNow
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Stepper;
