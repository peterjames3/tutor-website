import { notFound } from "next/navigation";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { examContent } from "@/lib/constants/exam-aid-dynamic-data";
import type { Metadata } from "next";

// Correct typing for App Router pages
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `${params.slug.replace(/-/g, " ")} Exam Aid`,
    description: `Study guide for ${params.slug} exam`,
  };
}

export default function ExamAidPage({ params }: PageProps) {
  const { slug } = params;
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
