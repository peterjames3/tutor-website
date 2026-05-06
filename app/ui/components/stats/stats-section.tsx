"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Lock, Clock, CreditCard, Zap } from "lucide-react";

interface StatCard {
  number: number;
  suffix: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const stats: StatCard[] = [
  {
    number: 4000,
    suffix: "K +",
    description: "5-star reviews",
    bgColor: "bg-blue-200",
    iconColor: "bg-green-400",
  },
  {
    number: 2000,
    suffix: "K +",
    description: "Exam experts in 300+ subjects",
    bgColor: "bg-pink-100",
    iconColor: "bg-blue-400",
  },
  {
    number: 10000,
    suffix: "K +",
    description: "Students Helped",
    bgColor: "bg-purple-200",
    iconColor: "bg-pink-300",
  },
  {
    number: 10,
    suffix: " +",
    description: "years in industry",
    bgColor: "bg-green-100",
    iconColor: "bg-purple-300",
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Money-back guarantee" },
  { icon: Lock, label: "100% confidential" },
  { icon: Clock, label: "Available 24/7" },
  { icon: CreditCard, label: "Secure payment" },
  { icon: Zap, label: "Last-minute exams welcome" },
];

function useCountUp(end: number, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setTimeout(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay, isActive]);

  return { count, setIsActive };
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: StatCard;
  index: number;
  isVisible: boolean;
}) {
  const { count, setIsActive } = useCountUp(stat.number, 2000, index * 200);

  useEffect(() => {
    if (isVisible) setIsActive(true);
  }, [isVisible, setIsActive]);

  const formatNumber = (num: number) => {
    if (stat.suffix.includes("K")) {
      return (num / 1000).toFixed(num >= 1000 ? 0 : 1);
    }
    return num.toString();
  };

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`${stat.bgColor} rounded-2xl p-8 text-center h-48 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md`}
      >
        <div className={`${stat.iconColor} w-9 h-8 p-4 rotate-45 mb-6 rounded-sm`} />
        <div className="display font-bold text-primary mb-2">
          {formatNumber(count)}
          {stat.suffix}
        </div>
        <div className="text-gray-600 p-text leading-relaxed">{stat.description}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="mx-auto max-w-[1440px] px-2">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Social Proof Bar */}
        <div
          className={`mt-10 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-gray-900 text-gray-200 text-sm font-medium px-4 py-2 rounded-full border border-gray-700"
            >
              <Icon size={15} className="text-yellow-300 shrink-0" strokeWidth={2.5} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}