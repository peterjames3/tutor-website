"use client";

import { useComparison } from "@/hooks/useComparisons";
import CompareResults from "@/ui/components/certifications/compare-results";
import type { ComparisonResult } from "@/types/api.types";
import type { CertCompareSectionData } from "@/lib/defination";

interface Props {
  data: CertCompareSectionData;
  initialComparison?: ComparisonResult;
}

const TOKENS = {
  ink: "#101820",
  hairline: "#DAD7CC",
};

export default function CertCompareSection({ data }: Props) {
  const {
    data: comparison,
    isLoading,
    error,
  } = useComparison(data.certSlugs);

  if (isLoading) {
    return (
      <section className="bg-linear-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="h-6 w-48 animate-pulse"
            style={{ backgroundColor: TOKENS.hairline }}
          />
          <div
            className="mt-4 h-64 w-full animate-pulse"
            style={{ backgroundColor: TOKENS.hairline }}
          />
        </div>
      </section>
    );
  }

  if (error || !comparison) {
    return (
      <section className="bg-linear-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm" style={{ color: TOKENS.ink }}>
            Couldn&apos;t load the comparison right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        {data.heading && (
          <h2
            className="mb-2 text-3xl font-bold sm:text-4xl"
            style={{ color: TOKENS.ink }}
          >
            {data.heading}
          </h2>
        )}
        <CompareResults data={comparison} />
      </div>
    </section>
  );
}