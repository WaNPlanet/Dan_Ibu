"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../navbar";

interface Director {
  id: number;
  name: string;
  title: string;
  image: string;
}

const directors: Director[] = [
  {
    id: 1,
    name: "Raj Chetty, PhD",
    title: "William A. Ackman Professor of Public Economics",
    image: "/directors/director1.jpg",
  },
  {
    id: 2,
    name: "Lisa Randall, PhD",
    title: "Frank B. Baird Jr. Professor of Science",
    image: "/directors/director2.jpg",
  },
  {
    id: 3,
    name: "Henry Louis Gates Jr.",
    title: "Alphonse Fletcher University Professor",
    image: "/directors/director3.jpg",
  },
  {
    id: 4,
    name: "Claudine Gay, PhD",
    title: "President of the University",
    image: "/directors/director4.jpg",
  },
  {
    id: 5,
    name: "Danielle Allen, PhD",
    title: "James Bryant Conant University Professor",
    image: "/directors/director5.jpg",
  },
  {
    id: 6,
    name: "Cornel West, PhD",
    title: "Professor of the Practice of Public Philosophy",
    image: "/directors/director6.jpg",
  },
  {
    id: 7,
    name: "Nancy Koehn, PhD",
    title: "James E. Robison Professor of Business Administration",
    image: "/directors/director7.jpg",
  },
];

export default function BoardOfDirectorsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * (isMobile ? 0.9 : 0.8) : clientWidth * (isMobile ? 0.9 : 0.8);
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateCurrentSlide = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const slideWidth = scrollWidth / directors.length;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / directors.length;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <Navbar/>
      
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        {/* ===== Header Section - Compact ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-8 gap-4 md:gap-0 flex-shrink-0">
          <div className="text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Board of Directors
            </h1>
          </div>

          {/* Arrows - always visible but smaller */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== Directors Carousel - Takes remaining space ===== */}
        <div className="relative flex-1 min-h-0">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden sm:block" />
          
          <div
            ref={scrollRef}
            onScroll={updateCurrentSlide}
            className="flex gap-4 md:gap-8 lg:gap-12 overflow-x-auto scrollbar-hide scroll-smooth select-none h-full items-center px-2"
          >
            {directors.map((director) => (
              <div
                key={director.id}
                className="group relative flex flex-col items-center text-center flex-shrink-0 w-56 sm:w-64 md:w-72 transition-all duration-500 hover:scale-105"
              >
                {/* --- Compact Image Container --- */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl group-hover:border-blue-100 transition-all duration-500 ease-out mb-4 md:mb-6">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 208px"
                  />
                  
                  {/* Enhanced Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-3 md:pb-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-sm sm:text-base font-bold mb-1">{director.name.split(',')[0]}</div>
                      <div className="text-xs opacity-90">View Profile</div>
                    </div>
                  </div>
                </div>

                {/* --- Compact Text Section --- */}
                <div className="w-full max-w-xs px-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {director.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base line-clamp-3">
                    {director.title}
                  </p>
                </div>

                {/* --- Enhanced Background Effects --- */}
                <div className="absolute inset-0 rounded-3xl bg-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl pointer-events-none -z-10 scale-90 group-hover:scale-100" />
                
                {/* --- Subtle Border Effect --- */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-100 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* ===== Scroll Indicator Dots - Compact ===== */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-2 flex-shrink-0">
          {directors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* ===== Mobile Indicator ===== */}
        <div className="md:hidden text-center mt-2 flex-shrink-0">
          <p className="text-gray-500 text-xs">Swipe to explore</p>
        </div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}