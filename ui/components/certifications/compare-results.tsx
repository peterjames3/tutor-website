
"use client";

import {
  CheckCircle,
  XCircle,
  Star,
  TrendingUp,
  DollarSign,
  Briefcase,
  RefreshCw,
  BookOpen,
} from "lucide-react";
import type { ComparisonResult } from "@/types/api.types";

interface CompareResultsProps {
  data: ComparisonResult;
}



const DEMAND_COLOR: Record<string, string> = {
  "Very High": "bg-primary1-100 text-primary1-700",
  High: "bg-primary1-50 text-primary1-700",
  Medium: "bg-secondary1-100 text-secondary1-600",
  Low: "bg-secondary1-50 text-secondary1-500",
};

const DIFFICULTY_COLOR = (score: number) => {
  if (score <= 3) return "text-primary1-600";
  if (score <= 6) return "text-secondary1-500";
  return "text-secondary1-700";
};

function DifficultyBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-sm transition-colors ${
              i < score
                ? "bg-primary1-500"
                : "bg-secondary1-100"
            }`}
          />
        ))}
      </div>

      <span
        className={`text-sm font-medium ${DIFFICULTY_COLOR(score)}`}
      >
        {score}/10
      </span>
    </div>
  );
}

function SectionHeader({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <tr className="bg-secondary1-50">
      <td
        colSpan={99}
        className="px-4 py-2.5 text-xs font-semibold text-secondary1-500 uppercase tracking-wider border-b border-secondary1-100"
      >
        <div className="flex items-center gap-2">
          <span className="text-primary1-500">{icon}</span>
          {label}
        </div>
      </td>
    </tr>
  );
}

function Row({
  label,
  cells,
}: {
  label: string;
  cells: React.ReactNode[];
}) {
  return (
    <tr className="border-b border-secondary1-50 hover:bg-primary1-50/50 transition-colors">
      <td className="px-4 py-3 text-sm font-medium text-secondary1-600 w-40 shrink-0">
        {label}
      </td>

      {cells.map((cell, i) => (
        <td
          key={i}
          className="px-4 py-3 text-sm text-secondary1-800"
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}

export default function CompareResults({ data }: CompareResultsProps) {
  const { certs, verdict } = data;

  const bestMap: Record<string, string> = {
    [verdict.bestForBeginners]: "Best for Beginners",
    [verdict.bestForSalary]: "Best Salary ROI",
    [verdict.bestForJobDemand]: "Most In-Demand",
    ...(verdict.bestVendorNeutral
      ? { [verdict.bestVendorNeutral]: "Most Portable" }
      : {}),
  };

  return (
    <div className="mt-10 space-y-8">
      {/* Verdict card */}
      <div className="bg-primary1-50 border border-primary1-200 rounded-xl p-6">
        <h2 className="text-base font-semibold text-primary1-800 mb-2 flex items-center gap-2">
          <Star className="w-4 h-4 text-primary1-500" />
          Verdict
        </h2>

        <p className="text-secondary1-700 text-sm leading-relaxed mb-4">
          {verdict.summary}
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            {
              label: "Best for Beginners",
              value: verdict.bestForBeginners,
            },
            {
              label: "Best Salary ROI",
              value: verdict.bestForSalary,
            },
            {
              label: "Most In-Demand",
              value: verdict.bestForJobDemand,
            },
            ...(verdict.bestVendorNeutral
              ? [
                  {
                    label: "Most Portable",
                    value: verdict.bestVendorNeutral,
                  },
                ]
              : []),
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-primary1-200 rounded-lg px-3 py-2 text-xs shadow-sm"
            >
              <span className="text-secondary1-500">
                {item.label}:{" "}
              </span>

              <span className="font-semibold text-primary1-700">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto rounded-xl border border-secondary1-100 bg-white shadow-sm">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-secondary1-100 bg-secondary1-50/50">
              <th className="px-4 py-4 text-left text-xs font-semibold text-secondary1-500 uppercase tracking-wider w-40">
                Category
              </th>

              {certs.map((cert, i) => (
                <th key={i} className="px-4 py-4 text-left">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-secondary1-900 text-base">
                      {cert.acronym}
                    </span>

                    <span className="text-xs text-secondary1-500 font-normal">
                      {cert.name}
                    </span>

                    <span className="text-xs text-primary1-600 font-medium">
                      {cert.vendor}
                    </span>

                    {bestMap[cert.acronym] && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary1-100 text-primary1-700 w-fit mt-1">
                        ★ {bestMap[cert.acronym]}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Cost */}
            <SectionHeader
              icon={<DollarSign className="w-3.5 h-3.5" />}
              label="Cost"
            />

            <Row
              label="Exam fee"
              cells={certs.map(
                (c) => `$${c.cost.examFeeUSD.toLocaleString()}`
              )}
            />

            <Row
              label="Study materials"
              cells={certs.map((c) => c.cost.studyMaterialsEstUSD)}
            />

            <Row
              label="Renewal cost"
              cells={certs.map((c) =>
                c.cost.renewalCostUSD
                  ? `$${c.cost.renewalCostUSD}`
                  : "Free / CPE"
              )}
            />

            <Row
              label="Total (year 1)"
              cells={certs.map((c) => (
                <span
                  key={`${c.acronym}-total`}
                  className="font-semibold text-secondary1-900"
                >
                  {c.cost.totalFirstYearUSD}
                </span>
              ))}
            />

            {/* Difficulty */}
            <SectionHeader
              icon={<BookOpen className="w-3.5 h-3.5" />}
              label="Difficulty"
            />

            <Row
              label="Score"
              cells={certs.map((c) => (
                <DifficultyBar
                  key={`${c.acronym}-difficulty`}
                  score={c.difficulty.score}
                />
              ))}
            />

            <Row
              label="Study time"
              cells={certs.map(
                (c) => `${c.difficulty.studyTimeMonths} months`
              )}
            />

            <Row
              label="Exam format"
              cells={certs.map((c) => c.difficulty.examFormat)}
            />

            <Row
              label="Passing score"
              cells={certs.map((c) => c.difficulty.passingScore)}
            />

            <Row
              label="Prerequisites"
              cells={certs.map((c) =>
                c.difficulty.prerequisiteCount === 0
                  ? "None required"
                  : `${c.difficulty.prerequisiteCount} required`
              )}
            />

            {/* Salary & Roles */}
            <SectionHeader
              icon={<TrendingUp className="w-3.5 h-3.5" />}
              label="Salary & Roles"
            />

            <Row
              label="Avg salary"
              cells={certs.map((c) => (
                <span
                  key={`${c.acronym}-avg-salary`}
                  className="font-semibold text-secondary1-900"
                >
                  {c.roles.avgSalaryUSD}
                </span>
              ))}
            />

            <Row
              label="Salary impact"
              cells={certs.map((c) => (
                <span
                  key={`${c.acronym}-salary-impact`}
                  className="text-primary1-600 font-medium"
                >
                  {c.roles.salaryImpactUSD}
                </span>
              ))}
            />

            <Row
              label="Job demand"
              cells={certs.map((c) => (
                <span
                  key={`${c.acronym}-job-demand`}
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                    DEMAND_COLOR[c.roles.jobDemand] ??
                    "bg-secondary1-50 text-secondary1-500"
                  }`}
                >
                  {c.roles.jobDemand}
                </span>
              ))}
            />

            <Row
              label="Job postings"
              cells={certs.map((c) => c.roles.jobPostingsEstimate)}
            />

            <Row
              label="Ideal for"
              cells={certs.map((c) => (
                <div
                  key={`${c.acronym}-ideal-for`}
                  className="flex flex-wrap gap-1"
                >
                  {c.roles.idealFor.map((role) => (
                    <span
                      key={role}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-secondary1-50 text-secondary1-600 border border-secondary1-100"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              ))}
            />

            <Row
              label="Top employers"
              cells={certs.map((c) => (
                <div
                  key={`${c.acronym}-top-employers`}
                  className="flex flex-wrap gap-1"
                >
                  {c.roles.topEmployers.map((emp) => (
                    <span
                      key={emp}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-primary1-50 text-primary1-700 border border-primary1-100"
                    >
                      {emp}
                    </span>
                  ))}
                </div>
              ))}
            />

            {/* Renewal */}
            <SectionHeader
              icon={<RefreshCw className="w-3.5 h-3.5" />}
              label="Renewal"
            />

            <Row
              label="Valid for"
              cells={certs.map(
                (c) => `${c.renewal.validYears} years`
              )}
            />

            <Row
              label="Method"
              cells={certs.map(
                (c) => c.renewal.renewalMethod
              )}
            />

            <Row
              label="CPE credits"
              cells={certs.map((c) =>
                c.renewal.cpeCreditRequired
                  ? `${c.renewal.cpeCreditRequired} credits`
                  : "—"
              )}
            />

            {/* Domains */}
            <SectionHeader
              icon={<Briefcase className="w-3.5 h-3.5" />}
              label="Domains"
            />

            <Row
              label="Primary domain"
              cells={certs.map(
                (c) => c.domains.primaryDomain
              )}
            />

            <Row
              label="Vendor neutral"
              cells={certs.map((c) =>
                c.domains.vendorNeutral ? (
                  <CheckCircle
                    key={`${c.acronym}-vendor-neutral`}
                    className="w-4 h-4 text-primary1-500"
                  />
                ) : (
                  <XCircle
                    key={`${c.acronym}-vendor-neutral`}
                    className="w-4 h-4 text-secondary1-400"
                  />
                )
              )}
            />

            <Row
              label="Recognition"
              cells={certs.map(
                (c) => c.domains.industryRecognition
              )}
            />

            <Row
              label="Topics covered"
              cells={certs.map((c) => (
                <div
                  key={`${c.acronym}-topics`}
                  className="flex flex-wrap gap-1"
                >
                  {c.domains.coveredTopics.map((t, idx) => (
                    <span
                      key={`${c.acronym}-topic-${idx}`}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-secondary1-50 text-secondary1-600 border border-secondary1-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
