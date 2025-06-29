import { examContent, Exam } from "../constants/exam-aid-dynamic-data";

export async function getExamData(slug: string): Promise<Exam | null> {
  // Simulate network delay (remove in production)
  await new Promise((resolve) => setTimeout(resolve, 2));

  return examContent[slug] || null;
}

export async function getAllExamSlugs(): Promise<string[]> {
  return Object.keys(examContent);
}
