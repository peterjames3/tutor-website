"use client";
import { useFormContext } from "@/context/FormContext";
import Card from "./card";
import Button from "./button";
import { GraduationCap, PencilRuler, Headset } from "lucide-react";

// Define the correct support types that match your Zod enum
type SupportType = "Tutoring" | "Exam Prep" | "End to End Exam Support";

export default function SupportTypeStep() {
  const { state, dispatch } = useFormContext();

  // Updated support types to match Zod enum values
  const supportTypes = [
    {
      id: "exam-prep",
      title: "Exam Prep" as SupportType,
      description:
        "Comprehensive preparation for standardized tests like SAT, ACT, GRE, and more",
      icon: <GraduationCap />,
      tags: ["MAP", "ACT", "AP Exams", "DAT", "CISM"],
      variantBg: "#A9D2F9",
      variant: "#0C61E9", // Fixed typo: #OC61E9 → #0C61E9
      variantText: "#0C61E9",
    },
    {
      id: "tutoring",
      title: "Tutoring" as SupportType,
      description:
        "One-on-one tutoring for specific subjects and academic support",
      icon: <PencilRuler />,
      tags: ["Math", "Science", "Calculus", "English"],
      variantBg: "#B3E7B3",
      variant: "#2DBF50",
      variantText: "#176526",
    },
    {
      id: "end-to-end-exam-support",
      title: "End to End Exam Support" as SupportType, // Matches Zod enum
      description:
        "Your One-Stop Solution for Online Proctored Exam Assistance",
      icon: <Headset />,
      tags: ["Full Support", "planning", "AP Exams"],
      variantBg: "#F6EBCA",
      variant: "#988410",
      variantText: "#988410",
    },
  ];

  const handleSelect = (type: SupportType) => {
    dispatch({
      type: "SET_DATA",
      payload: { support_type: type },
    });
  };

  const handleNext = () => {
    if (state.data.support_type) {
      dispatch({ type: "NEXT_STEP", payload: {} });
    
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h2 className="headline font-bold text-primary mb-3">
          Choose Your Support Type
        </h2>
        <p className="p-text text-primary">
          Select the category that best describes your academic needs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {supportTypes.map((type) => (
          <Card
            key={type.id}
            title={type.title}
            description={type.description}
            icon={type.icon}
            variant={type.variant}
            variantBg={type.variantBg}
            variantText={type.variantText}
            tags={type.tags}
            selected={state.data.support_type === type.title}
            onClick={() => handleSelect(type.title)}
          />
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Button
          type="button"
          className="btn"
          onClick={handleNext}
          disabled={!state.data.support_type}
        >
          Continue →
        </Button>
      </div>
    </div>
  );
}
