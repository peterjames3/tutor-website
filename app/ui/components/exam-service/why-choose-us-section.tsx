import Image from "next/image";
import type { WhyChooseUsSectionData } from "@/app/(site)/proctored-exam-help/[slug]/page";

export default function WhyChooseUsSection({
  data,
}: {
  data: WhyChooseUsSectionData;
}) {
  const { heading, subheading, intro, reasons, backgroundImage } = data;

  return (
    <section className="py-16">
      {/* Optional background image */}
      {backgroundImage?.url && (
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alt ?? ""}
          fill
          className="object-cover opacity-5"
        />
      )}

      <div className="px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          {subheading && (
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl font-bold text-primary mb-6">
              {heading}
            </h2>
          )}
          {intro && (
            <p className="text-primary text-[1rem] lg:text-[1.3rem] mb-6 leading-relaxed">{intro}</p>
          )}
        </div>

        {/* Reason blocks */}
        <div className="flex flex-col space-y-4">
          {reasons?.map((reason, i) => (
            <div
              key={i}
              className="flex flex-col gap-4"
            >
              {reason.icon?.url && (
                <div className="relative w-10 h-10">
                  <Image
                    src={reason.icon.url}
                    alt={reason.icon.alt ?? reason.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-2xl font-semibold text-primary">{reason.title}</h3>
              {reason.description && (
                <p className="text-primary text-[1rem] lg:text-[1.3rem] mb-4 leading-relaxed">
                  {reason.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
