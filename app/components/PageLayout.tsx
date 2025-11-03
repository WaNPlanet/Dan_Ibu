"use client";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PageLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-8 md:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-6">
        {title}
      </h1>
      <div className="text-white/80 leading-relaxed mb-8 max-w-3xl">
        {children}
      </div>
      <Link
        href="/"
        className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
"use client";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function PageLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-8 md:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-6">
        {title}
      </h1>
      <div className="text-white/80 leading-relaxed mb-8 max-w-3xl">
        {children}
      </div>
      <Link
        href="/"
        className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
