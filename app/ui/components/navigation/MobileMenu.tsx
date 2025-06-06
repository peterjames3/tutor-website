"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
//import { MenuItem } from "@/lib/defination";
import { MenuItems } from "@/lib/menuitem";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="text-xl font-bold">
                <span>Edu</span>
                <span className="text-primary">sion</span>
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="h-[calc(100%-60px)] overflow-y-auto p-4">
              <nav className="flex flex-col space-y-2">
                {MenuItems.map((item) => (
                  <div key={item.name} className="border-b pb-2">
                    <Link
                      href={item.href}
                      className={`block py-2 text-lg ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-gray-800"
                      }`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.submenu.map((subItem, idx) => (
                          <Link
                            key={idx}
                            href={subItem.href}
                            className={`block py-1 ${
                              pathname === subItem.href
                                ? "text-primary"
                                : "text-gray-600"
                            }`}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
