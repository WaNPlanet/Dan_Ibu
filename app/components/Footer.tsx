"use client";
import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left max-w-4xl w-full">
            {/* Column 1 - Information */}
            <div>
              <h3 className="text-lg font-semibold mb-6 tracking-wide text-yellow-400">
                Our School
              </h3>
              <ul className="space-y-3 text-gray-300 text-base">
                <li>
                  <span className="block">Kpaguri</span>
                  <span className="block">Wa, Upper West Region</span>
                  <span className="block">Ghana</span>
                </li>
              </ul>
            </div>

            {/* Column 2 - Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 tracking-wide text-yellow-400">
                Contact
              </h3>
              <ul className="space-y-3 text-gray-300 text-base">
                <li>📞 Add phone number</li>
                <li>✉️ info@danibu.edu.gh</li>
              </ul>
            </div>

            {/* Column 3 - Working Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-6 tracking-wide text-yellow-400">
                Working Hours
              </h3>
              <ul className="space-y-3 text-gray-300 text-base">
                <li>Monday - Friday</li>
                <li>7:00am - 4:00pm</li>
                <li>Each day</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-12">
          {/* Bottom Row: 4 - 3 - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-11 items-center text-center md:text-left gap-8">
            {/* Left Column (4) - Copyright */}
            <div className="md:col-span-4 text-gray-500 text-sm md:text-base order-3 md:order-1">
              <p className="hover:text-yellow-400 transition-colors">
                © {new Date().getFullYear()} Dan Ibu International School. All
                rights reserved.
              </p>
            </div>

            {/* Middle Column (3) - School Logo & Name */}
            <div className="md:col-span-3 flex flex-col items-center justify-center order-1 md:order-2 text-center">
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-serif text-yellow-400 tracking-tight leading-tight">
                  DAN IBU
                </h2>
                <h3 className="text-2xl md:text-3xl font-serif text-yellow-400 tracking-tight leading-tight">
                  INTERNATIONAL SCHOOL
                </h3>
              </div>
              <img
                src="/logo.png"
                alt="Dan Ibu School Logo"
                className="w-20 h-auto mt-4"
              />
            </div>

            {/* Right Column (4) - Social Icons */}
            <div className="md:col-span-4 flex justify-center md:justify-end gap-8 text-3xl order-2 md:order-3">
              {[FaInstagram, FaTiktok, FaLinkedin, FaFacebookF, FaYoutube].map(
                (Icon, i) => (
                  <Link
                    href="#"
                    key={i}
                    className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
                  >
                    <Icon />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
