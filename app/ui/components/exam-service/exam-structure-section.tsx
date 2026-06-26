import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/app/ui/components/blog/PortableTextComponents";
import type { ExamStructureSectionData } from "@/app/(site)/proctored-exam-help/[slug]/page";

export default function ExamStructureSection({
  data,
}: {
  data: ExamStructureSectionData;
}) {
  const {
    heading,
    subheading,
    body,
    structurePoints,
    diagramImage,
    ctaButton,
  } = data;

  return (
    <section className="w-full">
      <div className="py-16 max-w-full lg:max-w-310 mx-auto flex flex-col lg:flex-row  lg:items-center md:justify-between">
        {/* Left — text + bullet points */}
        <div className="flex-1 flex flex-col gap-5">
          {subheading && (
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-snug">
              {heading}
            </h2>
          )}
          {body && (
            <div className="prose prose-lg text-gray-600 max-w-none">
              <PortableText value={body} components={portableTextComponents} />
            </div>
          )}
          {structurePoints && structurePoints.length > 0 && (
            <ul className="flex flex-col gap-3 mt-2">
              {structurePoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-active-link flex-shrink-0 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item.point}</span>
                </li>
              ))}
            </ul>
          )}
          {ctaButton && (
            <Link
              href={ctaButton.href}
              className="mt-4 self-start inline-block bg-button-login-default text-white font-medium px-8 py-4 rounded-md hover:bg-secondary/80 hover:shadow-lg transition-all duration-300"
            >
              {ctaButton.label}
            </Link>
          )}
        </div>

        {/* Right — diagram/screenshot image */}
        {diagramImage?.url && (
          <div className="relative w-full md:w-1/2 min-h-[450px] rounded-md  overflow-hidden flex-shrink-0">
            <Image
              src={diagramImage.url}
              alt={diagramImage.alt ?? ""}
              fill
              className="object-cover"
            />
            {diagramImage.caption && (
              <p className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm text-center py-2 px-4">
                {diagramImage.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
