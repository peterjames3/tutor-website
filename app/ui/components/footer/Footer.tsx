"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import NewsletterForm from "./newsletter-form";
import Logo from "@/app/ui/Logo";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#030f08] text-background px-6 md:px-20 py-12 space-y-10"
    >
      <div className="grid md:grid-cols-4 gap-8 w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] pb-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <Logo />
            <h2 className="text-2xl font-bold">Edusion</h2>
          </div>

          <p className="text-xl text-gray-300">
            Your trusted partner for academic success. We help students excel in
            their exams and classes with personalized support.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-300 text-[1rem] ">
            <li>
              <Link href="/exam-support">➜ Exam Support</Link>
            </li>
            <li>
              <Link href="/class-assistance">➜ Class Assistance</Link>
            </li>
            <li>
              <Link href="/one-on-one-tutoring">➜ One-on-One Tutoring</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className=" text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-[1rem]">
            <li>
              <Link href="/about">➜ About Us</Link>
            </li>
            <li>
              <Link href="/how-it-works">➜ How It Works</Link>
            </li>
            <li>
              <Link href="/testimonials">➜ Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">➜ Contact</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h3 className="font-semibold mb-4 text-xl">Support</h3>
          <div className="flex items-start gap-3 text-[1rem] text-gray-300">
            <MapPin size={20} className="mt-1" />
            <span>123 Education Ave, Learning City</span>
          </div>
          <div className="flex items-center gap-3 text-[1rem] text-gray-300">
            <Mail size={20} />
            <Link href="mailto:support@academihelp.com">
              support@academihelp.com
            </Link>
          </div>
          <div className="flex items-center gap-3 text-[1rem] text-gray-300">
            <Phone size={20} />
            <Link href="tel:5551234567">(555) 123-4567</Link>
          </div>
        </div>
      </div>
      <hr className="border-0.5 border-accent2" />

      {/* Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px]  pt-6  pb-6">
        <div>
          <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
          <p className="text-sm text-gray-300">
            Stay updated with the latest in solar technology and energy
            solutions
          </p>
        </div>

        <NewsletterForm />
      </div>
      <hr className="border-0.5 border-accent2" />

      {/* Copyright */}
      <div className="text-sm text-gray-400 text-center pt-4">
        © {new Date().getFullYear()} Edusion. All rights reserved. <br />
        Designed & built with ❤️ by{" "}
        <span className="text-white font-semibold">KItechCreatives</span>
      </div>
    </motion.footer>
  );
}
