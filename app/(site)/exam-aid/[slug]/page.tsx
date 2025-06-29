import { notFound } from "next/navigation";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
import { getExamData, getAllExamSlugs } from "@/lib/datafetching/exam-service";
import type { Metadata } from "next";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const exam = await getExamData(params.slug);

  return {
    title: exam?.title || `${params.slug} Exam Aid`,
    description: exam?.description || `Study guide for ${params.slug}`,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(exam?.title || params.slug)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ExamAidPage({ params }: PageProps) {
  const exam = await getExamData(params.slug);

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
