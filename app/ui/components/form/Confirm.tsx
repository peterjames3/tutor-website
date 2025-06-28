"use client";

import { useFormContext } from "@/context/FormContext";
import Button from "./button";
import {
  ExamPrepFormData,
  TutoringFormData,
  EndToEndSupportFormData,
} from "@/lib/zod-schema";
import { useEffect, useState } from "react";

export default function ConfirmationStep() {
  const { state, dispatch } = useFormContext();
  const supportType = state.data.support_type;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Form data to submit:", state.data);
  }, [state.data]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare form data with defaults
      const formData = {
        ...state.data,
        assistant: "Liam Martin",
        status: "Pending",
      };

      // Submit to API endpoint
      const response = await fetch(
        "https://tutor-dashboard-self.vercel.app/api/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();
      console.log("Submission successful:", result);

      // Clear form state on success
      dispatch({ type: "SUBMIT" });
      localStorage.removeItem("studentFormData");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper functions for type-safe data access
  const getExamPrepData = () => state.data as ExamPrepFormData;
  const getTutoringData = () => state.data as TutoringFormData;
  const getEndToEndData = () => state.data as EndToEndSupportFormData;

  return (
    <div className="space-y-6 bg-background py-4 px-6 rounded-sm">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Review Your Information
        </h2>
        <p className="text-gray-600">
          Please confirm that everything is correct
        </p>
      </div>

      {/* Support Type */}
      <div className="p-6 rounded-sm bg-cardBg space-y-2">
        <h3 className="title">Support Type</h3>
        <p className="label-text">Your selected support category</p>
        <p className="font-semibold">{supportType}</p>
      </div>

      {/* Personal Info */}
      <div className="p-6 rounded-sm bg-cardBg space-y-2">
        <h3 className="title">Personal Information</h3>
        <p className="label-text">Your contact details</p>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h4 className="p-text">Full Name</h4>
            <p className="label-text">{state.data.name}</p>
          </div>
          <div>
            <h4 className="p-text">Email</h4>
            <p className="label-text">{state.data.email}</p>
          </div>
          <div>
            <h4 className="p-text">Phone Number</h4>
            <p className="label-text">{state.data.phone_number}</p>
          </div>
          <div>
            <h4 className="p-text">Education Level</h4>
            <p className="label-text">{state.data.level}</p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="p-6 rounded-sm bg-cardBg space-y-2">
        <h3 className="title">Service Details</h3>
        <p className="label-text">Your specific requirements</p>
        <div className="grid grid-cols-2 gap-5">
          {supportType === "Exam Prep" && (
            <>
              <div>
                <h4 className="p-text">Exam Name</h4>
                <p className="label-text">{getExamPrepData().exam}</p>
              </div>
              <div>
                <h4 className="p-text">Subject</h4>
                <p className="label-text">{getExamPrepData().subject}</p>
              </div>
              <div>
                <h4 className="p-text">Exam Date</h4>
                <p className="label-text">
                  {new Date(getExamPrepData().exam_date).toLocaleDateString()}
                </p>
              </div>
            </>
          )}

          {supportType === "Tutoring" && (
            <>
              <div>
                <h4 className="p-text">Subject</h4>
                <p className="label-text">{getTutoringData().subject}</p>
              </div>
              <div>
                <h4 className="p-text">Start Date</h4>
                <p className="label-text">
                  {new Date(getTutoringData().exam_date).toLocaleDateString()}
                </p>
              </div>
            </>
          )}

          {supportType === "End to End Exam Support" && (
            <>
              <div>
                <h4 className="p-text">Exam Name</h4>
                <p className="label-text">{getEndToEndData().exam}</p>
              </div>
              <div>
                <h4 className="p-text">Subject</h4>
                <p className="label-text">{getEndToEndData().subject}</p>
              </div>
              <div>
                <h4 className="p-text">Exam Date</h4>
                <p className="label-text">
                  {new Date(getEndToEndData().exam_date).toLocaleDateString()}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="p-4 rounded-md bg-red-50 text-red-700">
          <p className="font-medium">Submission Error:</p>
          <p>{submitError}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: "PREV_STEP" })}
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </div>
  );
}
