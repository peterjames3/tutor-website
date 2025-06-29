import { notFound } from "next/navigation";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { examContent } from "@/lib/constants/exam-aid-dynamic-data";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // You can add metadata generation here if needed
  return {
    title: `${params.slug} Exam Aid`,
  };
}

export default function ExamAidPage({ params }: Props) {
  const exam = examContent[params.slug as keyof typeof examContent];

  if (!exam) {
    notFound();
  }

  return <ExamPageClient exam={exam} />;
}

export async function generateStaticParams() {
  return Object.keys(examContent).map((slug) => ({ slug }));
}
