"use client";
import { useFormContext } from "@/context/FormContext";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

const Stepper = () => {
  const { state } = useFormContext();
  const steps = [
    {
      label: "Step 1",
      description: "Support Type Selection",
    },
    {
      label: "Step 2",
      description: "Personal Information",
    },
    {
      label: "Step 3",
      description: "Category-Specific Details",
    },
    {
      label: "Step 4",
      description: "Confirmation",
    },
  ];

  return (
    <div className="flex flex-col justify-between gap-15 h-full">
      <div className="flex flex-col gap-3 justify-between mb-10 relative py-5  md:h-[26rem]">
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-16"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex  items-center gap-6 z-10">
            <div
              className={`w-16 h-16 rounded-full border border-accent3 flex items-center justify-center text-2xl font-semibold ${
                state.step >= index
                  ? "bg-accent3 text-primary"
                  : "bg-transparent text-background"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-background">
              <h3>{step.label}</h3>
              <p className="text-[1.3rem] font-semibold">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-auto ">
        <Link
          className="mb-8 w-full flex  items-end justify-start rounded-md bg-[#2b9e3b] p-4 md:h-50"
          href="/"
        >
          <div className="w-full text-white  flex text-3xl items-center gap-5 font-semibold">
            <GraduationCap size={64} /> Edusion
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Stepper;
