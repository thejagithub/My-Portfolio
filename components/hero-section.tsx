"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const devOpsMessages = [
    "A DevOps Engineer",
    "I automate infrastructure",
    "I build CI/CD pipelines",
    "Cloud-native is my thing",
  ]

  // Typewriter effect with faster delete
  useEffect(() => {
    const currentMessage = devOpsMessages[currentMessageIndex]

    if (isTyping) {
      if (currentText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.slice(0, currentText.length + 1))
        }, 100) // Typing speed
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause before deleting
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 30) // Faster deleting speed
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next message
        setCurrentMessageIndex((prev) => (prev + 1) % devOpsMessages.length)
        setIsTyping(true)
      }
    }
  }, [currentText, isTyping, currentMessageIndex, devOpsMessages])

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <ScrollReveal direction="fade" duration={800}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-sans">Hello, I am Thejana</h1>
          </ScrollReveal>
        <ScrollReveal direction="up" delay={300} duration={800}>
          <div className="h-16 md:h-20 flex items-center justify-center mb-12">
            <div className="text-2xl md:text-4xl text-blue-400 font-medium flex items-center">
              <span className="min-w-0">{currentText}</span>
              <span className="ml-1 text-blue-400" style={{ animation: "fast-blink 0.8s infinite" }}>
                |
              </span>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={600} duration={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Projects
            </button>
            <a
              href="/Thejana Ravindu Resume.pdf"
              download
              className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
