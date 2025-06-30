"use client";
import { FormProvider, useFormContext } from "@/context/FormContext";
import SupportTypeStep from "./SupportTypeStep";
import PersonalInfoStep from "./PersonalInfoStep";
import CategorySpecificStep from "./CategorySpecificStep";
import ConfirmationStep from "./Confirm";
import Stepper from "./StepIndicators";
import Success from "./Success";
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
            <FormContent />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

const FormContent = () => {
  const { state } = useFormContext();
  if (state.submitted) {
    return <Success />;
  }

  return (
    <>
      {state.step === 0 && <SupportTypeStep />}
      {state.step === 1 && <PersonalInfoStep />}
      {state.step === 2 && <CategorySpecificStep />}

      {state.step === 3 && <ConfirmationStep />}
    </>
  );
};
