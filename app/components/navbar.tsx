"use client";
import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-yellow-400 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Main nav */}
          <div className="h-20 flex items-center justify-between px-4 sm:px-6 md:px-8">
            
            {/* Left - School Logo + Text */}
            <div className="flex-1 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Dan Ibu Logo"
                  className="w-12 h-auto sm:w-14"
                />
                {/* School Name - Hidden on small screens, shown on medium and up */}
                <div className="hidden md:flex flex-col leading-tight">
                  <div className="text-xl sm:text-2xl font-serif tracking-tight text-black">
                    DAN IBU
                  </div>
                  <div className="text-xl sm:text-2xl font-serif tracking-tight text-black">
                    INTERNATIONAL SCHOOL
                  </div>
                </div>
              </Link>
            </div>

            {/* Right actions */}
            <div className="flex items-center h-20">
              {/* Search button / input */}
              {searchOpen ? (
                <div className="flex items-center h-20 bg-black px-4 sm:px-8 border-l border-yellow-500">
                  <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-yellow-400"
                    >
                      <path
                        d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      autoFocus
                      className="bg-transparent text-yellow-400 placeholder-yellow-300 outline-none border-none text-base w-32 sm:w-48 md:w-64"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="text-yellow-400 hover:text-yellow-300 text-lg ml-2 sm:ml-4"
                    >
                      ✕
                    </button>
                  </form>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-2 px-4 sm:px-6 md:px-8 h-20 bg-black text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors text-sm sm:text-base font-medium border-l border-yellow-500"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="hidden sm:inline">Search</span>
                </button>
              )}

              {/* Menu button */}
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-4 sm:px-6 md:px-8 h-20 bg-black text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors text-sm sm:text-base font-medium border-l border-yellow-500"
                aria-label="Open menu"
              >
                <span className="hidden sm:inline">Menu</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}