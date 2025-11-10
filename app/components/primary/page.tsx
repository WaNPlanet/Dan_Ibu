"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";

export default function PrimarySchoolPage() {
  const gradeFeatures = [
    {
      icon: "📚",
      title: "Literacy & Language",
      description: "Reading, writing, and communication skills development"
    },
    {
      icon: "🔢",
      title: "Mathematics",
      description: "Number sense, problem-solving, and critical thinking"
    },
    {
      icon: "🔬",
      title: "Science Discovery",
      description: "Hands-on experiments and scientific inquiry"
    },
    {
      icon: "🌍",
      title: "Social Studies",
      description: "Understanding communities, cultures, and history"
    },
    {
      icon: "🎨",
      title: "Creative Arts",
      description: "Visual arts, music, and creative expression"
    },
    {
      icon: "💻",
      title: "Technology Skills",
      description: "Digital literacy and computer basics"
    }
  ];


  const testimonials = [
    {
      name: "Mr. Johnson",
      child: "Grade 3 Teacher",
      text: "Our primary program builds strong academic foundations while nurturing each child's unique potential.",
      avatar: "👨‍🏫"
    },
    {
      name: "Mrs. Thompson",
      child: "Grade 5 Parent",
      text: "The balanced curriculum and dedicated teachers have made all the difference in my child's learning journey.",
      avatar: "👩‍👧"
    },
    {
      name: "David Chen",
      child: "Grade 6 Student",
      text: "I love how we learn through projects and experiments. School is actually fun!",
      avatar: "👦"
    }
  ];

  const gradeLevels = [
    {
      grade: "Grade 1",
      age: "6-7 years",
      focus: "Foundational Skills",
      icon: "1️⃣",
      subjects: ["Phonics & Reading", "Basic Math", "Social Skills", "Creative Play"],
      color: "border-yellow-400"
    },
    {
      grade: "Grade 2",
      age: "7-8 years",
      focus: "Building Confidence",
      icon: "2️⃣",
      subjects: ["Fluency Reading", "Addition/Subtraction", "Science Basics", "Team Projects"],
      color: "border-yellow-400"
    },
    {
      grade: "Grade 3",
      age: "8-9 years",
      focus: "Academic Growth",
      icon: "3️⃣",
      subjects: ["Reading Comprehension", "Multiplication", "Social Studies", "Research Skills"],
      color: "border-yellow-400"
    },
    {
      grade: "Grade 4",
      age: "9-10 years",
      focus: "Critical Thinking",
      icon: "4️⃣",
      subjects: ["Advanced Reading", "Fractions", "Science Projects", "Writing Skills"],
      color: "border-yellow-400"
    },
    {
      grade: "Grade 5",
      age: "10-11 years",
      focus: "Independent Learning",
      icon: "5️⃣",
      subjects: ["Literature Analysis", "Decimals", "History", "Technology Integration"],
      color: "border-yellow-400"
    },
    {
      grade: "Grade 6",
      age: "11-12 years",
      focus: "Preparation for Secondary",
      icon: "6️⃣",
      subjects: ["Advanced Writing", "Pre-Algebra", "Research Projects", "Leadership Skills"],
      color: "border-yellow-400"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-black py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 text-6xl">📚</div>
        <div className="absolute top-20 right-20 text-5xl">🔢</div>
        <div className="absolute bottom-10 left-20 text-5xl">🌍</div>
        <div className="absolute bottom-20 right-10 text-6xl">🎓</div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Primary School Program
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Grades 1-6: Building Strong Foundations for Lifelong Learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-yellow-400">
              Explore Our Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Grade Levels Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
            Grade Levels Overview 🎯
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive education tailored to each developmental stage
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gradeLevels.map((grade, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg border-4 ${grade.color}`}
              >
                <div className="text-5xl mb-4">{grade.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-2">{grade.grade}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{grade.age} • {grade.focus}</p>
                <ul className="text-left text-gray-700 space-y-2 text-sm">
                  {grade.subjects.map((subject, idx) => (
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

      {/* Curriculum Features */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
            Our Curriculum Approach 📖
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Balanced education that nurtures academic and personal growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gradeFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-yellow-400"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
            What Our Community Says 👨‍👩‍👧‍👦
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Experiences from teachers, parents, and students
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
                  <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
                  <p className="text-yellow-600">{testimonial.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Enroll? 🎓
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our primary school program and give your child the foundation for success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           
            <button 
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-2 border-black"
            >
              📞 Call Now
            </button>
            <button 
              onClick={() => window.open('mailto:info@danibu.edu.gh?subject=Primary School Enrollment&body=Hello, I would like to learn more about your Grade 1-6 programs.')}
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-2 border-yellow-400"
            >
              📧 Email Us
            </button>
          </div>
         
        </div>
      </section>

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