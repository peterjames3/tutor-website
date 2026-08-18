import Hero from "@/ui/components/testprep/hero";
import HireSomeoneSection from "@/ui/components/testprep/hire-someone";
import GoToChoice from "@/ui/components/testprep/go-to-choice";
import RealEstateSeoContent from "@/ui/components/testprep/real-state-seo-content";
import { WhyChooseUs } from "@/ui/components/testprep/why-choose-us";
import RealEstateFAQSection from "@/ui/components/faq/real-estate-faq";
import TestimonialsSection from "@/ui/components/Testimonial/testimonials-section";
import { Metadata } from "next";
import RealEstateExamSchema from "./_schema";

export const metadata: Metadata = {
  title: "Real Estate Exam Help | Pass Your Licensing Exam with Expert Support | TestHelpNow",
  
  description:
    "Pay someone to take your real estate licensing exam. Expert help for salesperson and broker exams. National & state-specific coverage. 100% confidential & guaranteed results.",

  alternates: {
    canonical: "https://testhelpnow.com/real-estate-exam-help",
  },

  openGraph: {
    title: "Real Estate Exam Help | Pass Your Licensing Exam with Expert Support | TestHelpNow",
    description:
      "Pay someone to take your real estate licensing exam. Expert help for salesperson and broker exams. National & state-specific coverage. 100% confidential & guaranteed results.",
    url: "https://testhelpnow.com/real-estate-exam-help",
    type: "website",
    images: [
      {
        url: "https://testhelpnow.com/og/real-estate-exam-help-og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Exam Help - TestHelpNow",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate Exam Help | Pass Your Licensing Exam with Expert Support | TestHelpNow",
    description:
      "Pay someone to take your real estate licensing exam. Expert help for salesperson and broker exams. National & state-specific coverage. 100% confidential & guaranteed results.",
    images: ["https://testhelpnow.com/og/real-estate-exam-help-og-image.png"],
  },

  keywords: [
    "real estate exam help",
    "pay someone to take my real estate exam",
    "real estate licensing exam",
    "real estate exam helper",
    "real estate license exam help",
    "salesperson license exam",
    "broker license exam",
    "national real estate exam",
    "state real estate exam",
    "real estate exam assistance",
    "NAR exam help",
    "PSI real estate exam",
    "ARELLO exam help",
    "DRE exam help",
    "TREC exam help",
    "real estate certification help",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  category: "Education",
  classification: "Real Estate Exam Help & Licensing Support Services",

  authors: [{ name: "TestHelpNow" }],
  creator: "TestHelpNow",
  publisher: "TestHelpNow",

  applicationName: "TestHelpNow",
  generator: "Next.js",

  metadataBase: new URL("https://testhelpnow.com"),
  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  colorScheme: "light dark",

  appleWebApp: {
    title: "TestHelpNow",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-touch-icon.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },

  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    other: {
      "facebook-domain-verification": "facebook-verification-code-here",
    },
  },

  other: {
    "og:phone_number": "+1(469) 428-4470",
    "og:email": "info@testhelpnow.com",
    "og:country-name": "United States",
  },
};

export default async function TestPrepHome() {
 

  return (
    <>
    <RealEstateExamSchema />  
      <Hero />
      <GoToChoice />
      <HireSomeoneSection />
      <RealEstateSeoContent />
      <WhyChooseUs />
      <TestimonialsSection />
      <RealEstateFAQSection />
    </>
  );
}
