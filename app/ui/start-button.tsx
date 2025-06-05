import Link from "next/link";
//import { MoveRight } from "lucide-react";

export default function StartButton() {
  return (
    <>
      <Link
        href="#"
        className="bg-button-login-default px-16 py-4 rounded-md text-primary hover:bg-button-login-hover hover:text-button-textColor-hover transition-all delay-300  "
      >
        <button type="button">Get Help Now</button>
      </Link>
    </>
  );
}
