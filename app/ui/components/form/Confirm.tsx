"use client";
import { useFormContext } from "@/context/FormContext";
import { submitFormData } from "@/lib/action";
import Button from "./button";
import { useEffect } from "react";

export default function ConfirmationStep() {
  const { state, dispatch } = useFormContext();

  useEffect(() => {
    console.log("Form data to submit:", state.data);
  }, [state.data]);

  const handleSubmit = async () => {
    try {
      // Add default values before submission
      const formData = {
        ...state.data,
        assistant: "Liam Martin",
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
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Confirmation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-gray-700">
              Personal Information
            </h3>
            <p className="text-gray-600">{state.data.name}</p>
            <p className="text-gray-600">{state.data.email}</p>
            <p className="text-gray-600">{state.data.phone_number}</p>
            <p className="text-gray-600">{state.data.level}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">Service Details</h3>
            <p className="text-gray-600">{state.data.support_type}</p>
            <p className="text-gray-600">
              {state.data.exam || state.data.subject}
            </p>
            <p className="text-gray-600">
              {state.data.exam_date
                ? new Date(state.data.exam_date).toLocaleDateString()
                : ""}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-700">
            Additional Information
          </h3>
          <p className="text-gray-600">{state.data.subject_help}</p>
        </div>
      </div>

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
