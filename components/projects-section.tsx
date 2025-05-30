"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, CheckCircle, Clock } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { projectsData } from "@/data/projects"
import ScrollReveal from "@/components/scroll-reveal"

type ProjectStatus = "all" | "completed" | "in-progress"

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [activeTab, setActiveTab] = useState<ProjectStatus>("all")

  // Filter projects based on active tab
  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true
    return project.status === activeTab
  })

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
  const maxSlide = Math.max(0, projectsData.length - slidesToShow)

  // Reset slide when tab changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [activeTab])

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

  // Count projects by status
  const statusCounts = projectsData.reduce(
    (acc, project) => {
      acc[project.status] = (acc[project.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const tabs = [
    {
      id: "all" as const,
      label: "All Projects",
      count: projectsData.length,
      icon: null,
    },
    {
      id: "completed" as const,
      label: "Completed",
      count: statusCounts.completed || 0,
      icon: CheckCircle,
      iconColor: "text-green-400",
    },
    {
      id: "in-progress" as const,
      label: "In Progress",
      count: statusCounts["in-progress"] || 0,
      icon: Clock,
      iconColor: "text-yellow-400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="fade" duration={800}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4">Ideas, implemented.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200} duration={800}>
          {/* Status Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const TabIcon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                  }`}
                >
                  {TabIcon && <TabIcon className={`w-4 h-4 ${tab.iconColor}`} />}
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      activeTab === tab.id ? "bg-white/20 text-white" : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              )
            })}
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={400} duration={800}> 
        <div className="relative">
        {filteredProjects.length > 0 ? (
              <>
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
              {filteredProjects.map((project, index) => (
                      <div
                        key={`${project.title}-${index}`}
                        className="flex-shrink-0 px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                        style={{
                          width: `${100 / slidesToShow}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredProjects.length > slidesToShow && (
                  <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === maxSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          </>
        )}

          {/* Dots Indicator */}
          {filteredProjects.length > slidesToShow && (
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
          )}

          {/* Progress Bar */}
          {filteredProjects.length > slidesToShow && (
          <div className="mt-6">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div
                className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                style={{ width: `${((currentSlide + 1) / (maxSlide + 1)) * 100}%` }}
              ></div>
            </div>
          </div>
          )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for the selected status.</p>
          </div>
        )}
        </div>
      </ScrollReveal>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
