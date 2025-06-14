import React from "react";
import Image from "next/image";
import k8Image from "@/public/images/k8-learning.jpg";
import highSchoolImage from "@/public/images/high-school.jpg";
import collegeImage from "@/public/images/college-students.jpg";

export default function SubjectsSection() {
  const gradeLevels = [
    {
      name: "K-8",
      subjects: [
        "Algebra",
        "Coding",
        "Fractions",
        "Math",
        "Multiplication",
        "Phonics",
        "Reading",
        "Science",
        "Vocabulary",
        "Spelling",
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: k8Image,
      alt: "Elementary school students learning",
    },
    {
      name: "High School",
      subjects: [
        "Algebra",
        "Biology",
        "Chemistry",
        "Computer Science",
        "Geometry",
        "Literature",
        "Math",
        "Physics",
        "Writing",
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      image: highSchoolImage,
      alt: "High school students in classroom",
    },
    {
      name: "College and Adult",
      subjects: [
        "Calculus",
        "Chemistry",
        "Computer Science",
        "Microbiology",
        "Trigonometry",
        "Physics",
        "Economics",
        "Spanish",
        "Statistics",
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      image: collegeImage,
      alt: "College students studying together",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Get the learning support you need
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gradeLevels.map((level, index) => (
          <div
            key={index}
            className={`${level.bgColor} border ${level.borderColor} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col`}
          >
            <div className="relative h-48 w-full">
              <Image
                src={level.image}
                alt={level.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>

            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {level.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {level.subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 transition-colors"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
