"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowUp,
  Server,
  GitBranch,
  Container,
  Settings,
  Cloud,
  Terminal,
  Code,
  Activity,
} from "lucide-react"

interface FooterProps {
  scrollToSection?: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Track scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection observer for footer animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const footerElement = document.getElementById("footer")
    if (footerElement) {
      observer.observe(footerElement)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const devOpsTools = [
    { name: "Docker", icon: Container, color: "text-blue-400" },
    { name: "Terraform", icon: Cloud, color: "text-purple-400" },
    { name: "GitHub Actions", icon: GitBranch, color: "text-gray-400" },
    { name: "Ansible", icon: Settings, color: "text-red-400" },
    { name: "Kubernetes", icon: Server, color: "text-blue-500" },
    { name: "Bash", icon: Terminal, color: "text-green-400" },
    { name: "Python", icon: Code, color: "text-yellow-400" },
    { name: "Grafana", icon: Activity, color: "text-orange-400" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const toolVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <footer id="footer" className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg">
                  <span className="text-white font-bold text-xl">TR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Thejana</h3>
                  <p className="text-blue-400 text-sm font-medium">DevOps Engineer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Passionate about automating infrastructure, building robust CI/CD pipelines, and bridging the gap
                between development and operations.
              </p>

              {/* CTA Section */}
              <div className="space-y-4">
                <p className="text-white font-medium">Let's connect</p>
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {[
                  { name: "Home", id: "home" },
                  { name: "Projects", id: "projects" },
                  { name: "Skills", id: "about" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollToSection(link.id)}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Social & Resume */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-6">Connect</h4>
              <div className="space-y-4">
                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/thejanaravindu"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/thejagithub"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:thejanaravindu2000@gmail.com"
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                {/* Resume Download */}
                <a
                  href="/Thejana Ravindu Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm group"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* DevOps Tools */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-white font-semibold mb-6">Tech Stack</h4>
              <div className="grid grid-cols-4 gap-3">
                {devOpsTools.map((tool, index) => {
                  const IconComponent = tool.icon
                  return (
                    <motion.div key={tool.name} variants={toolVariants} custom={index} className="group relative">
                      <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                        <IconComponent className={`w-5 h-5 ${tool.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {tool.name}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Thejana Ravindu. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Made with love and caffeine ☕ by TR</span>
            </div>
          </motion.div>
        </motion.div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  )
}
