"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar } from "lucide-react"

interface JourneyItem {
  title: string
  company?: string
  institution?: string
  duration: string
  achievements?: string[]
  accomplishments?: string[]
}

interface JourneyCardProps {
  item: JourneyItem
  type: "experience" | "education"
}

export default function JourneyCard({ item, type }: JourneyCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 text-sm font-medium">{item.duration}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
        <p className="text-blue-400 font-medium mb-4">{type === "experience" ? item.company : item.institution}</p>
        <ul className="space-y-2">
          {(type === "experience" ? item.achievements : item.accomplishments)?.map((point: string, i: number) => (
            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
              <span className="text-green-400 mt-1">▶</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
