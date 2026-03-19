"use client";

import { useState } from "react";
import Link from "next/link";
import { Pickaxe, HelpCircle } from "lucide-react";

const HELP_ARTICLES = [
  {
    title: "How does it work",
    link: "/how-it-works",
    icon: Pickaxe,
  },
  {
    title: "General questions",
    link: "/faq",
    icon: HelpCircle,
  },
];

export default function HelpTab() {
  const [search, setSearch] = useState("");

  const filtered = HELP_ARTICLES.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="px-4 py-3 space-y-3">
      {/* Title */}
      <h4 className="font-semibold text-gray-700">Help Center</h4>

      {/* Search */}
      <input
        type="text"
        placeholder="Search help articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
      />

      {/* Articles */}
      <div className="space-y-2">
        {filtered.map((article) => {
          const Icon = article.icon;

          return (
            <Link
              key={article.title}
              href={article.link}
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition"
            >
              <Icon size={18} className="text-secondary" />

              <span className="text-sm text-gray-700 font-medium">
                {article.title}
              </span>
            </Link>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-sm text-gray-500 text-center">
            No help articles found.
          </p>
        )}
      </div>
    </div>
  );
}
