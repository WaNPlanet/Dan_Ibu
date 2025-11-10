"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../Footer";

export default function JuniorHighPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const academicFeatures = [
    {
      icon: "🧪",
      title: "Science & Technology",
      description: "Advanced labs, computer studies, and STEM projects"
    },
    {
      icon: "📊",
      title: "Mathematics",
      description: "Algebra, geometry, and practical problem-solving"
    },
    {
      icon: "🌐",
      title: "Social Sciences",
      description: "History, geography, and civic education"
    },
    {
      icon: "💬",
      title: "Languages",
      description: "English, French, and local language studies"
    },
    {
      icon: "🎭",
      title: "Creative Arts",
      description: "Visual arts, music, drama, and cultural studies"
    },
    {
      icon: "🏃‍♂️",
      title: "Physical Education",
      description: "Sports, health education, and team activities"
    }
  ];

  const jhsLevels = [
    {
      grade: "JHS 1",
      age: "12-13 years",
      focus: "Foundation Building",
      icon: "1️⃣",
      subjects: ["Integrated Science", "Mathematics", "English Language", "Social Studies", "ICT", "French"],
      color: "border-yellow-400 bg-white text-gray-800"
    },
    {
      grade: "JHS 2",
      age: "13-14 years",
      focus: "Skill Development",
      icon: "2️⃣",
      subjects: ["Advanced Science", "Algebra", "Literature", "Geography", "Computer Studies", "Arts"],
      color: "border-yellow-400 bg-yellow-50 text-gray-800"
    },
    {
      grade: "JHS 3",
      age: "14-15 years",
      focus: "BECE Preparation",
      icon: "3️⃣",
      subjects: ["BECE Subjects", "Exam Techniques", "Project Work", "Leadership Training", "Career Guidance"],
      color: "border-yellow-400 bg-gradient-to-r from-yellow-50 to-white text-gray-800"
    }
  ];

  const testimonials = [
    {
      name: "Mr. Mensah",
      child: "JHS Science Teacher",
      text: "Our JHS program prepares students not just for exams, but for lifelong learning and success.",
      avatar: "👨‍🏫"
    },
    {
      name: "Mrs. Owusu",
      child: "JHS 2 Parent",
      text: "The academic rigor and moral foundation have transformed my child into a responsible scholar.",
      avatar: "👩‍👦"
    },
    {
      name: "Kofi Appiah",
      child: "JHS 3 Student",
      text: "The teachers are dedicated and the learning environment pushes us to achieve our best!",
      avatar: "👦"
    }
  ];

  const galleryImages = [
    { id: 1, src: "/gallery1.jpg", alt: "Science Laboratory", category: "Facilities" },
    { id: 2, src: "/gallery2.jpg", alt: "Sports Competition", category: "Sports" },
    { id: 3, src: "/gallery3.jpg", alt: "Modern Classroom", category: "Academics" },
    { id: 4, src: "/gallery4.jpg", alt: "Cultural Celebration", category: "Events" },
    { id: 5, src: "/gallery5.jpg", alt: "Computer Laboratory", category: "Technology" },
    { id: 6, src: "/gallery5.jpg", alt: "Graduation Ceremony", category: "Achievements" },
    { id: 7, src: "/gallery4.jpg", alt: "Debate Competition", category: "Academics" },
    { id: 8, src: "/gallery2.jpg", alt: "Art Exhibition", category: "Arts" }
  ];

  const achievementStats = [
    { number: "98%", label: "BECE Pass Rate" },
    { number: "85%", label: "University Placement" },
    { number: "50+", label: "Academic Awards" },
    { number: "100%", label: "Parent Satisfaction" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 py-20 md:py-28">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute top-10 left-10 text-6xl">🎓</div>
        <div className="absolute top-20 right-20 text-5xl">🧪</div>
        <div className="absolute bottom-10 left-20 text-5xl">🏆</div>
        <div className="absolute bottom-20 right-10 text-6xl">🔬</div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Junior High School
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            JHS 1-3: Excellence in Academics, Character, and Leadership
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-white hover:bg-yellow-600 hover:text-white">
              Explore JHS Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12 bg-yellow-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-black/80 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JHS Levels Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Junior High School Levels 🎯
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Progressive academic journey preparing students for senior high and beyond
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jhsLevels.map((level, index) => (
              <div 
                key={index}
                className={`rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg border-4 ${level.color}`}
              >
                <div className="text-5xl mb-4">{level.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{level.grade}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{level.age} • {level.focus}</p>
                <ul className="text-left space-y-2 text-sm text-gray-700">
                  {level.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-yellow-500 mr-2">•</span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Academic Excellence 📚
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Comprehensive curriculum designed for holistic development
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-yellow-400"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            School Gallery 📸
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Capturing moments of learning, achievement, and community
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 bg-gray-100"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    {image.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Voices from Our Community 🗣️
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Hear from those who experience our JHS program firsthand
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-yellow-400"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-yellow-200 pt-4">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-yellow-600">{testimonial.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BECE Preparation */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            BECE Excellence Program 🏅
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Comprehensive preparation for the Basic Education Certificate Examination
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-bold text-lg mb-2">Mock Exams</h3>
              <p>Regular practice tests and performance analysis</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">👨‍🏫</div>
              <h3 className="font-bold text-lg mb-2">Expert Teachers</h3>
              <p>Specialized subject teachers with proven results</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-bold text-lg mb-2">Study Techniques</h3>
              <p>Effective learning strategies and time management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Excellence? 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our Junior High School program and prepare for academic success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-2 border-white hover:bg-yellow-600 hover:text-white">
              📅 Schedule Tour
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-2 border-white hover:bg-white hover:text-yellow-600"
            >
              📞 Call Now
            </button>
            <button 
              onClick={() => window.open('mailto:info@danibu.edu.gh?subject=JHS Enrollment&body=Hello, I would like to learn more about your Junior High School program.')}
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-2 border-white hover:bg-yellow-600 hover:text-white"
            >
              📧 Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <div className="relative bg-white rounded-2xl overflow-hidden">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold hover:bg-yellow-500 z-10"
              >
                ✕
              </button>
              <div className="relative w-full h-96 bg-gray-200">
                <Image
                  src={selectedImage}
                  alt="Gallery preview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 bg-yellow-400 text-center">
                <p className="font-semibold text-black">
                  {galleryImages.find(img => img.src === selectedImage)?.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Custom styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </main>
  );
}