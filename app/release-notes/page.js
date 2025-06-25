"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, Calendar, Tag } from "lucide-react"

export default function ReleaseNotes() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const footerSections = [
    {
      title: "TRY VIV ON",
      links: ["Web", "Android", "IOS"],
    },
    {
      title: "PRODUCTS",
      links: ["API", "PlayGround"],
    },
    {
      title: "COMPANY",
      links: ["Career", "News"],
    },
    {
      title: "RESOURCES",
      links: ["Documentation", "Privacy Policy", "Legal", "Security", "Status"],
    },
  ]

  const releases = [
    {
      version: "v2.4.0",
      date: "May 25, 2025",
      highlights: [
        "Improved response accuracy by 15%",
        "Added support for 5 new languages",
        "Enhanced context retention in long conversations",
      ],
      details:
        "This major update focuses on improving the core AI capabilities with better language understanding and expanded multilingual support.",
    },
    {
      version: "v2.3.2",
      date: "April 10, 2025",
      highlights: [
        "Fixed critical security vulnerability",
        "Improved API response time by 30%",
        "Added new developer documentation",
      ],
      details:
        "This security and performance update addresses several issues reported by our community and improves overall system stability.",
    },
    {
      version: "v2.3.0",
      date: "March 2, 2025",
      highlights: [
        "Launched new voice recognition feature",
        "Redesigned user interface for better accessibility",
        "Added integration with popular productivity tools",
      ],
      details:
        "This feature update introduces voice capabilities and significant UI improvements based on user feedback.",
    },
    {
      version: "v2.2.1",
      date: "January 15, 2025",
      highlights: ["Bug fixes for mobile experience", "Performance optimizations", "Updated privacy controls"],
      details: "This maintenance release focuses on improving the mobile experience and addressing privacy concerns.",
    },
  ]

  return (
    <div className="relative w-full overflow-x-hidden text-white bg-[#07080A]">
      
      <div
        className={`fixed right-0 top-0 z-40 bg-[#040403] w-[250px] h-full transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          {["VIV", "API", "NEWS", "CAREER"].map((item, i) => (
            <Link key={i} href={`/${item.toLowerCase()}`} className="text-white text-lg hover:text-gray-300">
              {item}
            </Link>
          ))}
          <a href="https://viv-test.vercel.app/" className="text-white text-lg hover:text-gray-300">
            DOCS
          </a>
          <Link href="https://chat.cosinv.com/">
            <button className="text-white px-4 py-2 rounded-full border hover:bg-amber-50 cursor-pointer hover:text-black font-extrabold">
              Try ViV AI
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-start items-center px-4 py-12">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold font-mono mb-10">Release Notes</h1>

        <div className="max-w-4xl w-full">
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto text-center mb-12">
            Stay up to date with the latest improvements, features, and fixes to ViV AI's platform and services.
          </p>

          <div className="space-y-8">
            {releases.map((release, index) => (
              <div key={index} className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h2 className="text-white text-2xl font-bold">{release.version}</h2>
                  <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{release.date}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Tag className="w-4 h-4 mr-2 text-amber-400" />
                    <h3 className="text-amber-400 font-semibold">Highlights</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                    {release.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">Details</h3>
                  <p className="text-gray-300">{release.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/documentation">
              <button className="text-white px-6 py-3 rounded-full border hover:bg-amber-50 hover:text-black font-extrabold text-lg">
                View Documentation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}