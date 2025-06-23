'use client';
import React from "react";
import { icon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  selected,
  onClick,
  tags = [],
}) => {
  return (
    <div
      className={`border rounded-xl p-6 cursor-pointer transition-all ${
        selected
          ? "border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-200"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <div className="ml-4">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
