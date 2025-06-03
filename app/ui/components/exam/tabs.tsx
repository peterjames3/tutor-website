// components/ExamServices/Tabs.tsx
"use client";
import { useState } from "react";

const tabList = ["Grades K-12", "Graduate & beyond", "Academics"];

export default function Tabs() {
  const [active, setActive] = useState(1);

  return (
    <div className="flex justify-center gap-1 mb-8">
      {tabList.map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActive(idx)}
          className={`px-4 py-2 text-sm border rounded-full transition-colors ${
            active === idx
              ? "bg-green-500 text-white border-green-500"
              : "text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
