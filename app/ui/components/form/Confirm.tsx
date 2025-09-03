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
    <section
      className="space-y-6 bg-background py-4 px-6 rounded-sm"
      role="region"
      aria-labelledby="review-heading"
    >
      <header>
        <h2
          id="review-heading"
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          Review Your Information
        </h2>
        <p className="text-gray-600">
          Please confirm that everything is correct
        </p>
      </header>

      {/* Support Type */}
      <section
        className="p-6 rounded-sm bg-cardBg space-y-2"
        role="region"
        aria-labelledby="support-type-heading"
      >
        <h3 id="support-type-heading" className="title">
          Support Type
        </h3>
        <p className="label-text">Your selected support category</p>
        <p className="font-semibold">{supportType}</p>
      </section>

      {/* Personal Info */}
      <section
        className="p-6 rounded-sm bg-cardBg space-y-2"
        role="region"
        aria-labelledby="personal-info-heading"
      >
        <h3 id="personal-info-heading" className="title">
          Personal Information
        </h3>
        <p className="label-text">Your contact details</p>
        <dl className="grid grid-cols-2 gap-5">
          <div>
            <dt className="p-text">Full Name</dt>
            <dd className="label-text">{state.data.name}</dd>
          </div>
          <div>
            <dt className="p-text">Email</dt>
            <dd className="label-text">{state.data.email}</dd>
          </div>
          <div>
            <dt className="p-text">Phone Number</dt>
            <dd className="label-text">{state.data.phone_number}</dd>
          </div>
          <div>
            <dt className="p-text">Education Level</dt>
            <dd className="label-text">{state.data.level}</dd>
          </div>
        </dl>
      </section>

      {/* Service Details */}
      <div
        className="p-6 rounded-sm bg-cardBg space-y-2"
        role="region"
        aria-labelledby="service-details-heading"
      >
        <h3 id="service-details-heading" className="title">
          Service Details
        </h3>
        <p className="label-text">Your specific requirements</p>
        <dl className="grid grid-cols-2 gap-5">
          {supportType === "Exam Prep" && (
            <>
              <div>
                <dt className="p-text">Exam Name</dt>
                <dd className="label-text">{getExamPrepData().exam}</dd>
              </div>
              <div>
                <dt className="p-text">Subject</dt>
                <dd className="label-text">{getExamPrepData().subject}</dd>
              </div>
              <div>
                <dt className="p-text">Exam Date</dt>
                <dd className="label-text">
                  {new Date(getExamPrepData().exam_date).toLocaleDateString()}
                </dd>
              </div>
            </>
          )}

          {supportType === "Tutoring" && (
            <>
              <div>
                <dt className="p-text">Subject</dt>
                <dd className="label-text">{getTutoringData().subject}</dd>
              </div>
              <div>
                <dt className="p-text">Start Date</dt>
                <dd className="label-text">
                  {new Date(getTutoringData().exam_date).toLocaleDateString()}
                </dd>
              </div>
            </>
          )}

          {supportType === "End to End Exam Support" && (
            <>
              <div>
                <dt className="p-text">Exam Name</dt>
                <dd className="label-text">{getEndToEndData().exam}</dd>
              </div>
              <div>
                <dt className="p-text">Subject</dt>
                <dd className="label-text">{getEndToEndData().subject}</dd>
              </div>
              <div>
                <dt className="p-text">Exam Date</dt>
                <dd className="label-text">
                  {new Date(getEndToEndData().exam_date).toLocaleDateString()}
                </dd>
              </div>
            </>
          )}
        </dl>
      </div>

      {/* Error Message */}
      {submitError && (
        <div
          className="p-4 rounded-md bg-red-50 text-red-700"
          role="alert"
          aria-live="assertive"
        >
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
          aria-label="Go back to the previous step"
        >
          Back
        </Button>
        <Button
          id="submit-form"
          onClick={handleSubmit}
          disabled={isSubmitting}
          aria-label={
            isSubmitting
              ? "Submitting your application"
              : "Submit your application"
          }
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </section>
  );
}
