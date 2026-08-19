"use client";

import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import NewsletterForm from "./newsletter-form";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#030f08] text-background px-6 md:px-20 py-12 space-y-10"
    >
      <div className="grid md:grid-cols-4 gap-8 w-full mx-auto max-w-full lg:max-w-310 pb-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <Link href="/" className="flex items-center gap-1 lg:gap-2">
              <Image
                src="/favicon-32x32.png"
                alt="TestHelpNow logo"
                height={30}
                width={30}
                priority
                className="object-contain"
              />
              <span className="font-semibold">
                <span className="text-foreground">TestHelp</span>
                <span className="text-gray-400">Now</span>.
              </span>
            </Link>
          </div>

          <p className="p-text text-gray-300">
            Your trusted partner for academic success. We help students excel in
            their exams and classes with personalized support.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <ul className="space-y-2 text-gray-300 text-[1rem] ">
            <li>
              <Link href="/proctored-exam-help">➜ Proctored Exam Help</Link>
            </li>
            <li>
              <Link href="/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me">➜ PMP Exam Help</Link>
            </li>
             <li>
              <Link href="/proctored-exam-help/pay-someone-to-take-my-prince2-exam-for-me">➜ PRINCE2 Exam Help</Link>
            </li>
             <li>
              <Link href="/proctored-exam-help/pay-someone-to-take-my-shrm-exam-for-me">➜ SHRM Exam Help</Link>
            </li>
             <li>
              <Link href="/proctored-exam-help/pay-someone-to-take-my-ged-exam-for-me">➜ GED Exam Help</Link>
            </li>
             <li>
              <Link href="/proctored-exam-help/pay-someone-to-take-my-hiset-exam-for-me">➜ HiSET Exam Help</Link>
            </li>
             <li>
              <Link href="/real-estate-exam-help">➜ Real Estate Exam Help</Link>
            </li>


          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className=" text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-[1rem]">
            <li>
              <Link href="/faq">➜ FAQs</Link>
            </li>
            <li>
              <Link href="/how-it-works">➜ How It Works</Link>
            </li>
            <li>
              <Link href="/blog">➜ Blog</Link>
            </li>
            <li>
              <Link href="/contact">➜ Contact</Link>
            </li>
            <li>
              <Link href="/sitemap.xml">➜ Sitemap</Link>
            </li>
            <li>
              <Link href="/privacy">➜ Privacy</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h3 className="font-semibold mb-4 text-xl">Support</h3>

          <div className="flex items-center gap-3 text-[1rem] text-gray-300">
            <Mail size={20} />
            <Link href="mailto:info@testhelpnow.com">info@testhelpnow.com</Link>
          </div>
          <div className="flex items-center gap-3 text-[1rem] text-gray-300">
            <Phone size={20} />
            <Link href="tel:+1(469) 428-4470">+1(469) 428-4470</Link>
          </div>
          {/* Telegram */}
          <div className="flex items-center gap-3 text-[1rem] text-gray-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <Link
              href="https://t.me/+nRelw8camMk3N2Y0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </Link>
          </div>

          {/* Discord */}
          <div className="flex items-center gap-3 text-[1rem] text-gray-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.053a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <Link
              href="https://discord.gg/NC53djQx2b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-0.5 border-accent2" />

      {/* Newsletter */}
      <div className="w-full mx-auto max-w-full lg:max-w-[840px]   pt-6  pb-6">
        <NewsletterForm />
      </div>
      <hr className="border-0.5 border-accent2" />

      {/* Copyright */}
      <div className="text-sm text-gray-400 text-center pt-4">
        © {new Date().getFullYear()} TestHelpNow. All rights reserved. <br />
        Designed & built with ❤️ by{" "}
        <a
          href="https://celadon-concha-2bec16.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold"
        >
          KItechCreatives
        </a>
      </div>
    </motion.footer>
  );
}
