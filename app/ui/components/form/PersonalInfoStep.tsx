"use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { baseSchema } from "@/src/db/schema";
import { useFormContext } from "@/context/FormContext";
import  Button  from "./button";
import { useForm as useReactHookForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "./input";
// import { Label } from "./label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

export default function PersonalInfoStep() {
  const { state, dispatch } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(baseSchema),
    defaultValues: state.data,
  });

  const onSubmit = (data: any) => {
    dispatch({ type: "NEXT_STEP", payload: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Personal Information
        </h1>
        <p className="text-gray-600">
          Please provide your basic contact information
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <div className="grid grid-cols-1 gap-6">{/* Form fields */}</div>
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
function useForm({ resolver, defaultValues }: { resolver: any; defaultValues: any; }) {
  return useReactHookForm({
    resolver,
    defaultValues,
  });
}
