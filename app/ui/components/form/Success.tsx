import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
export default function success() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center">
      <div>
        <CircleCheckBig size={64} />
      </div>

      <h2 className="headline">Thank You! We’ll Be in Touch Shortly</h2>
      <p className="p-text">
        A dedicated education consultant will reach out to you within the next
        few minutes from a local number
      </p>

      <div className="text-left  p-6 space-y-2">
        <p className="p-text text-primary">
          Here’s what we’ll cover during your consultation:
        </p>
        <ul className="list-disc list-inside text-primary space-y-1">
          <li>Your student&apos;s unique learning style and interests</li>
          <li>Academic goals and any current challenges</li>
          <li>Tailored support solutions that best fit your needs</li>
        </ul>
      </div>

      <Link href="/" className="btn">
        Go Back To Home
      </Link>
    </section>
  );
}
