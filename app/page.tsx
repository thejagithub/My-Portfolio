"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import JourneySection from "@/components/journey-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import RecommendationsSection from "@/components/recommendations-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function DevOpsPortfolio() {
  const [activeSection, setActiveSection] = useState("home")

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "journey", "projects", "certifications", "recommendations", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <style jsx global>{`
        @keyframes fast-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>

      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <JourneySection />
      <ProjectsSection />
      <CertificationsSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
