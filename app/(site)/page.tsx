import Hero from "@/ui/components/hero/main-hero";
import StatsSection from "@/ui/components/stats/stats-section";
import SubService from "@/ui/components/heroservice/subservices-section";
import TestServices from "@/ui/components/exam/test-services-section";
import SubTestimonialCard from "@/ui/components/Testimonial/sub-testimonial";
import SuccessPath from "@/ui/components/path/success-path";
import TestimonialsSection from "@/ui/components/Testimonial/testimonials-section";
import { AnimatedBanner } from "@/ui/animated-banner";
import SEOContent from "@/ui/seo-content";
import AboutUsSection from "@/ui/components/about/aboutus-section";
import PortalsSection from "@/ui/portal-section";
import  PMPExamFAQSection from "@/ui/components/faq/pmp-faq";
import HomeSchema from "./_schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "TestHelpNow | #1 Online Exam Help, Proctored Exam Taker & Tutoring Services",

  description:
    "Pay someone to take your online proctored exam. Expert exam takers for PMP, SHRM, PRINCE2, GED, HiSET & more. 100% confidential, secure, and guaranteed results. Get your free quote today.",

  alternates: {
    canonical: "https://testhelpnow.com/",
  },

  openGraph: {
    title:
      "TestHelpNow | #1 Online Exam Help, Proctored Exam Taker & Tutoring Services",
    description:
      "Pay someone to take your online proctored exam. Expert exam takers for PMP, SHRM, PRINCE2, GED, HiSET & more. 100% confidential, secure, and guaranteed results. Get your free quote today.",
    url: "https://testhelpnow.com/",
    type: "website",
    images: [
      {
        url: "https://testhelpnow.com/og/homepage-og-image.png",
        width: 1200,
        height: 630,
        alt: "TestHelpNow - Online Exam Help & Proctored Exam Taker Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "TestHelpNow | #1 Online Exam Help, Proctored Exam Taker & Tutoring Services",
    description:
      "Pay someone to take your online proctored exam. Expert exam takers for PMP, SHRM, PRINCE2, GED, HiSET & more. 100% confidential, secure, and guaranteed results.",
    images: ["https://testhelpnow.com/og/homepage-og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  keywords: [
    "pay someone to take my online exam",
    "proctored exam help",
    "online exam taker",
    "PMP exam help",
    "SHRM exam help",
    "PRINCE2 exam help",
    "GED exam help",
    "HiSET exam help",
    "exam help service",
    "online test taker",
    "take my proctored exam",
    "exam assistance",
    "test taking service",
    "professional exam help",
    "tutoring services",
  ],

  authors: [{ name: "TestHelpNow" }],
  creator: "TestHelpNow",
  publisher: "TestHelpNow",

  category: "Education",
  classification: "Online Exam Help, Proctored Exam Taker & Tutoring Services",

  applicationName: "TestHelpNow",
  generator: "Next.js",
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
  },

  metadataBase: new URL("https://testhelpnow.com"),
  referrer: "origin-when-cross-origin",
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

  other: {
    "fb:app_id": "your-facebook-app-id",
    "og:phone_number": "+1(469) 428-4470",
    "og:email": "info@testhelpnow.com",
    "og:country-name": "United States",
  },
};

export default function Page() {
  return (
    <main className="">
      <HomeSchema />
      <Hero />
      <StatsSection />
      <AboutUsSection />
      <SubService />
      <TestServices />
      <SubTestimonialCard />
      <SEOContent />
      <PortalsSection />
      <SuccessPath />
      <TestimonialsSection />
      <AnimatedBanner />
      <PMPExamFAQSection />
    </main>
  );
}
