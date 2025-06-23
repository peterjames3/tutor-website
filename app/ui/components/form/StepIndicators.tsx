"use client";
import { useFormContext } from "@/context/FormContext";

const Stepper = () => {
  const { state } = useFormContext();
  const steps = [
    "Support Type",
    "Personal Info",
    "Academic Details",
    "Confirmation",
  ];

  return (
    <div className="flex justify-between mb-10 relative">
      <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-16"></div>
      {steps.map((label, index) => (
        <div key={index} className="flex flex-col items-center z-10">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              state.step >= index
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`mt-2 text-sm ${
              state.step >= index
                ? "text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
