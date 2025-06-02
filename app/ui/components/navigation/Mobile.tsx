"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, AlignJustify, ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";
import { MenuItems } from "@/lib/menuitem";
import { motion, AnimatePresence } from "framer-motion";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenus({});
    }
  }, [isOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Variants for animations
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.15,
      },
    },
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const submenuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        title={isOpen ? "Close menu" : "Open menu"}
        className="hover:cursor-pointer transition-all delay-300 bg-foreground/20 p-2 rounded-full"
      >
        {isOpen ? <X /> : <AlignJustify />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-3/4 bg-gradient-to-b from-[#CEF3D6] to-[#FFEEEB] z-50 overflow-y-auto shadow-xl"
          >
            <div className="flex flex-col py-6">
              {MenuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={clsx(
                          "flex justify-between items-center w-full px-6 py-3 text-primary hover:text-foreground hover:bg-accent2",
                          pathname.startsWith(item.href) &&
                            "text-primary font-semibold"
                        )}
                      >
                        <span>{item.name}</span>
                        {openSubmenus[item.name] ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>

                      <AnimatePresence>
                        {openSubmenus[item.name] && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={submenuVariants}
                            className="pl-6 bg-accent overflow-hidden"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                variants={itemVariants}
                                className={clsx(
                                  "border-b border-gray-100 last:border-0",
                                  subItem.group ? "pt-3" : ""
                                )}
                              >
                                <Link
                                  href={subItem.href}
                                  className={clsx(
                                    "block px-6 py-3 text-primary hover:text-primary hover:bg-gray-100",
                                    pathname === subItem.href &&
                                      "text-primary font-semibold",
                                    subItem.group
                                      ? "font-bold text-sm pb-1 pt-2"
                                      : "pl-4"
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.group ? (
                                    <span className="text-gray-500">
                                      {subItem.name}
                                    </span>
                                  ) : (
                                    subItem.name
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={clsx(
                        "block px-6 py-3 text-primary hover:text-primary hover:bg-accent2",
                        pathname === item.href && "text-primary font-semibold"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
