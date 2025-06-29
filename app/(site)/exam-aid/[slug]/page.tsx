import { notFound } from "next/navigation";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { getExamData, getAllExamSlugs } from "@/lib/datafetching/exam-service";
//import type { Metadata } from "next";

export type paramsType = Promise<{ slug: string }>;
type Props = {
  params: paramsType;
};

export default async function ExamAidPage({ params }: Props) {
  const { slug } = await params;
  const exam = await getExamData(slug);
  console.log(exam);

  if (!exam) {
    notFound();
  }

  return <ExamPageClient exam={exam} />;
}

 export async function generateStaticParams() {
   const slugs = await getAllExamSlugs();
   return slugs.map((slug) => ({ slug }));
 }

export const dynamicParams = false;
