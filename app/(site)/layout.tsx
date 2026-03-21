import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/ui/components/navigation/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import Footer from "../ui/components/footer/Footer";
import ScrollToTopBtn from "../ui/scroll-to-top-btn";
import { UIProvider } from "@/context/UIContext";
import Chatbot from "../ui/Chatbot";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default:
      "Testhelpnow | Academic Tutoring, Test prep & End-To-End Exam Support Services",
    template: "%s | Testhelpnow",
  },
  description:
    "Need help with online exams? TestHelpNow lets you pay someone to do your online exam with expert support, guaranteed confidentiality, and reliable results.",
  keywords: [
    "online exam assistance",
    "test preparation services",
    "professional exam takers",
    "exam support services",
    "guaranteed exam success",
    "hire someone to take my exam",
    "do my exam for me",
    "take my online test",
    "academic exam help",
    "university exam support",
    "college test prep help",
    "exam coaching services",
    "certification exam help",
    "proctored exam assistance",
    "exam completion services",
    "online class and exam help",
    "exam takers for hire",
    "Pay Someone to do my Online Exam for me",
  ],

  robots: "index, follow",
  openGraph: {
    title: {
      default:
        "Testhelpnow | Academic Tutoring, Test prep & End-To-End Exam Support Services",
      template: "%s | Testhelpnow",
    },
    description:
      "Get expert tutoring, targeted exam preparation, and end-to-end academic support. Edusion helps students in the US, UK, Canada, and New Zealand excel in their studies and exams.",
    url: "https://testhelpnow.com/",
    type: "website",
    locale: "en_US",
    siteName: "Testhelpnow",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KZHSPRPQ" />
      <UIProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
        >
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KZHSPRPQ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Navbar />
          {children}
          <ScrollToTopBtn />
          <Footer />
          <Chatbot />
          <ToastContainer />
        </body>
      </UIProvider>
    </html>
  );
}
