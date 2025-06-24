"use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { BaseFormSchema } from "@/lib/zod-schema";
import { useFormContext } from "@/context/FormContext";
import Button from "./button";
import { useForm as useReactHookForm } from "react-hook-form";
//import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./input";
import { Label } from "./label";
import Select from "./select";

export default function PersonalInfoStep() {
  const { state, dispatch } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    // watch,
  } = useForm({
    resolver: zodResolver(BaseFormSchema),
    defaultValues: state.data,
  });

  const onSubmit = (data: any) => {
    dispatch({ type: "NEXT_STEP", payload: data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 bg-background py-4 px-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Personal Information
        </h1>
        <p className="text-gray-600">
          Please provide your basic contact information
        </p>
      </div>

      <div className="rounded-xl py-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Name Field */}
          <div>
            <Input
              {...register("name")}
              label="Full Name"
              placeholder="John Doe"
              error={errors.name?.message}
            />
          </div>

          {/* Email Field */}
          <div>
            <Input
              {...register("email")}
              type="email"
              label="Email"
              placeholder="john@example.com"
              error={errors.email?.message}
            />
          </div>

          {/* Phone Field */}
          <div>
            <Input
              {...register("phone_number")}
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              error={errors.phone_number?.message}
            />
          </div>

          {/* Education Level */}
          <div>
            <Select
              {...register("level")}
              label="Education Level"
              error={errors.level?.message}
              options={[
                { value: "", label: "Select your education level" },
                { value: "high-school", label: "High School" },
                { value: "undergraduate", label: "Undergraduate" },
                { value: "graduate", label: "Graduate" },
                { value: "professional", label: "Professional" },
              ]}
            />
          </div>
        </div>
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
function useForm({
  resolver,
  defaultValues,
}: {
  resolver: any;
  defaultValues: any;
}) {
  return useReactHookForm({
    resolver,
    defaultValues,
  });
}
