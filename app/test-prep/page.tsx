"use client";
import Link from "next/link";
import Hero from "@/app/ui/components/testprep/hero";
import PrepSection from "@/app/ui/components/testprep/prep-section";
export default function TestPrepHome() {
  const availableTests = [
    {
      name: "PSAT",
      slug: "psat",
      description: "Digital PSAT® prep with proctored support",
    },
    {
      name: "ISEE",
      slug: "isee",
      description: "Boost your score with expert guidance",
    },
  ];

  return (
    <>
      <Hero />
      <PrepSection />
      <div className="container ">
        <h1>Test Preparation Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {availableTests.map((test) => (
            <Link key={test.slug} href={`/test-prep/${test.slug}`}>
              <div className="bg-cardBg p-4">
                <h2 className="text-primary headline">{test.name}</h2>
                <p className="text-primary p-text">{test.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
