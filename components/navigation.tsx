"use client"

import { useState } from "react"
import { Download, ChevronDown } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false)

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
    setIsWorkDropdownOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleScrollToSection("home")}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <img
                src="/LOGO 2.png"
                alt="Thejana Ravindu"
                className="w-8 h-8 text-white"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<span class="text-white font-bold text-lg">TR</span>'
                  }
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollToSection("home")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === "home"
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleScrollToSection("about")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === "about"
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleScrollToSection("journey")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === "journey"
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
              }`}
            >
              Journey
            </button>

            {/* Work Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === "projects" ||
                  activeSection === "certifications" ||
                  activeSection === "recommendations"
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
                }`}
              >
                Work
                <ChevronDown className={`w-4 h-4 transition-transform ${isWorkDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isWorkDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                  <button
                    onClick={() => handleScrollToSection("projects")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => handleScrollToSection("certifications")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                  >
                    Certifications
                  </button>
                  <button
                    onClick={() => handleScrollToSection("recommendations")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                  >
                    Recommendations
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleScrollToSection("contact")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === "contact"
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
              }`}
            >
              Contact
            </button>

            {/* Resume Button */}
            <a
              href="/Thejana Ravindu Resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu button with animation*/}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-gray-300 hover:text-white p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                {/* Hamburger lines with animation */}
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out translate-y-2.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with slide animation */}
      <div
        className={`md:hidden border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
            <button
              onClick={() => handleScrollToSection("home")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollToSection("about")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleScrollToSection("journey")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => handleScrollToSection("projects")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollToSection("certifications")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => handleScrollToSection("recommendations")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
            >
              Recommendations
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
            >
              Contact
            </button>
            <a
              href="/Thejana Ravindu Resume.pdf"
              download
              className="flex items-center gap-2 mx-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
    </nav>
  )
}
