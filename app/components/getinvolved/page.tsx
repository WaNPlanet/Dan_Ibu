"use client";
import React, { useState } from "react";

interface Director {
  id: number;
  name: string;
  position: string;
  image: string;
  company: string;
}

const directors: Director[] = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CEO & Founder",
    company: "TechVision Inc.",
    image: "/api/placeholder/200/200"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    position: "Board Chairman",
    company: "Global Ventures",
    image: "/api/placeholder/200/200"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "Chief Innovation Officer",
    company: "Future Labs",
    image: "/api/placeholder/200/200"
  },
  {
    id: 4,
    name: "David Kim",
    position: "Finance Director",
    company: "Wealth Management Corp",
    image: "/api/placeholder/200/200"
  },
  {
    id: 5,
    name: "Amanda Foster",
    position: "Marketing Director",
    company: "Brand Architects",
    image: "/api/placeholder/200/200"
  },
  {
    id: 6,
    name: "Robert Zhang",
    position: "Technology Advisor",
    company: "Silicon Valley Partners",
    image: "/api/placeholder/200/200"
  },
  {
    id: 7,
    name: "Jennifer Lee",
    position: "Legal Counsel",
    company: "Global Law Associates",
    image: "/api/placeholder/200/200"
  },
  {
    id: 8,
    name: "Michael Brown",
    position: "Operations Director",
    company: "Efficiency First Inc.",
    image: "/api/placeholder/200/200"
  }
];

export default function BoardOfDirectors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredDirector, setHoveredDirector] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 4 >= directors.length ? 0 : prev + 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 4 < 0 ? directors.length - 4 : prev - 4));
  };

  const visibleDirectors = directors.slice(currentIndex, currentIndex + 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">
            Board of Directors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn from the best in the industry. Meet your directors who bring decades of expertise 
            and visionary leadership to drive our success forward.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Directors Cards - Horizontal Layout */}
          <div className="flex justify-center items-start space-x-12">
            {visibleDirectors.map((director) => (
              <div
                key={director.id}
                className="flex flex-col items-center group"
                onMouseEnter={() => setHoveredDirector(director.id)}
                onMouseLeave={() => setHoveredDirector(null)}
              >
                {/* Profile Circle with Image */}
                <div className="relative mb-8">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                    {/* Outer white ring */}
                    <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center">
                      {/* Profile image container */}
                      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden flex items-center justify-center">
                        {/* Profile image - replace with actual image */}
                        <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white">
                          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Ring */}
                  <div className={`absolute inset-0 rounded-full border-4 border-transparent transition-all duration-500 ${
                    hoveredDirector === director.id ? 'border-indigo-400 scale-110' : ''
                  }`}></div>
                </div>

                {/* Name and Position - Always visible */}
                <div className="text-center transition-all duration-300">
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 transition-all duration-300 ${
                    hoveredDirector === director.id ? 'scale-110 text-indigo-600' : ''
                  }`}>
                    {director.name}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium mb-2">{director.position}</p>
                  <p className="text-gray-500">{director.company}</p>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 rounded-full bg-black bg-opacity-60 flex items-center justify-center transition-all duration-300 ${
                  hoveredDirector === director.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="text-center text-white">
                    <div className="text-xl font-bold mb-2">{director.name}</div>
                    <div className="text-sm">{director.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-16 space-x-3">
          {Array.from({ length: Math.ceil(directors.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 4)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index * 4 ? 'bg-indigo-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Leadership Excellence</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our board members bring together decades of collective experience across various industries, 
              providing strategic guidance and visionary leadership to drive our organization forward. 
              Each director contributes unique expertise and insights that shape our success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}