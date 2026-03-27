import Image from "next/image";
import Link from "next/link";
import type { StepsSectionData } from "@/app/(site)/proctored-exam-help/[slug]/page";

export default function StepsSection({ data }: { data: StepsSectionData }) {
  const { heading, subheading, steps, ctaButton } = data;

  return (
    <section className=" bg-gray-50">
      <div className="max-w-full  mx-auto lg:max-w-[1240px] xl:max-w-[1440px] py-16 px-2">
        {/* Header */}
        {(heading || subheading) && (
          <div className="max-w-4xl mx-auto text-center mb-14">
            {heading && (
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-[1rem]  lg:text-[1.3rem] font-semibold text-primary mb-2">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* Steps grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps?.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-4 bg-white rounded-2xl py-6 px-5 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Step badge */}
              <div className="flex items-center gap-2">
                <span className="text-[1rem] font-bold uppercase tracking-widest text-secondary">
                  {step.label ?? "Step"}
                </span>
                <span className="size-7 flex items-center justify-center rounded-full bg-active-link text-white text-[0.9rem]  font-bold">
                  {step.stepNumber ?? i + 1}
                </span>
              </div>

              {/* Icon */}
              {step.icon?.url && (
                <div className="relative w-full h-[10rem]">
                  <Image
                    src={step.icon.url}
                    alt={step.icon.alt ?? step.title}
                    fill
                    className="object-fill"
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-primary">{step.title}</h3>

              {step.description && (
                <p className="text-primary text-[1.2rem]  leading-relaxed">
                  {step.description}
                </p>
              )}

              {/* Connector arrow — hide on last */}
            </div>
          ))}
        </div>

        {ctaButton && (
          <div className="text-center mt-12">
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
