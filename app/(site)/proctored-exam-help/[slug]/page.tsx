import {  examServicePageQuery, examServicePathQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import HeroSection from "@/ui/components/dynamic-exam-pages/hero-section";
import ContentSectionWithImage from "@/ui/components/dynamic-exam-pages/content-section-with-image";
import WhyWeLead from "@/ui/components/dynamic-exam-pages/why-we-lead";
import ExamStructureSection from "@/ui/components/dynamic-exam-pages/exam-structure-section";
import KeywordExpound from "@/ui/components/dynamic-exam-pages/keyword-expound";
import CertOverviewSection from "@/ui/components/dynamic-exam-pages/cert-overview-section";
import CertComparisonSection from "@/ui/components/dynamic-exam-pages/cert-compare-section";
import FaqSection from "@/ui/components/dynamic-exam-pages/faq-section";
import { getComparisonServer } from "@/services/comparison.server";
import { getCertification } from "@/services/certification.service";
import type { ExamServicePageData, HeroSectionData, PageSection } from "@/lib/defination";
import {
  ContentSectionData,
  WhyWeLeadData,
  KeywordExpoundData,
  ExamStructureData,
  CertOverviewSectionData,
  CertCompareSectionData,
  FaqSectionData,
} from "@/lib/defination";
// ── Static params ───────────────────────────────────────────
export async function generateStaticParams() {
  const pages = await client.fetch(examServicePathQuery);
  return pages.map((page: { slug: string }) => ({ slug: page.slug }));
}

// ── Metadata ────────────────────────────────────────────────
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = await sanityFetch<ExamServicePageData>({
    query: examServicePageQuery,
    params: { slug },
  });

  if (!page) return {};
  
  const url = `https://www.testhelpnow.com/proctored-exam-help/${page.slug}`;

  return {
   
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: page.seoTitle,
      description: page.seoDescription,
      images: page.ogImage?.url ? [{ url: page.ogImage.url }] : [],
      siteName: "TestHelpNow",
      locale: "en_US",
    },
  };
}

async function renderSection(section: PageSection, index: number) {
  const sectionType = (section as { _type?: string })._type;

  switch (sectionType) {
    case "hero":
      return <HeroSection key={index} data={section as HeroSectionData} />;

    case "contentSectionWithImage":
     
      return (
        <ContentSectionWithImage
          key={index}
          data={section as ContentSectionData}
        />
      );

    case "whyWeLead":
      return <WhyWeLead key={index} data={section as WhyWeLeadData} />;

    case "keyWordExpound":
      return (
        <KeywordExpound key={index} data={section as KeywordExpoundData} />
      );

    case "examStructureSection":
      return (
        <ExamStructureSection key={index} data={section as ExamStructureData} />
      );

    case "certOverviewSection": {
      let cert;
      try {
        cert = await getCertification(
          (section as CertOverviewSectionData).certSlug,
        );
      } catch (err) {
        console.error(
          `Failed to prefetch certification "${(section as CertOverviewSectionData).certSlug}":`,
          err,
        );
      }
      return (
        <CertOverviewSection
          key={index}
          data={section as CertOverviewSectionData}
          initialCert={cert}
        />
      );
    }

    case "certCompareSection": {
      const certCompareSection = section as CertCompareSectionData;
      const slugs = certCompareSection.certSlugs?.filter(Boolean) ?? [];
      let comparison = null;

      if (slugs.length === 2 || slugs.length === 3) {
        comparison = await getComparisonServer(slugs);
      } else {
        console.error(
          `certCompareSection "${index}" requires 2 or 3 certSlugs, got ${slugs.length}`,
        );
      }

      return (
        <CertComparisonSection
          key={index}
          data={certCompareSection}
          initialComparison={comparison ?? undefined}
        />
      );
    }

    case "faqSection":
      return <FaqSection key={index} data={section as FaqSectionData} />;

    default:
      return null;
  }
}

// ── Page ────────────────────────────────────────────────────
export default async function ExamServicePage({ params }: { params: Params }) {
  const { slug } = await params;

  const page = await sanityFetch<ExamServicePageData>({
    query: examServicePageQuery,
    params: { slug },
  });

  if (!page) notFound();

    const renderedSections = await Promise.all(
      page.sections?.map((section, index) => renderSection(section, index)) ??
        [],
    );

  return (
    <main>
      {renderedSections}
    </main>
  );
}