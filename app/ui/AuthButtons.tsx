//import { Button } from "@/components/ui/button";
import Link from "next/link";
import { memo } from "react";

const AuthButtons = memo(() => {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <Link
        href="/login"
        className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105"
      >
        LOG IN
      </Link>
      <button className="bg-green-500 hover:bg-green-600 text-white px-6 transition-all duration-200 hover:scale-105 hover:shadow-lg">
        SIGN UP
      </button>
    </div>
  );
});

AuthButtons.displayName = "AuthButtons";

export default AuthButtons;
