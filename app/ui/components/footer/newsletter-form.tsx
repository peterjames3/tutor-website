"use client";

export default function NewsletterForm() {
  return (
    <div className="flex w-full md:w-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-l-md bg-gradient-to-r from-[#1e1e1e] to-[#3d3d3d] text-white outline-none w-full md:w-72"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-r-md">
        Subscribe
      </button>
    </div>
  );
}
