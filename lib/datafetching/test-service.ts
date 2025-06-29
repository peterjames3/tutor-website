import {
  testprepContent,
  Exam,
} from "../constants/test-prep-dynamic-route-data";

export async function getTestPrepData(slug: string): Promise<Exam | null> {
  await new Promise((resolve) => setTimeout(resolve, 2)); // Simulate network delay
  return testprepContent[slug] || null;
}

export async function getAllTestSlugs(): Promise<Array<{ slug: string }>> {
  return Object.keys(testprepContent).map((slug) => ({ slug }));
}
