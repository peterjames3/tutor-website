"use client";
import { useFormContext } from "@/context/FormContext";
import { submitFormData } from "@/lib/action";
import Button from "./button";
import { useEffect } from "react";
import {
  ExamPrepFormData,
  TutoringFormData,
  EndToEndSupportFormData,
} from "@/lib/zod-schema";

export default function ConfirmationStep() {
  const { state, dispatch } = useFormContext();
  const supportType = state.data.support_type;

  useEffect(() => {
    console.log("Form data to submit:", state.data);
  }, [state.data]);

  const handleSubmit = async () => {
    try {
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

  // Type-safe data access functions
  const getTutoringData = () => state.data as TutoringFormData;
  const getExamPrepData = () => state.data as ExamPrepFormData;
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

      <div className="p-6 rounded-sm bg-cardBg space-y-2">
        <h3 className="title">Support Type</h3>
        <p className="label-text">Your selected support category</p>
        <p className="font-semibold">{supportType}</p>
      </div>

      <div className="p-6 rounded-sm bg-cardBg space-y-2">
        <h3 className="title">Personal Information</h3>
        <p className="label-text">Your contact details</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
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
                  {getExamPrepData().exam_date &&
                    new Date(getExamPrepData().exam_date).toLocaleDateString()}
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
                <h4 className="p-text">Focus Area</h4>
                <p className="label-text">{getTutoringData().subject_help}</p>
              </div>
              <div>
                <h4 className="p-text">Start Date</h4>
                <p className="label-text">
                  {getTutoringData().exam_date &&
                    new Date(getTutoringData().exam_date).toLocaleDateString()}
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
                  {getEndToEndData().exam_date &&
                    new Date(getEndToEndData().exam_date).toLocaleDateString()}
                </p>
              </div>
            </>
          )}
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
