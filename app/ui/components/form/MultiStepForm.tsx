"use client";
import { FormProvider, useFormContext } from "@/context/FormContext";
import SupportTypeStep from "./SupportTypeStep";
import PersonalInfoStep from "./PersonalInfoStep";
import CategorySpecificStep from "./CategorySpecificStep";
import ConfirmationStep from "./Confirm";
import Stepper from "./StepIndicators";

export default function StudentForm() {
  return (
    <FormProvider>
      <div className="min-h-screen  py-6 px-4 ">
        <div className=" w-full h-full md:flex md:gap-10 md:items-center">
          <div className="w-full md:w-[30%] px-8 py-14 h-auto bg-[#042207]">
            <Stepper />
          </div>
          <div className=" w-full md:w-[70%] px-3 py-5 h-auto rounded-2xl">
            <FormContent />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

const FormContent = () => {
  const { state } = useFormContext();

  return (
    <>
      {state.step === 0 && <SupportTypeStep />}
      {state.step === 1 && <PersonalInfoStep />}
      {state.step === 2 && <CategorySpecificStep />}
     
      {state.step === 3 && <ConfirmationStep />}
    </>
  );
};
