//import { SanityDocument } from "@sanity/client";
import { examPathsQuery, examQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import ExamPageClient from "@/app/ui/components/exam-aid/exam-page-client";
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
  const exams = await client.fetch(examPathsQuery);
  return exams.map((exam: { slug: string }) => ({
    slug: exam.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export default async function ExamPage({ params }: { params: Params }) {
  const { slug } = await params;

  const exam = await sanityFetch<ExamData>({
    query: examQuery,
    params: { slug },
  });


  if (!exam) {
    notFound();
  }

  return <ExamPageClient exam={exam} />;
}
