// components/link-card.tsx
"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface LinkCardProps {
  title: string;
  items: { name: string; slug: string }[];
  color?: string;
  basePath?: string;
}

export const LinkCard = ({
  title,
  items,
  color = "bg-blue-50",
  basePath = "",
}: LinkCardProps) => {
  return (
    <motion.div
      className={`${color} p-6 rounded-xl shadow-md`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item) => (
          <motion.div
            key={item.slug}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={`/${basePath}${item.slug}`}
              className="block p-3 bg-white rounded-lg shadow-sm hover:bg-blue-100 transition-colors text-gray-700 hover:text-blue-600"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
