//import Image from "next/image";
import Link from "next/link";
import type { ChallengesSectionData } from "@/app/(site)/proctored-exam-help/[slug]/page";

export default function ChallengesSection({
  data,
}: {
  data: ChallengesSectionData;
}) {
  const { heading, intro, challenges, ctaButton } = data;

  return (
    <section className=" py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          {heading && (
            <h2 className="text-3xl font-bold text-primary mb-6">{heading}</h2>
          )}
          {intro && (
            <p className="text-primary text-[1rem] lg:text-[1.3rem] leading-relaxed mb-4">
              {intro}
            </p>
          )}
        </div>

        {/* Challenge cards */}
        <div className="flex flex-col gap-2">
          {challenges?.map((challenge, i) => (
            <div key={i} className="flex flex-col  px-6 py-2 ">
              {/* {challenge.icon?.url && (
                <div className="relative w-10 h-10">
                  <Image
                    src={challenge.icon.url}
                    alt={challenge.icon.alt ?? challenge.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )} */}
              <h3 className="text-[1rem] lg:text-[1.3rem] font-semibold  text-gray-700">
                {challenge.title}
              </h3>
              {challenge.description && (
                <p className="text-gray-700 text-[1rem] lg:text-[1.3rem] leading-relaxed">
                  {challenge.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {ctaButton && (
          <div className="mt-12 text-center">
            <Link
              href={ctaButton.href}
              className="inline-block bg-button-login-default text-white font-medium px-10 py-4 rounded-md hover:bg-secondary/80 hover:shadow-lg transition-all duration-300"
            >
              {ctaButton.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
