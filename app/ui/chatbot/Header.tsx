import Image from "next/image";
import { X } from "lucide-react";

interface HeaderProps {
  setIsOpen: (value: boolean) => void;
}

export default function Header({ setIsOpen }: HeaderProps) {
  return (
    <div className="px-4 py-6 bg-gradient-to-r from-[#CEF3D6] to-[#FFEEEB]">
      <section className="mb-6 flex justify-between items-center">
        <div className="flex -space-x-2">
          <Image
            src="/image1.png"
            alt="User 1"
            width={40}
            height={40}
            className="size-15 rounded-full object-fit border-2 border-white shadow-md"
          />
          <Image
            src="/image 2.png"
            alt="User 2"
            width={40}
            height={40}
            className="size-15  rounded-full object-fit border-2 border-white shadow-md"
          />
          <Image
            src="/image 3.png"
            alt="User 3"
            width={40}
            height={40}
            className="size-15 object-fill rounded-full border-2 border-white shadow-md"
          />
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="text-primary hover:text-gray-400"
        >
          <X size={28} />
        </button>
      </section>

      <article className="space-y-2">
        <h3 className="text-2xl font-semibold text-secondary">Hey there! 👋</h3>

        <p className="text-2xl font-semibold text-primary">How can we help?</p>
      </article>
    </div>
  );
}
