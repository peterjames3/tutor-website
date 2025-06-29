import { examContent, Exam } from "../constants/exam-aid-dynamic-data";

export async function getExamData(slug: string): Promise<Exam | null> {
  await new Promise((resolve) => setTimeout(resolve, 2)); // Simulate network delay
  return examContent[slug] || null;
}

export async function getAllExamSlugs(): Promise<Array<{ slug: string }>> {
  return Object.keys(examContent).map((slug) => ({ slug }));
}
