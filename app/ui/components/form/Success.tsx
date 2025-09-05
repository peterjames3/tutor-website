"use client";
import { CircleCheckBig } from "lucide-react";
import { useUIDispatch } from "@/context/UIContext";
export default function Success() {
  const dispatch = useUIDispatch();
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center">
      <div>
        <CircleCheckBig size={64} />
      </div>

      <h2 className="headline">Thank You! We&apos;ll Be in Touch Shortly</h2>
      <p className="p-text">
        A dedicated education consultant will reach out to you within the next
        few minutes from a local number
      </p>

      <div className="text-left  p-6 space-y-2">
        <p className="p-text text-primary">
          Here&apos;s what we&apos;ll cover during your consultation:
        </p>
        <ul className="list-disc list-inside text-primary space-y-1">
          <li>Your student&apos;s unique learning style and interests</li>
          <li>Academic goals and any current challenges</li>
          <li>Tailored support solutions that best fit your needs</li>
        </ul>
      </div>

      <button
        id="go back to home page"
        type="button"
        aria-label="go back to home page"
        className="btn"
        onClick={() => dispatch({ type: "HIDE_HELP" })}
      >
        Go Back To Home
      </button>
    </section>
  );
}
