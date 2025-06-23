"use client";
import { useFormContext } from "@/context/FormContext";
import Card  from "./card";
import  Button  from "./button";

export default function SupportTypeStep() {
  const { state, dispatch } = useFormContext();
  const supportTypes = [
    {
      id: "exam-prep",
      title: "Exam Prep",
      description:
        "Comprehensive preparation for standardized tests like SAT, ACT, GRE, and more",
      icon: "exam-prep.svg",
    },
    {
      id: "tutoring",
      title: "Tutoring",
      description:
        "One-on-one tutoring for specific subjects and academic support",
      icon: "tutoring.svg",
    },
    {
      id: "exam-aid",
      title: "Exam Aid",
      description:
        "Your One-Stop Solution for Online Proctored Exam Assistance",
      icon: "exam-aid.svg",
    },
  ];

  const handleSelect = (type: string) => {
    dispatch({
      type: "SET_DATA",
      payload: { supportType: type },
    });
  };

  const handleNext = () => {
    if (state.data.supportType) {
      dispatch({ type: "NEXT_STEP", payload: {} });
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Choose Your Support Type
        </h1>
        <p className="text-gray-600">
          Select the category that best describes your academic needs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {supportTypes.map((type) => (
          <Card
            key={type.id}
            title={type.title}
            description={type.description}
            icon={type.icon}
            selected={state.data.supportType === type.title}
            onClick={() => handleSelect(type.title)}
          />
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Button onClick={handleNext} disabled={!state.data.supportType}>
          Continue →
        </Button>
      </div>
    </div>
  );
}
