import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const Logo = memo(() => {


  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500">
        <GraduationCap className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-gray-900">Edusion</span>
    </Link>
  );
});

Logo.displayName = "Logo";

export default Logo;
