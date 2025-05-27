"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevent default form submission
    e.stopPropagation() // Stop event bubbling

    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Hi Thejana,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`,
    )
    const mailtoLink = `mailto:devops.engineer@example.com?subject=${subject}&body=${body}`

    // Create a temporary link element and click it
    const link = document.createElement("a")
    link.href = mailtoLink
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show success message
    setShowSuccess(true)
    setIsSubmitting(false)

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-700 rounded-2xl p-8 shadow-sm border border-gray-600">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 rounded-lg flex items-center gap-3 bg-green-600/20 border border-green-600/30 text-green-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Opening your email client...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-gray-800 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-gray-800 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border bg-gray-800 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Opening Email...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Info Note */}
            {/* <div className="mt-6 p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
              <p className="text-blue-300 text-sm">
                📧 This will open your default email client with the message pre-filled. You can review and send it from
                there.
              </p>
            </div> */}

            {/* Alternative Contact Methods */}
            {/* <div className="mt-8 pt-6 border-t border-gray-600">
              <p className="text-gray-400 text-sm mb-4">Or reach out directly:</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:devops.engineer@example.com"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email directly
                </a>
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new opportunities, collaborating on projects, or sharing knowledge
                about DevOps practices.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a
                    href="mailto:thejanaravindu2000@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    thejanaravindu2000@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+94763975585 , +94711975585" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +94 76 397 5585 , +94 71 197 5585
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/thejagithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/thejanaravindu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Response Time */}
            {/* <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <h4 className="text-white font-semibold mb-2">Quick Response</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via LinkedIn
                or email directly.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
