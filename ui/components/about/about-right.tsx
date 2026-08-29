import { ArrowRight, ShieldAlert, Laptop } from "lucide-react";
import Link from "next/link";

import WavyTexture from "./wavy-texture";

export default function AboutRight() {
  return (
    <section className="w-full space-y-4 px-8 py-8 relative">
      <div className="absolute -top-14 -right-2">
        <WavyTexture />
      </div>

      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-px w-6 bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          About Us
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-primary leading-snug">
        Who We Are – Trusted Online Exam Helpers
      </h2>

      {/* Paragraph */}
      <p className="text-sm md:text-base text-primary leading-relaxed">
        If you need to pay someone to take your online exam or discover how to
        pass proctored exams safely, our platform provides discrete,
        professional exam takers to secure your academic and professional path.
        We specialize in PMP, PRINCE2, GED, HiSET, and Real Estate exams with
        guaranteed results and complete confidentiality.
      </p>

      {/* Tags Row */}
      <div className="w-full flex items-center justify-between gap-4 pt-1">
        <div className="flex gap-2 items-center">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Laptop size={16} />
          </span>
          <p className="text-xs md:text-sm text-primary font-medium">
            Online exam help solutions
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ShieldAlert size={16} />
          </span>
          <p className="text-xs md:text-sm text-primary font-medium">
            100% confidential & secure
          </p>
        </div>
      </div>

      {/* Stats row - Pivot to track records across certification domains */}
      <div className="flex flex-wrap justify-between gap-4 pt-2">
        <div className="flex items-center gap-3">
          <p className="text-3xl md:text-4xl font-bold text-primary leading-none">
            50+
          </p>
          <div>
            <p className="text-xs text-primary/70 leading-tight">
              Certified exam takers & <br /> subject matter experts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-3xl md:text-4xl font-bold text-primary leading-none">
            100%
          </p>
          <div>
            <p className="text-xs text-primary/70 leading-tight">
              First attempt pass rate <br /> across all exams
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/proctored-exam-help"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary/70 hover:text-primary transition-colors group"
        >
          More About Proctored Exam Help service
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        
      </div>
    </section>
  );
}
