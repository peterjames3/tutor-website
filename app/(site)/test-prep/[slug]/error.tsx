"use client";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(`${error.name}: ${error.message}`);
  }, [error]);
  return (
    <div className="grid place-content-center h-[42rem] ">
      <h3 className="text-center font-medium">
        {error.name}: {error.message}!
      </h3>
      <button type="button" className="btn" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
