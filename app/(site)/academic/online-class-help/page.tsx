import Hero from "@/app/ui/components/tutoring/hero-main-section";
import OnlineSeoContent  from "@/app/ui/components/tutoring/online-seo-content";
import PricingSection from "@/app/ui/components/tutoring/pricing-section"
import HireSomeoneSection from  "@/app/ui/components/tutoring/hire-someone";
import WhyChooseUs from "@/app/ui/components/tutoring/why-choose-us";
import SubTestimonialCard from "@/app/ui/components/tutoring/sub-testimonial";
import TutoringFeatures from "@/app/ui/components/tutoring/tutoring-component";
import SubjectsSection from "@/app/ui/components/tutoring/some-subject-covered";
import type { Metadata } from "next";
import TutoringSchema from "./_schema";

export const metadata: Metadata = {
  title: "Online Class Help – Expert Support for Your Academic Success | TestHelpNow",
  description:
    "Need online class help? Get expert support for your online courses, assignments, quizzes, and exams. Our professionals handle your entire online class so you can focus on what matters most. 100% confidential and guaranteed results.",

  alternates: {
    canonical: "https://testhelpnow.com/academic/online-class-help",
  },

  openGraph: {
    title: "Online Class Help – Expert Support for Your Academic Success | TestHelpNow",
    description:
      "Need online class help? Get expert support for your online courses, assignments, quizzes, and exams. Our professionals handle your entire online class so you can focus on what matters most. 100% confidential and guaranteed results.",
    url: "https://testhelpnow.com/academic/online-class-help",
    type: "website",
    images: [
      {
        url: "https://testhelpnow.com/og/online-class-help-og-image.png",
        width: 1200,
        height: 630,
        alt: "TestHelpNow - Online Class Help Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Class Help – Expert Support for Your Academic Success | TestHelpNow",
    description:
      "Need online class help? Get expert support for your online courses, assignments, quizzes, and exams. Our professionals handle your entire online class so you can focus on what matters most.",
    images: ["https://testhelpnow.com/og/online-class-help-og-image.png"],
  },

  keywords: [
    "online class help",
    "pay someone to take my online class",
    "online class helper",
    "take my online class for me",
    "online course help",
    "do my online class",
    "online class assistance",
    "academic help online",
    "online learning support",
    "help with online classes",
    "online education support",
    "online assignment help",
    "online exam help",
    "online course takers",
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
  classification: "Online Class Help & Academic Support Services",

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

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

 

  other: {
    "og:phone_number": "+1(469) 428-4470",
    "og:email": "info@testhelpnow.com",
    "og:country-name": "United States",
  },
};

export default function TutoringPage() {
  return (
    <>
      <TutoringSchema />
      <Hero />
      <WhyChooseUs />
      <HireSomeoneSection />
      <SubTestimonialCard />
      <OnlineSeoContent />
      <TutoringFeatures />
      <PricingSection />
      <SubjectsSection />
    </>
  );
}
