"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


type Props = {
  open: boolean;
  onClose: () => void;
};

// MAIN MENU ITEMS + SUBLINKS
const menuItems: {
  title: string;
  link: string;
  subItems?: { title: string; link: string }[];
}[] = [
//   { title: "Home", link: "/" },
  {
    title: "Creche/Nursery/Kindergarten",
    link: "/components/creche",
  },
  {
    title: "Primary (Stage 1–6)",
    link: "/components/primary",
    subItems: [
      { title: "Prefects Corner (Primary)", link: "/primary/prefects" },
    ],
  },
  {
    title: "Junior High School (JHS 1–3)",
    link: "/components/junior-high",
    subItems: [{ title: "Prefects Corner (JHS)", link: "/junior-high/prefects" }],
  },
  { title: "Administration", link: "/components/administration" },
  {
    title: "Get involved",
    link: "/components/getinvolved",
    // subItems: [
    //   { title: "Computer Lab", link: "/departments/computer-lab" },
    //   { title: "Library", link: "/departments/library" },
    //   { title: "Sports Department", link: "/departments/sports" },
    //   { title: "Accounts / Records / Bills", link: "/departments/accounts" },
    // ],
  },
  { title: "About Us", link: "/components/about" },
];

// PLACEHOLDER TEXT
const placeholderText: Record<string, string> = {
  Home: "Welcome to Dan Ibu International School — shaping future leaders through holistic education.",
  "Creche/Nursery/Kindergarten":
    "Our early years program nurtures curiosity and social development in a joyful learning environment.",
  "Primary (Stage 1–6)":
    "Building strong foundations in literacy, numeracy, and creativity for lifelong learning.",
  "Junior High School (JHS 1–3)":
    "Preparing students for success with a balanced academic and moral education.",
    Get_Involed: "Learn about the dedicated team overseeing the smooth operation of our school.",
  Departments:
    "Explore academic and co-curricular departments that make learning dynamic and engaging.",
  "About Us":
    "Learn more about our mission, vision, and the legacy of Dan Ibu International School.",
};

export default function MobileMenu({ open, onClose }: Props) {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex"
        >
          {/* BACKDROP */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
          />

          {/* LEFT PANEL */}
          <div className="relative z-10 w-[40%] md:w-[35%] bg-[#0B0B0B] text-white flex flex-col border-r border-yellow-500/10">
            {/* HEADER */}
            <div className="flex items-center justify-start px-6 pt-8 pb-6 border-b border-yellow-500/20">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Dan Ibu Logo" className="w-10 h-auto" />
                <div>
                  <div className="text-xl font-serif text-yellow-400 leading-none">
                    DAN IBU
                  </div>
                  <div className="text-xl font-serif text-yellow-400 leading-none">
                    INT. SCHOOL
                  </div>
                </div>
              </div>
            </div>

            {/* SCROLLABLE MENU */}
            <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-transparent">
              <div className="space-y-4">
                {menuItems.map((m) => (
                  <button
                    key={m.title}
                    onClick={() => setSelectedItem(m)}
                    className={`block w-full text-left font-serif tracking-tight transition duration-200 ${
                      selectedItem.title === m.title
                        ? "text-yellow-400 text-[1.6rem]"
                        : "text-gray-400 hover:text-yellow-300 text-[1.4rem]"
                    }`}
                  >
                    {m.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (Description + Links) */}
          <motion.div
            key={selectedItem.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-20 w-[60%] md:w-[65%] bg-black/95 text-white/90 flex flex-col justify-center p-12"
          >
            {/* CLOSE BUTTON — far right corner */}
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-6 right-6 text-yellow-400 hover:text-yellow-300 text-3xl px-3 py-2 rounded-full border border-yellow-400/20"
            >
              ✕
            </button>

            {/* CONTENT */}
            <div className="max-w-md">
              <h3 className="text-4xl font-semibold mb-4 text-yellow-400">
                {selectedItem.title}
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                {placeholderText[selectedItem.title] || "Learn more about this section."}
              </p>

              {/* SUBLINKS */}
              {selectedItem.subItems && (
                <div className="space-y-2 mb-6">
                  {selectedItem.subItems.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.link}
                      className="block text-yellow-300 hover:text-yellow-200 underline underline-offset-4 text-base"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* MAIN PAGE BUTTON */}
              <Link
                href={selectedItem.link}
                className="inline-block mt-2 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition"
              >
                Go to Page →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
