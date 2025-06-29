import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { examContent } from "@/lib/constants/exam-aid-dynamic-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}
export async function generateStaticParams() {
  return Object.keys(examContent).map((slug) => ({ slug }));
}
export default function ExamAidPage({ params }: PageProps) {
  const exam = examContent[params.slug as keyof typeof examContent];

  if (!exam) {
    notFound();
  }

  return <ExamPageClient exam={exam} />;
}
