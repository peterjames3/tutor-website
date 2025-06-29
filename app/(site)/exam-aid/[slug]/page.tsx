import { notFound } from "next/navigation";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { examContent } from "@/lib/constants/exam-aid-dynamic-data";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ExamAidPage({ params }: PageProps) {
  const exam = examContent[params.slug as keyof typeof examContent];

  if (!exam) {
    notFound();
  }

  return <ExamPageClient exam={exam} />;
}

export async function generateStaticParams() {
  return Object.keys(examContent).map((slug) => ({ slug }));
}
