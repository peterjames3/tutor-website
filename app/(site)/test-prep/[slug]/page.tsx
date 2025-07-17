//import { SanityDocument } from "@sanity/client";
import { examPrepPathsQuery, examPrepQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import ExamPrepPageClient from "@/app/ui/components/testprep/exam-prep-page-client";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export interface ExamData {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;

  // any other fields you use in the UI
}

export async function generateStaticParams() {
  const exams = await client.fetch(examPrepPathsQuery);
  return exams.map((exam: { slug: string }) => ({
    slug: exam.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export default async function ExamPrepPage({ params }: { params: Params }) {
  const { slug } = await params;

  const exam = await sanityFetch<ExamData>({
    query: examPrepQuery,
    params: { slug },
  });
  console.log(`Exam prep page for slug: ${slug}`, exam);

  if (!exam) {
    notFound();
  }

  return <ExamPrepPageClient exam={exam} />;
}
