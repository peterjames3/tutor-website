import {  examServicePageQuery, examServicePathQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

// ── Section components ──────────────────────────────────────
import HeroSection from "@/app/ui/components/exam-service/hero-section";
import ContentSectionWithImage from "@/app/ui/components/exam-service/content-section-with-image";
import StepsSection from "@/app/ui/components/exam-service/steps-section";
import ExamStructureSection from "@/app/ui/components/exam-service/exam-structure-section";
import ChallengesSection from "@/app/ui/components/exam-service/challenges-section";
import UnlockPathSection from "@/app/ui/components/exam-service/unlock-path-section";
import WhyChooseUsSection from "@/app/ui/components/exam-service/why-choose-us-section";
import FaqSection from "@/app/ui/components/exam-service/faq-section";

// ── Types ───────────────────────────────────────────────────
export interface SanityImage {
  url: string;
  alt: string;
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  caption?: string;
}

export interface CtaButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface HeroSectionData {
  _type: "hero";
  preHeading?: string;
  heading: string;
  accentWord?: string;
  subtext?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  heroImage?: SanityImage;
  backgroundImage?: SanityImage;
  backgroundColor?: string;
}

export interface ContentSectionData {
  _type: "contentSectionWithImage";
  sectionId?: string;
  heading?: string;
  subheading?: string;
  body?: object[]; // Portable Text
  image?: SanityImage;
  imagePosition?: "left" | "right" | "none";
  imageSize?: "33" | "50" | "66";
  backgroundColor?: string;
  ctaButton?: CtaButton;
}

export interface StepsSectionData {
  _type: "stepsSection";
  heading?: string;
  subheading?: string;
  steps: {
    stepNumber: number;
    label?: string;
    title: string;
    description?: string;
    icon?: SanityImage;
  }[];
  ctaButton?: CtaButton;
}

export interface ExamStructureSectionData {
  _type: "examStructureSection";
  heading?: string;
  subheading?: string;
  body?: object[];
  structurePoints?: { point: string }[];
  diagramImage?: SanityImage;
  ctaButton?: CtaButton;
}

export interface ChallengesSectionData {
  _type: "challengesSection";
  heading?: string;
  intro?: string;
  challenges: {
    title: string;
    description?: string;
    icon?: SanityImage;
  }[];
  ctaButton?: CtaButton;
}

export interface UnlockPathSectionData {
  _type: "unlockPathSection";
  heading?: string;
  subheading?: string;
  featureCards: {
    title: string;
    description?: string;
    icon?: SanityImage;
    accentColor?: string;
  }[];
  sideImage?: SanityImage;
}

export interface WhyChooseUsSectionData {
  _type: "whyChooseUsSection";
  heading?: string;
  subheading?: string;
  intro?: string;
  reasons: {
    title: string;
    description?: string;
    icon?: SanityImage;
  }[];
  backgroundImage?: SanityImage;
}

export interface FaqSectionData {
  _type: "faqSection";
  heading?: string;
  subheading?: string;
  faqs: {
    question: string;
    answer?: object[]; // Portable Text
    category?: string;
  }[];
  ctaBlock?: {
    text?: string;
    buttonLabel?: string;
    buttonHref?: string;
  };
}

export type PageSection =
  | HeroSectionData
  | ContentSectionData
  | StepsSectionData
  | ExamStructureSectionData
  | ChallengesSectionData
  | UnlockPathSectionData
  | WhyChooseUsSectionData
  | FaqSectionData;

export interface ExamServicePageData {
  _id: string;
  _createdAt: string;
  seoTitle: string;
  seoDescription?: string;
  slug: string;
  ogImage?: SanityImage;
  sections: PageSection[];
}

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

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      images: page.ogImage?.url ? [{ url: page.ogImage.url }] : [],
    },
  };
}

// ── Section renderer ────────────────────────────────────────
function renderSection(section: PageSection, index: number) {
  switch (section._type) {
    case "hero":
      return <HeroSection key={index} data={section} />;
    case "contentSectionWithImage":
      return <ContentSectionWithImage key={section.sectionId ?? index} data={section} />;
    case "stepsSection":
      return <StepsSection key={index} data={section} />;
    case "examStructureSection":
      return <ExamStructureSection key={index} data={section} />;
    case "challengesSection":
      return <ChallengesSection key={index} data={section} />;
    case "unlockPathSection":
      return <UnlockPathSection key={index} data={section} />;
    case "whyChooseUsSection":
      return <WhyChooseUsSection key={index} data={section} />;
    case "faqSection":
      return <FaqSection key={index} data={section} />;
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

  return (
    <main>
      {page.sections?.map((section, index) => renderSection(section, index))}
    </main>
  );
}