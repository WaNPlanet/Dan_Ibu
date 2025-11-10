"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../Footer"

export default function CrechePage() {
  const features = [
    {
      icon: "🎨",
      title: "Creative Arts",
      description: "Painting, drawing, and crafts to spark imagination"
    },
    {
      icon: "📚",
      title: "Story Time",
      description: "Interactive reading sessions with colorful picture books"
    },
    {
      icon: "🎵",
      title: "Music & Movement",
      description: "Singing, dancing, and rhythm activities"
    },
    {
      icon: "🧩",
      title: "Learning Games",
      description: "Educational puzzles and problem-solving activities"
    },
    {
      icon: "🌳",
      title: "Outdoor Play",
      description: "Safe outdoor activities and fresh air"
    },
    {
      icon: "😴",
      title: "Nap Time",
      description: "Comfortable rest areas for peaceful naps"
    }
  ];

  const dailySchedule = [
    { time: "8:00 AM", activity: "Morning Welcome & Free Play", color: "bg-blue-100" },
    { time: "9:00 AM", activity: "Creative Arts & Crafts", color: "bg-purple-100" },
    { time: "10:00 AM", activity: "Snack Time & Story Session", color: "bg-green-100" },
    { time: "11:00 AM", activity: "Outdoor Play & Games", color: "bg-yellow-100" },
    { time: "12:00 PM", activity: "Lunch & Quiet Time", color: "bg-pink-100" },
    { time: "1:00 PM", activity: "Music & Movement", color: "bg-indigo-100" },
    { time: "2:00 PM", activity: "Learning Activities", color: "bg-orange-100" },
    { time: "3:00 PM", activity: "Afternoon Snack & Pickup", color: "bg-red-100" }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      child: "Emily, 3 years",
      text: "My daughter loves coming here every day! The staff is wonderful and the activities are so engaging.",
      avatar: "👩‍👧"
    },
    {
      name: "Mike R.",
      child: "Liam, 4 years",
      text: "The perfect balance of learning and play. Liam has developed so much socially since joining.",
      avatar: "👨‍👦"
    },
    {
      name: "Priya K.",
      child: "Aarav, 2 years",
      text: "Safe, nurturing environment with excellent care. Highly recommended!",
      avatar: "👩‍👦"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-orange-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 py-20 md:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 text-6xl">🌈</div>
        <div className="absolute top-20 right-20 text-5xl">🎨</div>
        <div className="absolute bottom-10 left-20 text-5xl">🧸</div>
        <div className="absolute bottom-20 right-10 text-6xl">🚀</div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-comic">
            Welcome to Happy Kids Creche!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Where little minds grow, play, and discover in a safe, nurturing environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Explore
            </button>
           
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 font-comic">
            Fun Learning Activities 🎪
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide a balanced mix of education and entertainment for your little ones
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-transparent hover:border-purple-200"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 font-comic">
            Our Daily Adventure 🕐
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            A typical day full of fun and learning
          </p>
          
          <div className="space-y-4">
            {dailySchedule.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center p-6 rounded-2xl ${item.color} border-2 border-white hover:scale-102 transition-transform duration-300 shadow-md`}
              >
                <div className="bg-white rounded-full p-4 mr-6 shadow-inner">
                  <span className="text-2xl font-bold text-gray-700">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{item.activity}</h3>
                </div>
                <div className="text-3xl">
                  {index % 3 === 0 ? "🎨" : index % 3 === 1 ? "🎵" : "🧩"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 font-comic">
            Happy Parents Say 👨‍👩‍👧‍👦
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Don't just take our word for it!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-purple-100"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-purple-200 pt-4">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-purple-600">{testimonial.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 font-comic">
            Programs by Age Group 👶
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-2xl border-4 border-blue-200">
              <div className="text-6xl mb-4">👶</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Toddlers</h3>
              <p className="text-gray-600 mb-4">1-2 years</p>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Sensory play activities</li>
                <li>• Basic motor skills</li>
                <li>• Social interaction</li>
                <li>• Nap and feeding schedule</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-2xl border-4 border-green-200">
              <div className="text-6xl mb-4">🧒</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Preschoolers</h3>
              <p className="text-gray-600 mb-4">3-4 years</p>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Early literacy & numbers</li>
                <li>• Creative expression</li>
                <li>• Group activities</li>
                <li>• Problem-solving games</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-2xl border-4 border-purple-200">
              <div className="text-6xl mb-4">👧</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Pre-K</h3>
              <p className="text-gray-600 mb-4">4-5 years</p>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• School readiness</li>
                <li>• Advanced social skills</li>
                <li>• STEM activities</li>
                <li>• Creative projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
{/* CTA Section */}
<section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-comic">
      Ready to Join the Fun? 🎊
    </h2>
    <p className="text-xl text-white/90 mb-8">
      Limited spots available! Schedule a tour and see why parents love Happy Kids Creche.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
     
      <button 
        onClick={() => window.location.href = 'tel:+1234567890'}
        className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer"
      >
        📞 Call Now
      </button>
      <button 
        onClick={() => window.open('mailto:info@danibu.edu.gh?subject=Inquiry about Happy Kids Creche&body=Hello, I would like to learn more about your creche services.')}
        className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer"
      >
        📧 Email Us
      </button>
    </div>
   
  </div>
</section>

      {/* Footer */}
      <Footer/>

      {/* Custom font style */}
      <style jsx global>{`
        .font-comic {
          font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
        }
      `}</style>
    </main>
  );
}