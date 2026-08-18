"use client";

import { useCertification } from "@/hooks/useCertifications";
import type { Certification } from "@/types/api.types";

export interface CertOverviewSectionData {
  _type: "certOverviewSection";
  sectionId?: string;
  certSlug: string;
}

interface Props {
  data: CertOverviewSectionData;
  initialCert?: Certification;
}

const TOKENS = {
  ink: "#101820",
  paper: "#F6F5F1",
  signal: "#147D6F",
  amber: "#D98E2B",
  hairline: "#DAD7CC",
};

const LEVEL_STEPS: Certification["level"][] = [
  "Entry",
  "Associate",
  "Professional",
  "Expert",
];

const DEMAND_COLOR: Record<Certification["jobDemand"], string> = {
  Low: TOKENS.hairline,
  Medium: TOKENS.amber,
  High: TOKENS.signal,
  "Very High": TOKENS.signal,
};

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border px-4 py-3" style={{ borderColor: TOKENS.hairline }}>
      <p
        className="mb-1 text-[11px] uppercase tracking-[0.1em]"
        style={{ color: TOKENS.ink, opacity: 0.6 }}
      >
        {label}
      </p>
      <p
        className="text-sm font-medium"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: TOKENS.ink }}
      >
        {value}
      </p>
    </div>
  );
}

function LevelMeter({ level }: { level: Certification["level"] }) {
  const activeIndex = LEVEL_STEPS.indexOf(level);
  return (
    <div className="flex items-center gap-2">
      {LEVEL_STEPS.map((step, i) => (
        <span
          key={step}
          className="h-1.5 flex-1"
          style={{
            backgroundColor: i <= activeIndex ? TOKENS.signal : TOKENS.hairline,
          }}
          title={step}
        />
      ))}
      <span
        className="ml-2 whitespace-nowrap text-xs font-medium"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: TOKENS.ink }}
      >
        {level}
      </span>
    </div>
  );
}

function DomainBars({ domains }: { domains: Certification["domains"] }) {
  const max = Math.max(...domains.map((d) => d.weightPercent));
  return (
    <div className="flex flex-col gap-3">
      {domains.map((d) => (
        <div key={d.name}>
          <div className="mb-1 flex items-baseline justify-between gap-4">
            <span className="text-sm" style={{ color: TOKENS.ink }}>
              {d.name}
            </span>
            <span
              className="shrink-0 text-xs"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: TOKENS.signal,
              }}
            >
              {d.weightPercent}%
            </span>
          </div>
          <div
            className="h-1.5 w-full"
            style={{ backgroundColor: TOKENS.hairline }}
          >
            <div
              className="h-1.5"
              style={{
                width: `${(d.weightPercent / max) * 100}%`,
                backgroundColor: TOKENS.signal,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CertOverviewSection({ data, initialCert }: Props) {
  const {
    data: cert,
    isLoading,
    error,
  } = useCertification(data.certSlug, initialCert);

  if (isLoading) {
    return (
      <section className="bg-linear-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="h-6 w-48 animate-pulse"
            style={{ backgroundColor: TOKENS.hairline }}
          />
          <div
            className="mt-4 h-40 w-full animate-pulse"
            style={{ backgroundColor: TOKENS.hairline }}
          />
        </div>
      </section>
    );
  }

  if (error || !cert) {
    return (
      <section className="bg-linear-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p
            className="text-sm"
            style={{
              color: TOKENS.ink,
            }}
          >
            Couldn&apos;t load exam details right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="mb-3 text-xs font-medium uppercase tracking-[0.14em]"
          style={{
            color: TOKENS.signal,
          }}
        >
          Exam overview
        </p>
        <h2
          className="mb-8 text-3xl font-bold sm:text-4xl"
          style={{
            color: TOKENS.ink,
          }}
        >
          {cert.name}
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left: stats + difficulty */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="mb-2 text-[11px] uppercase tracking-[0.1em]"
                style={{
                  color: TOKENS.ink,
                  opacity: 0.6,
                }}
              >
                Difficulty level
              </p>
              <LevelMeter level={cert.level} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Exam cost" value={`$${cert.cost}`} />
              <StatCard label="Duration" value={cert.duration} />
              <StatCard label="Questions" value={cert.questionCount} />
              <StatCard label="Passing score" value={cert.passingScore} />
            </div>

            <div>
              <p
                className="mb-2 text-[11px] uppercase tracking-[0.1em]"
                style={{
                  color: TOKENS.ink,
                  opacity: 0.6,
                }}
              >
                Renewal
              </p>
              <p className="text-sm" style={{ color: TOKENS.ink }}>
                {cert.renewalYears === 0
                  ? "Does not expire"
                  : `Every ${cert.renewalYears} years${
                      cert.renewalCostUSD ? ` · $${cert.renewalCostUSD}` : ""
                    }`}
                {cert.renewalMethod ? ` — ${cert.renewalMethod}` : ""}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2"
                style={{ backgroundColor: DEMAND_COLOR[cert.jobDemand] }}
              />
              <span
                className="text-xs uppercase tracking-[0.08em]"
                style={{
                  color: TOKENS.ink,
                }}
              >
                {cert.jobDemand} job demand
              </span>
            </div>
          </div>

          {/* Right: exam domains breakdown */}
          <div>
            <p
              className="mb-3 text-[11px] uppercase tracking-[0.1em]"
              style={{
                color: TOKENS.ink,
                opacity: 0.6,
              }}
            >
              Exam domains
            </p>
            <DomainBars domains={cert.domains} />
          </div>
        </div>

        {/* Ideal for / prerequisites */}
        <div
          className="mt-10 flex flex-wrap gap-8 border-t pt-8"
          style={{ borderColor: TOKENS.hairline }}
        >
          {cert.idealFor?.length > 0 && (
            <div>
              <p
                className="mb-2 text-[11px] uppercase tracking-[0.1em]"
                style={{
                  color: TOKENS.ink,
                  opacity: 0.6,
                }}
              >
                Ideal for
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.idealFor.map((role) => (
                  <span
                    key={role}
                    className="border px-2.5 py-1 text-xs"
                    style={{ borderColor: TOKENS.hairline, color: TOKENS.ink }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          {cert.prerequisites?.length > 0 && (
            <div>
              <p
                className="mb-2 text-[11px] uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: TOKENS.ink,
                  opacity: 0.6,
                }}
              >
                Prerequisites
              </p>
              <ul className="text-sm" style={{ color: TOKENS.ink }}>
                {cert.prerequisites.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="ml-auto">
            <a
              href={cert.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b-2 pb-1 text-sm font-medium uppercase tracking-[0.08em] hover:opacity-70"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: TOKENS.ink,
                borderColor: TOKENS.signal,
              }}
            >
              Official exam page
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
