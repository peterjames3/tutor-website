// app/ui/components/pmp/sections/why-we-lead.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { WhyWeLeadData } from "@/lib/defination";
import { Award, ShieldCheck, CheckCircle, Users, Clock, Briefcase, Target, Lock, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  CheckCircle,
  Users,
  Clock,
  Briefcase,
  Target,
  Lock,
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
  red: "bg-red-100 text-red-600",
  teal: "bg-teal-100 text-teal-600",
};


export default function WhyWeLead({ data }: { data: WhyWeLeadData }) {
  const {
    sectionId,
    heading,
    subheading,
    benefitCards,
    trustBadges,
    footerNote,
    backgroundColor = '#f8f9fa',
    ctaButton,
  } = data;

  return (
    <section id={sectionId} className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-310 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
          {subheading && (
            <p className="text-xl text-gray-600 mt-2">{subheading}</p>
          )}
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitCards.map((card, index) => {
            const Icon = iconMap[card.icon] || Award;
            const iconColor = colorMap[card.iconColor] || 'bg-blue-100 text-blue-600';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white overflow-hidden rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className={`h-auto rounded-t-md w-full`}>
                   
{card.image && (
  <>
    <Image
      src={card.image.url}
      alt={card.image.alt}
      width={600}
      height={200}
      className="object-contain w-full h-[14rem]"
    />
    {card.image.caption && (
      <p className="text-sm text-gray-500 mt-2 text-center">
        {card.image.caption}
      </p>
    )}
  </>
)}

                </div>
                <article className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{card.description}</p>
                <p className="text-gray-600 mt-3">{card.content}</p>
                </article>
                {card.link && (
                  <Link href={card.link} className="text-emerald-600 hover:underline text-sm mt-3 inline-block">
                    Learn more →
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        {trustBadges && trustBadges.length > 0 && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {trustBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon] || Award;
              return (
                <div key={index} className=" flex items-center gap-4 justify-center text-center bg-gray-900 px-4 py-2 rounded-full border border-gray-200">
                  
                  <div className="text-[1rem] font-extrabold text-white">{badge.value}</div>
                  <div className="text-sm text-yellow-300 font-medium">{badge.label}</div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Footer Note */}
        {footerNote && (
          <motion.p
            className="text-center text-sm text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {footerNote}
          </motion.p>
        )}

        {/* CTA */}
        {ctaButton && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href={ctaButton.href}
              className={`inline-block font-semibold px-8 py-3 rounded-lg transition-colors ${
                ctaButton.variant === 'primary' 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md'
                  : ctaButton.variant === 'secondary'
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              {ctaButton.label}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
