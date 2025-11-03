"use client";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#fafafa]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background video overlay */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/new.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-serif text-[6rem] md:text-[8rem] lg:text-[9rem] leading-[0.9] drop-shadow-lg text-yellow-400"
            >
              Dan Ibu Int. School
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="max-w-2xl mx-auto text-white/90 mt-6 text-lg md:text-xl leading-relaxed"
            >
              Empowering young minds through quality education and discipline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-10"
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full transition-all font-semibold"
              >
                <span className="text-lg">→</span>
                <span>Discover Our School</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: Programs */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif mb-10 text-black">
              Our Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Preschool",
                  img: "/program1.jpg",
                  desc: "Building strong foundations through play and curiosity.",
                },
                {
                  title: "Primary",
                  img: "/primary.jpg",
                  desc: "Developing knowledge, discipline, and confidence in learners.",
                },
                {
                  title: "Junior High",
                  img: "/jhs.jpg",
                  desc: "Preparing students for future academic excellence.",
                },
              ].map((p) => (
                <motion.div
                  key={p.title}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-black">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Gallery */}
        <section className="py-24 bg-[#111] text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif mb-12 text-yellow-400">
              School Gallery
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { img: "/gallery1.jpg", caption: "Cultural Day Celebration" },
                { img: "/gallery2.jpg", caption: "Independence " },
                { img: "/gallery3.jpg", caption: "Singing" },
                { img: "/gallery4.jpg", caption: "Reading Competition" },
                { img: "/gallery4.jpg", caption: "Admission" },
                { img: "/gallery5.jpg", caption: "Sports" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={item.img}
                    alt={item.caption}
                    width={500}
                    height={350}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-lg font-semibold text-yellow-400 px-4">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Blogs */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-serif text-center mb-12 text-black">
              Latest News
            </h2>
            <div className="grid md:grid-cols-3 gap-10 cursor-pointer">
              {[
                {
                  title: "We’re on Mid-Term.",
                  date: "29 Jan 2021",
                  desc: "Students are currently sitting for their mid-term examinations across all departments.",
                  img: "/sch1.jpg",
                },
                {
                  title: "Good Bye To Mr. Mufti",
                  date: "13 Jan 2021",
                  desc: "The school bids farewell to Mr. Mufti for his dedicated service and contributions to our academic community.",
                  img: "/sch.jpg",
                },
                {
                  title:
                    "Responsibilities Of Parents Requested By Authorities",
                  date: "Jan 2021",
                  desc: "Authorities urge parents to ensure students comply with school regulations as classes resume for the new term.",
                  img: "/sch2.jpg",
                },
              ].map((news) => (
                <motion.div
                  key={news.title}
                  whileHover={{ scale: 1.02 }}
                  className="border-t pt-6"
                >
                  <Image
                    src={news.img}
                    alt={news.title}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover rounded-md mb-5"
                  />
                  <p className="text-xs text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-lg font-semibold hover:text-yellow-500 cursor-pointer leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3">{news.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
