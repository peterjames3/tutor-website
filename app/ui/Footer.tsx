// components/footer.tsx
"use client";

import { motion } from "motion/react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Eclusion</h2>
            <p className="text-gray-300">
              Your trusted partner for academic success. We help students excel
              in their exams and classes with personalized support.
            </p>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/exam-support"
                  className="text-gray-300 hover:text-white transition"
                >
                  Exam Support
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/class-assistance"
                  className="text-gray-300 hover:text-white transition"
                >
                  Class Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/tutoring"
                  className="text-gray-300 hover:text-white transition"
                >
                  One-on-One Tutoring
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-300 hover:text-white transition"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-white transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Education Ave, Learning City</p>
              <p>
                <a
                  href="mailto:support@academicip.com"
                  className="hover:text-white transition"
                >
                  support@academicip.com
                </a>
              </p>
              <p>
                <a
                  href="tel:5551234567"
                  className="hover:text-white transition"
                >
                  (555) 123-4567
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="border-t border-gray-800 pt-6 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {currentYear} Eclusion. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
