"use client";
import { z } from "zod";
import { BaseFormSchema } from "@/lib/zod-schema";
import { useFormContext } from "@/context/FormContext";
import Button from "./button";
import { useForm as useReactHookForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare, MoveLeft, MoveRight } from "lucide-react";
import Input from "./input";

import Select from "./text-area";

export default function PersonalInfoStep() {
  const { state, dispatch } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BaseFormSchema),
    defaultValues: {
      name: state.data.name ?? "",
      email: state.data.email ?? "",
      phone_number: state.data.phone_number ?? "",
      level:
        state.data.level &&
        ["High School", "Undergraduate", "Graduate", "Professional"].includes(
          state.data.level,
        )
          ? state.data.level
          : "High School",
    },
  });

  const onSubmit = (data: z.infer<typeof BaseFormSchema>) => {
    dispatch({ type: "NEXT_STEP", payload: data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 bg-background py-4 px-6 rounded-sm"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Personal Information
        </h2>
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
              error={
                typeof errors.name?.message === "string"
                  ? errors.name.message
                  : undefined
              }
            />
          </div>

          {/* Email Field */}
          <div>
            <Input
              {...register("email")}
              type="email"
              label="Email"
              placeholder="john@example.com"
              error={
                typeof errors.email?.message === "string"
                  ? errors.email.message
                  : undefined
              }
            />
          </div>

          {/* Phone Field */}
          <div>
            <Input
              {...register("phone_number")}
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              error={
                typeof errors.phone_number?.message === "string"
                  ? errors.phone_number.message
                  : undefined
              }
            />
          </div>

          {/* Education Level */}
          <div>
            <Select
              {...register("level")}
              label="Education Level"
              error={
                typeof errors.level?.message === "string"
                  ? errors.level.message
                  : undefined
              }
              options={[
                { value: "", label: "Select your education level" },
                { value: "High School", label: "High School" },
                { value: "Undergraduate", label: "Undergraduate" },
                { value: "Graduate", label: "Graduate" },
                { value: "Professional", label: "Professional" },
              ]}
            />
          </div>
        </div>
      </div>
      <article className="max-w-[540px] my-8 p-8 rounded-md shadow-md shadow-tertiary flex items-center gap-10 bg-tertiary-30">
        <div>
          <MessageSquare size={50} className="text-2xl text-active-link" />
        </div>
        <div className="text-primary p-text">
          <p>
            We like to start with a conversation about your goals and needs. The
            more we know about you, the more we can help.
          </p>
        </div>
      </article>

      <div className="flex justify-between">
        <Button
          type="button"
          className="border border-active-link text primary"
          variant="outline"
          onClick={() => dispatch({ type: "PREV_STEP" })}
        >
          <MoveLeft className="mr-2" />
          Back
        </Button>
        <Button variant="default" type="submit">
          Continue <MoveRight className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
import type { Resolver } from "react-hook-form";

function useForm({
  resolver,
  defaultValues,
}: {
  resolver: Resolver<z.infer<typeof BaseFormSchema>>;
  defaultValues: z.infer<typeof BaseFormSchema>;
}) {
  return useReactHookForm({
    resolver,
    defaultValues,
  });
}
