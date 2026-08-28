import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/ui/components/navigation/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import Footer from "@/ui/components/footer/Footer";
import ScrollToTopBtn from "@/ui/scroll-to-top-btn";
import { UIProvider } from "@/context/UIContext";
import ChatWoot from "@/ui/chatwoot";
import ChatwootIllustration from "@/ui/chatwoot-illustration";
import Whatsapp from "@/ui/whatsapp";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://testhelpnow.com"),

  title: {
    default: "TestHelpNow | #1 Online Exam Help, Proctored Exam Taker & Tutoring Services",
    template: "%s | TestHelpNow",
  },

  description:
    "Need help with online exams? TestHelpNow lets you pay someone to do your online exam with expert support, guaranteed confidentiality, and reliable results.",

  applicationName: "TestHelpNow",
  authors: [{ name: "TestHelpNow", url: "https://testhelpnow.com" }],
  creator: "TestHelpNow",
  publisher: "TestHelpNow",
  referrer: "origin-when-cross-origin",

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

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://testhelpnow.com",
    siteName: "TestHelpNow",
    title: "TestHelpNow | Academic Tutoring & Online Exam Assistance",
    description:
      "Get expert tutoring, targeted exam preparation, and guaranteed online test taking support.",
    images: [
      {
        url: "/og/homepage-og-image.png",
        width: 1200,
        height: 630,
        alt: "TestHelpNow - Online Exam Help & Proctored Exam Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TestHelpNow | Online Exam Help & Proctored Exam Services",
    description:
      "Pay someone to take your online proctored exam. Expert exam takers for PMP, SHRM, PRINCE2, GED, HiSET & more.",
    images: ["/og/homepage-og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UIProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
        >
          <GoogleTagManager gtmId="GTM-KZHSPRPQ" />
          <Navbar />
          {children}
          <Whatsapp />
          <ScrollToTopBtn />
          <Footer />
          <ChatwootIllustration />
          <ChatWoot />
          <Analytics />
          <ToastContainer />
        </body>
      </UIProvider>
    </html>
  );
}