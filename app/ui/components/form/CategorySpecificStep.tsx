"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormContext } from "@/context/FormContext";
import { useEffect } from "react";
import Input from "./input";
import {
  MessageSquare,
  MoveLeft,
  MoveRight,
  BookOpenCheck,
} from "lucide-react";
import {
  ExamPrepFormSchema,
  TutoringFormSchema,
  EndToEndSupportFormSchema,
} from "@/lib/zod-schema";
import Button from "./button";

export default function CategorySpecificStep() {
  const { state, dispatch } = useFormContext();
  const supportType = state.data.support_type;

  let schema: z.ZodTypeAny;
  switch (supportType) {
    case "Exam Prep":
      schema = ExamPrepFormSchema;
      break;
    case "Tutoring":
      schema = TutoringFormSchema;
      break;
    case "End to End Exam Support":
      schema = EndToEndSupportFormSchema;
      break;
    default:
      schema = ExamPrepFormSchema;
  }

  const message =
    supportType === "Exam Prep"
      ? "When should we start?"
      : supportType === "Tutoring"
        ? "When would you like to start our tutoring classes?"
        : "When is your exam scheduled?";

  const label =
    supportType === "Tutoring" ? "Preferred Start Date" : "Exam Date";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: state.data,
    mode: "onChange",
  });

  useEffect(() => {
    console.log("Current step:", state.step);
    console.log("Form errors:", errors);
  }, [state.step, errors]);

  const onSubmit = (
    data:
      | z.infer<typeof ExamPrepFormSchema>
      | z.infer<typeof TutoringFormSchema>
      | z.infer<typeof EndToEndSupportFormSchema>
  ) => {
    dispatch({
      type: "NEXT_STEP",
      payload: {
        ...data,
        assistant: "Liam Martin",
        status: "Pending",
        support_type: supportType,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 bg-background py-4 px-6 rounded-sm "
    >
      {/* Form header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Category-Specific Details
        </h2>
        <p className="text-gray-600">
          Please provide the specific details for your selected support type
        </p>
      </div>

      <div className="font-medium text-primary flex items-center gap-4 px-4 py-3 rounded-sm bg-accent2">
        <BookOpenCheck size={32} />
        <p>{supportType} Service</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <div className="grid grid-cols-1 gap-6">
          {(supportType === "Exam Prep" ||
            supportType === "End to End Exam Support") && (
            <Input
              {...register("exam")}
              label="Exam Name"
              placeholder="e.g., SAT, GRE, MCAT"
              error={
                typeof errors.exam?.message === "string"
                  ? errors.exam.message
                  : undefined
              }
            />
          )}

          <Input
            {...register("subject")}
            type="text"
            label="Subject"
            placeholder="e.g., AP Math, SAT Science..."
            error={
              typeof errors.subject?.message === "string"
                ? errors.subject.message
                : undefined
            }
          />

          {(supportType === "Exam Prep" ||
            supportType === "End to End Exam Support") && (
            <Input
              {...register("exam_date")}
              label={label}
              type="date"
              error={
                typeof errors.exam_date?.message === "string"
                  ? errors.exam_date.message
                  : undefined
              }
            />
          )}

          {supportType === "Tutoring" && (
            <>
            
              <Input
                {...register("exam_date")}
                label={label}
                type="date"
                error={
                  typeof errors.start_date?.message === "string"
                    ? errors.start_date.message
                    : undefined
                }
              />
            </>
          )}
        </div>
        <div className="label-text mt-4">{message}</div>
      </div>

      <article className="max-w-[540px] my-8 p-8 rounded-md shadow-md shadow-tertiary flex items-center gap-10 bg-tertiary-30">
        <MessageSquare size={50} className="text-2xl text-active-link" />
        <div className="text-primary p-text">
          <p>
            We look at 100+ variables to create a personalized learning plan
            just for you.
          </p>
        </div>
      </article>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => dispatch({ type: "PREV_STEP" })}
        >
          <MoveLeft className="mr-2" /> Back
        </Button>
        <Button type="submit">
          Continue <MoveRight className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
