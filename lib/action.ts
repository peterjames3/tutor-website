"use server";

import { db } from "@/src/db";
import {
  
  examPrep,
  tutoringStudents,
  endToEndSupportStudents,
} from "@/src/db/schema";
import {
  BaseFormSchema,
  ExamPrepFormSchema,
  TutoringFormSchema,
  EndToEndSupportFormSchema,
} from "@/lib/zod-schema"; // <-- Your Zod validation schemas
import { z } from "zod";

// Default values
const DEFAULT_ASSISTANT = "Martin Kamau";
const DEFAULT_STATUS = "Pending";

// Helper to parse and throw Zod error if invalid
function validateData<T extends z.ZodTypeAny>(
  data: unknown,
  schema: T
): z.infer<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error("Validation failed:", result.error.format());
    throw new Error("Validation failed");
  }
  return result.data;
}

export async function submitFormData(formData: any) {
  try {
    // 1. Validate common fields
    const baseData = validateData(formData, BaseFormSchema);
    const supportType = formData.supportType;

    switch (supportType) {
      case "Exam Prep": {
        const extraData = validateData(formData,  ExamPrepFormSchema);
        await db.insert(examPrep).values({
          ...baseData,
          ...extraData,
          assistant: DEFAULT_ASSISTANT,
          status: DEFAULT_STATUS,
          support_type: "Exam Prep",
        });
        break;
      }

      case "Tutoring": {
        const extraData = validateData(formData, TutoringFormSchema);
        await db.insert(tutoringStudents).values({
          ...baseData,
          ...extraData,
          assistant: DEFAULT_ASSISTANT,
          status: DEFAULT_STATUS,
          support_type: "Tutoring",
        });
        break;
      }

      case "Exam Aid": {
        const extraData = validateData(formData,  EndToEndSupportFormSchema);
        await db.insert(endToEndSupportStudents).values({
          ...baseData,
          ...extraData,
          assistant: DEFAULT_ASSISTANT,
          status: DEFAULT_STATUS,
          support_type: "Exam Aid",
        });
        break;
      }

      default:
        throw new Error("Unknown support type");
    }

    return { success: true, message: "Student registered successfully!" };
  } catch (error: any) {
    console.error("Submission failed:", error);
    return {
      success: false,
      error: error?.message || "Something went wrong",
    };
  }
}
