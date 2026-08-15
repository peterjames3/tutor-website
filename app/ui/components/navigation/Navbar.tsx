"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { MenuItems } from "@/lib/menuitem";
import DropdownMenu from "./DropdownMenu";
import ContactBar from "@/app/ui/ContactBar";
import Mobile from "@/app/ui/components/navigation/Mobile";
import { useUIDispatch } from "@/context/UIContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const dispatch = useUIDispatch();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 ${
        isScrolled
          ? "bg-gradient-to-r from-white/90 via-green-50/80 to-white/90 backdrop-blur-lg shadow-xl border-b border-white/20"
          : "bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB]"
      }`}
    >
      <section className="w-full mx-auto max-w-full lg:max-w-310">
        <ContactBar isScrolled={false} />
      </section>
      <div className="w-full mx-auto max-w-full lg:max-w-310 flex items-center justify-between gap-6 px-4 md:px-2 lg:px-3">
        {/* Logo */}
        <nav className="font-bold text-[1.2rem] lg:text-[1.5rem]">
          <Link href="/" className="flex items-center gap-1 lg:gap-2">
            <Image
              src="/favicon-32x32.png"
              alt="TestHelpNow logo"
              height={30}
              width={30}
              priority
              className="object-contain"
            />
            <span>
              <span className="text-foreground">TestHelp</span>
              <span className="text-primary">Now</span>.
            </span>
          </Link>
        </nav>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <nav className="flex gap-6">
            {MenuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`hover:text-primary transition-colors ${
                    pathname === item.href ? "text-secondary" : "text-primary"
                  }`}
                >
                  {item.name}
                  {item.submenu && <span className="ml-1 inline-block">▾</span>}
                </Link>

                <AnimatePresence>
                  {activeMenu === item.name && item.submenu && (
                    <DropdownMenu submenu={item.submenu} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
        {/*  Buttons */}
        <div className="lg:flex  hidden gap-5">
          <button
            id="get-help-now-btn"
            onClick={() => dispatch({ type: "SHOW_HELP" })}
            type="button"
            className="cta hover:cursor-pointer"
            aria-label='Get help now'
            aria-pressed='false'
          >
            Get Help Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  );
}
