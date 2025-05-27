"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CertificationCard from "@/components/certification-card"
import { certificationsData } from "@/data/certifications"

export default function CertificationsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    updateSlidesToShow()
    window.addEventListener("resize", updateSlidesToShow)
    return () => window.removeEventListener("resize", updateSlidesToShow)
  }, [])

  const maxSlide = Math.max(0, certificationsData.length - slidesToShow)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  // Count certifications by status
  const statusCounts = certificationsData.reduce(
    (acc, cert) => {
      acc[cert.status] = (acc[cert.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4">My certification journey and progress</p>

          {/* Status Summary */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Completed ({statusCounts.completed || 0})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-300">In Progress ({statusCounts["in-progress"] || 0})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Not Started ({statusCounts["not-started"] || 0})</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div
            className="overflow-hidden rounded-xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {certificationsData.map((cert, index) => (
                <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / slidesToShow}%` }}>
                  <CertificationCard certification={cert} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === maxSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div
                className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                style={{ width: `${((currentSlide + 1) / (maxSlide + 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
