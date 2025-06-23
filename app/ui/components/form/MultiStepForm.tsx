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
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                Student Support Registration
              </h1>
              <Stepper />
            </div>
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
