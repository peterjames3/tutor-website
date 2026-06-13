import Image from "next/image";
import type { UnlockPathSectionData } from "@/app/(site)/proctored-exam-help/[slug]/page";

export default function UnlockPathSection({
  data,
}: {
  data: UnlockPathSectionData;
}) {
  const { heading, subheading, featureCards, sideImage } = data;

  return (
    <section className="bg-gray-50">
      <div className="py-16 max-w-full lg:max-w-[1240px] xl:max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left — heading + cards grid */}
        <div className="flex-1 flex flex-col gap-8">
          {(heading || subheading) && (
            <div>
              {heading && (
                <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-primary leading-snug">
                  {heading}
                </h2>
              )}
              {subheading && (
                <p className="text-[1rem] lg:text-[1.3rem] font-semibold uppercase tracking-widest text-primary mb-4">
                  {subheading}
                </p>
              )}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            {featureCards?.map((card, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-2xl p-5 border-2 transition-shadow duration-300 hover:shadow-lg"
                style={{ borderColor: card.accentColor ?? "#e5e7eb" }}
              >
                {card.icon?.url && (
                  <div className="relative w-10 h-10">
                    <Image
                      src={card.icon.url}
                      alt={card.icon.alt ?? card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="font-bold text-primary headline">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-gray-600 text-[1rem] lg:text-[1.3rem] leading-relaxed">
                    {card.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative side image */}
        {sideImage?.url && (
          <div className="relative w-full lg:w-5/12 h-full rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
            <Image
              src={sideImage.url}
              alt={sideImage.alt ?? ""}
              fill
              className="object-cover h-full"
            />
            {sideImage.caption && (
              <p className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm text-center py-2 px-4">
                {sideImage.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
