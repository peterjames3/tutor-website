"use client";
import { FormProvider} from "@/context/FormContext";

import Stepper from "./StepIndicators";

import OrderNow  from './order-now'
import { ArrowLeft } from "lucide-react";
type MultiStepFormProps = {
  onBack: () => void;
};

export default function StudentForm({ onBack }: MultiStepFormProps) {
  return (
    <FormProvider>
      <div className="min-h-screen  py-6 px-4 ">
        <div className=" w-full h-full md:flex md:gap-10 md:items-center">
          <div className="w-full md:w-[30%] px-8 py-14 h-auto bg-[#042207]">
            <Stepper />
          </div>
          <div className=" w-full md:w-[70%] px-3 pt-20 h-auto rounded-2xl">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary mb-6 hover:text-secondary transition-colors hover:cursor-pointer"
            >
              <ArrowLeft size={18} /> Back to main
            </button>
            <OrderNow />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}


