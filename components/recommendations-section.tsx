"use client"

import { useState, useEffect } from "react"
import RecommendationCard from "@/components/recommendation-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { recommendationsData } from "@/data/recommendations"
import ScrollReveal from "@/components/scroll-reveal"

export default function RecommendationsSection() {
  const [currentRecommendation, setCurrentRecommendation] = useState(0)

  // Auto-advance recommendations carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecommendation((prev) => (prev + 1) % recommendationsData.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextRecommendation = () => {
    setCurrentRecommendation((prev) => (prev + 1) % recommendationsData.length)
  }

  const prevRecommendation = () => {
    setCurrentRecommendation((prev) => (prev - 1 + recommendationsData.length) % recommendationsData.length)
  }

  return (
    <section id="recommendations" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" duration={800}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recommendations</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4">What my colleagues say about working with me</p>
        </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300} duration={800}>
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentRecommendation * 100}%)` }}
            >
              {recommendationsData.map((rec, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <RecommendationCard recommendation={rec} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevRecommendation}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextRecommendation}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {recommendationsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentRecommendation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentRecommendation ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
