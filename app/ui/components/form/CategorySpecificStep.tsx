"use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "@/context/FormContext";
import {
  examPrep,
  tutoringStudents,
  endToEndSupportStudents,
} from "@/src/db/schema";
import  Button  from "./button";
// import { Input } from "./input";
// import { Label } from "./label";

export default function CategorySpecificStep() {
  const { state, dispatch } = useFormContext();
  const supportType = state.data.supportType;

  let schema;
  switch (supportType) {
    case "Exam Prep":
      schema = examPrep;
      break;
    case "Tutoring":
      schema = tutoringStudents;
      break;
    case "Exam Aid":
      schema = endToEndSupportStudents;
      break;
    default:
      schema = examPrep;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: state.data,
  });

  const onSubmit = (data: any) => {
    dispatch({ type: "NEXT_STEP", payload: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Form header */}

      <div className="bg-gray-50 rounded-xl p-6">
        {/* Dynamic form fields based on support type */}
      </div>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => dispatch({ type: "PREV_STEP" })}
        >
          Back
        </Button>
        <Button type="submit">Continue →</Button>
      </div>
    </form>
  );
}
