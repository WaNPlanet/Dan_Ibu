"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../Footer";

export default function AdministrationPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const departments = [
    {
      id: "computer-lab",
      title: "Computer Lab",
      icon: "💻",
      description: "Modern technology hub for digital learning and innovation",
      features: [
        "40+ modern computers with latest software",
        "High-speed internet access",
        "Programming and coding classes",
        "Digital literacy programs",
        "ICT examination preparation"
      ],
      staff: [
        { name: "Mr. David Osei", role: "IT Manager", email: "it@danibu.edu.gh" },
        { name: "Ms. Akua Mensah", role: "Computer Instructor", email: "computers@danibu.edu.gh" }
      ],
      image: "/admin/computer-lab.jpg",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-400"
    },
    {
      id: "library",
      title: "Library",
      icon: "📚",
      description: "Knowledge center with extensive academic resources",
      features: [
        "10,000+ book collection",
        "Digital learning resources",
        "Quiet study areas",
        "Research assistance",
        "Reading programs and clubs"
      ],
      staff: [
        { name: "Mrs. Grace Ankrah", role: "Head Librarian", email: "library@danibu.edu.gh" },
        { name: "Mr. Kwame Asare", role: "Library Assistant", email: "library@danibu.edu.gh" }
      ],
      image: "/admin/library.jpg",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-400"
    },
    {
      id: "sports",
      title: "Sports Department",
      icon: "⚽",
      description: "Promoting physical fitness and athletic excellence",
      features: [
        "Inter-school sports competitions",
        "Professional coaching in multiple sports",
        "Modern sports facilities",
        "Health and fitness programs",
        "Talent development programs"
      ],
      staff: [
        { name: "Coach Michael Boateng", role: "Sports Director", email: "sports@danibu.edu.gh" },
        { name: "Ms. Abena Asante", role: "Physical Education Head", email: "pe@danibu.edu.gh" }
      ],
      image: "/admin/sports.jpg",
      color: "from-red-500 to-orange-500",
      borderColor: "border-red-400"
    },
    {
      id: "accounts",
      title: "Accounts/Records/Bills",
      icon: "📊",
      description: "Efficient financial management and record keeping",
      features: [
        "Tuition fee management",
        "Financial records maintenance",
        "Budget planning and control",
        "Staff payroll processing",
        "Financial reporting"
      ],
      staff: [
        { name: "Mrs. Comfort Agyeman", role: "Accounts Manager", email: "accounts@danibu.edu.gh" },
        { name: "Mr. Eric Tetteh", role: "Records Officer", email: "records@danibu.edu.gh" },
        { name: "Ms. Sandra Quaye", role: "Billing Officer", email: "bills@danibu.edu.gh" }
      ],
      image: "/admin/accounts.jpg",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400"
    }
  ];

  const leadershipTeam = [
    {
      name: "Dr. Kwame Asante",
      position: "School Principal",
      department: "Administration",
      email: "principal@danibu.edu.gh",
      image: "/admin/principal.jpg",
      bio: "Over 15 years of experience in educational leadership and administration."
    },
    {
      name: "Mrs. Ama Serwaa",
      position: "Vice Principal",
      department: "Academic Affairs",
      email: "viceprincipal@danibu.edu.gh",
      image: "/admin/vice-principal.jpg",
      bio: "Specialized in curriculum development and teacher training."
    },
    {
      name: "Mr. Yaw Boadi",
      position: "Administrative Director",
      department: "Operations",
      email: "admin@danibu.edu.gh",
      image: "/admin/admin-director.jpg",
      bio: "Expert in school operations and facility management."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 py-20 md:py-28">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute top-10 left-10 text-6xl">🏛️</div>
        <div className="absolute top-20 right-20 text-5xl">📋</div>
        <div className="absolute bottom-10 left-20 text-5xl">👨‍💼</div>
        <div className="absolute bottom-20 right-10 text-6xl">💼</div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Administration
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Efficient management and dedicated leadership for academic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-white hover:bg-yellow-600 hover:text-white">
              Contact Administration
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Leadership Team 👨‍💼
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet the dedicated professionals guiding our institution
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-yellow-200"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center text-white text-2xl font-bold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{leader.position}</p>
                <p className="text-gray-600 text-sm mb-3">{leader.department}</p>
                <p className="text-gray-700 text-sm mb-4">{leader.bio}</p>
                <a 
                  href={`mailto:${leader.email}`}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {leader.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Departments 🏢
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Specialized units working together for smooth school operations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={dept.id}
                className={`bg-white rounded-3xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg border-2 ${dept.borderColor} cursor-pointer`}
                onClick={() => setSelectedDepartment(dept.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-4xl p-3 rounded-2xl bg-gradient-to-r ${dept.color} text-white`}>
                    {dept.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{dept.title}</h3>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {dept.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-yellow-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Contact Staff:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {dept.staff.map((staff, idx) => (
                            <li key={idx}>
                              <div className="font-medium">{staff.name}</div>
                              <div className="text-xs text-gray-500">{staff.role}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Details →
                  </button>
                  <div className="text-xs text-gray-500">
                    Click to learn more
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Details Modal */}
      {selectedDepartment && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDepartment(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {departments.filter(dept => dept.id === selectedDepartment).map((dept) => (
              <div key={dept.id} className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`text-5xl p-4 rounded-2xl bg-gradient-to-r ${dept.color} text-white`}>
                      {dept.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">{dept.title}</h2>
                      <p className="text-gray-600">{dept.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedDepartment(null)}
                    className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Features & Services</h3>
                    <ul className="space-y-3">
                      {dept.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${dept.color} flex items-center justify-center text-white text-sm mt-0.5`}>
                            ✓
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Department Staff</h3>
                    <div className="space-y-4">
                      {dept.staff.map((staff, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-4">
                          <div className="font-semibold text-gray-800">{staff.name}</div>
                          <div className="text-yellow-600 text-sm mb-2">{staff.role}</div>
                          <a 
                            href={`mailto:${staff.email}`}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            {staff.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Administrative Support 🎯
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our administration team is here to support students, parents, and staff
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white mb-8">
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Phone Support</h3>
              <p>Available during school hours</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2">Email Support</h3>
              <p>24/7 email response</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-lg mb-2">In-Person</h3>
              <p>Visit administration office</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.location.href = 'tel:+1234567890'}
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-2 border-white hover:bg-yellow-600 hover:text-white"
            >
              📞 Call Administration
            </button>
            <button 
              onClick={() => window.open('mailto:admin@danibu.edu.gh?subject=Administrative Inquiry&body=Hello, I would like to inquire about...')}
              className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-2 border-white hover:bg-white hover:text-yellow-600"
            >
              📧 Email Administration
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