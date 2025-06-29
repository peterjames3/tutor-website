import { notFound } from "next/navigation";
import TestPageClient from "@/app/ui/components/testprep/test-page-client";
import {
  getTestPrepData,
  getAllTestSlugs,
} from "@/lib/datafetching/test-service";

type ParamsType = Promise<{ slug: string }>;

export default async function TestPrepPage({ params }: { params: ParamsType }) {
  const { slug } = await params;
  const exam = await getTestPrepData(slug);

  if (!exam) {
    notFound();
  }

  return <TestPageClient exam={exam} />;
}

export async function generateStaticParams() {
  return await getAllTestSlugs();
}

export const dynamicParams = false;
