"use client";
import { useFormContext } from "@/context/FormContext";
import { submitFormData } from "@/lib/action";
import Button from "./button";

export default function ConfirmationStep() {
  const { state, dispatch } = useFormContext();

  const handleSubmit = async () => {
    try {
      // Add default values before submission
      const formData = {
        ...state.data,
        assistant: "martin kamau",
        status: "Pending",
      };

      await submitFormData(formData);
      dispatch({ type: "RESET" });
      localStorage.removeItem("studentFormData");
      window.location.href = "/success";
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Confirmation content */}

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "PREV_STEP" })}
        >
          Back
        </Button>
        <Button onClick={handleSubmit}>Submit Application</Button>
      </div>
    </div>
  );
}
