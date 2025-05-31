"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SubMenuItem } from "@/lib/defination";

const DropdownMenu = ({ submenu }: { submenu: SubMenuItem[] }) => {
  const groupedItems = submenu.reduce((acc, item) => {
    const group = item.group || "Other";
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {} as Record<string, SubMenuItem[]>);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute left-0 mt-2 w-96 bg-background shadow-xl rounded-lg z-50 p-4"
    >
      {/* Container with fixed height and scroll */}
      <div
        className="max-h-[60vh] overflow-y-auto pr-2"
        style={{ scrollbarWidth: "thin" }} // For Firefox
      >
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(groupedItems).map(([group, items]) => (
            <div key={group} className="space-y-2">
              <h3 className="font-bold text-primary border-b pb-1 sticky top-0 bg-white z-10">
                {group}
              </h3>
              <ul className="space-y-1">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block px-2 py-1 text-gray-700 hover:bg-gray-50 rounded transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DropdownMenu;
