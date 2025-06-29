import { notFound } from "next/navigation";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { examContent } from "@/lib/constants/exam-aid-dynamic-data";
//import type { Metadata } from "next";

// Correct typing for App Router pages with Promise
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ExamAidPage({ params }: PageProps) {
  // Await the params promise
  const { slug } = await params;

  // Access your data (no need for Promise.resolve since examContent is sync)
  const exam = examContent[slug as keyof typeof examContent];

  if (!exam) {
    notFound();
  }

  return <ExamPageClient exam={exam} />;
}

export async function generateStaticParams() {
  return Object.keys(examContent).map((slug) => ({ slug }));
}

export const dynamicParams = false;
