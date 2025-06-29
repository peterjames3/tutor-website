import { notFound } from "next/navigation";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { examContent } from "@/lib/constants/exam-aid-dynamic-data";
import type { Metadata } from "next";

// Correct typing for App Router pages
type PageProps = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.slug.replace(/-/g, " ")} Exam Aid | YourSite`,
    description: `Study guide for ${params.slug} exam`,
  };
}

export default async function ExamAidPage({ params }: PageProps) {
  // Make data fetching explicit
  const exam = await Promise.resolve(
    examContent[params.slug as keyof typeof examContent]
  );

  if (!exam) {
    notFound();
  }

  return <ExamPageClient exam={exam} />;
}

export async function generateStaticParams() {
  return Object.keys(examContent).map((slug) => ({ slug }));
}

export const dynamicParams = false;
